import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import films from '../../../data/films'
import planets from '../../../data/planets'
import characters from '../../../data/characters'
import {useState} from 'react'
import axios from 'axios'
import './FormNewChar.css'

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

export default function FormNewChar() {

    const [character, setCharacter] = useState({_id:(characters.length + 2).toString()});

    const validate = () => {
      //TODO VALIDATE...
    }

    const handleAutoFilms = (newTeam) =>{
      if(!Array.isArray(newTeam)){
        const newSelectedTeam = newTeam._id
        setCharacter({...character, homeworld:newSelectedTeam})
      } else {
        const newSelectedTeam = newTeam.map((t) => t._id)
        setCharacter({...character, films:newSelectedTeam})
      }
    }

    const handleChange = (e) => {
      setCharacter({...character,[e.target.id]:e.target.value});
    };

    const handleSubmitChar = async (e) => {
      e.preventDefault()
      const resp = await axios.post(`http://localhost:8000/characters`, character)
      console.log(resp.data)
      setCharacter({
        name:"",
        height:"",
        gender:"",
        mass:"",
        eye_color:"",
        hair_color:"",
        skin_color:""
      })
    }

  return (
    <Box
      component="form"
          sx={styleBox}
          noValidate
          autoComplete="off"
    >
        <TextField
          id="name"
          label="Name"
          value={character?.name}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <TextField
          id="height"
          label="Height"
          value={character?.height}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <TextField
          id="gender"
          label="Gender"
          value={character?.gender}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <TextField
          id="mass"
          label="Mass"
          value={character?.mass}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <TextField
          id="eye_color"
          label="Eye Color"
          value={character?.eye_color}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <TextField
          id="hair_color"
          label="Hair Color"
          value={character?.hair_color}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <TextField
          id="skin_color"
          label="Skin Color"
          value={character?.skin_color}
          multiline
          maxRows={4}
          onChange={handleChange}
        />
    <Autocomplete
      sx={styleBox}
      limitTags={1}
      id="homeworld"
      options={planets}
      onChange={(_event, newTeam) => { handleAutoFilms(newTeam); }}
      getOptionLabel={(film) => film.name}
      renderInput={(params) => (
        <TextField {...params} label="Homeworld"/>
      )}
    />
     <Autocomplete
      sx={styleBox}
      multiple
      limitTags={1}
      id="films"
      options={films}
      onChange={(_event, newTeam) => { handleAutoFilms(newTeam); }}
      getOptionLabel={(film) => film.title}
      renderInput={(params) => (
        <TextField {...params} label='Films' />
      )}
    />
      <Button onClick={handleSubmitChar} variant="contained" color="success" sx={{m: 1, width: '25ch', height: '7ch' }}>
        Create Character
      </Button>
    </Box>
  );
}