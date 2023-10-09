import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MoneyIcon from '@mui/icons-material/Money';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Bread from './Bread';
import SearchAppBar from './SearchAppBar';
import Sidebar1 from './Sidebar1';
import GridBox from './GridBox';
import firstImage from './firstImage';
// import Back from '../assets/img/Backgroundback.png';
import Back from '../assets/img/Backgroundback1.png';
import Chakra from '../assets/img/chakra.png';
import Graph from '../assets/img/Graph.png';
import Second1 from '../assets/img/Second.png';
import Small from './Small';
import Sidetable from './Sidetable';

import TableData from './TableData';
import Footer from './Footer';


const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
     backgroundColor: 'backgroundColor: alpha(theme.palette.common.white, 0.15)',
    //  backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: 'backgroundColor: alpha(theme.palette.common.white, 0.15)',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      
     
      <Sidebar1/>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <>
    <Box sx={{ display: 'flex' }}>
     <CssBaseline />
     <AppBar
       position="fixed"
       sx={{
         width: { sm: `calc(100% - ${drawerWidth}px)` },
         ml: { sm: `${drawerWidth}px` },
         backgroundColor:'white',
         color:'black'

       }}
     >
       <Toolbar>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           edge="start"
           onClick={handleDrawerToggle}
           sx={{ mr: 2, display: { sm: 'none' } }}
         >
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" noWrap component="div">
          <Bread/>
         </Typography>

         <Box sx={{display:{xs:'none',md:'flex'},marginInline:4,marginTop:1,marginLeft:85,}}>

           <Search sx={{marginRight:0,marginBottom:2}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           {<PersonIcon sx={{color:'black'}} />}
           
           <Typography sx={{marginInline:1,fontSize:10,color:'black',marginTop:0.7}}>
               Sign In
           </Typography>
           {<SettingsIcon sx={{color:'black'}} />}
           {<NotificationsActiveIcon sx={{color:'black'}} />}
       </Box>

       </Toolbar> 
      </AppBar>
      
     <Box
       component="nav"
       sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
       aria-label="mailbox folders"
     >
       {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
       <Drawer
         container={container}
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: true, // Better open performance on mobile.
         }}
         sx={{
           display: { xs: 'block', sm: 'none' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
       >
         {drawer}
       </Drawer>
       <Drawer
         variant="permanent"
         sx={{
           display: { xs: 'none', sm: 'block' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
         open
       >
         {drawer}
       </Drawer>
     </Box>
     <Box
       component="main"
       sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
     >
       <Toolbar />

       
       
       
       <Box sx={{ flexGrow: 1,marginTop:3,marginLeft:1,
        
       }}>
     <Grid container spacing={0}>
       <Grid item xs={12} sm={6} md={3} >
        <Item sx={{display:'flex'}}>
         <h5>Today's Money</h5>
         {<MoneyIcon sx={{marginLeft:23,backgroundColor:'#13d4ed',color:'white',borderRadius:1,marginTop:2}} />}
         </Item>
        
       </Grid>
       <Grid item  xs={12} sm={6} md={3}>
       <Item sx={{display:'flex'}}>
         <h5>Today's Users</h5>
         {<LanguageIcon sx={{marginLeft:23,backgroundColor:'#13d4ed',color:'white',borderRadius:1,marginTop:2}} />}
         </Item>
       </Grid>
       <Grid item xs={12} sm={6} md={3} >
       <Item  sx={{display:'flex'}}>
         <h5>New Users</h5>
         {<AccessibilityNewIcon sx={{marginLeft:24,backgroundColor:'#13d4ed',color:'white',borderRadius:1,marginTop:2}} />} 
          {/* <Button endIcon={<AccessibilityNewIcon/>}>New Users</Button>  */}
         </Item>
       </Grid>
       <Grid item  xs={12} sm={6} md={3}>
       <Item sx={{display:'flex'}}>
         <h5>Today's Shopping</h5>
         {<ShoppingCartIcon sx={{marginLeft:20,backgroundColor:'#13d4ed',color:'white',borderRadius:1,marginTop:2}} />}
         </Item>
       </Grid>
     </Grid> 
      {/*  second row */}
     
     <Box   sx={{height:200,width:"100%",marginTop:4,display:{xs:"block",md:"flex",}}}  >
       {/* Left part */}
       <Box  sx={{width:{xs:"100%",md:"50%", },display:{xs:"block",md:"flex", }}}>
         
           <Box sx={{width:{xs:"100%",md:"50%", },marginTop:3.4}}>
            <Typography sx={{fontSize:10}}>Build By Developers</Typography>
            <h4>Purity UI Dashboard</h4>
            <Typography sx={{fontSize:10}}>From colors, cards, typography to complex
            elements, you will find the full documentation and it all about so on</Typography>
           </Box>
           <Box  sx={{color:'white',backgroundImage: `url(${Chakra})`,width:{xs:"100%",md:"46%", },height:220,borderRadius:2,marginTop:2.6}}>
           {/* <img src={Chakra} alt="Chakra" />; */}
           </Box>
        
       </Box>

       {/* Right part */}
       <Box sx={{color:'white',backgroundImage: `url(${Back})`,marginTop:{xs:3,}, width:{xs:"100%",md:"50%", }, height:240,borderRadius:2}}> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work with the Rockets</p>
        <Typography sx={{fontSize:10}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wealth creations is an systematic way to
        </Typography>
       </Box>
     </Box>
    
    {/* Third row */}

     <Box sx={{height:200,width:"100%",marginTop:{xs:40,md:5},display:{xs:"block",md:"flex",}}}>
       {/* First image with Grid */}
       <Box sx={{width:{xs:"100%",md:"30%", },display:{xs:"block"}}}>
       
         
           
           <Box sx={{color:'white',backgroundImage: `url(${Graph})`,height:200,borderRadius:2,marginTop:{xs:55,md:5},}}>
             
           </Box>
           <Box>
             <Typography sx={{marginTop:{xs:2,md:5},}}>
              Active Users
              </Typography>
             <Typography sx={{fontSize:10}}>
               (+23) than last week
             </Typography>



             {<Small/>}

           </Box>
        
       </Box>
       <Box sx={{color:'white',backgroundImage: `url(${Second1})`,marginTop:{xs:4,}, width:{xs:"100%",md:"70%", },height:400,borderRadius:2}}>
        
       </Box>
     </Box>


   {/* Table  */}

     <Box sx={{display:'flex'}}>
      <Box sx={{marginTop:{xs:70,md:30},width:{xs:275,md:"70%"}}}>
     
        <TableData/>
      </Box>
     <Box sx={{marginTop:{xs:70,md:30},width:{xs:275,md:"30%"}}}>
      <Sidetable/>
     </Box>
     </Box>
     {/* <Box sx={{marginTop:{xs:80,md:10},display:'flex'}}> */}
     {/* <Box sx={{marginTop:{xs:10,md:10},display:'flex'}}> */}
     
     {/* <Footer/> */}
     {/* </Box>  */}
     {/* </Box>  */}

     
     </Box>
     {/* hello */}
     

       
     </Box>
     
     
     
     
     
   </Box>
   
   
  </>
    
   
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

  