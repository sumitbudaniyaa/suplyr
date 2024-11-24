import './productcard.css'

const ProductCard = ({name,price,moq,margin,img,amount,handleAddToCart }) =>
{
    return(
<div className="product-card">
    <img src={img} alt="" />

    <div className="product-desc">
    <p>{name}</p>
    <span>₹{price}</span>

    <code>
        <ul>
            <li>MOQ: {moq}</li>
            <li>Amount: {amount}</li>
            <li>Margin: ₹{margin}</li>
        </ul>
    </code>
    
   
    <button onClick={() => handleAddToCart({ img, name, price, moq })}>Add To Cart</button>
    </div>
    
</div>

    )
}

export default ProductCard;