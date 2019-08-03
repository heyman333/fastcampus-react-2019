import React, { useState } from "react";

const A = () => {
  const [value, setValue] = useState("변경이 되지 않았음");

  const onClick = () => {
    setValue("데이터를 변경 시켰음");
  };

  return (
    <div>
      <B value={value} />
      <button onClick={onClick}>클릭</button>
    </div>
  );
};

const B = ({ value }) => {
  return (
    <div>
      <C value={value} />
    </div>
  );
};

const C = ({ value }) => {
  return (
    <div>
      <D value={value} />
    </div>
  );
};

const D = ({ value }) => {
  return (
    <div>
      <E value={value} />
    </div>
  );
};

const E = ({ value }) => {
  return <div>{value}</div>;
};

export default A;
