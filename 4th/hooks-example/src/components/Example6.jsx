import React from "react";

const Example5 = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    console.log("this.count", count);

    return () => {
      console.log("clear Interval!");
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={increment} />
    </div>
  );
};

export default Example5;
