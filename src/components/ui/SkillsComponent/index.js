import Style from "./Style.module.css"

export function SkillsComponet({skillActive,iconeSkill,porcentagem, children}){

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