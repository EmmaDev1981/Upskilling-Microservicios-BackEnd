import React from 'react'
import Heather from '../Heather'
import SideBar from '../SideBar'
import { useEffect, useState } from 'react'
import dataChar from '../../../data/characters'
import dataFilm from '../../../data/films'
import dataPlanets from '../../../data/planets'
import axios from "axios"
import './Home.css'

function Home() {

    const [characters, setCharacters] = useState(null)
    const [films, setFilms] = useState(null)
    const [planets, setPlanets] = useState(null)

    // useEffect(() => {
    //   setCharacters(dataChar)
    //   setFilms(dataFilm)
    //   setPlanets(dataPlanets)
    // },[])
    // console.log(dataChar)
    // console.log(dataFilm)
    // console.log(dataPlanets)
  
    useEffect(()=> {
      const fetch = async () => {
        const respChars = await axios.get("http://localhost:8000/characters")
        const respFilms = await axios.get("http://localhost:8000/films")
        const respPlanets = await axios.get("http://localhost:8000/planets")
        setCharacters(respChars.data)
        setFilms(respFilms.data)
        setPlanets(respPlanets.data)
      }
      fetch()
    },[])
    
  if(!characters && !films && !planets) return null;

  return (
      <div>
          <div id="wrapper">
              <Heather />
              <div id="first">
                  <SideBar char={characters} films={films} planets={planets}/>
              </div>
          </div>
      </div>
  )
}

export default Home