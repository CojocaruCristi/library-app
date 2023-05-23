import './App.css';
import AppHeader from "./components/Header/AppHeader";
import {Routes, Route,useLocation} from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Resources from "./components/Resources/Resources";
import Services from "./components/Services/Services";
import VirtualExposition from "./components/VirtualExposition/VirtualExposition";
import UsefulInformation from "./components/UsefulInformation/UsefulInformation";
import Contact from "./components/contact/Contact";
// import Mission from "./components/mission/Mission";



import NotFoundPage from "./404Page";

import { useState, useEffect } from "react";
import Footer from './components/Footer/Footer'
import Grid from '@mui/material/Grid';
import ElectronicCatalog from './components/ElectronicCatalog/ElectronicCatalog';


function App() {
  
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);


  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
        
        
        <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}
    >
      <Routes location={displayLocation}>

                    {/* <Route path="/" element={<Home />}/> */}
                    <Route path="" element={<AboutUs />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="services" element={<Services />} />
                    <Route path="catalog" element={<ElectronicCatalog />} />
                    <Route path="exposition" element={<VirtualExposition />} />
                    <Route path="information" element={<UsefulInformation />} />
                    <Route path="contact" element={<Contact />} />
                    {/* <Route path="mission" element={<Mission />} /> */}
                    <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </div>


        

        <ContactInformation />
        
    </div>
  );
}









const ContactInformation=()=>{
return(
  <>
        <Grid style={{background:"black",color:"white",marginTop:"10vh",position:"absolute"}} container spacing={1} >
        <Grid  item xs={12} md={12} style={{textAlign:"center"}}><h2>Date de contact</h2></Grid>
        <Grid  item xs={12} md={6} style={{textAlign:"left",paddingLeft:"5vh"}}>
        <h2>Departamentul Energetică</h2>
        <p>

        <br/>Adresa: str. Melestiu,12, Chișinău, MD 2001, Republica Moldova
        <br/>Tel.: 022 35 47 46
        <br/>e-mail: biblio_cptc@mail.ru

        </p>
        </Grid>
        <Grid  item xs={12} md={6} style={{textAlign:"left"}}>
        <h2>Departamentul Electronică</h2>
        <p>

            <br/>Adresa:  str. M.Sadoveanu, 40/2, Chișinău, MD 2075, Republica Moldova
            <br/>Tel.:
            <br/>e-mail: biblio_ceeelectronic@mail.ru

        </p>
        </Grid>
        </Grid>
  </>
)
}



// function Content() {
//   const location = useLocation();

//   const [displayLocation, setDisplayLocation] = useState(location);
//   const [transitionStage, setTransistionStage] = useState("fadeIn");

//   useEffect(() => {
//     if (location !== displayLocation) setTransistionStage("fadeOut");
//   }, [location, displayLocation]);

//   return (
//     <div
//       className={`${transitionStage}`}
//       onAnimationEnd={() => {
//         if (transitionStage === "fadeOut") {
//           setTransistionStage("fadeIn");
//           setDisplayLocation(location);
//         }
//       }}
//     >
//       <Routes location={displayLocation}>

//       <Route path="/" element={<Home />}/>
//                     <Route path="aboutus" element={<AboutUs />} />
//                     <Route path="resources" element={<Resources />} />
//                     <Route path="services" element={<Services />} />
//                     <Route path="exposition" element={<VirtualExposition />} />
//                     <Route path="information" element={<UsefulInformation />} />


//                     <Route path="*" element={<NotFoundPage />} />

//       </Routes>

//     </div>
//   );
// }


export default App;
