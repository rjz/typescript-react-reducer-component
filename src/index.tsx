import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter';

ReactDOM.render(
  <Counter count={42} />,
  document.getElementById('root') as HTMLElement
);
