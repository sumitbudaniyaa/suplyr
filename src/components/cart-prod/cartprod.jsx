import "./cartprod.css";
import { ImBin } from "react-icons/im";

const CartProd = () => {
  return (
   
      <div className="product">
        <img src="oil.jpg" alt="" />
        <div className="prod-desc">
          <p>Oil</p>
          <span>₹50</span>
        </div>
        <div className="amount">
          <button>-</button>1<button>+</button>
        </div>
        <button><ImBin /></button>
      </div>
   
  );
};

export default CartProd;
