import React from 'react';
import Kids_product from '../Assest/Kids_product';
import Trendingbox from '../trendingBox/Trendingbox';
import "../Container__row.css";

const Kids = () => {
  return (
    <div className="container_row">
      {
        Kids_product.map((product,index) => (
          <Trendingbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
        ))
      }
    </div>
  )
}

export default Kids
