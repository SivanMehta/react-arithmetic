import Operation from './operation';
import ReactDOMServer from 'react-dom/server';

class Numeric extends Operation {
  start() {
    return 0;
  }

  apply(acc, child) {
    const content = ReactDOMServer.renderToString(child);
    debugger;
    return this.process(acc, parseInt(content, 10));
  }
}

export class Add extends Numeric {
  process(acc, cur) {
    debugger;
    return acc + cur;
  }
}
