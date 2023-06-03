import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import TitleImage from "./../../components/title/Title";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useEffect,useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

const Contact = () => {

    

useEffect(() => {
    document.title = "Contacte";
  });

    return (

        <div style={{marginTop:"-70vh" }}>
            <title>contacte</title>
<Box sx={{ flexGrow: 1 }} style={{padding:"3vh"}}>
<Grid container spacing={2} style={{marginTop:"0vh"}} >

        <TitleImage title="Contacte"/>




        <Grid item xs={12} md={6}  style={{padding:"3vh"}} >
        <Item id="allitems" style={{height:"98%"}}>
        <h2>Departamentul Energetică</h2>
        <p>
                <br/>Adresa: str. Melestiu,12, Chișinău, MD 2001, Republica Moldova
                <br/>Tel.: 022 35 47 46
                <br/>e-mail: biblio_cptc@mail.ru
        </p>
        



        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.456908688105!2d28.85081366621297!3d47.007762872611636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c1eaf7c4065%3A0xb14dc04cb2288ceb!2z0JrQuNGI0LjQvdGR0LLRgdC60LjQuSDQn9C-0LvQuNGC0LXRhdC90LjRh9C10YHQutC40Lkg0JrQvtC70LvQtdC00LY!5e1!3m2!1sru!2s!4v1683873315331!5m2!1sru!2s" 
          style={{marginTop:"3vh",width:"100%",height:"70vh",borderColor:"black",borderStyle:"solid",border:"1hv"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </Item>
        </Grid>

        <Grid item xs={12} md={6} style={{padding:"3vh"}}>
        <Item id="allitems" style={{height:"98%"}}>
        <h2>Departamentul Electronică</h2>
        <p>
            <br/>Adresa:  str. M.Sadoveanu, 40/2, Chișinău, MD 2075, Republica Moldova
            <br/>Tel.:
            <br/>e-mail: biblio_ceeelectronic@mail.ru

        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.439512646055!2d28.88705238247013!3d47.066723819946226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c1ea4011e8d%3A0xf9546014bf1e5b03!2zQ2VudHJ1bCBkZSBFeGNlbGVuyJvEgyDDrm4gRW5lcmdldGljxIMgyJlpIEVsZWN0cm9uaWPEgw!5e1!3m2!1sru!2s!4v1683873768244!5m2!1sru!2s" 
         style={{marginTop:"3vh",width:"100%",height:"70vh",borderColor:"black",borderStyle:"solid",border:"1hv"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Item>
        </Grid>







        <Grid item xs={12} md={12} style={{height:"50vh",padding:"5vh"}}  >
        <Item id="allitems" style={{height:"160%",textAlign:"center"}}>
        <h2>Contactează-ne pe Email</h2><br/>
            <Email />
        </Item>
        </Grid>
        
        

        <Grid item xs={12} md={12} style={{height:"30vh"}} ></Grid>
        </Grid>
        </Box>



        </div>
    )
}













const Email = () => {
    const formRef = useRef();
    // const[value,setval]=useState("");
    const [name, setName] = useState("");
    const [mail, setEmail] = useState("");
    const [message, setMessage] = useState("");




    const sendMail = (e) => {

        e.preventDefault();
        if(formRef) {
      
           emailjs.sendForm('service_om5icxw', 'template_hgw0k5q', formRef.current, '1H-xXWHGLldhkGhbm')
            .then((result) => {
                formRef.current.reset();
            }).catch(error => console.log(error));
        }


};
  




return (<>
          <Box
          noValidate
        //   autoComplete="off"?
        >

    <form ref={formRef} onSubmit={sendMail}>
    <TextField  sx={{width: { sm: 300, md: 500 }}} type="text" name="user_name"  label="Numele" variant="outlined" color="error"/><br/><br/>
    <TextField  sx={{width: { sm: 300, md: 500 }}} type="email" name="user_email" label="Email-ul utilizatorului" variant="outlined" color="error"/><br/><br/>
    <TextField  sx={{width: { sm: 300, md: 500 }}} name="message" label="Mesajul" variant="outlined" color="error"/><br/><br/>
    <Button variant="contained" type="submit" color="warning" size="large" >Trimite</Button>
    </form>
</Box>
</>
    );
  };
  
  













export default Contact;





