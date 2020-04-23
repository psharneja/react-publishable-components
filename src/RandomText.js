import React from "react";

const RandomText = props => {
  const  {texty } = props;
  return (
    <input
      value={texty || "something written"}
    />
  );
};

export default RandomText;