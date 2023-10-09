import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Bread() {
  return (
    // <div role="presentation" onClick={handleClick}>
    //   <Breadcrumbs aria-label="breadcrumb">
    //     <Link underline="hover" color="inherit" href="/">
    //     PAGES
    //     </Link>
    //     <Link
    //       underline="hover"
    //       color="inherit"
    //       href="/material-ui/getting-started/installation/"
    //     >
    //       Dashboard
    //     </Link>
        
    //     <Typography color="text.primary">Dashboard</Typography>
    //   </Breadcrumbs>
      
    // </div>
    <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Pages
                    </Link>
                    <Link
                        underline="hover"
                        color="black"
                        href="/material-ui/getting-started/installation/"
                    >
                       Dashboard
                    </Link>       
                </Breadcrumbs>
                <Typography sx={{color:'black', fontWeight:'700'}}>Dashboard</Typography>
            </div>
  );
}