import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const Product = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { addToCart } = UseCart();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await axios({
      method: "get",
      url: `https://amazon-digital-prod.azurewebsites.net/api/product/products/${params.id}`,
    });
    setData(res.data);
  }

  function handleAddToCart() {
    addToCart(params.id);
  }

  return (
    <div>
      <div>{data.price}</div>
      <div>{data.description}</div>
      <div>{data.model}</div>
      <div>
        {data.images?.map((img, i) => (
          <img src={img} key={i} style={{ width: 50 }} />
        ))}
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
