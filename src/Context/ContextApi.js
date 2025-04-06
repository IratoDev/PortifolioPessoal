import { createContext, useState } from "react";

export const ContextMenuMobile = createContext();

export function ContextMenuMobileProvider({ children }) {
  const [MenuMobile, setMenuMobile] = useState(false);

  function handleMenuMobile() {
    setMenuMobile((prevMenuMobile) => !prevMenuMobile);
    alert("função disparada")
  }

  return (
    <ContextMenuMobile.Provider value={{ MenuMobile, setMenuMobile, handleMenuMobile }}>
      {children}
    </ContextMenuMobile.Provider>
  );
}
