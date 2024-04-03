// pages/[productId].js
import { axiosClient } from '@/libraries/axiosClient'
import ProductDetail from '@/components/Card/CardProduct'

const ProductDetailPage = ({ product }) => {
  return (
    <div>
      <ProductDetail products={product} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await axiosClient.get('/products/all')

  const products = res.data.payload

  const paths = products.map((product) => ({
    params: { productId: product._id.toString() }
  }))

  return {
    paths,
    fallback: false 
  }
}

export async function getStaticProps({ params }) {
  const { productId } = params
  const res = await axiosClient.get(`/products/${productId}`)
  const product = res.data.payload

  return {
    props: {
      product
    }
  }
}

export default ProductDetailPage
