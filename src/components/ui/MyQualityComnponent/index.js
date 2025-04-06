import { useState, useEffect, useRef } from "react";
import Style from "./Style.module.css"
import { MdArrowOutward } from "react-icons/md";

export function MyQualityComponents({Number,Quality,Text}){

const ListQuality = [

{number: "01", Quality:"Desenvolvimento Web",text:"Crio sites responsivos e dinâmicos, garantindo uma experiência fluida e intuitiva em qualquer dispositivo."},
{number: "02", Quality:"UI/UX Design",text:"Desenvolvo interfaces intuitivas e atraentes, focando na melhor experiência para seus usuários."},
{number: "03", Quality:"Adaptabilidade",text:"Me adapto as novas tendências e necessidades, garantindo inovação constante."},
{number: "04", Quality:"Lógica e resolução de problemas",text:"Aplicamos lógica eficiente para resolver desafios e criar soluções inteligentes e funcionais."},

]

const [focusedIndex, setFocusedIndex] = useState(null);
const listRef = useRef(null);

const handleMouseMove = (event) => {
    if (!listRef.current) return;
  
    const items = Array.from(listRef.current.children);
    const listRect = listRef.current.getBoundingClientRect();
    const mouseY = event.clientY - listRect.top + listRef.current.scrollTop; // Ajuste para listas roláveis
  
    let closestIndex = null;
    let closestDistance = Infinity;
  
    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top - listRect.top + itemRect.height / 2; // Corrigido para ser relativo ao contêiner
  
      const distance = Math.abs(mouseY - itemCenter);
  
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
  
    if (closestIndex !== null) {
      console.log("Índice mais próximo:", closestIndex); // Debug
      setFocusedIndex(closestIndex);
    }
};
  

return(

<>

<ul ref={listRef} onMouseMove={handleMouseMove} >
{ListQuality.map((item, index)=>(
<li className={focusedIndex === index ? Style.focused : ""}>  <MyQualityElement Number={item.number} Quality={item.Quality} Text={item.text}/></li>
))}
</ul>

</>

)

}

export function MyQualityElement({Number,Quality,Text}){

return(

<>

<div className={Style.ComponentMyQuality}>
    <div className={Style.ConteinerMyQuality}>
        <div className={Style.BoxMyQuality}>
            <div className={Style.conteinerTextMyQuality}>
              <h3>{Number}</h3>
              <h1>{Quality}</h1>
                <p>{Text}</p>
            </div>
            <div className={Style.BoxIconeArrow}>
            <MdArrowOutward />
            </div>
        </div>
    </div>
</div>

</>

)

}