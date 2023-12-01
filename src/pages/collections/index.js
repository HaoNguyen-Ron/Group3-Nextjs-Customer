import React, { useEffect, useState } from "react";
import Card from "@/components/CardList/Card";
import Filter from "@/components/Filter";
import Social from "@/components/social";
import { axiosClient } from "@/libraries/axiosClient";

function Collection({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [selectedPriceOption, setSelectedPriceOptions] = useState([]);

  //suplier
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);

  function handleSuppllierChange(label) {
    // Check if the label is already in the selected suppliers list
    if (selectedSuppliers.includes(label)) {
      // If it is, remove it
      const updatedSuppliers = selectedSuppliers.filter(
        (supplier) => supplier !== label
      );
      setSelectedSuppliers(updatedSuppliers);
    } else {
      // If it's not, add it
      const updatedSuppliers = [...selectedSuppliers, label];
      setSelectedSuppliers(updatedSuppliers);
    }
  }

  const handleCheckboxChangePrice = (priceOption) => {
    const priceRange = getPriceRangeFromOption(priceOption);
    const [minPrice, maxPrice] = priceRange;

    let updatedSelectedOptions = [...selectedPriceOption];

    // Kiểm tra xem tùy chọn giá đã chọn đã được chọn chưa
    const isSelectedOptionChecked =
      updatedSelectedOptions.includes(priceOption);

    if (isSelectedOptionChecked) {
      // Nếu tùy chọn đã chọn đã được chọn, loại bỏ nó khỏi mảng
      const indexToRemove = updatedSelectedOptions.indexOf(priceOption);
      updatedSelectedOptions.splice(indexToRemove, 1);
    } else {
      // Nếu tùy chọn đã chọn không được chọn, thêm nó vào mảng
      updatedSelectedOptions.push(priceOption);
    }

    setSelectedPriceRange([]); // Reset selected price range when multiple options are selected
    setSelectedPriceOptions(updatedSelectedOptions);
  };

  useEffect(() => {
    const filterProductsByPrice = () => {
      let updatedFilteredProducts = products;

      // Lọc sản phẩm dựa trên tất cả các tùy chọn đã chọn
      if (selectedPriceOption.length > 0) {
        updatedFilteredProducts = products.filter((product) => {
          const productPrice = parseFloat(product.price);

          return selectedPriceOption.some((selectedOption) => {
            const range = getPriceRangeFromOption(selectedOption);
            const [min, max] = range;
            return (
              (min === undefined || productPrice >= min) &&
              (max === undefined || productPrice <= max)
            );
          });
        });
      }

      setFilteredProducts(updatedFilteredProducts);
    };

    filterProductsByPrice();

    //Suplier-----------------------------
    if (selectedSuppliers.length === 0) {
      setFilteredProducts(products);
    } else {
      // Filter products based on selected suppliers
      const resultArray = products.filter((product) =>
        selectedSuppliers.includes(product.supplier.name)
      );
      setFilteredProducts(resultArray);
    }
  }, [selectedPriceOption, selectedSuppliers, products]);
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

  //loc theo suplier

  // Lặp theo Giá: Tăng dần", "Giá: Giảm dần", "Tên: A-Z", "Tên: Z-A
  // const handleSortChange = (sortOption) => {
  //   let sortedProductsCopy = [...sortedProducts];

  //   switch (sortOption) {
  //     case "Giá: Tăng dần":
  //       sortedProductsCopy.sort((a, b) => a.price - b.price);
  //       break;
  //     case "Giá: Giảm dần":
  //       sortedProductsCopy.sort((a, b) => b.price - a.price);
  //       break;
  //     case "Tên: A-Z":
  //       sortedProductsCopy.sort((a, b) => a.name.localeCompare(b.name));
  //       break;
  //     case "Tên: Z-A":
  //       sortedProductsCopy.sort((a, b) => b.name.localeCompare(a.name));
  //       break;
  //     default:
  //       break;
  //   }

  //   setSortedProducts(sortedProductsCopy);
  // };

  return (
    <>
      <Filter
        itemName={["Giá: Tăng dần", "Giá: Giảm dần", "Tên: A-Z", "Tên: Z-A"]}
        itemSuplier={[
          "Nhật Bản",
          "Việt Nam",
          "Trung Quốc",
          "Thái Lan",
          "Hoa Kỳ",
        ]}
        itemPrice={[
          "Dưới 1.000.000₫",
          "1.000.000₫ - 2.000.000₫",
          "2.000.000₫ - 3.000.000₫",
          "3.000.000₫ - 4.000.000₫",
          "Trên 4.000.000₫",
        ]}
        onCheckboxChange={handleCheckboxChangePrice}
        onCheckboxChangeSupplier={handleSuppllierChange}
      />

      <div className="mx-2">
        <p>Tùy chọn giá đã chọn: {selectedPriceOption}</p>
      </div>

      <div className="collection-listproduct">
        <div className="container">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-md-3 col-sm-4 col-xs-6" key={product._id}>
                  {/* {console.log("Dữ liệu Sản phẩm:", product)} */}
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
