import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lU+YyaSsL._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          id="49498373"
          title="The lean startup"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"
          rating={3}
          />
           <Product
          id="28272625"
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money"
          price={9.99}
          image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          />


        </div>
        <div className="home__row">
        <Product
          id="765578"
          title="20W Fast Charger Compatible with iPhone 13/13 Pro"
          price={14.99}
          image="https://m.media-amazon.com/images/I/31D8mquFSHL._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
          />
           <Product
           id="7644677"
          title="Air Force 1 '07"
          price={159.99}
          image="https://m.media-amazon.com/images/I/61vXSDOnCGL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          />
           <Product
           id="357875"
          title="TEENO 21V Battery Powered Screwdriver"
          price={49.99}
          image="https://m.media-amazon.com/images/I/61qtbfdtg5L._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
          />
          
        </div>
        <div className="home__row">
        <Product
        id="54368097"
          title="Proscenic P11 Cordless Vacuum Cleaner"
          price={159.99}
          image="https://m.media-amazon.com/images/I/5191T49Al0S._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          />
          
         
        </div>
      </div>
    </div>
  )
}

export default Home