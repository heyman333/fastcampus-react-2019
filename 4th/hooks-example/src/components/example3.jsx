import React from "react";

const Example2 = () => {
  const [state, setState] = React.useState({ count: 0 });

  const increment = () => {
    setState({ count: state.count + 1 });
  };

  return (
    <div>
      {state.count}
      <button onClick={increment} />
    </div>
  );
};

export default Example2;
