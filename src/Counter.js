import React, { Component } from 'react';
import { render } from 'react-dom';

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((c) => {
      if (c >= max) return c;
      return c + step;
    });
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
};

export default Counter;
