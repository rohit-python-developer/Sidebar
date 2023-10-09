import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },
  // avatar: {
  //   width: theme.spacing(7),
  //   height: theme.spacing(7),
  // },
}));

const data = [
  {
    id: 1,
    company: 'Rohit',
    budget: "$45",
    completion: 60,
    avatar: 'https://picsum.photos/200/200',
  },
  
  {
    id: 2,
    company: 'Shashwat',
    budget: "$65",
    completion: 45,
    avatar: 'https://picsum.photos/200/200',
  },
  {
    id: 3,
    company: 'Sejal',
    budget: "$63",
    completion: 80,
    avatar: 'https://picsum.photos/200/200',
  },

  {
    id: 4,
    company: 'Neha',
    budget: "$63",
    completion: 76,
    avatar: 'https://picsum.photos/200/200',
  },

  // Add more data rows here
];

const TableData = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}    sx={{width:"100%"}}>
      <Table className={classes.table}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="left">Members</TableCell>
            <TableCell align="left">Budget</TableCell>
            <TableCell align="left">Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.company}</TableCell>
              <TableCell component="th" scope="row" sx={{display:'flex'}}>
                <Avatar alt="Avatar" src={row.avatar} className={classes.avatar} />
                <Avatar alt="Avatar" src={row.avatar} className={classes.avatar} />
              </TableCell>
              
              <TableCell align="left">{row.budget}</TableCell>
              <TableCell align="left">{row.completion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;