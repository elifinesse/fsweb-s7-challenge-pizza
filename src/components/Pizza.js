import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const yupSchema = Yup.object().shape({
  pizza_size: Yup.string()
    .required("Lütfen adınızı yazın.")
    .min(2, "Geçerli bir isim girin."),
  pizza_dough: Yup.string()
    .email("Geçerli bir e-mail adresi girin.")
    .required("Lütfen e-mail adresinizi yazın."),
  toppings: Yup.string()
    .required("Bir şifre belirleyin.")
    .min(6, "Şifreniz en az 6 karakterden oluşmalıdır."),
  tos: Yup.boolean().oneOf([true], "Lütfen Kullanım Şartları'nı kabul edin."),
  // required isn't required for checkboxes.
});

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
  const [pizzaData, setPizzaData] = useState({
    pizza_size: "",
    pizza_dough: "",
    toppings: [],
  });
  const [malzemeler, setMalzemeler] = useState([]);
  const inputs = document.getElementsByTagName("input");
  const malzemeArray = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "checkbox" && inputs[i].checked === true) {
      malzemeArray.push(inputs[i].value);
    }
  }

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
    setMalzemeler(malzemeArray);
    setPizzaData({
      pizza_size: "",
      pizza_dough: "",
      toppings: malzemeler,
    });
  }, [secimler, orderNo]);
  useEffect(() => {
    setPizzaData({
      pizza_size: "",
      pizza_dough: "",
      toppings: malzemeler,
    });
  }, [malzemeler]);
  console.log(pizzaData);
  let toplamStr = toplam.toString();
  return (
    <div className="order-page">
      <header className="order-header">
        <img src="/logo.svg" alt="Teknolojik Yemekler logo" />
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
          <div className="size-dough">
            <div className="size">
              <h3>
                Boyut Seç<span className="required">*</span>
              </h3>
               {" "}
              <label>
                <input
                  type="radio"
                  id="küçük"
                  name="pizza_size"
                  value="küçük"
                />
                  <span className="size-text">Küçük</span>
              </label>
              <br></br>
              <label>
                 {" "}
                <input type="radio" id="orta" name="pizza_size" value="orta" /> {" "}
                <span className="size-text">Orta</span>
              </label>
              <br></br>
              <label>
                 
                <input
                  type="radio"
                  id="büyük"
                  name="pizza_size"
                  value="büyük"
                />
                  <span className="size-text">Büyük</span>
              </label>
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
          </div>
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="toppings">
            {pizzaToppings.map((malzeme) => (
              <label className="topping" name="topping" onChange={addTopping}>
                {" "}
                <input type="checkbox" value={malzeme} name={malzeme} />{" "}
                <b>{malzeme}</b>
              </label>
            ))}
          </div>
          <div className="order-note">
            <label>
              <h3>Sipariş Notu</h3>
              <input
                type="text"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </label>
          </div>
          <div className="order-info">
            <div className="order-number">
              <p className="arti-eksi" onClick={orderDec}>
                -
              </p>
              <p>{orderNo}</p>
              <p className="arti-eksi" onClick={orderInc}>
                +
              </p>
            </div>
            <div className="order-calc">
              <div className="secimler-toplam">
                <h3>Sipariş Toplamı</h3>
                <div className="secimler">
                  <p>
                    <b>Seçimler</b>
                  </p>
                  <p>
                    <b>{secimler + ".00₺"}</b>
                  </p>
                </div>
                <div className="toplam">
                  <p>
                    <b>Toplam</b>
                  </p>
                  <p>
                    <b>
                      {toplamStr[toplamStr.length - 2] === "."
                        ? toplam + "0₺"
                        : toplam + ".00₺"}
                    </b>
                  </p>
                </div>
              </div>
              <button id="order-button" type="submit">
                <b>SİPARİŞ VER</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pizza;
