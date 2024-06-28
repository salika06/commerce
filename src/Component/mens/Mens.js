import React from 'react';
import Trendingbox from '../trendingBox/Trendingbox';
import "../Container__row.css";
import Mens_product from "../Assest/Mens_product";

const Mens = () => {

  return (
    <>
      <div className="container_row">
        {
          Mens_product.map((product,index) => (
            <Trendingbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
          ))
        }
      </div>
    </>
  )
}

export default Mens