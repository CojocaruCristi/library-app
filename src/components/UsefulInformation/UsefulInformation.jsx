import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TitleImage from "./../../components/title/Title";

import {useEffect}from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const UsefulInformation = () => {

    useEffect(() => {
        document.title = "Informație utilă";
      });


    return (

<div style={{marginTop:"-70vh" }}>

<Box sx={{ flexGrow: 1 }} style={{padding:"3vh"}}>
<Grid container spacing={2} style={{marginTop:"0vh"}} >

        <TitleImage title="Informații utile"/>








        <Grid item xs={12} md={12} style={{padding:"6vh"}}>
        <Item id="allitems" style={{height:"100%"}}>
            
        <h2>Drepturilor utilizatorilor</h2>
<p>         Utilizatorii Bibliotecii au dreptul:
<ol type="1">
    <li>Să dispună de acces la orice tip de informații prezentă în colecțiile Bibliotecii;</li>
    <li>Să beneficieze de serviciile tuturor subdiviziunilor Bibliotecii;</li>
    <li>Să pretindă calitatea serviciilor prestate;</li>
    <li>Să utilizeze instrumentele de informare bibliografică (cataloagele, fișierele tradiționale, fondul de referință, sursele internet);</li>
    <li>Să primească consultanță bibliografică;</li>
    <li>Să se informeze despre achizițiile noi ale Bibliotecii;</li>
    <li>Să împrumute literatura didactică, științifico-cognitivă, artistică;</li>
    <li>Să prelungească termenul de împrumut al publicațiilor;</li>
    <li>Să consulte în sălile de lectură documente din colecțiile Bibliotecii;</li>
    <li>Să participe la activitățile informative și cultural-educative ale Bibliotecii;</li>
    <li>Să-și expună opiniile, să ofere idei și sugestii privitor la îmbunătățirea activității Bibliotecii;</li>
    <li>Să pretindă respectul demnității umane, tratarea egală din partea personalului Bibliotecii;</li>
    <li>Să pretindă respectarea confidențialității privind datele personale și interesele de informare și lectură.</li>
</ol> 
</p>
   

        </Item>
        </Grid>

        <Grid item xs={12} md={12} style={{padding:"6vh"}}>
        <Item id="allitems" style={{height:"100%"}}>
        <h2>Obligațiile utilizatorilor</h2>
<p>Utilizatorii sunt obligați:
<ol type="1">
<li>Să cunoască și să respecte prevederile Regulamentului privind drepturile și obligațiunile utilizatorilor Bibliotecii CEEE;</li>
<li>Să prezinte la vizitarea Bibliotecii carnetul de elev, vizat pe anul de studiu în curs sau buletinul de identitate;</li>
<li>să nu transmită și să nu împrumute acte de confirmare a identității altor persoane;</li>
<li>să verifice în prezența bibliotecarului starea documentelor împrumutate și să semnaleze despre orice neregulă constatată;</li>
<li>să păstreze documentele împrumutate în stare bună, să nu facă însemnări, sublinieri să alte deteriorări;</li>
<li>să respecte termenul de restituire a publicațiilor;</li>
<li>să nu schimbe documentele împrumutate cu alți utilizatori;</li>
<li>să efectueze multiplicarea, fotografierea documentelor numai cu permisiunea bibliotecarului responsabil;</li>
<li>să restituie Bibliotecii la finele anului de studiu toate documentele împrumutate;</li>
<li>să restituie Bibliotecii la absolvire, concediere, exmatriculare, în mod obligatiriu, toate documentele împrumutate, să semneze Fișa de lichidare, fără de care nu li se va elibera Diploma ori actele personale;</li>
<li>să păstreze liniștea, ordinea și curățenia în spațiile Bibliotecii, să deconecteze telefonul celular;</li>
<li>să manifeste comportament decent față de personalul Bibliotecii și ceilalți utilizatori;</li>
<li>să respecte programul de funcționare al Bibliotecii;</li>
<li>să exploateze cu grijă bunurile materiale ale Bibliotecii: mijloace tehnice, mobilierul, etc.;</li>
</ol>

</p>


        </Item>
        </Grid>
        
        <Grid item xs={12} md={12} style={{padding:"6vh"}}>
        <Item  id="allitems" style={{height:"100%"}}>
        <h2>Reguli privind comportamentul utilizatorilor</h2>
<p>
<ol type="1">
<li>Utilizatorii sunt obligați să respecte programul de activitate al Bibliotecii, normele de împrumut și termenele de utilizare a documentelor.</li>
<li>Nu se admite transmiterea actelor de confirmare a identității utilizatorilor.</li>
<li>Utilizatorii trebuie să verifice fiecare document împrumutat și să comunice imediat bibliotecarului despre orice deteriorare depistată.</li>
<li>Se interzice deteriorarea sub orice formă a documentelor împrumutate (îndoirea, pătarea, sustragerea unor pagini, sublinierea textului, etc.).</li>
<li>Nu se admite fără acordul bibliotecarului scoaterea publicațiilor din sala de lectură.</li>
<li>Multiplicarea documentelor de tip xerox trebuie să se efectueze cu permisiunea bibliotecarului.</li>
<li>Nu se admite sustragerea documentelor din colecțiile Bibliotecii.</li>
<li>Utilizatorii trebuie să respecte normele culturii comunicării în relațiile cu bibliotecarii și alți utilizatori; să păstreze liniștea, ordinea și curățenia în Biliotecă.</li>
<li>Utilizatorii trebuie să exploateze cu grijă bunurile tehnico-materiale ale Bibliotecii: mijloace tehnice, mobilierul, etc.</li>
</ol>
</p>

        </Item>
        </Grid>

        <Grid item xs={12} md={12} style={{padding:"6vh"}}>
        <Item id="allitems" style={{height:"100%"}}>
        <h2>Recuperarea daunelor pricinuite bibliotecii</h2>
<p>
<ul>
    <li>În cazul deteriorării mărunte a publicațiilor (îndoirea, pătarea, sustragerea unor pagini, sublinierea textului, etc.) utilizatorii sunt obligați să elimene daunele provocate, fiind simultan lipsiți de dreptul de a utiliza Biblioteca pe o perioadă de 1-6 luni, în funție de gravitatea prejudiciului.</li>
    <li>Documentele distruse (care nu mai pot fi utilizate) urmează să fie recuperate cu unele identice sau să achite contravaloarea lor la prețul actual. Totodată, utilizatorilor li se aplică o amendă în mărime 15-25 unități convenționale, conform legislației în vigoare.</li>
    <li>Documentele pierdute se recuperează la fel ca și cele distruse.</li>
    <li>Pentru sustragerea documentelor din colecțiile bibliotecii utilizatorii sunt lipsiți, defenitiv, de dreptul de frecventare a Bibliotecii.</li>
    <li>În situația deteriorării totale sau parțiale a bunurilor tehnico-materiale ale Bibliotecii, utilizatorii trebuie să restituie un bun identic sau să achite valoarea bunului deteriorat sau distrus.</li>
    <li>Pentru nerespectarea regulilor de comportament sau refuzul de recuperare a daunelor aduse, Biblioteca va anunța în scris structurile educaționale și direcția Centrului de Excelență, urmând ca acestea să ia masurile administrative corespunzătoare.</li>
</ul>
</p>

        </Item>
        </Grid>
            </Grid>
            </Box>
</div>
    )
}

export default UsefulInformation;