import Blockly from 'node-blockly/browser';

Blockly.Blocks['onclipevent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When the movie clip");
    this.appendStatementInput("run")
        .setCheck("statement")
        .appendField(new Blockly.FieldDropdown([["enter frame","enterFrame"], ["pressed by mouse","mouseDown"], ["appear","load"]]), "type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "onclipevent");
    this.setNextStatement(true, "onclipevent");
    this.setColour(230);
 this.setTooltip("enterFrame");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['key_isdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key")
        .appendField(new Blockly.FieldDropdown([["LEFT","Key.LEFT"], ["RIGHT","Key.RIGHT"], ["DOWN","Key.DOWN"], ["UP","Key.UP"], ["SPACE","Key.SPACE"]]), "key")
        .appendField("is down");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gotoandstop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gotoAndStop");
    this.appendValueInput("frame")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" at frame");
    this.appendValueInput("obj")
        .setCheck("obj")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("of");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck("obj")
        .appendField("set");
    this.appendValueInput("value")
        .setCheck(["Number", "obj"])
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable'] = {
  init: function() {
    this.appendValueInput("next")
        .setCheck("obj")
        .appendField("'s variable")
        .appendField(new Blockly.FieldTextInput("variable name"), "name");
    this.setOutput(true, "obj");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['this'] = {
  init: function() {
    this.appendValueInput("next")
        .setCheck("obj")
        .appendField("this movieclip");
    this.setInputsInline(false);
    this.setOutput(true, "obj");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop");
    this.appendValueInput("obj")
        .setCheck("obj")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("obj")
        .setCheck("obj");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_root'] = {
  init: function() {
    this.appendValueInput("next")
        .setCheck("obj")
        .appendField("_root movieclip");
    this.setInputsInline(false);
    this.setOutput(true, "obj");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['run_function'] = {
  init: function() {
    this.appendValueInput("target")
        .setCheck("obj")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("run");
    this.appendValueInput("function")
        .setCheck("function")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("'s function");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['add'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("obj")
        .appendField("add");
    this.appendValueInput("by")
        .setCheck(["Number", "obj"])
        .appendField("by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nextframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nextFrame");
    this.appendValueInput("obj")
        .setCheck("obj")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_condition'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["is equal to","=="], ["is more than or equal to",">="], ["is less than or equal to","<="], ["is more than",">"], ["is less than","<"], ["is not equal to","!="]]), "operator");
    this.appendValueInput("right")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['subtract'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("obj")
        .appendField("subtract");
    this.appendValueInput("by")
        .setCheck(["Number", "obj"])
        .appendField("by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};