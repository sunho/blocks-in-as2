import Blockly from 'node-blockly/browser';

function connect(block, input, block2) {
    block.getInput(input).connection.connect(block2.outputConnection);
}

function connectChild(parent, input, child) {
    parent.getInput(input).connection.connect(child.previousConnection);
}
function connectStatements(blocks) {
    for (let i = 1; i < blocks.length; i++) {
        blocks[i-1].nextConnection.connect(blocks[i].previousConnection);
    }
}

function nameToBlock(workspace, name) {
    switch (name) {
    case '_root':
        return workspace.newBlock('_root');
    case 'this':
        return workspace.newBlock('this');
    default:
        const out = workspace.newBlock('variable');
        out.setFieldValue(name, 'name');
        return out;
    }
}

function variableToBlock(workspace, variable) {
    const names = variable.names;
    const first = nameToBlock(workspace, names[0]);
    let block = first;
    
    for (let i = 1; i < names.length; i++) {
        const tmp = nameToBlock(workspace, names[i]);
        block.getInput('next').connection.connect(tmp.outputConnection);
        block = tmp;
    }
    
    return first;
}

function numberToBlock(workspace, number) {
    const block = workspace.newBlock('math_number');
    block.setFieldValue(number.value, 'NUM');
    return block;
}

function functionCallToBlock(workspace, func) {
    switch (func.name) {
    case 'gotoAndStop':
        const block = workspace.newBlock('gotoandstop');
        const arg = func.args[0];
        connect(block, 'frame', numberToBlock(workspace, arg));
        return block;
    case 'play':
        return workspace.newBlock('play');
    case 'stop':
        return workspace.newBlock('stop');
    case 'nextFrame':
        return workspace.newBlock('nextframe');
    default:
        throw new Error('unsupported function');
    }
}

function expToBlock(workspace, exp) {
    switch (exp.type) {
    case 'var':
        return variableToBlock(workspace, exp);
    case 'string':
        throw new Error('string not supported');
    case 'number':
        return numberToBlock(workspace, exp);
    case 'functionCall':
        return functionCallToBlock(workspace, exp);
    }
}

function conditionToBlock(workspace, condition) {
    if (condition.type == 'compare') {
        const block = workspace.newBlock('if_condition');
        const left = expToBlock(workspace, condition.left);
        const right = expToBlock(workspace, condition.right);
        connect(block, 'left', left);
        connect(block, 'right', right);
        block.setFieldValue(condition.operator, 'operator');
        return block;
    } else if (condition.type == 'functionCall' && condition.variable.names.join('') == 'Key' && condition.name == 'isDown') {
        const block = workspace.newBlock('key_isdown');
        const arg = condition.args[0];
        if (arg.type == 'number') {
            block.setFieldValue(arg.value, 'key');
        } else if (arg.type == 'var') {
            block.setFieldValue(arg.names.join('.'), 'key');
        }
        return block;
    }
    throw new Error('invalid condition');
}

function statementToBlock(workspace, statement) {
    switch (statement.type) {
        case 'onClipEventStatement': {
            const block = workspace.newBlock('onclipevent');
            const statements = statement.statements.map((s) => statementToBlock(workspace, s));
            block.setFieldValue(statement.event, 'type');
            if (statements.length == 0) {
                return block;
            }
            connectStatements(statements);
            connectChild(block, 'run', statements[0]);
            return block;
        }
        case 'ifStatement': {
            const block = workspace.newBlock('controls_if');
            const condition = conditionToBlock(workspace, statement.condition);
            connect(block, 'IF0', condition);
            const statements = statement.statements.map((s) => statementToBlock(workspace, s));
            if (statements.length == 0) {
                return block;
            }
            connectStatements(statements);
            connectChild(block, 'DO0', statements[0]);
            return block;
        }
        case 'funcStatement': {
            const block = workspace.newBlock('run_function');
            const target = variableToBlock(workspace, statement.func.variable);
            const func = functionCallToBlock(workspace, statement.func);
            connect(block, 'target', target);
            connect(block, 'function', func);
            return block;
        }
        case 'addStatement': {
            const block = workspace.newBlock('add');
            const variable = variableToBlock(workspace, statement.variable);
            const by = expToBlock(workspace, statement.exp);
            connect(block, 'variable', variable);
            connect(block, 'by', by);
            return block;
        }
        case 'subtractStatement': {
            const block = workspace.newBlock('subtract');
            const variable = variableToBlock(workspace, statement.variable);
            const by = expToBlock(workspace, statement.exp);
            connect(block, 'variable', variable);
            connect(block, 'by', by);
            return block;
        }
        case 'setStatement': {
            const block = workspace.newBlock('set');
            const variable = variableToBlock(workspace, statement.variable);
            const by = expToBlock(workspace, statement.exp);
            connect(block, 'obj', variable);
            connect(block, 'value', by);
            return block;
        }
    }
}

export function translate(workspace, result) {
    let out = [];
    result.forEach((statement) => {
        out.push(statementToBlock(workspace, statement));
    });
    connectStatements(out);
    return out;
}