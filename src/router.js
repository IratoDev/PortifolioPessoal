import {BrowserRouter,Routes, Route} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import Home from "./pages/home/index"

import { ContextMenuMobileProvider } from "./Context/ContextApi";

export default function AppRouter(){

return(
<BrowserRouter>

<ContextMenuMobileProvider>

<NavBar/>

<Routes>

<Route path="/" element={<Home/>}/>

</Routes>

</ContextMenuMobileProvider>

</BrowserRouter>
)

}