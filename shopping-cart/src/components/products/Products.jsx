
import { useEffect, useState, useRef } from "react";
import Product from "../product/Product";
// import {data as fixedProducts} from '../../data.js'
import './Products.scss';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(true);
  const getAllProducts = () =>{
    const result = fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(data => setAllProducts(data))
                    .then(() => setLoading(false))
                    .catch(err=> console.log(err))
    return result; 
  }

  useEffect(()=>{
    // console.log(fixedProducts);
    if(ref.current) {
      getAllProducts();
    }
    return () =>{
      ref.current = false;
    }
  },[])
  
  return (

    <div className="prod-wrapper">
      {
        <div className="prod-container">
          {loading && (<div className="loader-container" ><span className="loader"></span></div>)}
          {
            allProducts && allProducts.map((prod) => {
              return (
                <Product 
                key = {prod.id}
                prod={prod} />
              )
            })
          }

        </div>
      }
    </div>
  )
}

export default Products