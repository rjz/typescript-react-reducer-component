# TypeScript React Reducer Components

A minimal state container inspired by Reason's [state reducers][reason-reducer],
adapted for TypeScript.

## Usage

Using the example factory in [`src/reducerComponent`](src/reducerComponent),
creating new reducer components is as easy as 1, 2, 3...

1. Declare `State` and [`Action`][ts-actions] types for the component.

```typescript
type Action =
| 'INCREMENT'
| 'DECREMENT';

type State = {
  count: number,
};
```

2. `make` the component from a reducer and a rendering function.

```typescript
import * as RC from './reducerComponent';

const Counter: RC.Component<Action, State> = ({ count, send }) => (
  <div>
    <h1>Count: {count}</h1>
    <div>
      <button onClick={() => send('INCREMENT')}>+1</button>
      <button onClick={() => send('DECREMENT')}>-1</button>
    </div>
  </div>
);

const reduce: RC.Reducer<Action, State> = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default RC.make(reduce)(Counter);
```

3. Profit

## Example

```sh
$ yarn
$ yarn start
```

## License

ISC

[ts-actions]: https://rjzaworski.com/2016/09/typescript-redux-async-actions
[reason-reducer]: https://github.com/reasonml/reason-react/blob/master/docs/state-actions-reducer.md
