import React from "react";
import { Link } from "react-router-dom/";
import Header from "./Header";
import Footer from "./Footer";

function Anasayfa() {
  const navItems = [
    "YENİ! Kore",
    "Pizza",
    "Burger",
    "Kızartmalar",
    "Fast Food",
    "Gazlı İçecek",
  ];
  const yiyecek = [{ foto: "/adv-aseets/food-1.png", isim: "Terminal Pizza" }];
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
            <div className="basliklar">
              <p className="baslik-italik">en çok paketlenen menüler</p>
              <h2 className="lezzet-baslik">
                Acıktıran Kodlara Doyuran Lezzetler
              </h2>
            </div>
            <nav className="lower-nav">
              {navItems.map((item, i) => (
                <div className="nav-eleman" key={i}>
                  <img src={`./adv-aseets/icons/${i + 1}.svg`} alt={item} />
                  <a href="#">{item}</a>
                </div>
              ))}
            </nav>
            <div className="yiyecekler">
              <div className="yiyecek">
                <img src="/adv-aseets/food-1.png" alt="pizza" />
                <h4 className="menu-isim">Terminal Pizza</h4>
                <div className="yiyecek-sayilar">
                  <p>4.9</p>
                  <p>(200)</p>
                  <p className="fiyat">60₺</p>
                </div>
              </div>
              <div className="yiyecek">
                <img src="/adv-aseets/food-2.png" alt="pizza" />
                <h4 className="menu-isim">Position Absolute Acı Pizza</h4>
                <div className="yiyecek-sayilar">
                  <p>4.9</p>
                  <p>(928)</p>
                  <p className="fiyat">85₺</p>
                </div>
              </div>
              <div className="yiyecek">
                <img src="/adv-aseets/food-3.png" alt="burger" />
                <h4 className="menu-isim">useEffect Tavuklu Burger</h4>
                <div className="yiyecek-sayilar">
                  <p>4.9</p>
                  <p>(462)</p>
                  <p className="fiyat">75₺</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Anasayfa;
