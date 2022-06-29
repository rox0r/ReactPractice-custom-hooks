import useCounter from "../Hooks/useCounter";

import Card from "./Card";

const ForwardCounter = () => {
  let count = useCounter("increase");

  return <Card>{count}</Card>;
};

export default ForwardCounter;
