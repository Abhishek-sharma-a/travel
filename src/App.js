
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TaxiHire from "./components/TaxiHire";
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
        <Route path="/taxihire" element={<TaxiHire/>} />
        <Route path="/glimpse" element={<Glimpse/>} />
        {/* glimpse pe photo aur vodeo ka section hona cahiye */}
        <Route path="/destinationpackages" element={<DestinationPackages/>} />
        <Route path="/bookyourtrip" element={<BookYourTrip/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
