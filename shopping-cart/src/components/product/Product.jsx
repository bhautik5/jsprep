import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../CartContext.jsx';
import './Product.scss';

// eslint-disable-next-line react/prop-types
const Product = ( {prod} ) => {
    const {cart, setCart } = useContext(CartContext);
    const [addedInCart, setAddedInCart] = useState(false);
    
    // eslint-disable-next-line react/prop-types
    const {id, title, image, price} = prod;
    const clickHandler = (prod) =>{
        setCart([...cart, {...prod, qty:1}]);
        setAddedInCart(true)
    }
    const removeFromCart = (prodId) =>{
         // eslint-disable-next-line react/prop-types
         setCart(cart.filter((prod)=>prod.id!==prodId))
         setAddedInCart(false)     
    }
    useEffect(()=>{
        cart.forEach(product => {
            product.id === id?setAddedInCart(true):null
        });
        return ()=>{ setAddedInCart(false)}
    },[])
  return (
    <div className="product">
        <div className="prod-image">
            <img src={image} />
        </div>
        <div className="prod-title">
            {title}
        </div>
        <div className="prod-price">
            ₹{price}
        </div>
        
        {addedInCart?
        (<button type='button' name='remove-from-cart' className='btn btn-danger' onClick={()=>removeFromCart(id)} >Remove from cart</button>):
        (<button type="button" name="add-to-cart" className="btn" onClick = {()=> {clickHandler(prod)}}>Add to cart</button>)}
    </div>
  )
}

export default Product