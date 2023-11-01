import React, { useContext } from "react";
import AppLayout from "../../components/AppLayout";
import CountContext from "../../contexts/CountContext";

const Home = () => {
  const { count, increaseBy } = useContext(CountContext);
  return (
    <AppLayout>
      <div>
        Count: {count}
        <button
          onClick={() => {
            increaseBy(10);
          }}
        >
          +
        </button>
      </div>
    </AppLayout>
  );
};

export default Home;
