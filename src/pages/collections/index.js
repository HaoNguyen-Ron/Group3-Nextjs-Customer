import React, { useEffect, useState, useMemo } from "react";
import Card from "@/components/CardList/Card";
import Filter from "@/components/Filter";
import Social from "@/components/social";
import { axiosClient } from "@/libraries/axiosClient";

function Collection({ products }) {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [sortOption, setSortOption] = useState("priceAsc");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterResult, setFilterResult] = useState(products);
console.log('««««« products »»»»»', products);
console.log('««««« products.price »»»»»', products[0].price);
  const handleCheckboxChange = (priceRange, selectedVendors, sortOption) => {
    // Lọc sản phẩm theo giá
    const filteredByPrice = products.filter((product) => {
      const productPrice = product.price;

      return (
        priceRange.length === 0 ||
        (productPrice >= priceRange[0] && productPrice <= priceRange[1])
      );
    });

    // Đặt state cho sản phẩm đã lọc
    setFilteredProducts(filteredByPrice);

    // Đặt state cho giá, nhà cung cấp và sắp xếp (nếu cần)
    setSelectedPriceRange(priceRange);
    setSelectedVendors(selectedVendors);
    setSortOption(sortOption);
  };

  // const handleVendorCheckboxChange = (vendor) => {
  //   const isSelected = selectedVendors.includes(vendor);
  //   setSelectedVendors(
  //     isSelected
  //       ? selectedVendors.filter((v) => v !== vendor)
  //       : [...selectedVendors, vendor]
  //   );
  // };

  const handleVendorCheckboxChange = (e) => {
    const vendor = products.supplier.name;
    if (!e.target.checked) return setSelectedVendors(products || []);

    const filteredByVendor = products.filter((product) => {
      const { name } = product.supplier;

      return name.includes(e.tartget.checked);
    });

    setFilterResult(filteredByVendor);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    const filtered = products.filter((product) => {
      const productVendor = product.supplier.name;
      const productPrice = product.price;
// console.log('««««« product »»»»»', productPrice);
      product && productVendor.includes();

      const isVendorMatch =
        !selectedVendors ||
        selectedVendors.length === 0 ||
        selectedVendors.includes(productVendor);
      const isPriceMatch =
        // !selectedPriceRange ||
        // selectedPriceRange.length === 0 ||
        productPrice >= selectedPriceRange[0] &&
        productPrice <= selectedPriceRange[1];

      // const isNameMatch = productName.includes(searchTerm.toLowerCase());

      return isVendorMatch && isPriceMatch;
    });

    setFilteredProducts(filtered);
  }, [selectedPriceRange, selectedVendors, products]);

  // const display = filterResult?.map((product) => (
  //   <Card
  //     key={product._id}
  //     id={`/productDetail/${product._id}`}
  //     products={product}
  //   />
  // ));

  // const content = display.length ? display : <p>Không tìm thấy sản phẩm</p>;

  const filteredAndSortedProducts = useMemo(() => {
    let sortedProducts = [...filteredProducts];

    switch (sortOption) {
      case "giá tăng dần":
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;

      case "giá giảm dần":
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;

      case "Tên A - Z":
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "Tên Z - A":
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      default:
        break;
    }

    return sortedProducts;
  }, [filteredProducts, sortOption]);

  return (
    <>
      <Filter
        onCheckboxChange={handleCheckboxChange}
        onVendorCheckboxChange={handleVendorCheckboxChange}
        onSortOptionChange={handleSortOptionChange}
      />

      <div className="collection-listproduct">
        <div className="container">
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="col-md-3 col-sm-4 col-xs-6" key={product._id}>s
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

            {/* {content} */}
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
