import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import characters from '../../../data/characters'
import planets from '../../../data/planets'
import './FomNewFilm.css'

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


export default function FormNewFilm() {

    const [character, setCharacter] = React.useState('');

    const handleChange = (event) => {
      setCharacter(event.target.value);
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
          id="director"
          label="Director"
          multiline
          maxRows={4}
        />
        <TextField
          id="title"
          label="Title"
          multiline
          maxRows={4}
        />
        <TextField
          id="producer"
          label="Producer"
          multiline
          maxRows={4}
        />
        <TextField
          id="release_date"
          label="Release Date"
          multiline
          maxRows={4}
        />
        <TextField
          id="opening_crawl"
          label="Description"
          multiline
          maxRows={4}
        />


    </Box>
    <div>
    <div className='selector-film-container'>
     <Autocomplete
     sx={styleBox}
      multiple
      limitTags={1}
      id="characters"
      options={characters}
      getOptionLabel={(char) => char.name}
      renderInput={(params) => (
        <TextField  {...params} label="Characters"/>
      )}
    />
    </div>
    <div className='selector-film-container'>
    <Autocomplete
      sx={styleBox}
      multiple
      limitTags={1}
      id="planets"
      options={planets}
      getOptionLabel={(char) => char.name}
      renderInput={(params) => (
        <TextField  {...params} label="Planets"/>
      )}
    />
    </div>
    </div>
      <Button variant="contained" color="success" sx={{ m: 1, width: '29ch', height: '7ch' }}>
        CREATE FILM
      </Button>
    </div>
  );
}