import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableRenderChar({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1400, maxWidth: 1400, backgroundColor: '#242424' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color: 'white'}}>Name</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Diameter</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Gravity</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Orbital Period</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Rotation Period</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Climate</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Terraine</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((planet)=> (
            <TableRow
              key={planet?.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color: 'white'}}>
                {planet?.name}
              </TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.diameter}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.gravity !== 'unknown' ? planet?.gravity : "-"}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.orbital_period !== 'unknown' ? planet?.orbital_period : "-"}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.rotation_period !== 'unknown' ? planet?.rotation_period : "-"}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.climate !== 'unknown' ? planet?.climate.toUpperCase() : "-"}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.terrain.toUpperCase()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRenderChar;