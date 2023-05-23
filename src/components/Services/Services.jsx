
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import manualenoi from "./../../assets/manuale-noi.jpg";
import TitleImage from "./../../components/title/Title";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Services = () => {


        useEffect(() => {
            document.title = "Servicii";
          });

    return (
        <div style={{marginTop:"-70vh" }}>
<Box sx={{ flexGrow: 1 }} style={{padding:"3vh"}}>
<Grid container spacing={2} style={{marginTop:"0vh"}} >

        <TitleImage title="Servicii"/>



        <Grid item  xs={12} md={6} style={{padding:"6vh"}} >
        <Item  id="allitems" style={{height:"95%"}}>
            <h2>  Servicii oferite de Biblioteca CEEE</h2>
        <p><b>Biblioteca oferă utilizatorilor gratuit următoarele servicii:</b>

  <ol type="1">
    <li>Împrumutul publicațiilor la domiciliu;</li>
    <li>Consultarea documentelor în sălile de lectură;</li>
    <li>Împrumut interbibliotecar;</li>
    <li>Consultarea cataloagelor și fișierelor tradiționale;</li>
    <li>Servicii de referință;</li>
    <li>Consultații bibliografice și de îndrumare;</li>
    <li>Activități de informare și difuzare culturală;</li>
    <li>Acces la internet.</li>
</ol>
</p>

        </Item>
        </Grid>






        
        <Grid item xs={12} md={6} style={{padding:"6vh"}}>
        <Item id="allitems" style={{height:"95%"}}>
            
        <h2 >Înregistrarea utilizatorilor în bibliotecă</h2>
        <p>
        <ol type="1">
        <li>    Utilizatori ai Bibliotecii pot fi toți elevii și angajații Centrului de Excelență, precum și  persoane din exterior interesate de colecțiile și serviciile Bibiotecii.</li>
        <li>
        Accesul la Bibliotecă se permite:
        <ol type="a">
        <li>Pentru elevi - în baza carnetului de elev; </li>
        <li>Pentru personalul angajat – în baza certificatului de angajare/buletinului de identitate;</li>
        <li>Pentru persoane din exterior – în baza buletinului de identitate.</li>
        </ol>
        </li>
        <li>Utilizatorii semnează la înscriere Fișa contract a cititorului.</li>
        <li>
        Utilizatorii externi beneficiază numai de serviciile Sălii de lectură.
        </li>
        </ol>
        <div>La absolvire, concediere, exmatriculare utilizatorii restituie Bibliotecii, în mod obligatoriu, toate publicațiile împrumutate și semnează Fișa de lichidare</div>
        </p>


        </Item>
        </Grid>


        <Grid item xs={12} md={12} style={{padding:"6vh"}}>
        <Item  id="allitems" style={{height:"100%"}}>
        <h2 >Accesul la colecțiile bibliotecii</h2>
        <p>
        &emsp;&emsp;<b>Împrumutul publicațiilor la domiciliu</b>
        
        <ol type="1">
            <li>Împrumutul publicațiiilor la domiciliu se efectuează la Servicii de împrumut ale  bibliotecilor de departamente.</li>
            <li>La domiciliu se împrumută publicațiile didactice (manuale, cursuri, etc.), literatura științifico-cognitivă, literatura artistică cu excepția celor care constituie unicate în colecțiile Bibliotecii. Alte publicații ca: publicații seriale, materiale de referință, documente în format electronic – nu se împrumută.</li>
            <li>
                Numărul publicațiilor împrumutate și termenele de utilizare se stabilesc respectiv:
                <ol type="a">
                <li>Publcații didactice –conform Planului de studiu, pe un semestru/an de studiu;</li>
                <li>Literatura științifico-cognitivă – până la 5 publicații pe o perioadă de 30 zile;</li>
                <li>Literatura artistică, beletristica – până la 3 publicații pe o perioadă de 15 zile cu posibilitatea prelungirii o singură dată încă pentru 15 zile, în funcție de gradul de solicitare.</li>
                </ol>
            </li>
            <li>Toate publicațiile împrumutate trebuie să fie restituite la finele fiecărui an de studiu, în caz contrar utilizatorii nu vor avea acces la colecțiile și serviciile Bibliotecii.</li>
        </ol>
        &emsp;&emsp;<b>Împrumutul interbibliotecar</b>

        <ol type="1">
        <li>Împrumutul interbibliotecar se efectuează cu respectarea următoarelor norme:
            <ol type="a">
            <li>Beneficiari ai Împrumutului interbibliotecar sunt cadrele didactice;</li>
            <li>Documentele solicitate trebuie să fie legate nemijlocit cu activitatea profesional-didactică;</li>
            <li>Prin Împrumutul interbibliotecar pot fi împrumutate până la 5 publicații pe o perioadă de 15 zile.</li>
            </ol>
        </li>
        </ol>

        &emsp;&emsp;<b>Consultare documentelor în sălile de lectură</b>

        <ol>
        <li>Consultatrea documentelor în sălile de lectură se efectuează în baza actelor care permit accesul la Bibliotecă.</li>
        <li> Numărul publicațiilor împrumutate concomitent pentru consultare – 5 documente, publicații seriale – colecția anuală.</li>
        </ol>
        
        </p>






        </Item>
        </Grid>

        
            </Grid>
            </Box>
    </div>
    )
}

export default Services;