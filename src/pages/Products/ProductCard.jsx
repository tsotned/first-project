import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const ProductCard = ({ data, showAddBtn }) => {
  const { cart, addToCart } = UseCart();

  const isAlreadyInCart = cart.some((item) => item.id === data.id);

  const addBtn = (
    <button
      disabled={isAlreadyInCart}
      onClick={(e) => {
        e.preventDefault();
        addToCart(data.id);
      }}
    >
      add to cart
    </button>
  );

  return (
    <Link to={`/products/${data.id}`} style={{ textDecoration: "none" }}>
      <div className={classes.prodactCard}>
        <img src={data.images[0]} style={{ objectFit: "contain", flex: 1 }} />

        <div className={classes.footer}>
          {data.price}
          {showAddBtn && addBtn}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
