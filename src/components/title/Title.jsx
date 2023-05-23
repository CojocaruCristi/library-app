import Grid from '@mui/material/Grid';
import Backgroundimg from './../../assets/Books2.jpg';

const TitleImage=(props)=> {
    return (
        <>
        <Grid item xs={12} md={12} id="imgtitl" >
<div id="bgkimg" style={{backgroundImage:`url(${Backgroundimg})`,height:"130vh",marginLeft:"-2%",width:"104.9%",backgroundRepeat:"no-repeat",backgroundPosition:"center"}} >

</div>
<div id="title" style={{ textAlign: "center", marginTop:"-60vh",fontSize:"40px"}}>
Biblioteca Centrului de Excelență în Energetică si Electronică<br/>
<div id="title2" style={{marginTop:"2vh",color:"#0d094f"}} >{props.title}</div>
</div>
</Grid>
</>
    )
}
export default TitleImage;