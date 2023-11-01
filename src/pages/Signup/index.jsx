import React, { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import classes from "./index.module.css";

const Signup = () => {
  const { signup } = useAuth();

  const [data, setData] = useState({ userName: "", email: "", password: "" });

  return (
    <div className={classes.signup}>
      <input
        type="text"
        value={data.userName}
        onChange={(e) => setData({ ...data, userName: e.target.value })}
      />
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        onClick={() => {
          signup(data);
        }}
      >
        Sign up
      </button>
    </div>
  );
};

export default Signup;
