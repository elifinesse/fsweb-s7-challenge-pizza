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
        <div className="background">
          <div className="products">
            <div className="food-banners">
              <div className="lezzetus">
                <h1>
                  Özel <br></br>Lezzetus
                </h1>
                <h3>Position:Absolute Acı Burger</h3>
                <span className="siparis">SİPARİŞ VER</span>
              </div>
              <div className="burger-kurye">
                <div className="hackathlon-burger">
                  <h2>
                    Hackathlon <br /> Burger Menü
                  </h2>
                  <span className="siparis">SİPARİŞ VER</span>
                </div>

                <div className="kurye">
                  <h2>
                    Çoooook Hızlı <br /> npm gibi kurye
                  </h2>
                  <span className="siparis">SİPARİŞ VER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Anasayfa;
