import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
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
import Back from '../assets/img/Backgroundback.png';
import Chakra from '../assets/img/chakra.png';
import Graph from '../assets/img/Graph.png';
import Second from '../assets/img/Second.png';


const Small = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    
  return (
    <div>
    <Grid container spacing={1} sx={{marginTop:3}}>
        <Grid item xs={3} sx={{height:15}}>
         <Item sx={{}}>
         
          {<MoneyIcon sx={{backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
          
         
          </Item>
         
        </Grid>
        <Grid item xs={3}>
        <Item sx={{}}>
          
          {<LanguageIcon sx={{backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
          </Item>
        </Grid>
        <Grid item xs={3}>
        <Item sx={{}}>
         
          {<AccessibilityNewIcon sx={{backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
          </Item>
        </Grid>
        <Grid item xs={3}>
        <Item sx={{}}>
         
          {<ShoppingCartIcon sx={{backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
          </Item>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Small
