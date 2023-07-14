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
            <TableCell align="right" sx={{color: 'white'}}>Height</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Gender</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Mass</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Eye Color</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Hair Color</TableCell>
            <TableCell align="right" sx={{color: 'white'}}>Skin Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((char) => (
            <TableRow
              key={char?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color: 'white'}}>
                {char?.name}
              </TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{char?.height}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{char?.gender.toUpperCase()}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{char?.mass !== 'unknown' ? char?.mass : "-"}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{char?.eye_color.toUpperCase()}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{char?.hair_color.toUpperCase()}</TableCell>
              <TableCell align="right" sx={{color: 'white'}}>{char?.skin_color.toUpperCase()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRenderChar;