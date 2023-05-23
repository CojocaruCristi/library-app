import React from 'react'
// import  {useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';

import TitleImage from "./../../components/title/Title";
import {useEffect} from "react";


import slideimg1 from './../../assets/14-februarie3.jpg';
import slideimg2 from './../../assets/ion-creanga.jpg';
import slideimg3 from './../../assets/marte.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));






  
const AboutUs = () => {
    useEffect(() => {
        document.title = "Despre noi";
      });
    



    return (
        <div style={{marginTop:"-70vh" }} >

<Box sx={{ flexGrow: 1 }} style={{padding:"3vh"}}>
<Grid container spacing={2} >

<TitleImage title="Despre noi" />

<Grid  xs={12} md={12} style={{textAlign:"right",fontStyle:"italic"}} >
<h2>"In biblioteca oricine poate dialoga cu eternitatea"</h2>
</Grid>


<Grid item xs={12} md={12} style={{padding:"6vh"}}>
<Item id="allitems" style={{height:"98%"}}>
    <div style={{fontStyle:" italic"}}>
    &emsp;&emsp;O carte este o ușă spre viitor. Dintotdeauna, cartea i-a dat omului speranță și încredere l-a învațat să aleagă grâul de neghină. 
Minunea minunelor a fost dată numai pentru om: să vobească, să citească și să învețe sin toate astea câte ceva. 
Lectura este un mijloc de creare și devenire a personalității, de sensiblizare la valorile culturii umane, valori de bine,
frumos și adevăr. Ea favorizează socializarea copiilor, familiarizarea lor cu adevărate comori ale literaturii. 
Biblioteca vine sa contribuie la constituirea tresăturilor morale si intelectuale ale copilului, trezîndu-i interesul pentru lumea fascinantă a cărții.
</div>
<br/><br/><br/>
<h2>Misiunea bibliotecii</h2>



<p>

<div style={{padding:"0vh"}}>
&emsp;&emsp; Biblioteca Instituției  Publice Centrul de Excelență în Energetică și Electronică are misiunea de a contribui la dezvoltarea învățământului vocațional  tehnic prin satisfacerea deplină a necesităților informaționale complexe ale elevilor, cadrelor didactice și altor categorii de utilizatori.
</div>
<div style={{padding:"0vh"}}>
&emsp;&emsp;Dezvoltarea Bibliotecii I.P. CEEE se fundamentează pe ideea că biblioteca trebuie să devină un centru de informare strategică, un suport real pentru procesul de învățământ, o parte integrantă a sistemului informațional aflată prioritar în serviciul elevilor, cadrelor didactice și altor categorii de utilizatori.
</div>
<br/>
<div style={{padding:"0vh"}}>
&emsp;&emsp;Biblioteca Instituției  Publice Centrul de Excelență în Energetică și Electronică are misiunea de a contribui la dezvoltarea învățământului vocațional  tehnic prin satisfacerea deplină a necesităților informaționale complexe ale elevilor, cadrelor didactice și altor categorii de utilizatori.
</div>
<br/>
<div style={{padding:"0vh"}}>
&emsp;&emsp;Instituția Publică Centrul de Excelență în Energetică și Electronică deține 2 biblioteci (una în Departamentul Energetică și a doua în Departamentul Electronică) dotate cu literatură de specialitate, manuale, monografii, dicționare, enciclopedii, beletristică și asigură accesul utilizatorilor la colecțiile, contribuind totodată la formarea culturii informației acestora.
Colecțiile Bibliotecii CEEE sunt organizate și dezvoltate în raport cu necesitățile de informare ale utilizatorilor și susținerii programelor de formare profesională prin achiziții, donații și alte surse.
</div>
        </p>
</Item>
        </Grid>





        <Grid item xs={12} md={12} style={{padding:"6vh",marginTop:"3vh"}} >
<Item id="allitems" style={{height:"70vh"}}>

<Slider />


</Item>
</Grid>







<Grid item xs={12} md={12} style={{padding:"6vh"}} >
<Item id="allitems" style={{height:"100%"}}>
<h2>Politici</h2>
<p>&emsp;&emsp;Biblioteca CEEE activează conform urmatoarelor regulamente.       
            
            Ele stabilesc condițiile de acces și utilizare a colecțiilor și serviciilor Bibliotecii Instituției Publice Centrul de Excelență în Energetică și Electronică (în continuare Biblioteca) împreună cu drepturile și obligațiunile utilizatorilor.
        
            Regulamentul este elaborat în conformitate cu Legea privind accesul la informație (LP RM, 2000), Legea cu privire la biblioteci (LP RM, 2017), Codul cu privire la contravențiile administrative (nr. CCA din 29.03.1985, modificat prin LP 16 – XVI din 03.02.2009, art.92), Cadrul de reglementare al I.P. CEEE, Regulamentul de organizare ș funcționare al Bibliotecii I.P. CEEE (2021), Regulamentul de ordine interioară al Bibliotecii I.P. CEEE (2021).
            Prezentele regulamente intră în vigoare din data aprobării acestuia de către Directorul I.P. CEEE.
    Regulamentul poate fi modificat în funcție de schimbările cadrului legislativ și de reglementare.
           </p><br/>
<div style={{textAlign:"center"}}>
<a href="https://old.ceee.md/files/regulamente/Regulament%20de%20organizare%20si%20functionarea%20a%20bibliotecii%20institutiei%20publice%20ceee.pdf" target="_blank">REGULAMENT DE ORGANIZARE ȘI FUNCȚIONAREA A BIBLIOTECII I. P. CEEE</a><br/><br/>
<a href="https://old.ceee.md/files/regulamente/Regulamentul%20de%20ordine%20interioara%20a%20bibliotecii%20institutiei%20publice%20ceee.pdf" target="_blank">REGULAMENTUL DE ORDINE INTERIOARA A BIBLIOTECII I.P. CEEE</a><br/><br/>
<a href="https://old.ceee.md/files/regulamente/Regulament%20pentru%20utilizatoriii%20bibliotecii%20institutiei%20publice%20ceee.pdf" target="_blank">REGULAMENT PENTRU UTILIZATORIII BIBLIOTECII I. P. CEEE</a><br/><br/>
<a href="https://old.ceee.md/files/regulamente/Regulament%20de%20ordine%20interioara%20privind%20implimentarea%20schemei%20de%20inchiriere%20a%20manualelor%20in%20biblioteca%20institutiei%20publice%20ceee.pdf" target="_blank"> REGULAMENT DE ORDINE INTERIOARA PRIVIND IMPLIMENTAREA SCHEMEI DE INCHIRIERE A MANUALELOR IN BIBLIOTECA I.P. CEEE</a><br/>
</div>

<br/><br/>

<div style={{textAlign:"left"}}>


    <h2 >Principiile directoare ale servirii urtilizatorilor</h2>
    <p >
	&emsp;&emsp;Biblioteca consideră drept principiu fundamental al servirii utilizatorilor asigurarea accesului liber la informație, garantând accesul fără restricții la informații, idei, publicații (răspândite în modul legal) pe profilul său de activiate.
	
    Biblioteca furnizează servicii tuturor utilizatorilor în mod egal indiferent de rasă, origine etnică, religie, cultură, politică, vârstă, nivel de studii, sex, etc.
	
    Biblioteca asigură ca selectarea și disponibilizarea documentelor să fie dictată de considerente profesionale și nu de viziuni politice, religioase, opunânduse totodată oricăror forme de cenzură.
	
    Biblioteca garantează respectarea drepturilor utilizatorilor la confidențialitate și intimitate; ea nu va dezvălui identitatea utilizatorilor sau a informației pe care o folosesc unei terțe părți.
	
    Serviciile Bibliotecii sunt, în general gratuite.
	
    Biblioteca poate oferi servicii cu taxă, serviciile care înglobează consum de materiale.
	
    Biblioteca se pronunță în spriginul unui dialog constant cu utilizatorii pentru a spori nivelul de satisfacție privind calitatea serviciilor.
</p>




</div>
<h2>Parteneriate</h2>
</Item>
</Grid>






























            </Grid>
            </Box>
        </div>
    )
}






function Slider() {
    return (
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={slideimg1} style={{height:"60vh",objectFit: "cover"}} />
                <img src={slideimg2} style={{height:"60vh",objectFit: "cover"}} />
                <img src={slideimg3} style={{height:"60vh",objectFit: "cover"}} />{/*contain*/}
        </Carousel>
    );
  }






export default AboutUs;