import { useState, useEffect,useRef, ReactNode } from "react";
import Style from "./style.module.css";

import WorkLanchonete from "../../../assets/imagens/capaportifoliolanchonete.jpg";
import WorkRestaurante from "../../../assets/imagens/capaportifolioRestaurante.png";
import WorkLandingpage from "../../../assets/imagens/capaportifolioLandipage.png";
import workSistemaPedido from "../../../assets/imagens/capa sistema de garçom.png"


type MyworkProps ={

ImgWork:string; 
TitleWork:string; 
Text:string;
styleActive:string;

}

export function MyWorkConteiner() {
  const ListWork = [
    { imgWork: WorkLanchonete, titleWork: "Lanchonete", text: "https://site-lanchonete-ten.vercel.app/", categoria: "Site" },
    { imgWork: WorkRestaurante, titleWork: "Restaurante", text: "https://site-restaurante-snowy.vercel.app/", categoria: "Site" },
    { imgWork: WorkLandingpage, titleWork: "Landing Page", text: "https://site-landingpage.vercel.app/", categoria: "Site" },

    { imgWork: workSistemaPedido, titleWork: "Sistema de pedido de garçom", text: "https://sistema-pedido-gar-om-umj7.vercel.app/", categoria: "App" },
    
  ];

const [categoriaWork, setcategoriaWork] = useState("Todos");
const [activeIndex, setActiveIndex] = useState(0);
const WorkRef = useRef(null);

useEffect(() => {

setTimeout(() => {

const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) {
  
  setActiveIndex(1)
} else {
  setActiveIndex(0);
  
}
},

);


if (WorkRef.current) {
  observer.observe(WorkRef.current);
}

return () => {
if (WorkRef.current) {
observer.unobserve(WorkRef.current);
}
}

}, 1000);

}, []);


  return (
    <div className={Style.MyWorkConteiner}>
      <nav>
        <div className={Style.ConteinerNavWork}>
          <button style={categoriaWork === "Todos" ? {backgroundColor:"#8750F7", borderRadius:"10px"} :undefined} onClick={()=>{setcategoriaWork("Todos")}}>Todos</button>
          <button style={categoriaWork === "Site" ? {backgroundColor:"#8750F7", borderRadius:"10px"} :undefined} onClick={()=>{setcategoriaWork("Site")}}>UX/UI</button>
          <button style={categoriaWork === "App" ? {backgroundColor:"#8750F7", borderRadius:"10px"} :undefined} onClick={()=>{setcategoriaWork("App")}}>Apps</button>
        </div>
      </nav>
      <div className={Style.BoxWork} ref={WorkRef}>
      {ListWork.filter(item => categoriaWork === "Todos" || item.categoria === categoriaWork)
          .map((item, index) => (
            <MyWorkComponet
              key={index}
              ImgWork={item.imgWork }
              TitleWork={item.titleWork }
              Text={item.text}
              styleActive={activeIndex === 1 ? Style.BoxTextWorkComponentActive : Style.BoxTextWorkComponent}
            />
        ))}
      </div>
    </div>
  );
}

export function MyWorkComponet({ ImgWork, TitleWork, Text, styleActive }:MyworkProps) {
  return (
    <div className={Style.MyWorkComponet}>
      <div className={Style.ConteinerMyWorkComponet}>
        <img src={ImgWork} alt="img_work" />
        <div className={styleActive}>
          <h3>{TitleWork}</h3>
          <a href={Text}>{Text}</a>
        </div>
      </div>
    </div>
  );
}
