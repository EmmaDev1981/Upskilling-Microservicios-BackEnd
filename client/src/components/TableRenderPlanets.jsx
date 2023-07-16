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
            <TableCell sx={{color: 'red'}}>Name</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Diameter</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Gravity</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Orbital Period</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Rotation Period</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Climate</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Terraine</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Films</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Residents</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Surface Water</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((planet)=> (
            <TableRow
              key={planet?._id}
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
              <TableCell align="right" sx={{color: 'white'}}>{planet?.films.map((film) => `${film.title} - ` )}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.res_idents.map((res) => `${res.name} * `)}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{planet?.surface_water !== 'unknown' ? planet?.surface_water : "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRenderChar;