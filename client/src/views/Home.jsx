import React from 'react'
import { useState ,useEffect } from 'react'
import TvShows from '../components/TvShows'
import axios from 'axios'


function Home() {
 const [tvshow,setTvshow] = useState([])

 const loadTvshows = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/tv_shows`);
    setTvshow(response.data.data)
 }

 useEffect(()=>{
    loadTvshows();
 },[])

  return (
    <div>
        <h1>All tv Shows</h1>
        {
            tvshow.map((tvObj,i)=>{
                const {_id,title,timing,thumbnail,channel} = tvObj;

               return <TvShows key={i} _id={_id} title={title} timing={timing} thumbnail={thumbnail} channel={channel}/>
            })
        }
    </div>
  )
}

export default Home
