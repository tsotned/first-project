import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import axios from "axios";
import useAuth from "./UseAuth";
console.log("hello111");
const UseCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { auth, logout } = useAuth();

  async function addToCart(productId) {
    if (!checkAuth()) return;
    try {
      await axios({
        method: "post",
        url: "https://amazon-digital-prod.azurewebsites.net/api/cart/addincart",
        data: {
          productId,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      loadCart();

      return true;
    } catch (e) {
      console.error("error", e);
      return false;
    }
  }

  async function loadCart() {
    try {
      const res = await axios({
        url: "https://amazon-digital-prod.azurewebsites.net/api/cart/getmycartproducts",
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      setCart(res.data);
    } catch (e) {
      console.error("error, loading cart data", e);
    }
  }

  async function deleteCart(id) {
    try {
      await axios({
        method: "delete",
        url: "https://amazon-digital-prod.azurewebsites.net/api/cart/removefromcart",
        data: {
          productId: id,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      loadCart();
    } catch (e) {
      console.error("error, loading cart data", e);
    }
  }

  function checkAuth() {
    const isTokenExpired = auth.tokenParsed.exp < new Date().getTime() / 1000;
    if (isTokenExpired) {
      logout();
    }

    return !isTokenExpired;
  }

  return { addToCart, cart, deleteCart, loadCart };
};

export default UseCart;
