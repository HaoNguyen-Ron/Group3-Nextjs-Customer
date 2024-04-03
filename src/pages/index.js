import CardList from '@/components/Card/CardList/index'
import Carousel from '@/components/Carousel'
import Services from '@/components/Services'
import Sliders from '@/components/Slider'
import Social from '@/components/Social'
import { axiosClient } from '@/libraries/axiosClient'

export default function Home(products) {
  return (
    <>
      <Carousel />
      <CardList products={products.products} />
      <Services />
      <Sliders />
      <Social />
    </>
  )
}

export async function getStaticProps() {
  const res = await axiosClient.get('/products/all')
  const products = res.data.payload

  return {
    props: {
      products
    }
  }
}
