import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import useAuth from "../../hooks/UseAuth";
import CartButton from "./CartButton";
import { useEffect } from "react";
import UseCart from "../../hooks/UseCart";

const Header = () => {
  const {
    auth: {
      isAuthed,
      tokenParsed: { email },
    },
    logout,
  } = useAuth();

  const navigate = useNavigate();
  const { loadCart } = UseCart();

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div className={classes.header}>
      <nav style={{ display: "flex", gap: 10 }}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? classes.linkActive : classes.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? classes.linkActive : classes.link
          }
        >
          Products
        </NavLink>
      </nav>

      <Link to={"/profile"}>{email}</Link>

      <CartButton />

      {isAuthed && (
        <button
          onClick={() => {
            logout();
          }}
        >
          logout
        </button>
      )}
      {!isAuthed && (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default Header;
