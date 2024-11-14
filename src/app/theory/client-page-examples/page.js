"use client";

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

function ClientPageExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();
    console.log(data);
    if (data) {
        setProducts(data);
        setLoading(false);
    }
}

  useEffect(() => {
    fetchListOfProducts();
  }, []);


  if(loading) return <h1>Loading data. Please wait...</h1>

  return (
    <div>
      <h1>Client Page Server Actions Example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ClientPageExample;
