import { ReactNode } from "react";
import Style from "./Style.module.css"

type Contact = {

IconeContatc:ReactNode;
Contatc:string;
Text:string;

}

export function ContatcComponente({IconeContatc, Contatc, Text}:Contact){

return(

<>

<div className={Style.ContatcComponet}>
    <div className={Style.ConteinerContatcComponet}>
        <div className={Style.BoxIconeContatcComponet}>
            <div>{IconeContatc}</div>
        </div>
        <div className={Style.BoxtextContatcComponet}>
            <h5>{Contatc}</h5>
            <p>{Text}</p>
        </div>
    </div>
</div>

</>

)

}