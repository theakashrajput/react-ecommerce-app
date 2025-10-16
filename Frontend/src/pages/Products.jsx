import BreadCrumbs from '../components/common/BreadCrumbs'
import ProductPageCardSec from '../components/Products/ProductPageCardSec'
import Footer from '../components/common/Footer'

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