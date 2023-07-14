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
            <TableCell sx={{color: 'white'}}>Director</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Producer</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Release Date</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Description</TableCell>
            {/* <TableCell align="right" sx={{color: 'white'}}>Eye Color</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((film)=> (
            <TableRow
              key={film?.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color: 'white'}}>
                {film?.director}
              </TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{film?.producer}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{film?.release_date}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{film?.opening_crawl}</TableCell>
              {/* <TableCell align="right" sx={{color: 'white'}}>{char?.eye_color.toUpperCase()}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRenderChar;