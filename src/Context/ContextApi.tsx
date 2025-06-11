import {ReactNode, createContext, useState, useRef,useEffect } from "react";

type ContextData = {
MenuMobile: boolean;
setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
handleMenuMobile: () => void;
};

// TIPO DAS PROPRIEDADES DO PROVIDER (children)
type ContextProviderProps = {
  children: ReactNode;
};


export const Context = createContext({} as ContextData);

export function ContextProvider({ children }:ContextProviderProps) {

const [MenuMobile, setMenuMobile] = useState(false);

function handleMenuMobile() {
setMenuMobile((prevMenuMobile) => !prevMenuMobile);
}

return (
<Context.Provider value={{ MenuMobile, setMenuMobile, handleMenuMobile }}>
{children}
</Context.Provider>
);
}
