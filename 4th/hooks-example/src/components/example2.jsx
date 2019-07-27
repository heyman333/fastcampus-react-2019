import React from "react";

const Example2 = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    // setCount(state => {
    //   console.log(state);
    //   return state + 1;
    // });

    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={increment} />
    </div>
  );
};

export default Example2;
