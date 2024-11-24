import { useState } from 'react';
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './components/home/home'


function App() {
 
  const [isCart,setisCart] = useState([]);

  const handleAddToCart = ({img, name, price, moq }) => {

    const existingItem = isCart.find(item => item.name === name);
    if (existingItem) {
      const updatedCart = isCart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setisCart(updatedCart);
    } else {
      const item = { img, name, price, moq, quantity: 1 };
      setisCart([...isCart, item]);
    }

}

const handleIncreaseQuantity = (name) => {
  const updatedCart = isCart.map(item =>
    item.name === name ? { ...item, quantity: item.quantity + 1 } : item
  );
  setisCart(updatedCart);
};


const handleDecreaseQuantity = (name) => {
  const updatedCart = isCart
    .map(item =>
      item.name === name ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    )
    .filter(item => item.quantity > 0);
  setisCart(updatedCart);
};

const handleDeleteItem = ({name}) =>{
  const newCart = isCart.filter(item => item.name!==name);
  setisCart(newCart);
}


  return (

    <>
      <Header isCart={isCart} handleDeleteItem={handleDeleteItem} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity}/>
      <center><div className="main">
<Home handleAddToCart={handleAddToCart}/>
</div></center>

<Footer />
    </>

  )
}

export default App
