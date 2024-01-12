import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';


const Header = () => {
  const {cart} = useContext(CartContext);
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"} className='nav-link' >Logo</Link> 
      </div>
      <Link to={"/cart"} className='nav-link' >
        <div className="nav-cart">
        <FontAwesomeIcon className='nav-icon' icon={faCartShopping} /><span>{cart.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header