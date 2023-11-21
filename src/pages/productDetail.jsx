import React from 'react'
import CardProduct from '@/components/cardProduct'
import { axiosClient } from '@/libraries/axiosClient';

export default function ProductDetail(products) {
  const [productData,setProductData] = useState([]);


  return (
    <div>
        <CardProduct
          _id='"65588730b6e0adaf15e4f0ab"'
          key={products._id}
          productData={products}
        />
        <h2 className="text-center">Sản phẩm liên quan</h2>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axiosClient.get('/products/all');
  const products = res.data.payload;
  console.log('««««« products »»»»»', products);

  return {
    props: {
     products,
    },
  };
  console.log('««««« products »»»»»', products);
}

