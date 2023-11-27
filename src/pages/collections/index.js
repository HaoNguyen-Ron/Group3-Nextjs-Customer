import Card from "@/components/CardList/Card";
import Filter from "@/components/Filter";
import Social from "@/components/social";
import { axiosClient } from "@/libraries/axiosClient";
import React from "react";

function Collection(products) {
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
    <>
      <Filter />
      <div className="collection-listproduct">
        <div className="container">
          <div className="row">
          {products.products.map((product) => (
        <div className="col-3">
            <Card
              id={`/productDetail/${product._id}`}
              key={product.id}
              products={product}
              handleAddToCart={handleAddToCart}
              handleGoToProductDetail={handleGoToProductDetail}
            />
        </div>
      ))}
          </div>
        </div>
      </div>
      <Social />
    </>
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

export default Collection;
