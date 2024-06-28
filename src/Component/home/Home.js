import React from 'react';
import cr1 from '../Assest/cr1.jpg';
import cr2 from '../Assest/cr2.jpg';
import cr3 from '../Assest/cr3.jpg';
import cr4 from '../Assest/cr4.jpg';
import cr5 from '../Assest/cr5.jpg';
import Trending from '../trendingContainer/Trending';

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
          
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src={cr1} alt="Dress1"/>
          </div>
          <div className="item">
            <img src={cr2} alt="Dress2"/>
          </div>
          <div className="item">
            <img src={cr3} alt="Dress3"/>
          </div>
          <div className="item">
            <img src={cr4} alt="Dress4"/>
          </div>
          <div className="item">
            <img src={cr5} alt="Dress5"/>
          </div>

          
        </div>


        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <Trending />
  </>
  )
}

export default Home