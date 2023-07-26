import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import CoineDeatil from "./components/CoinDeatil"
import Coins from "./components/Coins"
import Exchanges from "./components/Exchanges"
import Footer from "./components/Footer"

function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/coins" element={<Coins/>} />
      <Route path="/exchanges" element={<Exchanges/>} />
      <Route path="/coin/:id" element={<CoineDeatil/>} />

    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
