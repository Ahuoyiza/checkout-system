import React, { useState, useEffect } from 'react'
import axios from "axios";

import "./shop.css"

 function ShopPage() {
     const [products, setProduct] = useState([]);

     useEffect(() => {
         const fetchData = async () => {
             const {data} = await axios.get("https://fakestoreapi.com/products");
             setProduct(data);
         }
         fetchData();
         return () => {
             //
         };
     }, [])
     console.log(products)
     
    return <div className="shop-items">
        {
            products.map(product =>
                <div className="wrap">
                    <div className="title">
                    {product.title}
                    </div>
                <img src={product.image} alt={product.title}/>

                <div className="price">${product.price}</div>
                <div className="description">{product.description}</div>
                <div className="category">{product.category}</div>
                </div>
                
                
                )
        }
    </div>
    }
        
export default ShopPage