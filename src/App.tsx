import "./GlobalStyle.css";
import AppRouter from "./router";
import { Toaster } from "sonner";

function App() {
  return (
   <>
   <Toaster 
position="top-right" 
toastOptions={{
  
style:{

backgroundColor:"#f1f1f1",
color:"#1313131",
borderColor:"rgb(255,255,255, 0.5)",
display:"flex",
alignItems:"center",
justifyContent:"center",
padding:"1em",
width:"250px"

}

}}/>
   <AppRouter/>
   </>
  );
}

export default App;
