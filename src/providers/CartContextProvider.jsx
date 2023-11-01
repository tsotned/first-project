import React from "react";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
