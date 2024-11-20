import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const addToCart = useContext(CartContext);
    const total = addToCart.items.reduce((a,b) => a +b.price, 0)
    return (
        <div>
         <h1>Cart</h1>
          {
             addToCart && 
             addToCart.items.map((item) => (
                <li>
                  {item.name} - $ {item.price}
                </li>
             ))
          }
          <h5>Total Bill - ${total} </h5>
        </div>
    )
};

export default Cart;