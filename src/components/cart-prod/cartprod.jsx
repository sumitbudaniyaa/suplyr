import "./cartprod.css";
import { ImBin } from "react-icons/im";

const CartProd = ({img,price,name,moq,quantity, handleDeleteItem , handleIncreaseQuantity,
  handleDecreaseQuantity, }) => {
  return (
   
      <div className="product">
        <img src={img} alt="" />
        <div className="prod-desc">
          <p>{name}</p>
          <code>(Pack contains {moq} items)</code>
          <span>₹{price * quantity}</span>
         
        </div>
        <div className="amount">
          <button onClick={() => handleDecreaseQuantity(name)}>-</button>{quantity}<button onClick={() => handleIncreaseQuantity(name)}>+</button>
        </div>
        <button onClick={()=>handleDeleteItem({name})}><ImBin /></button>
      </div>
   
  );
};

export default CartProd;
