import React from 'react'
import { Grid,Box,Typography } from '@mui/material';
import Pic from '../assets/img/up.png';
import Back from '../assets/img/Backgroundback.png';
import Chakra from '../assets/img/chakra.png';
import Graph from '../assets/img/Graph.png';
import Second from '../assets/img/Second.png';
import Bread from './Bread';


const firstImage = () => {
  return (
    
      <Grid sx={{height:200,width:1285,marginTop:4,display:'flex'}}>
        
        <Box sx={{width:670,display:'flex'}}>
          
            <Grid sx={{width:340,marginTop:3.4}}>
             <Typography sx={{fontSize:10}}>Build By Developers</Typography>
             <h4>Purity UI Dashboard</h4>
             <Typography sx={{fontSize:10}}>From colors, cards, typography to complex
             elements, you will find the full documentation and it all about so on</Typography>
            </Grid>
            <Grid sx={{color:'white',backgroundImage: `url(${Chakra})`,width:310,height:220,borderRadius:2,marginTop:2.6}}>
              
            </Grid>
         
        </Box>
        <Box sx={{color:'white',backgroundImage: `url(${Back})`,width:630,height:240,borderRadius:2}}>
         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work with the Rockets</p>
         <Typography sx={{fontSize:10}}>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wealth creations is an systematic way to
         </Typography>
        </Box>
      </Grid>

      
   
  )
}

export default firstImage
