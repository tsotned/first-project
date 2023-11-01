import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin, signout } from "../reducers/authReducer";

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  async function login({ email, password }) {
    try {
      const res = await axios({
        method: "post",
        url: "https://amazon-digital-prod.azurewebsites.net/api/User/LogIn",
        data: {
          email,
          password,
        },
      });

      dispatch(signin({ username: email }));
      updateToken(res.data.jwt);
      navigate("/products");
    } catch (e) {
      console.error("error", e);
    }
  }

  async function signup({ userName, email, password }) {
    try {
      let res = await axios({
        method: "post",
        url: "https://amazon-digital-prod.azurewebsites.net/api/user/registerUser",
        data: {
          userName,
          email,
          password,
        },
      });

      navigate("/login");
    } catch (e) {
      console.error("error", e);
    }
  }

  function logout() {
    setAuth({ token: null });
    dispatch(signout());
  }

  function updateToken(token) {
    setAuth({ token: token });
  }

  const tokenParsed = parseJwt(auth.token);

  return {
    auth: {
      ...auth,
      isAuthed: !!auth.token,
      tokenParsed: {
        ...tokenParsed,
        userName: tokenParsed?.unique_name,
        id: tokenParsed?.nameid,
      },
    },
    login,
    logout,
    signup,
    updateToken,
  };
};

export default useAuth;

function parseJwt(token) {
  if (!token) return null;
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
