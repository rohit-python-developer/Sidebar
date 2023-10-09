// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Grid } from '@mui/material';

// export default function Footer() {
  

//   return (
//     <Box sx={{display:"flex"}}>
//       <BottomNavigation >
//         <Box  sx={{marginInline:5,paddingLeft:2}} >
//        <p>@ 2021 , Made with{<FavoriteIcon/>} Creative Tim & Simple For better web</p></Box>
//         <br/>
//         <Box  sx={{marginInline:10,paddingInline:30 }}>
//         <p>
//         create
//         Simple
//         Blog
//         License
//         </p>
//         </Box>
//       </BottomNavigation>
//     </Box>
//   );
// }


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Grid } from '@mui/material';
// import { styled } from '@mui/material/styles';

// import Paper from '@mui/material/Paper';


// // const Item = styled(Paper)(({ theme }) => ({
// //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: theme.palette.text.secondary,
// //   }));
  
// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         color: "#A0AEC0",
//         flexGrow: 1,
//         height: "20px",
//         paddingBlock: "0px",
//         display: { xs: "block", md: "flex" },
//         width: {
//           xs: 200,
//           sm: 300,
//         },
//       }}
//     >
//       <Box>
//         <Box sx={{ display: {xs:'block', md: "flex" } }}>
//           <Typography sx={{ fontWeight: { xs: 200, sm: 700 } }}>
//             @ 2021, Made with ❤️ by{" "}
//             <span sx={{ color: "green" }}>Creative</span> Tim & for a better web
//           </Typography>
//         </Box>
//       </Box>

//       {/* <Box sx={{ display:'flex',flexDirection:'right', marginLeft:{xs:0,md:55,},marginTop:{xs:5,md:0}}}>
//                 <Typography sx={{}}>Creative Tim</Typography>
//                 <Typography sx={{marginLeft:'10px'}}>Simple</Typography>
//                 <Typography sx={{marginLeft:'10px'}}>Blog</Typography>
//                 <Typography sx={{marginLeft:'10px'}}>License</Typography>     */}
//       <Box sx={{ marginLeft:60 }}>
//         <Grid container spacing={2}>
          
//           <Grid xs={3}>
//             <Typography>Creative Team</Typography>
//           </Grid>
//           <Grid xs={3}>
//             <Typography>Simple</Typography>
//           </Grid>
//           <Grid xs={3}>
//             <Typography>Blog</Typography>
//           </Grid>
//           <Grid xs={3}>
//             <Typography>License</Typography>
//           </Grid>
          
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Grid } from '@mui/material';
// export default function Footer() {
//   return (
   
//     <Box sx={{display:{xs:'block',md:'flex'}}}>
//   {/* Left Part */}

//     <Box>
//        <Typography>
//        @ 2021, Made with ❤️ by Creative Tim & Simple for a better web
//        </Typography>
//     </Box>
//     {/* Right Part */}

//     <Box sx={{display:'flex';flex-direction:{xs:'none'.md:'right'}}}>
//         <Grid>

//         </Grid>
//     </Box>

//     </Box>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
export default function Footer() {
  return (
   
    <Box sx={{flexGrow: 1,height:"20px",paddingBlock:"0px",display:{xs:'block',md:'flex'}, width:{
        xs:200,
        sm:300
    } }}>
            <Box >
              
                <Box sx={{color:'#A0AEC0', display:{md:'flex'},textAlign:'center',}}>
                
                    @ 2021, Made with ❤️ by Creative Tim & for a better web
                    {/* <Grid sx={{color:'#38B2AC', fontWeight:'700', marginInline:'5px'}}> Creative Tim  </Grid> 
                    &
                    <Grid sx={{color:'#38B2AC', fontWeight:'700', marginInline:'5px'}}> Simmmple </Grid> 
                    for a better web */}
                    
                </Box>
                
            </Box>
            
            <Box sx={{color:'#A0AEC0', display:{xs:'block',md:'flex'},textAlign:'center',  marginLeft:{xs:0,md:64,},marginTop:{xs:5,md:0}}}>
                <Typography sx={{}}>Creative Tim</Typography>
                <Typography sx={{marginLeft:'10px',paddingTop:{xs:1,md:0},}}>Simple</Typography>
                <Typography sx={{marginLeft:'10px',paddingTop:{xs:1,md:0}}}>Blog</Typography>
                <Typography sx={{marginLeft:'10px',paddingTop:{xs:1,md:0}}}>License</Typography>    
            </Box>
        </Box>
  );
}