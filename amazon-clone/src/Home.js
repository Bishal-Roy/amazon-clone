import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/photos/landingpage/APH_memories-delivered_hero_bandit_1x._TTH_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Elite Series 2 Controller - Black"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg"
          />
          <Product
            title="Elite Series 2 Controller - Black"
            price={30.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61JJl260NlL._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Elite Series 2 Controller - Black"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/710R9YpV9nL._AC_UY218_.jpg"
          />
          <Product
            title="Elite Series 2 Controller - Black"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tmThxXwCL._AC_UY218_.jpg"
          />
          <Product
            title="Elite Series 2 Controller - Black"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51kxIEmO+ZL._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
