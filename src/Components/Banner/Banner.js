import React, { useState,useEffect } from 'react'
import "./Banner.css"
import { API_KEY, baseUrl,imageUrl } from '../constants/constants'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>
  {
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[2].title)
      setMovie(response.data.results[8])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:"Default TiTle"})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?(movie.title?movie.title:"Default Title"):""}</h1>
            <div className='banner_buttons'>
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
      <div className="fadebottom">
        
      </div>
    </div>
  )
}

export default Banner
