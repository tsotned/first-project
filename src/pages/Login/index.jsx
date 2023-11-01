import React, { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();

  const [data, setData] = useState({ email: "", password: "" });

  return (
    <div className={classes.login}>
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
          login(data);
        }}
      >
        Log in
      </button>
      <Link to={"/signup"}>რეგისტრაცია</Link>
    </div>
  );
};

export default Login;
