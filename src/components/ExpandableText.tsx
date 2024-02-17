import React, { useState } from "react";
interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isexpanded, setExpand] = useState(false);
  if (children.length <= 100) return <p>{children}</p>;

  const text = isexpanded ? children : children.substring(0, maxChar);
  return (
    <div>
      {text}...
      <button onClick={() => setExpand(!isexpanded)}>
        {isexpanded ? "less" : "more"}
      </button>
    </div>
  );
};

export default ExpandableText;
