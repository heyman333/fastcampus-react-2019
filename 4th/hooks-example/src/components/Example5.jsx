import React from "react";

const Example5 = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    console.log("componentDidMount");
  });

  return (
    <div>
      {count}
      <button onClick={increment} />
    </div>
  );
};

export default Example5;
