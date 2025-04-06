import { useState, useEffect, useRef, useContext } from "react";
import Style from './Style.module.css';
import Figuri from "../../assets/imagens/figuriHome.gif";
import 'devicon/devicon.min.css';
import { ContextMenuMobile } from "../../Context/ContextApi";

//icones
import { FaPhoneFlip } from "react-icons/fa6";//telefone
import { MdOutlineMailOutline } from "react-icons/md";//email
import { SiWhatsapp } from "react-icons/si";//Whatsapp

//imagens
import Logo from "../../assets/imagens/logo.png";// logo

//Components

import { SkillsComponet } from '../../components/ui/SkillsComponent'; //componente skill
import { MyQualityComponents } from '../../components/ui/MyQualityComnponent'; //componete Myquality
import { ContatcComponente } from '../../components/ui/ContatcComponent';// componete contato
import { MyWorkConteiner } from "../../components/ui/MyWorksComponet"; // componete MyWork
import { ComponetMenuMobile} from "../../components/NavBar";

export default function Home(){

const SkilsList = [
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", porcentagem: "95%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", porcentagem: "95%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", porcentagem: "90%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", porcentagem: "85%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", porcentagem: "70%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg", porcentagem: "65%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", porcentagem: "90%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", porcentagem: "65%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg", porcentagem: "70%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", porcentagem: "55%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg", porcentagem: "45%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg", porcentagem: "80%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg", porcentagem: "50%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg", porcentagem: "60%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original-wordmark.svg", porcentagem: "75%" },
        { imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", porcentagem: "75%" },
];
    
const [currentIndex, setCurrentIndex] = useState(1);
const slideRef = useRef();
const {MenuMobile} = useContext(ContextMenuMobile);
const isTransitioning = useRef(false);
const extendedSlides = [...SkilsList, SkilsList[0]];

    
useEffect(() => {
        const interval = setInterval(() => {
          if (!isTransitioning.current) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
        }, 1000);
    
        return () => clearInterval(interval);
}, []);
    
useEffect(() => {
        if (!slideRef.current) return;
    
        slideRef.current.style.transform = `translateX(${-currentIndex * 10}%)`;
    
        if (currentIndex === SkilsList.length) {
          isTransitioning.current = true;
          setTimeout(() => {
            slideRef.current.style.transition = "transform 0.5s ease-in-out";
            setCurrentIndex(0);
            isTransitioning.current = false;
          }, 100);
        }
}, [currentIndex]);


return(

<>

{MenuMobile && <ComponetMenuMobile/>}

<main>
    {/* seção home */}
    <section id={Style.Home}>

        <div className={Style.ConteinerHome}>

            <article className={Style.ConteinerTextHome}>
                <div className={Style.ConteinerBoxTextHome}>
                    <div className={Style.BoxTextHome}>
                        <h3> <span>&lt;span&gt;</span> Olá, eu sou Renan <span>&lt;span&gt;</span> </h3>
                        <h1>Desenvolvedor<br/>
                            <span> {"{ Full Stack }"} </span><br/>
                            Web & Mobile developer_
                        </h1>
                        <p> <span>&lt;p&gt;</span> Com experiência em tecnologias de ponta, como <span>NodeJS,</span> <span>React</span>,<span>React-Native</span> ... eu forneço soluções web que são inovadoras e robustas. <span>&lt;p&gt;</span> </p>
                    </div>
                    <div className={Style.BoxSkills}>
                    <div className={Style.BoxMySkills} ref={slideRef}>
                    
                    {extendedSlides.map((item, index)=>{
                        
                        return(
                            <SkillsComponet key={index} iconeSkill={<img src={item.imagem}/>} porcentagem=""/>
                        )
                        
                    })}
                    
                    </div>
                    </div>
                </div>
            </article>

            <article className={Style.ConteinerImgHomes}>
                
                <div className={Style.BoxImg}>
                    
                    <img src={Figuri} alt="figure-dev"/>
                
                </div>
            </article>

        </div>

    </section>
    {/*seção home */}

    {/* seção MyQuality */}
    <section id={Style.MyQuality}>
        <div className={Style.ConteinerMyQuality}>
            <div className={Style.conteinerTextQuality}>
                <div className={Style.BoxTextMyQuality}>
                    <h1>Minhas qualidades</h1>
                    <p>Coloco as suas ideias e, portanto, os seus desejos na forma de um projeto web único que
                    inspira você e seus clientes.</p>
                </div>
            </div>
            <div className={Style.BoxQualityComponets}>
               
               <MyQualityComponents/>
              
            </div>
        </div>
    </section>
     {/*seção MyQuality */}

    {/* seção MyWork */}
    <section id={Style.MyWork}>
        <div className={Style.ConteinerMyWork}>
            <div className={Style.ConteinerTextMyWork}>
                <div className={Style.BoxTextMyWork}>
                    <h1>Meus Trabalhos</h1>
                    <p>Cada projeto é criado com atenção aos detalhes, unindo design e performance para entregar sites modernos e funcionais que destacam sua marca.</p>
                </div>
            </div>
            <div className={Style.ConteinerWork}>
               <MyWorkConteiner/>
            </div>
        </div>
    </section>
     {/*seção MyWork */}

    {/* seção MySkills */}
    <section id={Style.MySkills}>
        <div className={Style.ConteinerMySkills}>
            <div className={Style.ConteinerTextMySkills}>
                <div className={Style.BoxTextMySkills}>
                    <h1>Minhas Skills</h1>
                    <p>Transformo ideias em soluções web funcionais e visualmente atraentes, combinando código limpo com tecnologias modernas para entregar projetos eficientes e escaláveis.</p>
                </div>
            </div>
            <div className={Style.ConteinerSkills}>
                <div className={Style.MySkills} >
                    
                    

                    {SkilsList.map((item, index)=>{
                        
                        return(
                            <SkillsComponet skillActive="ActiveSkills"  key={index} iconeSkill={<img src={item.imagem}/>} porcentagem={item.porcentagem}/>
                        )
                        
                    })}
                    
                </div>
            </div>
        </div>
    </section>
     {/*seção MySkills */}

    {/* seção Contact */}
    <section id={Style.Contact}>

        <div className={Style.ConteinerContatc}>
            <div className={Style.ConteinerFormulario}>
                <div className={Style.BoxFormulario}>

                    <div className={Style.BoxTextFormulario}>
                        <h2>Vamos trabalhar juntos!</h2>
                        <p>Eu desenho e codifico coisas lindamente simples e adoro o que faço. Apenas simples assim!</p>
                    </div>
                    <form>
                        <div className={Style.Boxinput}>
                            <input type="text"  placeholder="Nome" name="Nome"/>
                            <input type="text"  placeholder="Sobrenome" name="Sobrenome"/>
                            <input type="text"  placeholder="Email" name="Email"/>
                            <input type="text"  placeholder="Telefone" name="Telefone"/>
                        </div>

                        
                            <select>
                                <option value="0">Selecione um opção</option>
                                <option value="1">Desenvolvimento de projeto</option>
                                <option values="2">Suporte</option>
                            </select>
                                
                        <textarea placeholder="mensagem" />
                       

                        <button type="submit">Enviar mensagem</button>

                    </form>
                </div>
            </div>
            <div className={Style.ConteinerInfoContact}>
                <div className={Style.BoxInfoContact}>
                    <ContatcComponente IconeContatc={<FaPhoneFlip/>} Contatc="Telefone" Text="(43) 999647-5567" />
                    <ContatcComponente IconeContatc={<MdOutlineMailOutline/>} Contatc="Email" Text="iratodev.frontend@gmail.com" />
                    <ContatcComponente IconeContatc={<SiWhatsapp/>} Contatc="Whatsapp" Text="(43) 999647-5567" />
                </div>
            </div>
        </div>

    </section>
    {/* seção Contact */}


</main>

<footer>

    <div className={Style.ConteinerFooter}>

        <div className={Style.BoxLogoRodape}><img src={Logo}/></div>
        <div className={Style.BoxTextRodape}><p>Copyright © 2025 IratoDev.com Todos os direitos reservados.</p></div>

    </div>

</footer>

</>

)

}