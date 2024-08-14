import React from "react";

export const User = (Props) => {
  return (
    <span className="user">
      <span className="name">{Props.name}</span>
      <span className="handle">{Props.handle}</span>
    </span>
  );
};
