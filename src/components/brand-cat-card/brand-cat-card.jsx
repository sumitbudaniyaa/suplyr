import './brand-cat-card.css';


const BrandCatCard = ( {name,img} ) =>
{
    return(
    <>
<div className="brand-card">
    <img src={img} alt="" />
    <p>{name}</p>
</div>
</>
    )
}

export default BrandCatCard;