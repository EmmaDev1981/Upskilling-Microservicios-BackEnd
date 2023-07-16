import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import characters from '../../../data/characters'
import films from '../../../data/films'


const styleBox = {
  backgroundColor: '#242424',
  '& .MuiTextField-root': { m: 1, width: '45ch' },
  '& .MuiInputBase-root': { color: 'white' },
  '& .MuiChip-root': { color: 'white' },
  '& .MuiSvgIcon-root': { color: 'red' },
  '& label': { color: 'white' },
  '& label.Mui-focused': { color: '#3E68A8'},
  '& .MuiInput-underline:after': {
      borderBottomColor: '#3E68A8',
  },
  '& .MuiOutlinedInput-root': {
      '& fieldset': {
          borderColor: '#3E68A8',
      },
      '&:hover fieldset': {
          borderColor: '#3E68A8',
          borderWidth: '0.15rem',
      },
      '&.Mui-focused fieldset': {
          borderColor: '#3E68A8',
      },
  }
}


export default function FormNewPlanet() {

    const [movie, setMovie] = React.useState('');

    const handleChange = (event) => {
       setMovie(event.target.value);
    };

  return (
    <div className='form-character-container'>
    <Box
      component="form"
          sx={styleBox}
          noValidate
          autoComplete="off"
    >
        <TextField
          id="name"
          label="Name"
          multiline
          maxRows={4}
        />
        <TextField
          id="climate"
          label="Climate"
          multiline
          maxRows={4}
        />
        <TextField
          id="gravity"
          label="Gravity"
          multiline
          maxRows={4}
        />
        <TextField
          id="orbital_period"
          label="Orbital Period"
          multiline
          maxRows={4}
        />
        <TextField
          id="rotation_period"
          label="Rotation Period"
          multiline
          maxRows={4}
        />
        <TextField
          id="surface_water"
          label="Surface Water"
          multiline
          maxRows={4}
        />
        <TextField
          id="terrain"
          label="Terrain"
          multiline
          maxRows={4}
        />

        <TextField
          id="diameter"
          label="Diameter"
          multiline
          maxRows={4}
        />
        <div>
    <div className='selector-film-container'>
     <Autocomplete
     sx={styleBox}
      multiple
      limitTags={1}
      id="res_idents"
      options={characters}
      getOptionLabel={(char) => char.name}
      renderInput={(params) => (
        <TextField  {...params} label="Residents"/>
      )}
    />
    </div>
    <div className='selector-film-container'>
    <Autocomplete
      sx={styleBox}
      multiple
      limitTags={1}
      id="films"
      options={films}
      getOptionLabel={(film) => film.title}
      renderInput={(params) => (
        <TextField  {...params} label="Films"/>
      )}
    />
    </div>
    </div>
     
    <Button variant="contained" color="success" sx={{ m: 1, width: '29ch', height: '7ch' }}>
        CREATE PLANET
      </Button>

    </Box>
    </div>
  );
}