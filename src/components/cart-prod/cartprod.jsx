import "./cartprod.css";
import { ImBin } from "react-icons/im";

const CartProd = ({ product, removeFromCart,img,price,name,moq }) => {
  return (
   
      <div className="product">
        <img src={img} alt="" />
        <div className="prod-desc">
          <p>{name}</p>
          <code>(Pack contains {moq} items)</code>
          <span>₹{price}</span>
         
        </div>
        <div className="amount">
          <button>-</button>1<button>+</button>
        </div>
        <button><ImBin /></button>
      </div>
   
  );
};

export default CartProd;
