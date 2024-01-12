import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './Cart.scss'

const Cart = () => {
    let [cartTotal, setCartTotal] = useState(0);
    const {cart, setCart} = useContext(CartContext)

    const removeItem = (id) => {
        setCart(cart.filter((prev)=>(prev.id !== id)))
    }
    const changeQty = (id, type) => {
        if(type === 'inc')
        {
            setCart(cart.map((prod)=>{
                return prod.id === id ? {...prod, qty : prod.qty + 1} : {...prod}
            }))
        }
        else {
            let product = cart.find((pr)=>(pr.id === id))
            product.qty > 1?(
                setCart(cart.map((prod)=>{
                    return prod.id === id ? {...prod, qty : prod.qty - 1} : {...prod}
                }))
            ):(
                setCart(cart.filter((p)=>p.id!==id))
            )            
        }
    }

    useEffect(()=>{
        setCartTotal((cart.reduce((prev, {qty, price} )=> (prev + (qty * price)),0)).toFixed(2));
    },[cart])
  return (
    <>
    {
        cart.length ? 
        (
            <div className="cart-container">
                <div className="cart-wrapper">
                    <div className="cart-80">
                        <div className="cart-row">
                            <div className="cart-title cart-width-2">Product</div>
                            <div className="cart-title cart-width-1">Qty</div>
                            <div className="cart-title cart-width-1">Price</div>
                            <div className="cart-title cart-width-1">Action</div>
                        </div>
                        {cart && cart.map((prod)=> {
                            return <div className="cart-row" key={prod.id}> 
                                <div className="cart-prod-name cart-width-2">
                                    <img src={prod?.image} width={50} height={50} />
                                    <span>{prod.title}</span></div>
                                <div className="cart-qty cart-width-1">
                                    <button 
                                    className="btn-small btn-derement"
                                    onClick={() => changeQty(prod.id, 'dec')}
                                    >-</button>
                                    <span className="qty">{prod.qty}</span>
                                    <button 
                                    className="btn-small btn-increment"
                                    onClick={() => changeQty(prod.id, 'inc')}
                                    >+</button>
                                </div>
                                <div className="cart-prod-price cart-width-1">₹{prod.price}</div>
                                <div className="cart-width-1" ><FontAwesomeIcon className="cart-delete" icon={faTrash} onClick={()=>removeItem(prod.id)}/></div>
                            </div>
                        })}
                    </div>
                    <div className="cart-20">
                        <div className="cart-subtotal cart-table">
                            <span>Subtotal</span>
                            <span> ₹{cartTotal}</span>
                        </div>
                        <div className="cart-total cart-table">
                            <span>Total</span>
                            <span>  ₹{cartTotal}</span>
                        </div>
                        <button className="btn">Proceed</button>
                    </div>
                </div>
                
            </div>
        )
        :
        (
            <div className="empty-container">
                <span>Cart is empty, Please add some products.<br/>
                Goto <Link className="home-link" to="/">Home</Link>
                </span>
            </div>
        )
    }
    
    
    </>
        )
    
}

export default Cart