import { useState, useEffect, useRef, useContext,ChangeEvent, FormEvent } from "react";
import Style from './Style.module.css';
import Figuri from "../../assets/imagens/figuriHome.gif";
import { toast } from "sonner";
import 'devicon/devicon.min.css';
import { Context } from "../../Context/ContextApi";
import { useLocation } from "react-router-dom";
import { setupApiClient } from "../../service/api";

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
const slideRef = useRef<HTMLDivElement | null>(null);
const {MenuMobile} = useContext(Context);
const isTransitioning = useRef(false);
const extendedSlides = [...SkilsList, SkilsList[0]];    
const location = useLocation();

const [Nome, setNome] = useState('');
const [Sobrenome, setSobrenome] = useState('');
const [Email, setEmail] = useState('');
const [Telefone, setTelefone] = useState('');
const [Mensagem, setMensagem] = useState('');
const [ServiceSelected, setServiceSelected] = useState<string>("selecione uma opção");
const [isLoading, setIsLoading] = useState(false);


useEffect(() => {
const interval = setInterval(() => {
  if (!isTransitioning.current) {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }
}, 1000)

return () => {
clearInterval(interval)
}
}, []);
    
useEffect(() => {
        const slide = slideRef.current;
        if (!slide) return;
    
        slide.style.transform = `translateX(${-currentIndex * 10}%)`;
    
        if (currentIndex === SkilsList.length) {
          isTransitioning.current = true;
          setTimeout(() => {
            slide.style.transition = "transform 0.5s ease-in-out";
            setCurrentIndex(0);
            isTransitioning.current = false;
          }, 100);
        }
}, [currentIndex]);

useEffect(() => {
  const hash = location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100); // delay para garantir montagem
    }
  }
}, [location]);

function handleChangeService(event: ChangeEvent<HTMLSelectElement>) {
setServiceSelected(String(event.target.value));
}

async function handleEnviaEmail(event: FormEvent) {
    
event.preventDefault();

if (Nome === "" || Email === "" || Sobrenome === "" || Telefone === "") {
toast.error("Preencha todos os campos");
return;
}

const data = {
nome: Nome,
email: Email,
sobrenome: Sobrenome,
telefone: Telefone,
mensagem: Mensagem,
servico: ServiceSelected
};

setIsLoading(true);
console.log("esse é o objeto:",data)

try {
const apiClient = setupApiClient();
await apiClient.post('/envio', data);
setNome('');
setSobrenome('');
setEmail('');
setTelefone('');
setMensagem('');
setServiceSelected("selecione uma opção");
toast.success('Mensagem enviada com sucesso!');

(event.target as HTMLFormElement).reset()

} catch (err:any) {
console.error('Erro:', err.response?.data || err.message);
toast.error("Ops! erro ao enviar mensagem ");
}finally {
setIsLoading(false);
}
}

return(

<>

{MenuMobile && <ComponetMenuMobile/>}

<main>
    {/* seção home */}
    <section id="Home" className={Style.Home}>

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
                            <SkillsComponet key={index} skillActive=".teste" children={""} iconeSkill={<img src={item.imagem}/>} porcentagem=""/>
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
    <section id="MyQuality" className={Style.MyQuality} >
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
    <section id="MyWork" className={Style.MyWork}>
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
    <section id="MySkills" className={Style.MySkills}>
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
    <section id="Contact" className={Style.Contact} >

        <div className={Style.ConteinerContatc}>
            <div className={Style.ConteinerFormulario}>
                <div className={Style.BoxFormulario}>

                    <div className={Style.BoxTextFormulario}>
                        <h2>Vamos trabalhar juntos!</h2>
                        <p>Eu desenho e codifico coisas lindamente simples e adoro o que faço. Apenas simples assim!</p>
                    </div>
                    <form onSubmit={handleEnviaEmail}>
                        <div className={Style.Boxinput}>
                            <input onChange={(e) => setNome(e.target.value)} type="text"  placeholder="Nome" name="Nome"/>
                            <input onChange={(e) => setSobrenome(e.target.value)} type="text"  placeholder="Sobrenome" name="Sobrenome"/>
                            <input onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email" name="Email"/>
                            <input onChange={(e) => setTelefone(e.target.value)} type="text"  placeholder="Telefone" name="Telefone"/>
                        </div>

                        
                            <select value={ServiceSelected} onChange={handleChangeService}>
                                <option value="0">Selecione um opção</option>
                                <option value="Desenvolvimento de projeto">Desenvolvimento de projeto</option>
                                <option value="Suporte">Suporte</option>
                            </select>
                                
                        <textarea placeholder="mensagem" onChange={(e) => setMensagem(e.target.value)} />
                       

                        <button type="submit" disabled={isLoading} className={isLoading ? Style.loadingButton : ''}>{isLoading ? "Enviando..." : "Enviar mensagem"}</button>

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