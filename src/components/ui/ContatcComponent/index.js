import Style from "./Style.module.css"

export function ContatcComponente({IconeContatc, Contatc, Text}){

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