const CartProduct = ({
  productData,
  productActions: { deleteProduct, handleProductCount },
}) => {
  return (
    <div className="w-full p-3 flex justify-between gap-3 bg-[#F0EFED] rounded-md">
      <div className="w-[30%] overflow-hidden rounded-md bg-white">
        <img
          src={productData.productImage}
          className="w-full h-full object-cover"
          alt="Product Image"
        />
      </div>
      <div className="w-[70%]">
        <div>
          <div className="flex justify-between items-center font-semibold font-[Gilroy] tracking-wide">
            <h4 className="text-sm w-[90%] whitespace-nowrap overflow-x-hidden">
              {productData.productName}
            </h4>
            <i
              onClick={() => deleteProduct(productData.id)}
              className="ri-delete-bin-6-fill text-red-600 active:scale-95 cursor-pointer"
            ></i>
          </div>
          <div>
            <small className="text-xs block mb-1">
              Size:{" "}
              <span className="font-medium text-[#5d5d5d]">
                {productData.productSize}
              </span>
            </small>
            <small className="text-xs block">
              Color:{" "}
              <span className="font-medium text-[#5d5d5d]">
                {productData.productColor}
              </span>
            </small>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h5 className="font-semibold font-[Inter] text-xl">
              ${productData.productPrice}
            </h5>
            <div className="bg-[#d3d3d3] rounded-2xl px-1 py-0.5 flex items-center justify-between gap-3">
              <i
                onClick={() => handleProductCount(productData.id, "decrease")}
                className="text-sm ri-subtract-line active:scale-85 cursor-pointer"
              ></i>
              <span className="text-sm">{productData.productQuantitiy}</span>
              <i
                onClick={() => handleProductCount(productData.id, "increase")}
                className="text-sm ri-add-line active:scale-85 cursor-pointer"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
