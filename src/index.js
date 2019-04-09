import Blockly from 'node-blockly/browser';
import './blocks/blocks';

import toolbox from './blocks/toolbox.xml';
import generators from './generators';
import { parse, translate } from './parser';

import hljs from 'highlight.js/lib/highlight';
import actionscript from 'highlight.js/lib/languages/actionscript';
import 'highlight.js/styles/atom-one-dark.css'

import Clipboard from 'clipboard';

import './index.css';

let workspace;

for (let key in generators) {
  Blockly.JavaScript[key] = generators[key];
}

hljs.registerLanguage('actionscript', (h) => {
  const out = actionscript(h);  
  out.keywords.keyword += ' _root _parent onClipEvent'
  return out;
});

const onChange = () => {
  const element = document.getElementById('text');
  element.textContent = Blockly.JavaScript.workspaceToCode(workspace );
  hljs.highlightBlock(element);
}

function backupCode() {
  return Blockly.Xml.workspaceToDom(workspace);
}

function restoreCode(code) {
  Blockly.Xml.domToWorkspace(code, workspace);
}

function render(code) {
  if( workspace ) {
    workspace.removeChangeListener(onChange);
    if (!code) {
      code = backupCode();
    }
    workspace.dispose();
  }

  workspace = Blockly.inject('main', {
    toolbox: toolbox
  })
  if (code) {
    restoreCode(code);
  }
  workspace.addChangeListener(onChange);
}

const area = document.getElementById('area');
const onresize = (e) => {
  let main = document.getElementById('main');
  let element = area;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  main.style.left = x + 'px';
  main.style.top = y + 'px';
  main.style.width = area.offsetWidth + 'px';
  main.style.height = area.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};

window.addEventListener('resize', onresize, false);

document.getElementById('import').addEventListener('click', () => {
  navigator.clipboard.readText()
    .then(text => {
      const code = backupCode();
      try {
        const result = parse(text);
        workspace.clear();
        translate(workspace, result);
        render();
      } catch (e) {
        workspace.clear();
        restoreCode(code);
        alert(`Invalid code: ${e}\n You ctrl+c this code:\n ${text}`);
      }  
  })
  .catch(() => {
    alert('clipboard permission is requiured');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  render();
  onresize();
  Blockly.svgResize(workspace);
  var clipboard = new Clipboard('.clipboard');
});
