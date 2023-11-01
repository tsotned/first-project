import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./index.module.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({ PageNumber: 1 });

  useEffect(() => {
    loadData();
  }, [params]);

  function loadData() {
    const queryParams = new URLSearchParams(params);
    fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/product/products?" +
        queryParams
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <>
      <div className={classes.prodactList}>
        {data.map((prod) => (
          <ProductCard key={prod.id} data={prod} showAddBtn />
        ))}
      </div>
      <div className={classes.pagination}>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <div
            key={page}
            className={params.PageNumber === page ? classes.active : undefined}
            onClick={() => {
              setParams({ ...params, PageNumber: page });
            }}
          >
            {page}
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
