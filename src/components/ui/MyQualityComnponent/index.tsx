import { useState, useEffect, useRef } from "react";
import Style from "./Style.module.css";
import { MdArrowOutward } from "react-icons/md";

type Myquality={

Number:string;
Quality:string;
Text:string;

}

export function MyQualityComponents() {
  const ListQuality = [
    {
      number: "01",
      Quality: "Desenvolvimento Web",
      text: "Crio sites responsivos e dinâmicos, garantindo uma experiência fluida e intuitiva em qualquer dispositivo.",
    },
    {
      number: "02",
      Quality: "UI/UX Design",
      text: "Desenvolvo interfaces intuitivas e atraentes, focando na melhor experiência para seus usuários.",
    },
    {
      number: "03",
      Quality: "Adaptabilidade",
      text: "Me adapto às novas tendências e necessidades, garantindo inovação constante.",
    },
    {
      number: "04",
      Quality: "Lógica e resolução de problemas",
      text: "Aplicamos lógica eficiente para resolver desafios e criar soluções inteligentes e funcionais.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState("scroll");
  const listRef = useRef<HTMLUListElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTop = useRef(window.scrollY);

  const handleMouseMove = (event:React.MouseEvent<HTMLUListElement>) => {
    if (mode !== "mouse" || !listRef.current) return;

    const items = Array.from(listRef.current.children);
    const listTop = listRef.current.getBoundingClientRect().top;
    const mouseY = event.clientY - listTop;

    let closestIndex = null;
    let closestDistance = Infinity;

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const distance = Math.abs(mouseY - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== null && closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const handleScroll = () => {
    if (mode !== "scroll") return;

    if (scrollTimeout.current !== null) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {}, 150);

    const scrollTop = window.scrollY;
    lastScrollTop.current = scrollTop;

    const items = Array.from(listRef.current!.children);

    let newIndex = activeIndex;

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      if (
        Math.abs(itemCenter - viewportCenter) <
        Math.abs(
          items[newIndex].getBoundingClientRect().top +
            items[newIndex].getBoundingClientRect().height / 2 -
            viewportCenter
        )
      ) {
        newIndex = index;
      }
    });

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          setActiveIndex(0);
          window.removeEventListener("scroll", handleScroll);
        }
      },
      { threshold: 0.6 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const listElement = listRef.current;

    const handleMouseEnter = () => setMode("mouse");
    const handleMouseLeave = () => setMode("scroll");

    if (listElement) {
      listElement.addEventListener("mouseenter", handleMouseEnter);
      listElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (listElement) {
        listElement.removeEventListener("mouseenter", handleMouseEnter);
        listElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <ul ref={listRef} onMouseMove={handleMouseMove}>
      {ListQuality.map((item, index) => (
        <li
          key={index}
          className={`${Style.qualityItem} ${
            index === activeIndex ? Style.focused : ""
          }`}
        >
          <MyQualityElement
            Number={item.number}
            Quality={item.Quality}
            Text={item.text}
          />
        </li>
      ))}
    </ul>
  );
}

export function MyQualityElement({ Number, Quality, Text }:Myquality) {
  return (
    <div className={Style.ComponentMyQuality}>
      <div className={Style.ConteinerMyQuality}>
        <div className={Style.BoxMyQuality}>
          <div className={Style.conteinerTextMyQuality}>
            <h3>{Number}</h3>
            <h1>{Quality}</h1>
            <p>{Text}</p>
          </div>
          <div className={Style.BoxIconeArrow}>
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}
