import './productcard.css'

const ProdductCard = ({name,price,moq,margin,img,amount}) =>
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
    
   
    <button>Add To Cart</button>
    </div>
    
</div>

    )
}

export default ProdductCard;