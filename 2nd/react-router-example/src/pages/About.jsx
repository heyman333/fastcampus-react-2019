import React from "react";
import QS from "query-string";

export default function About({ location }) {
  const q = QS.parse(location.search);
  const name = q.name;

  return (
    <div>
      About 페이지 입니다.
      {name && <p>{`name은 ${name}입니다`}</p>}
    </div>
  );
}
