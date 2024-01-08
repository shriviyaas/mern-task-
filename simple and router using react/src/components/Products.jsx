import React from 'react';
import Navbar from './Navbar';
import "./Products.css";

const Products = () => {
  let product1 = {
    name: "HeadPhone1",
    price: 1000
  }
  let product2 = {
    name: "HeadPhone2",
    price: 5000
  }
  let product3 = {
    name: "HeadPhone3",
    price: 3000
  }
  let product4 = {
    name: "HeadPhone4",
    price: 4500
  }
  return (
    <>
      <Navbar />
      <div className='products'>
        <div className='products_card'>
          <img className='products_img' src="src/assets/headphone1.png" alt="apple" />
          <h4 className='product_name'>Model:{product1.name}</h4>
          <p className='product_price'>Price($):{product1.price}</p>
        </div>
        <div className='products_card'>
          <img className='products_img' src="src/assets/headphone2.png" alt="apple" />
          <h4 className='product_name'>Model:{product2.name}</h4>
          <p className='product_price'>Price($):{product2.price}</p>
        </div>
        <div className='products_card'>
          <img className='products_img' src="src/assets/headphone3.png" alt="apple" />
          <h4 className='product_name'>Model:{product3.name}</h4>
          <p className='product_price'>Price($):{product3.price}</p>
        </div>
        <div className='products_card'>
          <img className='products_img' src="src/assets/headphone4.png" height={138} width={138} alt="apple" />
          <h4 className='product_name'>Model:{product4.name}</h4>
          <p className='product_price'>Price($):{product4.price}</p>
        </div>
      </div>
    </>
  );
};

export default Products;