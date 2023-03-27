import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar/Topbar";
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
      </div>
  </BrowserRouter>
  )
}

export default App;
