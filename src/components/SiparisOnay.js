import axios from "axios";
import React from "react";

function SiparisOnay(props) {
  console.log(props);
  return (
    <div className="onay">
      <img src="/logo.svg" alt="Teknolojik Yemekler logo" />
      <p>
        TEBRİKLER!<br></br>SİPARİŞİNİZ ALINDI!
      </p>
    </div>
  );
}

export default SiparisOnay;
