import Style from "./Style.module.css";
import { ReactNode } from "react";

type SocialIconProps={
icon:ReactNode;
}

export function SocialNetworkComponet({icon}:SocialIconProps){

return(

<>

<div className={Style.SocialNetworkComponet}>
    {icon}
</div>

</>

)

}