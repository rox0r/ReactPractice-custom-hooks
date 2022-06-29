import { useEffect, useState } from "react";

function useCounter(action) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (action === "increase") {
        setCounter((prevCounter) => {
          return prevCounter + 1;
        });
      } else if (action === "decrease") {
        setCounter((prevCounter) => {
          return prevCounter - 1;
        });
      } else {
        console.log("Wrong action! Need 'increase' or 'decrease'");
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return counter;
}

export default useCounter;
