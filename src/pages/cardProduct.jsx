import React from 'react'
import CardProduct from '@/components/cardProduct'
import Card from '@/components/CardList/Card'

export default function login() {
  return (
    <div>
        <CardProduct
            title="Nendoroid My Hero Academia Katsuki Bakugo: U.A. School Uniform Ver"
            price="75990"
            date="18/6/2023"
            producer="Kim Đồng"
            size="10"
        />
        <h2 className="text-center">Sản phẩm liên quan</h2>
    </div>
  )
}
