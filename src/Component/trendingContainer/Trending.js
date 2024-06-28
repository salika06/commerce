import React, { useState } from 'react';
import new_collection from '../Assest/new_collection';
import new_trending from '../Assest/new_trending';
import Trendingbox from '../trendingBox/Trendingbox';
import "./trending.css";


const Trending = () => {
    const [choosen, setChoosen] = useState("true");

  return (
    <div className="trendingContainer">
        <h1>Picks</h1>
        <div className="trendingContainer__title">
            <h4 className={choosen ? "trendingContainer__title--active" : undefined} onClick={()=>setChoosen(true)}>Trending-picks</h4>
            <h4 className={choosen ? undefined : "trendingContainer__title--active"} onClick={()=>setChoosen(false)}>Top-picks</h4>
        </div>
        {
            choosen ? (
                <div className="trendingContainer__box">
                    {
                    new_trending.map((trend) => (
                        <Trendingbox key={trend.id} img={trend.img} name={trend.name} new_price={trend.new_price} old_price= {trend.old_price}/>
                    ))
                    }
                </div>
            ) : (
                <div className="trendingContainer__box">
                    {
                        new_collection.map((trend) => (
                            <Trendingbox key={trend.id} img={trend.img} name={trend.name} new_price={trend.new_price} old_price= {trend.old_price}/>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Trending