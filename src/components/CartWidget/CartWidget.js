import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCartContext } from "../../store/CartContextProvider";

import "./CartWidget.styles.css";

const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <Link to={"/cart"} className="navbar__cart">
      <BsCartFill className="navbar__cart-icon" />
      {totalItems() > 0 && (
        <span className="navbar__cart-count">{totalItems()}</span>
      )}
    </Link>
  );
};

export default CartWidget;
