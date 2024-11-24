import { useRef, useState } from 'react';
import BrandCatCard from '../brand-cat-card/brand-cat-card';
import './home.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import BrandData from '../../brand-data';
import CategoryData from '../../category-data';
import ProductCard from '../product-card/productcard';
import ProductData from '../../product-data';

const Home = ({handleAddToCart}) => {

  const ListRef = useRef(null);

  const scrollList = (direction) => {
    if (ListRef.current) {
      const scrollAmount = 200;
      ListRef.current.scrollLeft += direction * scrollAmount;
    }
  };






 
  return (
    <>
      <div className="banner">
        <p>
        We Make Restocking Simple for You!
        </p>
        <span>
          Find 100+ products from more than 20+ brands all at one place.
        </span>
      </div>

      

      <p className="headlines">Shop By Brands<span>see all</span></p>


      <div className="list-container">
  <IoArrowBackCircle className="left-key" onClick={() => scrollList(-1)} />
  <IoArrowForwardCircle className="right-key" onClick={() => scrollList(1)} />

<div className="list" ref={ListRef}>
{BrandData.map((brand) => (
   <BrandCatCard name={brand.name} img={brand.img}/>
))}
</div>

</div>


<p className='headlines'>Shop By Category<span>see all</span></p>

<div className="list-container">
  <IoArrowBackCircle className="left-key" onClick={() => scrollList(-1)} />
  <IoArrowForwardCircle className="right-key" onClick={() => scrollList(1)} />

 <div className="list" ref={ListRef}>
{CategoryData.map((category) => (
   <BrandCatCard name={category.name} img={category.img}/>
))}
</div> 

</div>


<div className="promo">

  <p>Use code 'NEWUSER' to get 10% off on your first purchase</p>
</div>


<p className='headlines'>Products</p>


<div className="product-container">
  {ProductData.map((product) =>(
    <ProductCard name={product.name} img={product.img} price={product.price} moq={product.moq} margin={product.margin} amount={product.amount} handleAddToCart={handleAddToCart}/>
  ))}
</div>
    </>
  );
};

export default Home;