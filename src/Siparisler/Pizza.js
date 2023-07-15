import React, { useEffect, useState } from "react";

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
  const paaPizza = 85.5;
  const [orderNo, setOrderNo] = useState(1);
  const [secimler, setSecimler] = useState(0);
  const [toplam, setToplam] = useState(paaPizza);

  function addTopping(e) {
    if (e.target.checked === true) {
      setSecimler(secimler + 5);
    } else {
      setSecimler(secimler - 5);
    }
  }
  function orderInc() {
    setOrderNo(orderNo + 1);
  }
  function orderDec() {
    orderNo > 1 ? setOrderNo(orderNo - 1) : setOrderNo(1);
  }

  useEffect(() => {
    setToplam((paaPizza + secimler) * orderNo);
  }, [secimler, orderNo]);
  return (
    <div className="order-page">
      <header className="order-header">
        <img src="../../Assets/logo.svg" alt="Teknolojik Yemekler logo" />
        <nav>
          <div>
            <a href="#">Anasayfa</a> <span> - </span>
          </div>
          <div>
            <a href="#"> Seçenekler</a> <span> - </span>
          </div>
          <div>
            {" "}
            <a href="#">
              <b>Sipariş Oluştur</b>
            </a>
          </div>
        </nav>
      </header>
      <div className="pizza-order">
        <div className="pizza-info">
          <h3>Position Absolute Acı Pizza</h3>
          <div className="pizza-numbers">
            <h2>85.50₺</h2>
            <div className="reviews">
              <p>4.9</p>
              <p>(200)</p>
            </div>
          </div>
          <p>
            Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <form id="pizza-form">
          <div className="size">
            <h3>
              Boyut Seç<span className="required">*</span>
            </h3>
              <input type="radio" id="küçük" name="pizza_size" value="küçük" /> {" "}
            <label htmlFor="küçük">Küçük</label>
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
              <h3>
                Hamur Seç<span className="required">*</span>
              </h3>
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
            <label onChange={addTopping}>
              {" "}
              <input type="checkbox" value={malzeme} name={malzeme} /> {malzeme}
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
              <div className="secimler">
                <p>Seçimler</p>
                <p>{secimler}</p>
              </div>
              <div className="toplam">
                <p>Toplam</p>
                <p>{toplam}</p>
                <button type="submit">SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pizza;
