import UseCart from "../../hooks/UseCart";
import ProductCard from "../Products/ProductCard";
import classes from "./index.module.css";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, deleteCart } = UseCart();

  return (
    <div className={classes.cart}>
      {cart.map((item) => (
        <div key={item.id}>
          <ProductCard data={item} />
          <button
            className={classes.deleteBtn}
            onClick={() => {
              deleteCart(item.id);
            }}
          >
            <FaTrash />
            წაშლა
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
