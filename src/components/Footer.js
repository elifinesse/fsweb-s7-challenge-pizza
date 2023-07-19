import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="footer-basliklar">
            <h2>
              Teknolojik <br />
              Yemekler
            </h2>
            <h3 className="beyazimsi">Sıccacık Menüler</h3>
            <h3 className="beyazimsi">Instagram</h3>
          </div>
          <div className="footer-content">
            <div className="iletisim">
              <div className="contact">
                <img src="/adv-aseets/icons/icon-1.png" alt="adres ikonu" />
                <p className="beyazimsi">
                  341 Londonderry Road, <br /> Istanbul Türkiye
                </p>
              </div>
              <div className="contact">
                <img src="/adv-aseets/icons/icon-2.png" alt="email ikonu" />
                <p className="beyazimsi">aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="contact">
                <img src="/adv-aseets/icons/icon-3.png" alt="email ikonu" />
                <p className="beyazimsi">+90 216 123 45 67</p>
              </div>
            </div>
            <div className="menuler"></div>

            <div className="instagram">
              <img src="/adv-aseets/insta/li-0.png" alt="insta foto" />
              <img src="/adv-aseets/insta/li-1.png" alt="insta foto" />
              <img src="/adv-aseets/insta/li-2.png" alt="insta foto" />
              <img src="/adv-aseets/insta/li-3.png" alt="insta foto" />
              <img src="/adv-aseets/insta/li-4.png" alt="insta foto" />
              <img src="/adv-aseets/insta/li-5.png" alt="insta foto" />
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <p className="beyazimsi">@2023 Teknolojik Yemekler.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
