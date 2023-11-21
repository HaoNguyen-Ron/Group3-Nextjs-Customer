
import CardProduct from '@/components/cardProduct'
import { axiosClient } from '@/libraries/axiosClient';
import verifyLoggin from '@/components/HOC/verifyLoggin';

function ProductDetail(products) {
 console.log('««««« products »»»»»', products);


  return (
    <div>
        <CardProduct
        key={products._id}
          _id="65588730b6e0adaf15e4f0ab"
          products={products.products}
        />
        <h2 className="text-center">Sản phẩm liên quan</h2>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axiosClient.get('/products/all');
  const products = res.data.payload;
  
  

  return {
    props: {
     products,
    },
  };
}

export default verifyLoggin(ProductDetail)