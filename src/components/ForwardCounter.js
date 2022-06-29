import { useState, useEffect } from "react";
import useCounter from "../Hooks/useCounter";

import Card from "./Card";

const ForwardCounter = () => {
  let count = useCounter();

  return <Card>{count}</Card>;
};

export default ForwardCounter;
