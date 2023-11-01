import { Link } from "react-router-dom";
import UseCart from "../../hooks/UseCart";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  const { cart } = UseCart();
  return (
    <Link to={"/cart"} style={{ textDecoration: "none" }}>
      <button
        style={{
          background: "white",
          border: "none",
          padding: 5,
          display: "flex",
          gap: 5,
          cursor: "pointer",
        }}
      >
        <FaShoppingCart />({cart.length})
      </button>
    </Link>
  );
};

export default CartButton;
