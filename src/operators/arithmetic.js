import Operation from './operation';
import ReactDOMServer from 'react-dom/server';

class Numeric extends Operation {
  apply(acc, child) {
    const content = ReactDOMServer.renderToString(child);
    return this.process(acc, parseInt(content, 10));
  }
}

export class Add extends Numeric {
  start() {
    return 0;
  }

  process(acc, cur) {
    return acc + cur;
  }
}

export class Multiply extends Numeric {
  start() {
    return 1;
  }

  process(acc, cur) {
    return acc * cur;
  }
}
