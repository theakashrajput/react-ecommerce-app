import CartProduct from "./CartProduct";

const CartProductList = ({ cardProductData, productActions }) => {

  return (
    <section className="border-[1px] border-[#A2A1AD] rounded-2xl w-full p-3 flex flex-col gap-3 mb-60">
      {cardProductData.map((product, idx)=><CartProduct key={idx} productActions={productActions} productData={product} />)}
    </section>
  );
};

export default CartProductList;
