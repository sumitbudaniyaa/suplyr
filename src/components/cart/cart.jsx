import CartProd from "../cart-prod/cartprod";
import "./cart.css";
import { IoCloseSharp } from "react-icons/io5";

const Cart = ({ setisCartOpen, isCart, handleDeleteItem , handleDecreaseQuantity, handleIncreaseQuantity}) => {


  const totalPrice = isCart.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0);


  return (

  <div className="cart-tab">
    <p>
      My Cart <IoCloseSharp onClick={() => setisCartOpen(false)} />
    </p>

    {isCart.length > 0 ?    <> <div className="products">
      {isCart.map((item) => (
        <CartProd img={item.img} price={item.price} moq={item.moq} name={item.name} quantity = {item.quantity} handleDeleteItem={handleDeleteItem} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity}/>
      ))}
    </div>
    <div className="bill">
      <p>Bill Details</p>

      <div className="bill-detail">
        <ul>
          <li>
            Items Total <span>₹{totalPrice}</span>
          </li>
          <li>
            Delivery Charge <span>₹10</span>
          </li>
          <hr />
          <li>
            <span>Grand Total</span> <span>₹{totalPrice + 10}</span>
          </li>
        </ul>
      </div>
    </div>

    <button className="pay-btn">Proceed to Pay</button>
      </>
    :
    <div className="emptycart">

<img src="emptycart.jpg" alt="" />
<center><p>Cart is Empty</p></center>
    </div>
    
}

  </div>
  );
};

export default Cart;
