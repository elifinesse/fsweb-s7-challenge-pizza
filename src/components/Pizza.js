import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";

const yupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Lütfen adınızı yazın.")
    .min(2, "Geçerli bir isim yazın."),
  pizza_size: Yup.string().required("Pizza boyutu seçin."),
  pizza_dough: Yup.string()
    .required("Hamur kalınlığını seçin.")
    .max(5, "Hamur kalınlığını seçin."),
  toppings: Yup.array()
    .min(4, "En az 4 malzeme seçin.")
    .max(10, "En fazla 10 malzeme seçebilirsiniz."),
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
    name: "",
    pizza_size: "",
    pizza_dough: "",
    toppings: [],
  });
  const [malzemeler, setMalzemeler] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isFormValid, setFormValid] = useState(false);
  const inputs = document.getElementsByTagName("input");
  const history = useHistory();
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
  function handleChange(e) {
    const { name, value } = e.target;
    setPizzaData({
      ...pizzaData,
      [name]: value,
    });
  }

  useEffect(() => {
    setToplam((paaPizza + secimler) * orderNo);
    setMalzemeler(malzemeArray);
  }, [secimler, orderNo]);
  useEffect(() => {
    setPizzaData({
      ...pizzaData,
      toppings: malzemeler,
    });
  }, [malzemeler]);
  useEffect(() => {
    console.log(pizzaData);
    const newPizzaData = { ...pizzaData, toppings: malzemeler };
    yupSchema
      .validate(newPizzaData, { abortEarly: false })
      .then((valid) => {
        console.log(valid);
        setErrors([]);
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors([err.errors]);
      });
  }, [pizzaData]);
  let toplamStr = toplam.toString();
  function handleSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    yupSchema.isValid(pizzaData).then((valid) => {
      setFormValid(valid);
    });
  }, [pizzaData]);

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
        <form id="pizza-form" onSubmit={handleSubmit}>
          <div className="name-input">
            <label>
              <h3>İsim</h3>
              <input
                type="text"
                name="name"
                id="name-input"
                onChange={handleChange}
              />
            </label>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="size-dough">
            <div className="size" onChange={handleChange}>
              <h3>
                Boyut Seç<span className="required">*</span>
              </h3>
               {" "}
              <label>
                <input
                  type="radio"
                  id="küçük"
                  name="pizza_size"
                  value="Küçük"
                />
                  <span className="size-text">Küçük</span>
              </label>
              <br></br>
              <label>
                 {" "}
                <input type="radio" id="orta" name="pizza_size" value="Orta" /> {" "}
                <span className="size-text">Orta</span>
              </label>
              <br></br>
              <label>
                 
                <input
                  type="radio"
                  id="büyük"
                  name="pizza_size"
                  value="Büyük"
                />
                  <span className="size-text">Büyük</span>
              </label>
              {errors.pizza_size && (
                <p className="error">{errors.pizza_size}</p>
              )}
            </div>
            <div className="dough">
              <label>
                <h3>
                  Hamur Seç<span className="required">*</span>
                </h3>
                <select name="pizza_dough" id="dough" onChange={handleChange}>
                  <option value="seç">Hamur Kalınlığı</option>
                  <option value="ince">İnce</option>
                  <option value="kalın">Kalın</option>
                </select>
              </label>
              {errors.pizza_dough && (
                <p className="error">{errors.pizza_dough}</p>
              )}
            </div>
          </div>
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="toppings">
            {pizzaToppings.map((malzeme) => (
              <label
                className="topping"
                name="toppings"
                onChange={addTopping}
                key={malzeme}
              >
                {" "}
                <input type="checkbox" value={malzeme} name={malzeme} />{" "}
                <b>{malzeme}</b>
              </label>
            ))}
            {errors.toppings && <p className="error">{errors.toppings}</p>}
          </div>
          <div className="order-note">
            <label>
              <h3>Sipariş Notu</h3>
              <input
                type="text"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </label>
            <div className="errors">
              {errors.map((hata) => (
                <p className="error">{hata}</p>
              ))}
            </div>
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
              {isFormValid ? (
                <Link to="/onay">
                  <button id="order-button" type="submit">
                    <b>SİPARİŞ VER</b>
                  </button>
                </Link>
              ) : (
                <button id="order-button" type="submit" disabled={!isFormValid}>
                  <b>SİPARİŞ VER</b>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Pizza;
