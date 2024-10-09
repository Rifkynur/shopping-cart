import useCartStore from "../store/useCartStore";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Cart from "../components/Cart";

const CartSection = () => {
  const { carts, removeCart, clearCart, getTotal } = useCartStore();
  const totalCost = getTotal().toFixed(2);
  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col gap-5 min-h-[30rem] my-5 mt-28 lg:mt-40">
        <h1 className=" text-xl"> My Cart - </h1>
        {carts.length === 0 ? (
          <p className=" text-lg text-center mt-20">Your Cart is Empty! </p>
        ) : (
          <>
            <div>
              {carts.map((cart) => {
                return <Cart key={cart.id} cart={cart} removeCart={removeCart} />;
              })}
            </div>
            <div className=" mt-auto flex isolate justify-between items-end">
              <button onClick={() => clearCart()} className=" mt-5 border border-red-500 px-4 py-2 rounded-lg text-red-500 text-sm md:px-5 md:py-3">
                {" "}
                Empty Cart
              </button>
              <div className=" flex flex-col">
                <p className=" text-base font-bold"> Sub Total : {totalCost} </p>
                <button className=" bg-primary px-4 py-2 rounded-lg text-white mt-5"> Checkout </button>
              </div>
            </div>
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default CartSection;
