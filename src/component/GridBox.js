import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MoneyIcon from '@mui/icons-material/Money';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridBox() {
  return (
    <Box sx={{ flexGrow: 1,marginTop:3,marginLeft:1,sm:{
      width:320
    }}}>
  <Grid container spacing={0}>
    <Grid item xs={3} sx={{height:15}}>
     <Item sx={{display:'flex'}}>
      <h5>Today's Money</h5>
      {<MoneyIcon sx={{marginLeft:23,backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
      </Item>
     
    </Grid>
    <Grid item xs={3}>
    <Item sx={{display:'flex'}}>
      <h5>Today's Users</h5>
      {<LanguageIcon sx={{marginLeft:20,backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
      </Item>
    </Grid>
    <Grid item xs={3}>
    <Item sx={{display:'flex'}}>
      <h5>New Users</h5>
      {<AccessibilityNewIcon sx={{marginLeft:24,backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
      </Item>
    </Grid>
    <Grid item xs={3}>
    <Item sx={{display:'flex'}}>
      <h5>Today's Shopping</h5>
      {<ShoppingCartIcon sx={{marginLeft:20,backgroundColor:'#13d4ed',color:'white',borderRadius:1}} />}
      </Item>
    </Grid>
  </Grid>
  </Box>
  );
}