import Blockly from 'node-blockly/browser';
import './blocks/blocks';
import toolbox from './blocks/toolbox.xml';
import generators from './generators';
import { parse, translate } from './parser';
import './index.css';

let workspace;

for (let key in generators) {
  Blockly.JavaScript[key] = generators[key];
}

const onChange = () => {
  document.getElementById('out').innerText = Blockly.JavaScript.workspaceToCode(workspace );
}

function render(code) {
  if( workspace ) {
    workspace.removeChangeListener(onChange);
    code = Blockly.Xml.workspaceToDom(workspace);
    workspace.dispose();
  }
  workspace = Blockly.inject('main', {
    toolbox: toolbox
  })
  if (code) {
    Blockly.Xml.domToWorkspace(code, workspace);
  }
  workspace.addChangeListener(onChange);
}

document.getElementById('in').addEventListener('input', (e) => {
  console.log(e.target.value);
  workspace.clear();
  translate(workspace, parse(e.target.value));
  render();
});

render();

const area = document.getElementById('area');
const main = document.getElementById('main');
const onresize = (e) => {
  let element = main;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = area.offsetWidth + 'px';
  blocklyDiv.style.height = area.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);