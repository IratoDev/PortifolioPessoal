import {BrowserRouter,Routes, Route} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ButtonUpPage } from "./components/ui/ButtonUpPage";
import Home from "./pages/home/index"

import { ContextProvider } from "./Context/ContextApi";

export default function AppRouter(){

return(
<BrowserRouter>

<ContextProvider>

<NavBar/>

<ButtonUpPage/>

<Routes>

<Route path="/" element={<Home/>}/>

</Routes>

</ContextProvider>

</BrowserRouter>
)

}