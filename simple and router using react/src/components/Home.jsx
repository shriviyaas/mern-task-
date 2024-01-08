import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <h2 className='hhome'>Welcome to our E-commerce Website!</h2>
      <p className='phome'>
        Explore our wide range of products and enjoy a seamless shopping experience.
      </p>

      <p className='phone'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio omnis vero a obcaecati error excepturi sapiente! Dolorem deleniti nisi impedit facilis eum consequatur non, architecto eos sapiente sunt nihil!
      </p>
    </div>
  );
};

export default Home;