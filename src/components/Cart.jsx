import { MdDelete } from "react-icons/md";
import useCartStore from "../store/useCartStore";

const Cart = ({ cart, removeCart }) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();
  const cost = (cart?.quantity * cart?.price).toFixed(2);
  return (
    <div className=" my-5 border border-b-primary/30 border-transparent p-3 items-center">
      <div className="flex md:justify-between items-center">
        <div className=" flex items-center gap-5">
          <img src={cart.thumbnail} alt={cart.title} className="h-20 lg:h-36" />
        </div>
        <div className="w-full">
          <p className="text-base md:text-2xl font-bold"> {cart.title} </p>
          <div className="flex justify-between items-center w-full">
            <p className="text-base md:text-2xl font-bold "> ${cart.price} </p>
            <div className=" flex items-center justify-center gap-4">
              <button onClick={() => decreaseQuantity(cart.id)} className="bg-red-500 text-white px-2 py-1 font-bold rounded-lg">
                -
              </button>
              <span className="  py-3"> {cart.quantity} </span>
              <button onClick={() => increaseQuantity(cart.id)} className=" bg-green-500 text-white px-2 py-1 font-bold rounded-lg">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 md:mt-5">
        <p className="text-base md:text-2xl font-bold "> ${cost} </p>
        <button onClick={() => removeCart(cart.id)} className=" bg-red-500/20 p-3 rounded-lg">
          <MdDelete className=" text-base md:text-xl text-red-500 hover:text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
