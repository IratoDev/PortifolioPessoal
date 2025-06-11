import { FaLongArrowAltUp } from "react-icons/fa";
import Style from "./Style.module.css";


export function ButtonUpPage(){

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

return(

<>

<button id={Style.ButtonUpPage} onClick={handleClick}>
    <FaLongArrowAltUp />
</button>

</>

)

}