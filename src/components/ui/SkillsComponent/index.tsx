import { ReactNode } from "react";
import Style from "./Style.module.css"

type SkillsProps ={

skillActive:string;
iconeSkill:ReactNode;
porcentagem:string;
children?:ReactNode;

}

export function SkillsComponet({skillActive,iconeSkill,porcentagem, children}:SkillsProps){

return(

<div className={`${Style.SkillsComponet} ${Style[skillActive] || ""}`}>
    <div className={Style.ConteinerSkillsComponets}>
        <div className={Style.IconSkill}>
            {children}
            {iconeSkill}
        </div>
        <div className={Style.BoxPorcentagemSkills}>
            <p>{porcentagem}</p>
        </div>
    </div>
</div>

)

}