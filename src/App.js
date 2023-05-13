import './App.css';
import AppHeader from "./components/Header/AppHeader";
import {Routes, Route,useLocation} from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Resources from "./components/Resources/Resources";
import Services from "./components/Services/Services";
import VirtualExposition from "./components/VirtualExposition/VirtualExposition";
import UsefulInformation from "./components/UsefulInformation/UsefulInformation";
import NotFoundPage from "./404Page";
import { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';



function App() {


  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
        
        
        
        
        <div className="content">
<Content/>
        <Grid style={{background:"black",marginTop:"3vh",padding:"5vh",color:"white",textAlign:"center",fontFamily:"Montserrat"}} container spacing={1} >
        <Grid  item xs={12} md={12}>
        information
        </Grid>
        </Grid>
        </div>


        
    </div>
  );
}


function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
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

      <Route path="/" element={<Home />}/>
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="services" element={<Services />} />
                    <Route path="exposition" element={<VirtualExposition />} />
                    <Route path="information" element={<UsefulInformation />} />


                    <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </div>
  );
}


export default App;
