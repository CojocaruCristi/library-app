import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import BookFormModal from './BookFormModal.jsx'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TitleImage from "./../../components/title/Title";




import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Martie3 from "./../../assets/3-martie.jpg";
import Februarie14 from "./../../assets/14-februarie.jpg";
import Februarie142 from "./../../assets/14-februarie2.jpg";
import Februarie143 from "./../../assets/14-februarie3.jpg";
import Martie27 from "./../../assets/27-martie.jpg";
import Martie272 from "./../../assets/27martie2.jpg";
import Ani95 from "./../../assets/95-ani.jpg";
import GrigoreVieru from "./../../assets/grigore-vieru.jpg";
import GrigoreVieru2 from "./../../assets/grigore-vieru2.jpg";
import GrigoreVieru3 from "./../../assets/grigore-vieru3.jpg";
import Ioncreanga from "./../../assets/ion-creanga.jpg";
import Marte from "./../../assets/marte.jpg";
import Marte2 from "./../../assets/marte2.jpg";
import Marte3 from "./../../assets/marte3.jpg";
import MihaiEminescu from "./../../assets/mihai-eminescu.jpg";
import MihaiEminescu2 from "./../../assets/mihai-eminescu2.jpg";
import MihaiEminescu3 from "./../../assets/mihai-eminescu 3.jpg";
import MihaiEminescu4 from "./../../assets/mihai-eminescu4.jpg";
import OctavianGoga from "./../../assets/octavian-goga.jpg";
import OctavianGoga2 from "./../../assets/octavian-goga2.jpg";
import Reginaromanelorpolitiste from "./../../assets/regina-romanelor-politiste.jpg";
import Sanatate from "./../../assets/sanatate.jpg";
import Sanatate2 from "./../../assets/sanatate2.jpg";
import Sarbatoriannou from "./../../assets/sarabatori-an-nou.jpg";
import Expozitii_tematice from "./../../assets/expozitii-tematice.jpg";
import Expozitii_tematice2 from "./../../assets/expozitii-tematice2.jpg";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const VirtualExposition = () => {

        useEffect(() => {
            document.title = "Expoziție virtuală";
          });

    return (        
    <div style={{marginTop:"-70vh" }}>
    <Box sx={{ flexGrow: 1 }} style={{padding:"3vh"}}>
    <Grid container spacing={2} style={{marginTop:"0vh"}} >
    
            <TitleImage title="Expoziție virtuală"/>









<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <img src={Martie3} style={{height:"60vh",width:"90%",objectFit: "contain"}} />
<p> ZIUA MONDIALĂ A SCRIITORILOR – 3 MARTIE LA MULŢI ANI SCRIITORILOR NOŞTRI DRAGI!!! Astăzi, celebrăm cu mare drag Ziua Mondială a Scriitorilor, cei care, prin carţile lor, ne ajută să intrăm în alte lumi, să ne transpunem în alţi oameni, să ne dezvoltăm şi să vizităm locuri inimaginabile. Şi dacă tot sărbătorim Ziua Mondiala a Scriitorilor, voi ce autor preferat aveţi? Ce scriitor v-a zguduit lumea şi v-a făcut să vedeţi totul în alte culori ?</p>
</Item>
</Grid>


<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 {/* <img src={Literatura_si_arta} style={{width:"100%",height:"60%",objectFit: "contain"}} />
<p><b>Literatura și Artă: </b>săptamânal al scriitorilor din RM.</p> */}

<Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={Februarie14}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={Februarie142} style={{height:"60vh",objectFit: "contain"}} />
                <img src={Februarie143} style={{height:"60vh",objectFit: "contain"}} />{/*contain*/}
</Carousel>

<p>
Dragobetele sărută fetele.O sărbătoare ce reprezintă tradițiile Române.Ce treptat este înlocuită cu 14 februarie.Însă indiferent de ziua si tradițiile ce le reprezintă este o sărbatoare ce simbolizează iubirea,dragostea și dorul de nedescris de fata sau băiatul iubit.
</p>
</Item>
</Grid>






<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={Martie27}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={Martie272} style={{height:"60vh",objectFit: "contain"}} />
</Carousel>

<p>
Anual, pe 27 ianuarie, este marcată ZIUA INTERNAŢIONALĂ A COMEMORĂRII VICTEMELOR HOLOCAUSTULUI.
</p>

</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>


<img src={Ani95} style={{height:"50vh",objectFit: "contain"}} />
<p>95 de ani de la aparitia monografiei CHIȘINĂUL de Ștefan Ciobanu</p>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={GrigoreVieru}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={GrigoreVieru2} style={{height:"60vh",objectFit: "contain"}} />
                <img src={GrigoreVieru3} style={{height:"60vh",objectFit: "contain"}} />
</Carousel>
<p>Expoziția memoriala a marelui poet Grigore Vieru.</p>
</Item>
</Grid>


<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <img src={Ioncreanga} style={{height:"60vh",width:"90%",objectFit: "contain"}} />
<p> Ion Creangă-Scriitorul copilăriei.</p>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={Marte}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={Marte2} style={{height:"60vh",objectFit: "contain"}} />
</Carousel>
<p>Expoziția Tinerilor condeieri.Mărțișoare Literare.</p>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <img src={Marte3} style={{height:"60vh",width:"90%",objectFit: "contain"}} />
<p> Eugen Doga - Născut de Mărţişor.</p>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={MihaiEminescu}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={MihaiEminescu2} style={{height:"60vh",objectFit: "contain"}} />
                <img src={MihaiEminescu3}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={MihaiEminescu4} style={{height:"60vh",objectFit: "contain"}} />

</Carousel>
<p>În memoria marelui poet Mihai Eminescu.</p>
</Item>
</Grid>



<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>

    
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={OctavianGoga}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={OctavianGoga2} style={{height:"60vh",objectFit: "contain"}} />
</Carousel>
<p>1 Aprilie, se împlinesc 140 de ani de la naşterea marelui român Octavian Goga.</p>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <img src={Reginaromanelorpolitiste} style={{height:"60vh",width:"90%",objectFit: "contain"}} />
<p> Regina romanelor polițiste.</p>
</Item>
</Grid>

<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>

    
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={Sanatate}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={Sanatate2} style={{height:"60vh",objectFit: "contain"}} />
</Carousel>
<p>Expoziții  informative</p>
</Item>
</Grid>



<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>
 <img src={Sarbatoriannou} style={{height:"60vh",width:"90%",objectFit: "contain"}} />
<p>Magia sărbătorilor se apropie cu pași rapizi.Iar cu aceasta ocazie Biblioteca CEEE se pregăteste si își expune cele mai bune cărți pentru citire în aceasta minunata perioadă.</p>
</Item>
</Grid>


<Grid item xs={12} md={6} style={{padding:"3vh"}}>
 <Item id="allitems" style={{color:"black",textAlign:"center",padding:"3vh",height:"95%"}}>

    
 <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}autoPlay={true} labels={false}>
                <img src={Expozitii_tematice}  style={{height:"60vh",objectFit: "contain"}} />
                <img src={Expozitii_tematice2} style={{height:"60vh",objectFit: "contain"}} />
</Carousel>
<p>Expoziții  tematice</p>
</Item>
</Grid>


</Grid>
</Box>










{/* 
        <Container maxWidth={"lg"}>
            <Box sx={{p: 2}}>
                <Button onClick={() => setOpen(true)} color="primary" size={"large"} variant="contained" startIcon={<AddIcon />}>
                    Adauga Carte
                </Button>
                <BookFormModal open={open} setOpen={setOpen} onSubmit={addNewBook} loading={loading} setLoading={setLoading} />
            </Box>
            <DataGrid
                rows={data}
                loading={data.length === 0}
                autoHeight
                columns={columns}
                paginationModel={{ page: 0, pageSize: 5 }}
                getRowId={(row) => row._id}
                pageSizeOptions={[5, 25, 50, 100]}
            />
        </Container> */}
        </div>
    )
}

export default VirtualExposition;



// const columns = [
//     {
//         field: 'bookName',
//         headerName: 'Denumirea',
//         minWidth: 200,
//     },
//     {
//         field: 'schoolYear',
//         headerName: 'Anul Scolar',
//         minWidth: 200,
//     },
//     {
//         field: 'yearOfIssue',
//         headerName: 'Anul Editiei',
//         minWidth: 200,
//     },
//     {
//         field: 'publishingHouse',
//         headerName: 'Editia',
//         // sortable: false,
//         minWidth: 200,
//     },
//     {
//         field: 'authors',
//         headerName: 'Autori',
//         // sortable: false,
//         minWidth: 200,
//     },
// ];








//   const [data, setData] = useState([])
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const addNewBook = async (data) => {



//       const response = await fetch("https://library-api-z8qo.onrender.com/api/post", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//       });
//       const newBook = await response.json();


//       await setData((prevState) => [...prevState, newBook]);

//       setLoading(false);
//       setOpen(false);

//   }

//   useEffect(() => {
//       fetch('https://library-api-z8qo.onrender.com/api/getAll').then(response =>response.json()).then((data) => setData(data));
//   }, [])