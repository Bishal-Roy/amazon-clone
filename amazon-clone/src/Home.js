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
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_2X._SY608_CB432517394_.jpg"
          />
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
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
