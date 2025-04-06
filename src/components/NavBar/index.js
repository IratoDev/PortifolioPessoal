import Style from "./Style.module.css"
import { useState,useEffect, useContext } from "react";
import React from "react";

/*icones*/
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { ContextMenuMobile } from "../../Context/ContextApi";

/*Componets*/
import { SocialNetworkComponet } from "../ui/SocialNetworkComponent";
import Logo from "../../assets/imagens/logo.png"

export function NavBar(){

const [WitdhWindow, setWitdhWindow] = useState("");

useEffect(()=>{

setWitdhWindow(window.innerWidth)

},[])

useEffect(()=>{

const handleResize = () => {
setWitdhWindow(window.innerWidth);
};

window.addEventListener('resize', handleResize);

// Cleanup function
return () => {
  window.removeEventListener('resize', handleResize);
};

},[WitdhWindow]);


const NavBar = WitdhWindow < "850" ? <NavMobile/> : <NavDesktop/>

return(

<>

{NavBar}

</>

)

}

export function NavDesktop(){

return(

<>

<header>
    <div className={Style.ConteinerHeader}>
        <div className={Style.ConteinerLogo}><img src={Logo} alt="Logo"/></div>
        <nav>
            <button>Home</button>
            <button>Sobre Mim</button>
            <button>Meus Trabalhos</button>
            <button>Minhas Skills</button>
            <button>Contato</button>
        </nav>
        <div className={Style.ConteinerRedeSocial}>
            <SocialNetworkComponet icon={<GrInstagram/>}/>
            <SocialNetworkComponet icon={<IoLogoWhatsapp/>}/>
            <SocialNetworkComponet icon={<FaLinkedin/>}/>
        </div>
    </div>
</header>

</>

)

}

export function NavMobile(){

const {handleMenuMobile} = useContext(ContextMenuMobile);

return(

<>

<header>
    <div className={Style.ConteinerHeader}>
        <div className={Style.ConteinerLogo}><img src={Logo} alt="Logo"/></div>
        <div className={Style.ConteinerButtonMobile}> 
            <button onClick={handleMenuMobile}><IoMdMenu /></button>
        </div>
    </div>
</header>

</>

)

}

export function ComponetMenuMobile(){

const {handleMenuMobile} = useContext(ContextMenuMobile);

return(

<>

<nav className={Style.MenuMobile}>

<div className={Style.ConteinerCloseButton}>
    <button onClick={handleMenuMobile}><IoMdClose /></button>
</div>

<div className={Style.ConteinerHeader}>
<div className={Style.ConteinerLogo}><img src={Logo} alt="Logo"/></div>
<nav>
<button>Home</button>
<button>Sobre Mim</button>
<button>Meus Trabalhos</button>
<button>Minhas Skills</button>
<button>Contato</button>
</nav>
<div className={Style.ConteinerRedeSocial}>
<SocialNetworkComponet icon={<GrInstagram/>}/>
<SocialNetworkComponet icon={<IoLogoWhatsapp/>}/>
<SocialNetworkComponet icon={<FaLinkedin/>}/>
</div>
</div>

</nav>

</>

)

}