import React from "react";

const A = () => {
  const [value, setValue] = React.useState("변경이 되지 않았음");

  const click = () => {
    setValue("변경이 되었음");
  };

  return (
    <div>
      <B click={click} />
      {value}
    </div>
  );
};

const B = ({ click }) => (
  <div>
    <C click={click} />
  </div>
);

const C = ({ click }) => (
  <div>
    <D click={click} />
  </div>
);

const D = ({ click }) => (
  <div>
    <E click={click} />
  </div>
);

const E = ({ click }) => (
  <div>
    <button onClick={click}>클릭</button>
  </div>
);

export default A;
