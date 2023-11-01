import { useState } from "react";
import CountContext from "../contexts/CountContext";

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increaseBy(amount) {
    setCount(count + amount);
  }

  return (
    <CountContext.Provider value={{ count, increaseBy }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
