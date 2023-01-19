
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import DestinationWedding from "./components/DestinationWedding";
import Glimpse from "./components/Glimpse ";
import DestinationPackages from "./components/DestinationPackages";
import BookYourTrip from "./components/BookYourTrip";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/destinationwedding" element={<DestinationWedding/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/glimpse" element={<Glimpse/>} />
        {/* glimpse pe photo aur vodeo ka section hona cahiye */}
        <Route path="/destinationpackages" element={<DestinationPackages/>} />
        <Route path="/bookyourtrip" element={<BookYourTrip/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <div style={{backgroundColor:"whiteSmoke"}} className="pt-5 mt-5"><Footer /></div>


    </div>
  );
}

export default App;
