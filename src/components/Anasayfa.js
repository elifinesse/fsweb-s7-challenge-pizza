import React from "react";
import { Link } from "react-router-dom/";
import Header from "./Header";

function Anasayfa() {
  const navItems = [
    "YENİ! Kore",
    "Pizza",
    "Burger",
    "Kızartmalar",
    "Fast Food",
    "Gazlı İçecek",
  ];
  return (
    <div className="home">
      <div className="anasayfa">
        <Header />
        <p className="firsat">fırsatı kaçırma</p>
        <h1>
          KOD ACIKTIRIR, <br></br>PİZZA DOYURUR!
        </h1>
        <Link className="aciktim-button" to="/pizza" exact>
          <p className="aciktim">ACIKTIM</p>
        </Link>
      </div>
      <div className="home-container">
        <nav className="yemekler-nav">
          {navItems.map((item, i) => (
            <div className="nav-item" key={i}>
              <img src={`./adv-aseets/icons/${i + 1}.svg`} alt={item} />
              <li>{item}</li>
            </div>
          ))}
        </nav>
        <div className="products">
          <div className="food-banners">
            <div className="lezzetus"></div>
            <div className="burger-kurye">
              <div className="burger-menu"></div>
              <div className="kurye"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Anasayfa;
