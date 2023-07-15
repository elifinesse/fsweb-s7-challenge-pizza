import React from "react";
function Pizza() {
  return (
    <>
      <header>
        <img src="../../Assets/logo.svg" alt="Teknolojik Yemekler logo" />
        <nav>
          <a href="#">Anasayfa</a>
          <p>-</p>
          <a href="#">Seçenekler</a>
          <p>-</p>
          <a href="#">
            <b>Sipariş Oluştur</b>
          </a>
        </nav>
      </header>
      <div className="pizza-info">
        <h3>Position Absolute Acı Pizza</h3>
        <div className="pizza-numbers">
          <h2>85.50₺</h2>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <p>
          Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <form></form>
    </>
  );
}

export default Pizza;
