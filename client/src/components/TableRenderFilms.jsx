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
            <TableCell sx={{color: 'red'}}>Director</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Producer</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Release Date</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Planets</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Characters</TableCell>
            <TableCell align="right" sx={{color: 'red'}}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((film)=> (
            <TableRow
              key={film?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color: 'white'}}>
                {film?.director}
              </TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{film?.producer}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{film?.release_date.slice(0,10)}</TableCell>
              <TableCell align="center" sx={{color: 'white'}}>{film?.planets.map((planet) => `${planet.name} - `)}</TableCell>
              <TableCell align="justify" sx={{color: 'white'}}>{film?.characters.map((char) => `${char.name} - `)}</TableCell>
              <TableCell align="justify" sx={{color: 'white'}}>{film?.opening_crawl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRenderChar;