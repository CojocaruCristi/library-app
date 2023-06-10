
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import slideimg1 from './../../assets/14-februarie3.jpg';
import slideimg2 from './../../assets/ion-creanga.jpg';
import slideimg3 from './../../assets/marte.jpg';

import slideimg4 from './../../assets/expozitii-tematice.jpg';
import slideimg5 from './../../assets/mihai-eminescu2.jpg';
import slideimg6 from './../../assets/octavian-goga.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from 'react';
import Faclia from './../../assets/faclia.jpg';
import Literatura_si_arta from './../../assets/literatura_si_arta.jpg';
import Univers_pedagogic_pro from './../../assets/univers_pedagogic_pro.jpg';
import Ziarul_de_garda from './../../assets/ziarul_de_garda.jpg';


import Didactica_pro from './../../assets/didactica_pro.jpg';
import Monitorul_oficial_al_RM from './../../assets/monitorul_oficial_al_republicii_moldova.png';
import Univers_pedagogic from './../../assets/univers_pedagogic.jpg';
import Radio from './../../assets/radio.jpg';

import TitleImage from "./../../components/title/Title";

import tp1 from './../../assets/teacherpublication/Aplicatii ale matenaticii.png';
import tp2 from './../../assets/teacherpublication/Cuprins_1_Aplicatii ale matenaticii.jpg';
import tp3 from './../../assets/teacherpublication/Cuprins_2_Aplicatii ale matenaticii.jpg';

import tp4 from './../../assets/teacherpublication/Diseminarea bunelor practici prin prisma produsului educatiomal editia 2.png';
import tp41 from './../../assets/teacherpublication/Curpins_1_Diseminarea bunelor practici prin prisma produsului educatiomal editia 2.jpg';
import tp42 from './../../assets/teacherpublication/Curpins_2_Diseminarea bunelor practici prin prisma produsului educatiomal editia 2.jpg';


import tp5 from './../../assets/teacherpublication/Diseminarea bunelor practici prin prisma produsului educational editia 3.png';
import tp51 from './../../assets/teacherpublication/Curpins_1_Diseminarea bunelor practici prin prisma produsului educational editia 3.jpg';
import tp52 from './../../assets/teacherpublication/Cuprins_2_Diseminarea bunelor practici prin prisma produsului educational editia 3.jpg';

import tp6 from './../../assets/teacherpublication/Educatia interdiciplinara aplicativa si practica-conditie pentru angajabilitatea tinerilor specialisti.png';
import tp61 from './../../assets/teacherpublication/Cuprins_Educatia interdiciplinara aplicativa si practica-conditie pentru angajabilitatea tinerilor specialisti.jpg';

import tp7 from './../../assets/teacherpublication/Educatia steam imperativ al timpului.png';
import tp71 from './../../assets/teacherpublication/Cuprins_Educatia steam imperativ al timpului.jpg';

import tp8 from './../../assets/teacherpublication/Implementarea educatiei steam prin proiecte in cadrul ariei curriculare matematica si stiinte.png';
import tp81 from './../../assets/teacherpublication/Cuprins_Implementarea educatiei steam prin proiecte in cadrul ariei curriculare matematica si stiinte.jpg';


import tp9 from './../../assets/teacherpublication/Formarea continua si dezvoltarea profesionala a cadrului didactic premisa calitatii in educatie.png';
import tp91 from './../../assets/teacherpublication/Cuprins_Formarea continua si dezvoltarea profesionala a cadrului didactic premisa calitatii in educatie.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Resources = () => {

        useEffect(() => {
            document.title = "Resurse";
          });
    return (
        <div style={{marginTop:"-70vh" }}>


<Box sx={{ flexGrow: 1 }} style={{padding:"3vh"}}>
<Grid container spacing={2} style={{marginTop:"0vh"}} >

        <TitleImage title="Resurse"/>



 <Grid item xs={12} md={12} style={{padding:"6vh"}}>
 <Item id="allitems" style={{height:"95%"}}>

 <div style={{textAlign:"left"}}>
<h2>Colecții</h2>
<div>
&emsp;&emsp;Biblioteca I.P.CEEE răspunde prin dezvoltarea unei baze infodocumentare, destinată susținerii programului de învățământ, cerințelor complexe de studiu,formare  și informare ale elevilor, cadrelor didactice și altor categorii de utilizatori.
Instituția Publică Centrul de Excelență în Energetică și Electronică deține 2 biblioteci (una în Departamentul Energetică și a doua în Departamentul Electronică) dotate cu literatură de specialitate, manuale, monografii, dicționare, enciclopedii, beletristică și asigură accesul utilizatorilor la colecțiile, contribuind totodată la formarea culturii informației acestora.
Structura și nivelul științific colecției Bibliotecii corespunde profilului și structurii procesului didactic a I.P.CEEE. 
<div>La  01.01.2022 Colecția Bibliotecii I.P.CEEE constituie 95971 documente, 29047 titluri în valoare </div>
<br/>

</div></div>






</Item>
</Grid>



<Grid item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{height:"100%"}}>
 <h2>Biblioteca Departamentului Energetică:</h2>
 <div><b>Biblioteca Departamentului Energetică</b> – 69743 volume (cărți, documente audiovizuale, electronice și periodice), 24864 titluri.</div>
