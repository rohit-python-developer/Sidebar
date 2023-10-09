import React from 'react'

// import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MoneyIcon from '@mui/icons-material/Money';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HelpIcon from '@mui/icons-material/Help';
import Pic from '../assets/img/up.png';
import Back from '../assets/img/Backgroundback.png';
import Chakra from '../assets/img/chakra.png';
import Graph from '../assets/img/Graph.png';
import Second from '../assets/img/Second.png';
import Bread from './Bread';

const Sidebar1 = () => {
    const imb={
        height:'2.5vh'
      };
  return (
    <div>
      <List>
        
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

        <Box sx={{borderRadius:2,backgroundColor:'#07f7df',height:210,marginBlock:3,marginInline:2}}>
          {<HelpIcon sx={{color:'#07f7df',backgroundColor:"white",marginLeft:2,marginTop:1.5}} />}
          <Typography sx={{marginLeft:2,color:'white'}}>
            <h4>Need Help?</h4>
            <p sx={{fontSize:6}}>Please Check Your Docs</p>
            <Button variant="contained" sx={{backgroundColor:'white',color:'black',borderRadius:2}}>DOCUMENTATION</Button>
          </Typography>
        </Box>
       
      </List>
    </div>
  )
}

export default Sidebar1
