import { useState } from 'react';
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './components/home/home'


function App() {
 
  const [isCart,setisCart] = useState([]);

  const handleAddToCart = ({img, name, price, moq }) => {

  const item = {img, name, price, moq };
  
  setisCart([...isCart, item])

}


  return (

    <>
      <Header isCart={isCart}/>
      <center><div className="main">
<Home handleAddToCart={handleAddToCart}/>
</div></center>

<Footer />
    </>

  )
}

export default App
