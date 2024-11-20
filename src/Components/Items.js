import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Items = (props) => {
    const cart = useContext(CartContext);
    // console.log("cart", cart)
    return (
        <div className="item-cart">
          <h3>{props.name}</h3>
          <h5>Price: $ {props.price}</h5>
          <button className="btn"
          onClick={() => 
         cart.setItems([...cart.items, 
        { name: props.name, price: props.price},
          ])
       }
    >
     Add to Cart</button>
        </div>
    )
}

export default Items;