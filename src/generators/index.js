import Blockly from 'node-blockly/browser';

let generators = {};

generators['onclipevent'] = (block) => {
    let type = block.getFieldValue('type');
    let code = Blockly.JavaScript.statementToCode(block, 'run');
    return `onClipEvent(${type}) {\n${code}}\n`
};

generators['key_isdown'] = (block) => {
    let key = block.getFieldValue('key');
    return [`Key.isDown(${key})`, Blockly.JavaScript.ORDER_MEMBER];
};

generators['gotoandstop'] = (block) => {
    let frame = Blockly.JavaScript.valueToCode(block, 'frame', Blockly.JavaScript.ORDER_ATOMIC);
    return [`gotoAndStop(${frame})`, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['set'] = (block) => {
    let obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
    let value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  
    return `${obj} = ${value};\n`
};

generators['variable'] = (block) => {
    let name = block.getFieldValue('name');
    let next = Blockly.JavaScript.valueToCode(block, 'next', Blockly.JavaScript.ORDER_ATOMIC);
    let code = name;
    if (next != '') {
        code += '.' + next;
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['this'] = (block) => {
    let next = Blockly.JavaScript.valueToCode(block, 'next', Blockly.JavaScript.ORDER_ATOMIC);
    let code = 'this';
    if (next != '') {
        code += '.' + next;
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['stop'] = (block) => {
    return [`stop()`, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['play'] = (block) => {
    return [`play()`, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['_root'] = (block) => {
    let next = Blockly.JavaScript.valueToCode(block, 'next', Blockly.JavaScript.ORDER_ATOMIC);
    let code = '_root';
    if (next != '') {
        code += '.' + next;
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['run_function'] = (block) => {
    let target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
    let func = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_ATOMIC);
 
    return `${target}.${func};\n`;
};

generators['add'] = (block) => {
    let variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    let by = Blockly.JavaScript.valueToCode(block, 'by', Blockly.JavaScript.ORDER_ATOMIC);
    
    return `${variable} += ${by};\n`;
};

generators['subtract'] = (block) => {
    let variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    let by = Blockly.JavaScript.valueToCode(block, 'by', Blockly.JavaScript.ORDER_ATOMIC);
 
    return `${variable} -= ${by};\n`;
};

generators['nextframe'] = (block) => {
    return [`nextFrame()`, Blockly.JavaScript.ORDER_ATOMIC];
};

generators['if_condition'] = (block) => {
    let left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
    let operator = block.getFieldValue('operator');
    let right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${left} ${operator} ${right}`, Blockly.JavaScript.ORDER_NONE];
};

export default generators;