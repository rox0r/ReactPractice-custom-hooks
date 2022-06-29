import useCounter from "../Hooks/useCounter";

import Card from "./Card";

const BackwardCounter = () => {
  let count = useCounter("decrease");

  return <Card>{count}</Card>;
};

export default BackwardCounter;
