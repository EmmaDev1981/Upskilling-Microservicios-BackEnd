import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [characters, setCharacters] = useState(null)

  useEffect(()=> {
    const fetchCharacters = async () => {
      const resp = await axios.get("http://localhost:8000/characters")
      setCharacters(resp.data)
      console.log(resp.data)
    }
    fetchCharacters()
  },[])

  if(!characters) return null;

  return (
    <>
    </>
  )
}

export default App
