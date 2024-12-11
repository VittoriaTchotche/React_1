import { useEffect, useState } from "react";

function Clock() {
  useState[(date, setData)] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>The time is {date.toLocaleTimeString()}</h2>;
}
export default Clock;
