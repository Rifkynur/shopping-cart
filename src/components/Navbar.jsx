import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCartStore from "../store/useCartStore";
import Logo from "../../public/Logo.png";

const Navbar = () => {
  const { carts } = useCartStore();
  const totalItem = carts.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="border-b border-primary/30 fixed top-0 z-10 w-full bg-secondary py-5">
      <MaxWidthWrapper>
        <nav className=" flex items-center justify-between">
          <div className="">
            <Link to={"/"}>
              <img src={Logo} alt="" className="h-8 md:h-16" />
            </Link>
          </div>

          {/* cart */}
          <div className=" space-x-4">
            <Link to={"/cart"}>
              <button className=" relative">
                <FaShoppingCart className=" text-2xl" />
                <span className=" absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex justify-center items-center font-semibold">{totalItem}</span>
              </button>
            </Link>
          </div>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
