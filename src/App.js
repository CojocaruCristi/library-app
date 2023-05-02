import './App.css';
import AppHeader from "./components/Header/AppHeader";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Resources from "./components/Resources/Resources";
import Services from "./components/Services/Services";
import VirtualExposition from "./components/VirtualExposition/VirtualExposition";
import UsefulInformation from "./components/UsefulInformation/UsefulInformation";
import NotFoundPage from "./404Page";


function App() {


  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
        <div className="content">

            <Routes >
                    <Route path="/" element={<Home />}/>
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="services" element={<Services />} />
                    <Route path="exposition" element={<VirtualExposition />} />
                    <Route path="information" element={<UsefulInformation />} />


                    <Route path="*" element={<NotFoundPage />} />
            </Routes>

        </div>
    </div>
  );
}

export default App;
