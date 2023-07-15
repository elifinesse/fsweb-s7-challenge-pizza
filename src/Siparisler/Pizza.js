import React, { useState } from "react";
function Pizza() {
  const pizzaToppings = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Sucuk",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];
  const [orderNo, setOrderNo] = useState(1);
  function orderInc() {
    console.log("tıklandı");
    setOrderNo(orderNo + 1);
  }
  function orderDec() {
    orderNo > 1 ? setOrderNo(orderNo - 1) : setOrderNo(1);
  }
  return (
    <>
      <header>
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
      <form id="pizza-form">
        <div className="size">
          <h3>Boyut Seç</h3>
            <input
            type="radio"
            id="küçük"
            name="pizza_size"
            value="küçük"
          />  <label htmlFor="küçük">Küçük</label>
          <br></br>
            <input
            type="radio"
            id="orta"
            name="pizza_size"
            value="orta"
          />  <label htmlFor="orta">Orta</label>
          <br></br>
           <input
            type="radio"
            id="büyük"
            name="pizza_size"
            value="büyük"
          />  <label htmlFor="büyük">Büyük</label>
        </div>
        <div className="dough">
          <label>
            <h3>Hamur Seç:</h3>
            <select name="pizza_dough" id="dough">
              <option value="seç">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalın">Kalın</option>
            </select>
          </label>
        </div>
        <div className="toppings"></div>
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        {pizzaToppings.map((malzeme) => (
          <label>
            {" "}
            <input type="checkbox" value={malzeme} /> {malzeme}
          </label>
        ))}
        <div className="order-note">
          <label>
            <h3>Sipariş Notu</h3>
            <input type="text" />
          </label>
        </div>
        <div className="order-info">
          <div className="order-number">
            <p onClick={orderDec}>-</p>
            <p>{orderNo}</p>
            <p onClick={orderInc}>+</p>
          </div>
          <div className="order-calc">
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler</p>
            <p>Toplam</p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Pizza;