<br/>
<Slider/>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{height:"100%"}}>
 <h2>Biblioteca Departamentului Electronică:</h2>
 <div><b>Biblioteca Departamentului Electronică</b> – 26261 volume (cărți, documente audiovizuale, electronice și periodice), 4189 titluri.</div>
 <br/>
<Slider2/>
</Item>
</Grid>


<Grid item xs={12} md={12} style={{padding:"6vh"}}>
 <Item id="allitems" style={{height:"100%"}}>

<div style={{textAlign:"left"}}>


<h2>Cataloagele și fișierele tradiționale</h2> 

    &emsp;&emsp;    <b>Catalogul alfabetic</b> - cuprinde fişe cu informaţii bibliografice ale documentelor din bibliotecă, aranjate alfabetic după numele autorului (personal sau colectiv) sau după primul cuvânt din titlu (pentru documentele anonime). Se recurge la acest catalog în cazul cînd se cunoaşte primul autor, sau titlul cărţii (pentru documentele cu mulţi autori sau anonime). 
    <br/>
    &emsp;&emsp;    <b>Catalogul sistematic</b> - cuprinde fişe cu informaţii bibliografice ale documentelor intrate în bibliotecă, organizate pe domenii pe baza sistemului de clasificare zecimală universală (CZU)
    <br/>
<p>
0. Generalităţi<br/>
1. Filozofie<br/>
2. Religie<br/>
3. Ştiinţe sociale, statistică, politică, economie, drept, învăţământ<br/>
4. Ştiinţe ale naturii<br/>
5. Ştiinţe aplicate, medicină, tehnică<br/>
6. Arte, sport<br/>
7. Lingvistică, filologie, literatură<br/>
8. Istorie, geografie, biografii<br/>
</p>


&emsp;&emsp; La catalogul sistematic se apelează în cazul când e nevoie de informaţii la o anumită temă.
<br/>
Indexul alfabetic pe subiecte este un instrument ce ajută la orientarea în catalogul sistematic. El este organizat pe  fişe în ordine alfabetică cu subiectele şi indicele CZU corespunzător. Indexul alfabetic pe subiecte se utilizează pentru a găsi indicele CZU potrivit temei necesare, după care se caută în catalogul sistematic. 

</div>


</Item>
</Grid>

<Periodic_publication/>

<Teacher_publications/>
</Grid>
</Box>

        </div>
    )
}


function Slider() {
    
    return (
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={slideimg1} style={{width:"100vh",height:"70vh",objectFit: "cover"}} />
                <img src={slideimg2} style={{width:"100vh",height:"70vh",objectFit: "cover"}} />
                <img src={slideimg3} style={{width:"100vh",height:"70vh",objectFit: "cover"}} />
        </Carousel>
    );
  }

  function Slider2() {
    
    return (
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={slideimg4} style={{width:"100vh",height:"70vh",objectFit: "contain"}} />
                <img src={slideimg5} style={{width:"100vh",height:"70vh",objectFit: "contain"}} />
                <img src={slideimg6} style={{width:"100vh",height:"70vh",objectFit: "contain"}} />
        </Carousel>
    );
  }





const Periodic_publication=()=>{
    return (

<>
<Grid item xs={12} md={12} style={{padding:"6vh"}}>
 <Item id="allitems"  className="periodpublic" style={{color:"black",textAlign:"center",padding:"3vh"}}>
 <h2 style={{marginTop:"0vh",}} > Publicatii periodice: Abonate de Biblioteca I.P.CEEE<div style={{position:"relative",textAlign:"center"}}>Ziare</div></h2>
</Item>
</Grid>




<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Faclia} style={{width:"100%",height:"60%",objectFit: "contain"}} />
<p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p>
</Item>
</Grid>


<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Literatura_si_arta} style={{width:"100%",height:"60%",objectFit: "contain"}} />
<p><b>Literatura și Artă: </b>săptamânal al scriitorilor din RM.</p>
</Item>
</Grid>






