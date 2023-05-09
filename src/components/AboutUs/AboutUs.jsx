import React from 'react'


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const AboutUs = () => {


    return (
        <>
<Box sx={{ flexGrow: 1 }} style={{padding:"10vh"}}>
        
        <Grid container spacing={2} style={{marginTop:"-10vh"}} >
        <Grid item xs={12} md={12} style={{fontFamily:"Montserrat",textAlign:"left"}}>
        <h1>Despre noi</h1>

        </Grid>
        <Grid item xs={4} md={4}>
        <Item style={{background:"white",padding:"3vh",height:"70vh"}}>
<div style={{textAlign:"left",fontFamily:"Montserrat",color:"black"}}>
<h1>Noutati</h1>
<div>content</div>

</div>
        </Item>
        </Grid>
        <Grid item xs={4} md={4}>
        <Item style={{background:"white",padding:"3vh",height:"70vh"}}>
        <div style={{textAlign:"left",fontFamily:"Montserrat",color:"black"}}>
        <h1>Documente</h1>
        <div>content</div>
        </div>
        </Item>
        </Grid>
        <Grid item xs={4} md={4}>
        <Item style={{background:"white",padding:"3vh",height:"70vh"}}>
        <div style={{textAlign:"left",fontFamily:"Montserrat",color:"black"}}>
        <h1>Parteneriate</h1>
        <div>content</div>
        </div>
        </Item>
        </Grid>

            </Grid>
            </Box>
        </>
    )
}

export default AboutUs;