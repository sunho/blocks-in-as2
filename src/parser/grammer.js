// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "Statements$ebnf$1", "symbols": []},
    {"name": "Statements$ebnf$1", "symbols": ["Statements$ebnf$1", "Statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Statements", "symbols": ["_", "Statements$ebnf$1"], "postprocess": function(d) { return d[1]; }},
    {"name": "Statement", "symbols": ["OnClipEventStatement", "_"], "postprocess": function(d) { return d[0]; }},
    {"name": "Statement", "symbols": ["IfStatement", "_"], "postprocess": function(d) { return d[0]; }},
    {"name": "Statement", "symbols": ["SubtractStatement", "_"], "postprocess": function(d) { return d[0]; }},
    {"name": "Statement", "symbols": ["AddStatement", "_"], "postprocess": function(d) { return d[0]; }},
    {"name": "Statement", "symbols": ["SetStatement", "_"], "postprocess": function(d) { return d[0]; }},
    {"name": "Statement", "symbols": ["FuncStatement", "_"], "postprocess": function(d) { return d[0]; }},
    {"name": "OnClipEventStatement$string$1", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":"C"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"E"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OnClipEventStatement", "symbols": ["OnClipEventStatement$string$1", "_", {"literal":"("}, "_", "Name", "_", {"literal":")"}, "_", {"literal":"{"}, "Statements", {"literal":"}"}], "postprocess": function(d) { return {'type': 'onClipEventStatement', 'event': d[4], 'statements': d[9]}; }},
    {"name": "OnClipEventStatement$string$2", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OnClipEventStatement", "symbols": ["OnClipEventStatement$string$2", "_", {"literal":"("}, "_", "Name", "_", {"literal":")"}, "_", {"literal":"{"}, "Statements", {"literal":"}"}], "postprocess": function(d) { return {'type': 'onClipEventStatement', 'event': d[4], 'statements': d[9]}; }},
    {"name": "IfStatement$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IfStatement", "symbols": ["IfStatement$string$1", "_", {"literal":"("}, "_", "Condition", "_", {"literal":")"}, "_", {"literal":"{"}, "Statements", {"literal":"}"}], "postprocess": function(d) { return {'type': 'ifStatement', 'condition': d[4], 'statements': d[9]}; }},
    {"name": "SubtractStatement$string$1", "symbols": [{"literal":"-"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SubtractStatement", "symbols": ["Var", "_", "SubtractStatement$string$1", "_", "Exp", {"literal":";"}], "postprocess": function(d) { return {'type': 'subtractStatement', 'variable': d[0], 'exp': d[4]}; }},
    {"name": "AddStatement$string$1", "symbols": [{"literal":"+"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AddStatement", "symbols": ["Var", "_", "AddStatement$string$1", "_", "Exp", {"literal":";"}], "postprocess": function(d) { return {'type': 'addStatement', 'variable': d[0], 'exp': d[4]}; }},
    {"name": "SetStatement", "symbols": ["Var", "_", {"literal":"="}, "_", "Exp", {"literal":";"}], "postprocess": function(d) { return {'type': 'setStatement', 'variable': d[0], 'exp': d[4]}; }},
    {"name": "FuncStatement", "symbols": ["FunctionCall", {"literal":";"}], "postprocess": function(d) { return {'type': 'funcStatement', 'func': d[0]}; }},
    {"name": "FunctionCall", "symbols": ["Var", {"literal":"."}, "Name", {"literal":"("}, "Args", {"literal":")"}], "postprocess": function(d) {return {'type': 'functionCall', 'variable': d[0], 'name': d[2], 'args': d[4]}; }},
    {"name": "Condition", "symbols": ["Exp"], "postprocess": id},
    {"name": "Condition$string$1", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Condition", "symbols": ["Exp", "_", "Condition$string$1", "_", "Exp"], "postprocess": function(d) {return {'type': 'compare', 'left': d[0], 'operator': '==', 'right': d[4]}; }},
    {"name": "Condition$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Condition", "symbols": ["Exp", "_", "Condition$string$2", "_", "Exp"], "postprocess": function(d) {return {'type': 'compare', 'left': d[0], 'operator': '>=', 'right': d[4]}; }},
    {"name": "Condition$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Condition", "symbols": ["Exp", "_", "Condition$string$3", "_", "Exp"], "postprocess": function(d) {return {'type': 'compare', 'left': d[0], 'operator': '<=', 'right': d[4]}; }},
    {"name": "Condition", "symbols": ["Exp", "_", {"literal":">"}, "_", "Exp"], "postprocess": function(d) {return {'type': 'compare', 'left': d[0], 'operator': '>', 'right': d[4]}; }},
    {"name": "Condition", "symbols": ["Exp", "_", {"literal":"<"}, "_", "Exp"], "postprocess": function(d) {return {'type': 'compare', 'left': d[0], 'operator': '<', 'right': d[4]}; }},
    {"name": "Condition$string$4", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Condition", "symbols": ["Exp", "_", "Condition$string$4", "_", "Exp"], "postprocess": function(d) {return {'type': 'compare', 'left': d[0], 'operator': '!=', 'right': d[4]}; }},
    {"name": "Var", "symbols": ["Name"], "postprocess": function(d) {return {'type': 'var', 'names': [d[0]]}; }},
    {"name": "Var", "symbols": ["Var", {"literal":"."}, "Name"], "postprocess": function(d) {return {'type': 'var', 'names': d[0].names.concat([d[2]])}; }},
    {"name": "Name", "symbols": ["_name"], "postprocess": id},
    {"name": "_name", "symbols": [/[a-zA-Z_ㄱ-ㅎ가-힣]/], "postprocess": id},
    {"name": "_name", "symbols": ["_name", /[a-zA-Z_ㄱ-ㅎ가-힣0-9]/], "postprocess": function(d) {return d[0] + d[1]; }},
    {"name": "Exp", "symbols": ["Var"], "postprocess": id},
    {"name": "Exp", "symbols": ["String"], "postprocess": id},
    {"name": "Exp", "symbols": ["number"], "postprocess": id},
    {"name": "Exp", "symbols": ["FunctionCall"], "postprocess": id},
    {"name": "Args", "symbols": []},
    {"name": "Args", "symbols": ["Exp"], "postprocess": function(d) {return [d[0]]; }},
    {"name": "Args", "symbols": ["Args", "_", {"literal":","}, "_", "Exp"], "postprocess": function(d) {return d[0].concat([d[4]]); }},
    {"name": "String", "symbols": [{"literal":"\""}, "_string", {"literal":"\""}], "postprocess": function(d) {return {'type': 'string', 'literal':d[1]}; }},
    {"name": "_string", "symbols": [], "postprocess": function() {return ""; }},
    {"name": "_string", "symbols": ["_string", "_stringchar"], "postprocess": function(d) {return d[0] + d[1];}},
    {"name": "_stringchar", "symbols": [/[^\\"]/], "postprocess": id},
    {"name": "_stringchar", "symbols": [{"literal":"\\"}, /[^]/], "postprocess": function(d) {return JSON.parse("\"" + d[0] + d[1] + "\""); }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "number", "symbols": ["int"], "postprocess": function(d) { return {'type':'number', 'value': d[0]}; }},
    {"name": "number", "symbols": ["decimal"], "postprocess": function(d) { return {'type':'number', 'value': d[0]}; }}
]
  , ParserStart: "Statements"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
