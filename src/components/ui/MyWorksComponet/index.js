import { useState, useEffect } from "react";
import Style from "./style.module.css";

import WorkLanchonete from "../../../assets/imagens/capaportifoliolanchonete.jpg";
import WorkRestaurante from "../../../assets/imagens/capaportifolioRestaurante.png";
import WorkLandingpage from "../../../assets/imagens/capaportifolioLandipage.png";



export function MyWorkConteiner() {
  const ListWork = [
    { imgWork: WorkLanchonete, titleWork: "Lanchonete", text: "https://site-lanchonete-ten.vercel.app/", categoria: "Site" },
    { imgWork: WorkRestaurante, titleWork: "Restaurante", text: "https://site-restaurante-snowy.vercel.app/", categoria: "Site" },
    { imgWork: WorkLandingpage, titleWork: "Landing Page", text: "https://site-landingpage.vercel.app/", categoria: "Site" },

    { imgWork: "", titleWork: "app", text: "teste", categoria: "App" },
    { imgWork: "", titleWork: "app", text: "teste", categoria: "App" },
  ];

  const [categoriaWork, setcategoriaWork] = useState("Todos")

  return (
    <div className={Style.MyWorkConteiner}>
      <nav>
        <div className={Style.ConteinerNavWork}>
          <button onClick={()=>{setcategoriaWork("Todos")}}>Todos</button>
          <button onClick={()=>{setcategoriaWork("Site")}}>UX/UI</button>
          <button onClick={()=>{setcategoriaWork("App")}}>Apps</button>
        </div>
      </nav>
      <div className={Style.BoxWork}>
      {ListWork.filter(item => categoriaWork === "Todos" || item.categoria === categoriaWork)
          .map((item, index) => (
            <MyWorkComponet
              key={index}
              ImgWork={item.imgWork }
              TitleWork={item.titleWork }
              Text={item.text}
            />
        ))}
      </div>
    </div>
  );
}

export function MyWorkComponet({ ImgWork, TitleWork, Text }) {
  return (
    <div className={Style.MyWorkComponet}>
      <div className={Style.ConteinerMyWorkComponet}>
        <img src={ImgWork} alt="img_work" />
        <div className={Style.BoxTextWorkComponent}>
          <h3>{TitleWork}</h3>
          <a href={Text}>{Text}</a>
        </div>
      </div>
    </div>
  );
}
