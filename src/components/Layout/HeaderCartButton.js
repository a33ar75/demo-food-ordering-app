import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [buttonClicked, setButtonIsClicked] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((prevValue, item) => {
    return prevValue + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonClicked ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setButtonIsClicked(true);
    const timer = setTimeout(() => setButtonIsClicked(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
