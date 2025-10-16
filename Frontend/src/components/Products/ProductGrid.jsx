import React from 'react'
import ProductPageCard from './ProductPageCard'

const ProductGrid = ({visibleProducts}) => {
  return (
     <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-3 pb-5">
          {visibleProducts.map((ele, idx) => (
            <ProductPageCard data={ele} key={idx} />
          ))}
        </div>
  )
}

export default ProductGrid