import * as React from 'react';

type Sender<A> = {
  send(a: A): void
};

export type Component<A, S> = React.SFC<S & Sender<A>>;

export type Reducer<A, S> = (state: S, action: A) => S;

const getDisplayName = <P>(C: React.ComponentType<P>) =>
  C.displayName || C.name || 'Component';

export const make = <A, S>(reduce: Reducer<A, S>) =>
  (C: Component<A, S>) =>
    class ReducerComponent extends React.Component<S, S> {

      static displayName = `ReducerComponent(${getDisplayName(C)})`;

      constructor(props: S) {
        super(props);
        this.state = props;
        this.send = this.send.bind(this);
      }

      send(a: A) {
        this.setState(reduce(this.state, a));
      }

      render() {
        return React.createElement(C, Object.assign({}, this.state, {
          send: this.send,
        }));
      }
    };
