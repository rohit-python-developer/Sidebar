import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link, { Button, TextField } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HelpIcon from '@mui/icons-material/Help';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Pic from '../assets/img/up.png'
import Header from './Header';
import GridBox from './GridBox'; 


const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  backgroundColor:'blue',
  
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


function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const imb={
    height:'2.5vh'
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Box sx={{display:'flex',marginInline:4,marginTop:2}}>
            {/* {<HomeIcon sx={{backgroundColor:'green'}}/>} */}
            <img src={Pic} alt="Logo" style={imb} />
            <Typography sx={{marginInline:2,fontSize:10}}>
                <b>PURITY UI DASHBOARD</b>
            </Typography>
        </Box>
          
          
        
        
      </List>
      <hr sx={{color:'red'}}/>
      <List>
      <Box sx={{display:'flex',marginInline:4,marginTop:2}}>
            {<HomeIcon sx={{backgroundColor:'#07f7df',color:'white'}}/>}
            
            <Typography sx={{marginInline:2,fontSize:14}}>
                <b>DASHBOARD</b>
            </Typography>
        </Box>
        <Box sx={{display:'flex',marginInline:4,marginTop:2,marginLeft:7,}}>
            {<BarChartIcon sx={{color:'#07f7df'}} />}
            
            <Typography sx={{marginInline:2,fontSize:10}}>
                Tables
            </Typography>
        </Box>
        <Box sx={{display:'flex',marginInline:4,marginTop:2,marginLeft:7,}}>
            {<CreditCardIcon sx={{color:'#07f7df'}} />}
            
            <Typography sx={{marginInline:2,fontSize:10}}>
                Billing
            </Typography>
        </Box>
        <Box sx={{display:'flex',marginInline:4,marginTop:2,marginLeft:7,}}>
            {<MiscellaneousServicesIcon sx={{color:'#07f7df'}} />}
            
            <Typography sx={{marginInline:2,fontSize:10}}>
                RTL
            </Typography>
        </Box>
        <Typography sx={{paddingTop:5,paddingLeft:5,fontSize:12}}>
            <b>ACCOUNT PAGES</b>
        </Typography>
        <Box sx={{display:'flex',marginInline:4,marginTop:2,marginLeft:7,}}>
            {<PersonIcon sx={{color:'#07f7df'}} />}
            
            <Typography sx={{marginInline:2,fontSize:10}}>
                Profile
            </Typography>
        </Box>
        <Box sx={{display:'flex',marginInline:4,marginTop:2,marginLeft:7,}}>
            {<LockOpenIcon sx={{color:'#07f7df'}} />}
            
            <Typography sx={{marginInline:2,fontSize:10}}>
                Sign In
            </Typography>
        </Box>
        <Box sx={{display:'flex',marginInline:4,marginTop:2,marginLeft:7,}}>
            {<RocketLaunchIcon sx={{color:'#07f7df'}} />}
            
            <Typography sx={{marginInline:2,fontSize:10}}>
                Sign Up
            </Typography>
        </Box>

        <Box sx={{borderRadius:2,backgroundColor:'#07f7df',height:190,marginBlock:3,marginInline:2}}>
          {<HelpIcon sx={{color:'#07f7df',backgroundColor:"white",marginLeft:2,marginTop:1.5}} />}
          <Typography sx={{marginLeft:2,color:'white'}}>
            <h4>Need Help?</h4>
            <p sx={{fontSize:6}}>Please Check Your Docs</p>
            <Button variant="contained" sx={{backgroundColor:'white',color:'black',borderRadius:2}}>DOCUMENTATION</Button>
          </Typography>
        </Box>
       
        
      </List>

      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"white",
          

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
            {/* <MenuIcon /> */}
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div" sx={{color:'black'}}>
            Header
          </Typography> */}

          <Header/> 
          {/* <Search sx={{marginRight:0}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          
        </Toolbar>
      </AppBar>
      {/* <Box sx={{marginLeft:34,width:40000,backgroundColor:'red'}}>
      <h1>Hello dgsdfgdfsgnfjn kjgnkjfdngkjn sdjfngjndsogn jndsfognosdfn jnsdfogn</h1>
      <GridBox/>
      </Box> */}
      
      
      {/* <Header/> */}
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
        
          
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
      
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Dashboard;