<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Univers_pedagogic_pro} style={{width:"100%",height:"60%",objectFit: "contain"}} />
 <p><b>Univers pedagogic pro: </b>săptamânal al MInisterului Educației și Cercetării al RM și al Institutului de Științe ale Educației.</p>


</Item>
</Grid>

<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Ziarul_de_garda} style={{width:"100%",height:"60%",objectFit: "contain"}} />
 <p><b>Ziarul de gardă: </b>săptamânal independent de investigații.</p>


</Item>
</Grid>

<Grid item xs={12} md={12} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"5vh"}}>
 <h2 style={{marginTop:"0vh"}}> Reviste</h2>
</Item>
</Grid>

<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Didactica_pro} style={{width:"100%",height:"60%",objectFit: "contain"}} />
<p><b>Didactica Pro: </b>publicație pe teorie și practică educațională al Centrului Educațional "PRO DIDACTICA".</p>
</Item>
</Grid>

<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>

 <img src={Monitorul_oficial_al_RM} style={{width:"100%",height:"60%",objectFit: "contain"}} />
<p><b>Monitorul Oficial al Republicii Moldova: </b>publicație Agenție informaționale de Stat "MOLDPRES".</p>

</Item>
</Grid>


<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Univers_pedagogic} style={{width:"100%",height:"60%",objectFit: "contain"}} />

 <p><b>Univers pedagogic pro: </b>revistă științifică de pedagogie și psihologie a Institutului de Științe ale Educației.</p>


</Item>
</Grid>

<Grid item xs={12} md={3} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"left",padding:"3vh",height:"80%"}}>
 <img src={Radio} style={{width:"100%",height:"60%",objectFit: "contain"}} />

 <p><b>Радио: </b>revistă științifico-tehnică lunară (computere, electronică, telecomunicații).</p>


</Item>
</Grid>


</>
    )
}






const Teacher_publications=()=>{
    return (

<>
<Grid item xs={12} md={12} style={{padding:"6vh"}}>
 <Item id="allitems" className="techerpublic" style={{color:"black",textAlign:"center",padding:"3vh"}}>
 <h2 style={{marginTop:"0vh"}} > Publicatiile profesorilor:</h2>
</Item>
</Grid>




<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp1} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp2} style={{ objectFit: "cover"}} />
                <img src={tp3} style={{ objectFit: "cover"}} />
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2> Aplicații ale matematicii</h2></b></p>
</Item>
</Grid>






<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp4} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp41} style={{ objectFit: "cover"}} />
                <img src={tp42} style={{ objectFit: "cover"}} />
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2> Diseminarea bunelor practici prin prisma produsului educațional<br/>ediția 2</h2></b></p>
</Item>
</Grid>






<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp5} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp51} style={{ objectFit: "cover"}} />
                <img src={tp52} style={{ objectFit: "cover"}} />
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2> Diseminarea bunelor practici prin prisma produsului educațional <br/>ediția 3</h2></b></p>
</Item>
</Grid>




<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp6} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp61} style={{ objectFit: "cover"}} />
                {/* <img src={tp62} style={{ objectFit: "cover"}} /> */}
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2> Educația interdiciplinară, aplicativă și practică - condiție pentru angajabilitatea tinerilor specialiști</h2></b></p>
</Item>
</Grid>


<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp7} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp71} style={{ objectFit: "cover"}} />
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2> Educația steam - imperativ al timpului</h2></b></p>
</Item>
</Grid>



<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp8} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp81} style={{ objectFit: "cover"}} />
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2> Implementarea educației ste(A)m prin proiecte în cadrul ariei curriculare matematică și științe</h2></b></p>
</Item>
</Grid>



<Grid  item xs={12} md={6} style={{padding:"6vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"90%"}}>
{/* <p><b>Făclia: </b>săptamânal de informație, opinie și cultură pedagogică.</p> */}

<div style={{display:"flex"}}>


 <Grid item xs={12} md={6} style={{padding:"3vh"}}>

 <img src={tp9} style={{height:"100%",objectFit:"cover",width:"100%",padding:"1vh"}} />
 </Grid>
 <Grid item xs={12} md={6} style={{padding:"3vh",display:"flex"}}>

<div style={{padding:"1vh",height:"100%",width:"100%"}}>
    <Carousel  showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false} autoPlay={true} labels={false} >
                <img src={tp91} style={{ objectFit: "cover"}} />
    </Carousel>
    </div>
</Grid>

</div>
<p ><b><h2>Formarea continuă și dezvoltarea profesională a cadrului didactic - premisa calității în educație</h2></b></p>
</Item>
</Grid>


</>
    )
}




export default Resources



























