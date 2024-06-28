import React from 'react';
import Womens_product from '../Assest/Womens_product';
import Trendingbox from '../trendingBox/Trendingbox';
import "../Container__row.css";

const Womens = () => {
  return (
    <div className="container_row">
      {
        Womens_product.map((product,index) => (
          <Trendingbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
        ))
      }
    </div>
  )
}

export default Womens