import schoolHome from './../../assets/shool.png';
import img14februarie from './../../assets/14-februarie3.jpg';
import imggrigorevieru from './../../assets/grigore-vieru2.jpg';
import imgsanatate from './../../assets/sanatate.jpg';

import styles from './styles.module.css'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import AspectRatio from '@mui/joy/AspectRatio';

// import Mission from "./components/mission/Mission";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  
const HomePage = () => {


    return (
<div className={styles.container} style={{ textAlign: "center",scrollBehavior: "smooth"}}>
        
<Box sx={{ flexGrow: 1 }} style={{padding:"10vh"}}>
        


      <Grid item style={{marginTop:"-10vh"}} xs={12} md={12}>
      <div style={{width:"165vh",textAlign: "center",marginLeft:"auto", marginRight:"auto"}}>
        <ImageListItem >
<img 
style={{height:"80vh"}}
            src={schoolHome}
            srcSet={schoolHome}
          />
<ImageListItemBar
           style={{height:"12vh",textAlign:"left"}}
            title={<h2>Biblioteca</h2>}
            subtitle={<h3>Centrul de Excelenta in Energetica si Electronica</h3>}
            actionIcon={
              <IconButton
                sx={{ color:'gray'}}
              >



                
              </IconButton>
            }
          />
        </ImageListItem>
  
        </div>
        </Grid>
        <Grid container style={{padding:"7vh"}} spacing={2} >















        <Grid item xs={12} md={4}>
          <Item style={{background:"white",padding:"3vh",height:"60vh"}}>
            <div style={{textAlign:"left",fontFamily:"Montserrat",color:"black"}}>
            <h1>Biblioteca Centrului de Excelenta in Energetica si Electronica</h1>
            <h4>are misiunea de a contribui la dezvoltarea invatamantului vocational tehnic prin satisfacerea deplinaa necesitatilor informationale complexe ale elevilor, cadrelor didactice si altor categorii de utilizatori.
           </h4> </div>
            <div style={{textAlign:"left",marginTop:"7vh"}}>
            <Button  variant="outlined" href="/mission" >Mai multe</Button>
            </div>
          </Item>
        </Grid>




        <Grid item xs={12} md={8}>
          <Item style={{background:"white",padding:"3vh",height:"60vh"}} >
          <Grid container spacing={2} >
            <Grid  item xs={12} md={4} >
            <Item style={{background:"red",padding:"0vh",height:"60vh"}} >
            <AspectRatio objectFit="contain" >
            <img style={{height:"60vh", width:"100%"}}
          src={imgsanatate}
          srcSet={imgsanatate}
          alt="A beautiful landscape."
        />
            </AspectRatio>
            </Item>

            </Grid>

            <Grid  item xs={12} md={8} >
            <Item style={{background:"white",padding:"0vh",height:"29vh"}} >
              
            <AspectRatio objectFit="contain" maxHeight="29vh">
            <img
          src={img14februarie}
          srcSet={img14februarie}
          alt="A beautiful landscape."
        />
            </AspectRatio>
            </Item>

            <Grid container spacing={2} >
            <Grid  item xs={12} md={6} >
            <Item style={{background:"blue",padding:"0vh",height:"29vh",marginTop:"2vh"}} >
            <AspectRatio objectFit="contain" maxHeight="29vh">
            <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt="A beautiful landscape."
        />
            </AspectRatio>
            </Item>
            </Grid>
            <Grid  item xs={12} md={6} >
            <Item style={{background:"orange",padding:"0vh",height:"29vh",marginTop:"2vh"}} >
            <AspectRatio objectFit="contain" maxHeight="29vh">
            <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt="A beautiful landscape."
        />
            </AspectRatio>
            </Item>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
          </Item>

        </Grid>


      <Grid item style={{marginTop:"10vh"}} xs={12} md={4} >
      <Item style={{background:"white",padding:"3vh",height:"60vh"}}>
      <div style={{textAlign:"left",fontFamily:"Montserrat",height:"50vh",color:"black"}}>
            <h1>Servicii</h1>
            <h4>
            Biblioteca ofera utilizatorilor gratuit urmatoarele servicii: 
<ul>
    <li> Imprumutul publicatiilor la domiciliu;</li>
    <li> Consultarea documentelor in salile de lectura </li>
    <li> Imprumut interbibliotecar  </li>
    <li> Consultarea cataloagelor si fisirelor traditionale </li>
    <li> Servicii de referinta  </li>
    <li> Consultatii bibliografice si de indrumare   </li>
    <li> Activitati de informare si difuzare culturala   </li>
    <li> Access la internet </li>

</ul>
</h4>
            </div>
            <div style={{textAlign:"left",marginTop:"0vh"}}>
            <Button  variant="outlined" href="/services">Citeste mai mult: Servicii</Button>
            </div>
      </Item>

      </Grid>


      <Grid item style={{marginTop:"10vh"}} xs={12} md={4}>
      <Item style={{background:"white",padding:"3vh",height:"60vh"}}>
      <div style={{textAlign:"left",fontFamily:"Montserrat",height:"50vh",color:"black"}}>
            <h1>Resurse</h1>
            <h4>
<div>Biblioteca I.P.CEEE raspunde prin dezvoltarea unei baze infodocumentare, destinata sustinerii progrmului de invatamant, cerintelor complexe de de studiu, formare si informare ale elevilor, cadrelor didactice si altor categoriide utilizatori.</div>
<div>Institutia Publica Centrul de Excelenta in Energetica si Electronica detine 2 biblioteci(una in Departamentul Energetica si a doua in Departamanetul Electronica) dotate cu literatura de specialitate, manuale, monografii, dictionare, enciclopedii, beletristica si asigura accesul utilizatorilor la colectii, contribuind totodata la formarea culturii inforatiei acestora.     </div>
           </h4> 
           </div>
            <div style={{textAlign:"left",marginTop:"0vh"}}>
            <Button  variant="outlined" href="/resources">Citeste mai mult: Resurse</Button>
            </div>
      </Item>
      </Grid>

      <Grid item style={{marginTop:"10vh"}} xs={12} md={4}>
      <Item style={{background:"white",padding:"3vh",height:"60vh"}}>
      <div style={{textAlign:"left",fontFamily:"Montserrat",height:"50vh",color:"black"}}>
      <h1 >Program</h1>
        <h3>Bibliotecile Departamentelor sunt disponibile:
        <ul>
            <li>
            Luni - Vineri           8:00 - 17:00
            </li>
            <li>Sâmbătă, Dumininică  - fără program
                </li>
                </ul>
        </h3>
</div>
            <div style={{textAlign:"left",marginTop:"0vh"}}>
            <Button  variant="outlined" href="/information">Citeste mai mult: Informații utile</Button>
            </div>
      </Item>
      </Grid>


      </Grid>
    </Box>






        </div>

    )
}




export default HomePage;