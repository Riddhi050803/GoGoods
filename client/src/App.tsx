import "./App.css";
// import Login from "./components/Login";
import {ModeToggle} from "./components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider"
import {Register} from "./components/Register";
function App() {
  return(
    <>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <div>
    <ModeToggle/>
    
    <Register />
  </div>
  </ThemeProvider>
  </>
  )
}

export default App;
