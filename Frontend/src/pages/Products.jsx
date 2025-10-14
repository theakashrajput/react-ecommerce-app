import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import ProductPageCardSec from '../components/ProductPageCardSec'
import Footer from '../components/Footer'

const Products = () => {

    const breadCrumbData = [
        {label: "Home", path: "/"},
        {label: "Shop", path: "/products"}
    ]

  return (
    <div className='h-screen w-full bg-[#fff] text-[#000] pt-18 md:pt-22'>
        <BreadCrumbs items={breadCrumbData} />
        <ProductPageCardSec />
        <Footer />
    </div>
  )
}

export default Products