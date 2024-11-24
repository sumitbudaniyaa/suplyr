import CartProd from "../cart-prod/cartprod";
import "./cart.css";
import { IoCloseSharp } from "react-icons/io5";
import { GiCardboardBoxClosed } from "react-icons/gi";

const Cart = ({ setisCart }) => {
  return (
    <div className="cart-tab">
      <p>
        My Cart <IoCloseSharp onClick={() => setisCart(false)} />
      </p>
      <div className="products">
        <CartProd />
        <CartProd />
      </div>

      <div className="bill">
        <p>Bill Details</p>

        <div className="bill-detail">
          <ul>
            <li>
       
        
            
              Items Total <span>₹100</span>
            </li>
            <li>
              Delivery Charge <span>₹10</span>
            </li>
            <hr />
            <li>
              <span>Grand Total</span> <span>₹110</span>
            </li>
          </ul>
        </div>
        
      </div>

      <button className="pay-btn">Proceed to Pay</button>
    </div>
  );
};

export default Cart;
