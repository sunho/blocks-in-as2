import * as nearley from 'nearley';
import * as grammer from './grammer';

export function parse(str) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammer));
    str = str.replace('\n\r', '\n').replace('\r', '\n');
    str.split('\n').forEach((sentence) => {
        parser.feed(sentence);
    });
    console.log(parser.results);
    return parser.results[0];
}

export { translate } from './translate';