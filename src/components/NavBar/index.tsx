import Style from "./Style.module.css"
import { useState,useEffect, useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

/*icones*/
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { Context } from "../../Context/ContextApi";

/*Componets*/
import { SocialNetworkComponet } from "../ui/SocialNetworkComponent";
import Logo from "../../assets/imagens/logo.png"

export function NavBar(){

const [WitdhWindow, setWitdhWindow] = useState(Number);

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


const NavBar = WitdhWindow < 850 ? <NavMobile/> : <NavDesktop/>

return(

<>

{NavBar}

</>

)

}

export function NavDesktop(){

const navigate = useNavigate();
const navegarParaSecao = (id:string) => {
  navigate(`/#${id}`);
};

return(

<>

<header>
    <div className={Style.ConteinerHeader}>
        <div className={Style.ConteinerLogo}><img src={Logo} alt="Logo"/></div>
        <nav>
            <button onClick={() => navegarParaSecao("Home")}>Home</button>
            <button onClick={() => navegarParaSecao("Sobre")}>Sobre Mim</button>
            <button onClick={() => navegarParaSecao("MyWork")}>Meus Trabalhos</button>
            <button onClick={() => navegarParaSecao("MySkills")}>Minhas Skills</button>
            <button onClick={() => navegarParaSecao("Contact")}>Contato</button>
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

const {handleMenuMobile} = useContext(Context);

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

const {handleMenuMobile} = useContext(Context);

const navigate = useNavigate();
const navegarParaSecao = (id:string) => {
  navigate(`/#${id}`);
};

return(

<>

<nav className={Style.MenuMobile}>

<div className={Style.ConteinerCloseButton}>
    <button onClick={handleMenuMobile}><IoMdClose /></button>
</div>

<div className={Style.ConteinerHeader}>
<div className={Style.ConteinerLogo}><img src={Logo} alt="Logo"/></div>
<nav>
<button onClick={() =>{ navegarParaSecao("Home"); handleMenuMobile();}}>Home</button>
<button onClick={() =>{ navegarParaSecao("Sobre"); handleMenuMobile();}}>Sobre Mim</button>
<button onClick={() =>{ navegarParaSecao("MyWork"); handleMenuMobile();}}>Meus Trabalhos</button>
<button onClick={() =>{ navegarParaSecao("MySkills"); handleMenuMobile();}}>Minhas Skills</button>
<button onClick={() =>{ navegarParaSecao("Contact"); handleMenuMobile();}}>Contato</button>
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