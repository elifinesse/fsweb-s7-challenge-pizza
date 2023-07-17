import React from "react";
import { Link } from "react-router-dom/";

function Anasayfa() {
  return (
    <div className="anasayfa">
      <img src="/logo.svg" alt="Teknolojik Yemekler logo" />
      <h1>
        KOD ACIKTIRIR, <br></br>PİZZA DOYURUR!
      </h1>
      <Link className="aciktim-button" to="/pizza" exact>
        <p>ACIKTIM</p>
      </Link>
    </div>
  );
}
export default Anasayfa;
