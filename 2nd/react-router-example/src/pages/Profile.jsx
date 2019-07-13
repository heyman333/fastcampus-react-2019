import React from "react";

export default function Profile({ match }) {
  const {
    params: { id },
  } = match;

  return (
    <div>
      Profile 페이지 입니다.
      {id && <p>{`id는 ${id} 입니다.`}</p>}
    </div>
  );
}
