
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


const Services = () => {


    return (
        <Box sx={{ flexGrow: 1 }} style={{padding:"10vh"}}>
        
        <Grid container spacing={2} style={{marginTop:"-10vh"}} >
        <Grid item xs={12} md={12} style={{fontFamily:"Montserrat",textAlign:"left"}}>
        <h1>Servicii</h1>

        </Grid>
        <Grid item xs={8} md={8}>
        <Item style={{background:"gray",padding:"3vh",height:"70vh"}}>1</Item>
        </Grid>
        <Grid item xs={4} md={4}>
        <Item style={{background:"gray",padding:"3vh",height:"70vh"}}>2</Item>
        </Grid>
            </Grid>
            </Box>
    )
}

export default Services;