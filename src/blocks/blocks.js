import Blockly from 'node-blockly/browser';

Blockly.Blocks['onclipevent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Run the actions inside");
    this.appendStatementInput("run")
        .setCheck("statement")
        .appendField(new Blockly.FieldDropdown([["regularly","enterFrame"], ["when clicked","press"], ["when mouse is over","rollOver"]]), "type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "onclipevent");
    this.setNextStatement(true, "onclipevent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gotoandstop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gotoAndStop");
    this.appendValueInput("obj")
        .setCheck("obj")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("frame")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" at frame");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(290);
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
    this.setOutput(true, "obj");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck("obj")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("stop");
    this.appendDummyInput()
        .appendField("'s animation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['play'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck("obj")
        .appendField("play");
    this.appendDummyInput()
        .appendField("'s animation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_root'] = {
  init: function() {
    this.appendValueInput("next")
        .setCheck("obj")
        .appendField("_root");
    this.setOutput(true, "obj");
    this.setColour(120);
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
    this.setColour(290);
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
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(290);
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
    this.setInputsInline(true);
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
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print");
    this.appendValueInput("content")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to the console");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['key_isdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left arrow","Key.LEFT"], ["right arrow","Key.RIGHT"], ["up arrow","Key.UP"], ["down arrow","Key.DOWN"], ["space bar","Key.SPACE"]]), "key")
        .appendField("key is pressed");
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("obj")
        .setCheck(null)
        .appendField("move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["to the left","LEFT"], ["to the right","RIGHT"], ["to the top","TOP"], ["to the bottom","BOTTOM"]]), "type");
    this.appendValueInput("number")
        .setCheck(null)
        .appendField(" by");
    this.appendDummyInput()
        .appendField("px");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hittest'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["left side","LEFT"], ["right side","RIGHT"], ["top side","TOP"], ["bottom side","BOTTOM"], ["any side","ANY"]]), "side")
        .appendField("of");
    this.appendValueInput("right")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("and");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("are in contact");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};