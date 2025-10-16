import CartProductList from "../components/Cart/CartProductList";
import CartTotalPrice from "../components/Cart/CartTotalPrice";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Footer from "../components/common/Footer";
import image1 from "../asset/mastrum.jpg";
import image2 from "../asset/napa-anor.jpg";
import image3 from "../asset/riot-pants.jpg";
import { useState } from "react";

const Cart = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      productImage: image1,
      productName: "Jacket",
      productSize: "Large",
      productColor: "White",
      productPrice: 50,
      productQuantitiy: 1,
    },
    {
      id: 2,
      productImage: image2,
      productName: "Pants",
      productSize: "Medium",
      productColor: "Gray",
      productPrice: 97,
      productQuantitiy: 1,
    },
    {
      id: 3,
      productImage: image3,
      productName: "Dark Jacket",
      productSize: "Large",
      productColor: "Dark Blue",
      productPrice: 170,
      productQuantitiy: 2,
    },
  ]);

  const deleteProduct = (id) => {
    setProductData((prev) => prev.filter((ele) => ele.id !== id));
  };

  const handleProductCount = (id, action) => {
    setProductData((prev) =>
      prev.map((ele) => {
        if (ele.id !== id) return ele;
        const updatedQuantity =
          action === "increase"
            ? ele.productQuantitiy + 1
            : Math.max(1, ele.productQuantitiy - 1);
        return { ...ele, productQuantitiy: updatedQuantity };
      })
    );
  };

  const breadCrumbData = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart" },
  ];

  return (
    <div className="h-screen w-full bg-[#fff] text-[#000] pt-18 md:pt-22">
      <BreadCrumbs items={breadCrumbData} />
      <div className="w-full px-4">
        <h2 className="text-4xl mt-3 mb-5 uppercase font-[Inter] font-extrabold">
          Your Cart
        </h2>
        <CartProductList
          cardProductData={productData}
          productActions={{ deleteProduct, handleProductCount }}
        />
        <CartTotalPrice />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
