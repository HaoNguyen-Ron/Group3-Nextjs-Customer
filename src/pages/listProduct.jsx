import React, { useState } from "react";
import Card from "@/components/CardList/Card";
import { axiosClient } from "@/libraries/axiosClient";

function ListProduct(products) {
  const [cart, setCart] = useState([]);

  const selectedProducts = products.products.slice(0, 8);

  const handleGoToProductDetail = (productId) => {

    // Use window.location to navigate
    window.location.href = `/productDetail/${productId}`;
  };

  const handleAddToCart = (selectedProduct) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item._id === selectedProduct._id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the count
      updatedCart[existingProductIndex].count += 1;
    } else {
      // If the product is not in the cart, add it with count 1
      updatedCart.push({ ...selectedProduct, count: 1 });
    }

    // Set the updated cart in state
    setCart(updatedCart);

    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Optionally, you can also update the state or perform other actions if needed
  };
  return (
    <div className="d-flex row justify-content-around align-items-center">
      {selectedProducts.map((product) => (
        <div className="col-3" key={product.id}>
          <Card
            id={`/productDetail/${product._id}`}
            products={product}
            handleAddToCart={handleAddToCart}
            handleGoToProductDetail={handleGoToProductDetail}
          />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await axiosClient.get("/products/all");
  const products = res.data.payload;

  return {
    props: {
      products,
    },
  };
}

export default ListProduct;
