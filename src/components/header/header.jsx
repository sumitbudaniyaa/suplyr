import { useState } from 'react';
import './header.css';
import { HiOutlineSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Cart from '../cart/cart';

const Header = ({isCart, handleDeleteItem, handleIncreaseQuantity, handleDecreaseQuantity}) =>{

    const [isLoggedIn,setisLoggedin] = useState(false);
    const [isOpen,setisOpen] = useState(false);
    const [isCartOpen,setisCartOpen] = useState(false);


    
    

    return(
        <header>
           
          <img src="suplyr-logo-light.png" alt="" />

<div className="searchbox">
<HiOutlineSearch className='search-icon'/>
           <input type="text" placeholder='Search'/>
</div>
           
{isCartOpen ? <Cart isCart={isCart} setisCartOpen={setisCartOpen} handleDeleteItem={handleDeleteItem} handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity}/>
 : ''}

           {isLoggedIn ? <div className="afterlogin-btns"> { isOpen ? <div className="acc-tab">
        
            <FaUserCircle className='user-icon'/>
            <p>515165165</p>
            <ul>
                <li>My Orders</li>
                <li>FAQ'S</li>
                <li>Account Privacy</li>
                <button onClick={()=>{setisLoggedin(false),setisOpen(false)}}>Log Out</button>
            </ul>
           </div> : ''}  <button onClick={()=>{setisCartOpen(true)}} className='cart-btn'><RiShoppingBag3Fill /><p>Cart</p></button> 
            <button className='acc-btn' onClick={()=>{setisOpen(!isOpen)}}><FaUser /><p>Account</p></button> </div> 
             : <button className='login-btn' onClick={()=>{setisLoggedin(true)}}>Login</button>
           }
           
           
             
        </header>
    )
}

export default Header;