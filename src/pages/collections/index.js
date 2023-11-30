import React, { useEffect, useState } from "react";
import Card from "@/components/CardList/Card";
import Filter from "@/components/Filter";
import Social from "@/components/social";
import { axiosClient } from "@/libraries/axiosClient";

function Collection({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedPriceOption, setSelectedPriceOption] = useState("");

  const handleCheckboxChange = (priceOption) => {
    const priceRange = getPriceRangeFromOption(priceOption);
    const [minPrice, maxPrice] = priceRange;

    let updatedFilteredProducts;

    // Check if the selected price option is already checked
    const isSelectedOptionChecked = selectedPriceOption === priceOption;

    if (isSelectedOptionChecked) {
      // If the selected option is already checked, show all products
      updatedFilteredProducts = products;
    } else {
      // If the selected option is not checked, filter products based on the selected option
      updatedFilteredProducts = products.filter((product) => {
        const productPrice = parseFloat(product.price); // Convert to number

        return (
          (minPrice === undefined || productPrice >= minPrice) &&
          (maxPrice === undefined || productPrice <= maxPrice)
        );
      });
    }

    setFilteredProducts(updatedFilteredProducts);
    setSelectedPriceRange(isSelectedOptionChecked ? [] : priceRange);
    setSelectedPriceOption(isSelectedOptionChecked ? "" : priceOption);
  };

  useEffect(() => {
    const filterProductsByPrice = () => {
      const filtered = products.filter((product) => {
        const productPrice = product.price;

        return (
          selectedPriceRange.length === 0 ||
          (productPrice >= selectedPriceRange[0] &&
            productPrice <= selectedPriceRange[1])
        );
      });
      setFilteredProducts(filtered);
    };

    filterProductsByPrice();
  }, [selectedPriceRange, products]);

  // Hàm để chuyển đổi lựa chọn giá thành khoảng giá
  const getPriceRangeFromOption = (selectedPriceOption) => {
    switch (selectedPriceOption) {
      case "Dưới 1.000.000₫":
        return [undefined, 1000000];
      case "1.000.000₫ - 2.000.000₫":
        return [1000000, 2000000];
      case "2.000.000₫ - 3.000.000₫":
        return [2000000, 3000000];
      case "3.000.000₫ - 4.000.000₫":
        return [3000000, 4000000];
      case "Trên 4.000.000₫":
        return [4000000, 80000000];
      default:
        return [];
    }
  };

  return (
    <>
      <Filter
        itemPrice={[
          "Dưới 1.000.000₫",
          "1.000.000₫ - 2.000.000₫",
          "2.000.000₫ - 3.000.000₫",
          "3.000.000₫ - 4.000.000₫",
          "Trên 4.000.000₫",
        ]}
        onCheckboxChange={handleCheckboxChange}
      />

      <div className="selected-price-option">
        <p>Selected Price Option: {selectedPriceOption}</p>
      </div>

      <div className="collection-listproduct">
        <div className="container">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-md-3 col-sm-4 col-xs-6" key={product._id}>
                  {console.log("Dữ liệu Sản phẩm:", product)}
                  <Card
                    id={`/productDetail/${product._id}`}
                    products={product}
                    // handleAddToCart={handleAddToCart}
                    // handleGoToProductDetail={handleGoToProductDetail}
                  />
                </div>
              ))
            ) : (
              <p>Không có sản phẩm nào</p>
            )}
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
