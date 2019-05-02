@builtin "number.ne"

Statements -> _ Statement:* {% function(d) { return d[1]; } %}

Statement -> OnClipEventStatement _ {% function(d) { return d[0]; } %}
    | IfStatement _ {% function(d) { return d[0]; } %}
    | SubtractStatement _ {% function(d) { return d[0]; } %}
    | AddStatement _ {% function(d) { return d[0]; } %}
    | SetStatement _ {% function(d) { return d[0]; } %}
    | FuncStatement _ {% function(d) { return d[0]; } %}

OnClipEventStatement -> "onClipEvent" _ "(" _ Name _ ")" _ "{" Statements "}" {% function(d) { return {'type': 'onClipEventStatement', 'event': d[4], 'statements': d[9]}; } %} |
                        "on" _ "(" _ Name _ ")" _ "{" Statements "}" {% function(d) { return {'type': 'onClipEventStatement', 'event': d[4], 'statements': d[9]}; } %}
                    

IfStatement -> "if" _ "(" _ Condition _ ")" _ "{" Statements "}" {% function(d) { return {'type': 'ifStatement', 'condition': d[4], 'statements': d[9]}; } %}

SubtractStatement -> Var _ "-=" _  Exp ";" {% function(d) { return {'type': 'subtractStatement', 'variable': d[0], 'exp': d[4]}; } %}

AddStatement -> Var _ "+=" _  Exp ";" {% function(d) { return {'type': 'addStatement', 'variable': d[0], 'exp': d[4]}; } %}

SetStatement -> Var _ "=" _  Exp ";" {% function(d) { return {'type': 'setStatement', 'variable': d[0], 'exp': d[4]}; } %}

FuncStatement -> FunctionCall ";" {% function(d) { return {'type': 'funcStatement', 'func': d[0]}; } %}

FunctionCall -> Var "." Name "(" Args ")" {% function(d) {return {'type': 'functionCall', 'variable': d[0], 'name': d[2], 'args': d[4]}; } %}

Condition -> Exp {% id %}
    | Exp _ "==" _ Exp {% function(d) {return {'type': 'compare', 'left': d[0], 'operator': '==', 'right': d[4]}; } %}
    | Exp _ ">=" _ Exp {% function(d) {return {'type': 'compare', 'left': d[0], 'operator': '>=', 'right': d[4]}; } %}
    | Exp _ "<=" _ Exp {% function(d) {return {'type': 'compare', 'left': d[0], 'operator': '<=', 'right': d[4]}; } %}
    | Exp _ ">" _ Exp {% function(d) {return {'type': 'compare', 'left': d[0], 'operator': '>', 'right': d[4]}; } %}
    | Exp _ "<" _ Exp {% function(d) {return {'type': 'compare', 'left': d[0], 'operator': '<', 'right': d[4]}; } %}
    | Exp _ "!=" _ Exp {% function(d) {return {'type': 'compare', 'left': d[0], 'operator': '!=', 'right': d[4]}; } %}

Var -> Name {% function(d) {return {'type': 'var', 'names': [d[0]]}; } %}
    | Var "." Name {% function(d) {return {'type': 'var', 'names': d[0].names.concat([d[2]])}; } %}

Name -> _name {% id %}
 
_name -> [a-zA-Z_ㄱ-ㅎ가-힣] {% id %}
	| _name [a-zA-Z_ㄱ-ㅎ가-힣0-9] {% function(d) {return d[0] + d[1]; } %}

Exp -> Var {% id %}
    | String {% id %}
    | number {% id %}
    | FunctionCall {% id %}

Args -> null
    | Exp {% function(d) {return [d[0]]; } %}
    | Args _ "," _ Exp {% function(d) {return d[0].concat([d[4]]); } %}

String -> "\"" _string "\"" {% function(d) {return {'type': 'string', 'literal':d[1]}; } %}

_string ->
	null {% function() {return ""; } %}
	| _string _stringchar {% function(d) {return d[0] + d[1];} %}

_stringchar ->
	[^\\"] {% id %}
	| "\\" [^] {% function(d) {return JSON.parse("\"" + d[0] + d[1] + "\""); } %}

_  -> wschar:* {% function(d) {return null;} %}
__ -> wschar:+ {% function(d) {return null;} %}

wschar -> [ \t\n\v\f] {% id %}

number -> int {% function(d) { return {'type':'number', 'value': d[0]}; } %}
    | decimal {% function(d) { return {'type':'number', 'value': d[0]}; } %}