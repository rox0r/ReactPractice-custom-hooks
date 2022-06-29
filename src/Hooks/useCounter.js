import { useEffect, useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return counter;
}

export default useCounter;
