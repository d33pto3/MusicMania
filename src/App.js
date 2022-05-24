import React, { useEffect, useState } from 'react';
import './App.css';
import MusicCard from './MusicCard';
import SearchIcon from './search.svg';


const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search';

function App() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    searchMusics('');
  }, []);

    const searchMusics = async (title) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          'X-RapidAPI-Key': '24529cc990mshccaab88dad878a9p118dc9jsn8fc94213de97'
        }
      };

      try {
        const response =  await fetch(`${API_URL}?q=${title}`, options); 
        const song = await response.json();

        console.log(song.data);
        setSongs(song.data);
      } catch (err){
        console.log(err);
      }
    }
    
  return (
    <div className="App">
        <h1>MusicMania</h1>
        <div className="search">
          <input
            placeholder='Enter song name'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src={SearchIcon}
            alt='search'
            onClick={() => {
              searchMusics(searchTerm);
            }}
          />
        </div>

        {songs?.length > 0
          ? (
            <div className="container">
            {
              songs.map((song) => (
                <MusicCard song={song} key={Math.random()}/>
              ))
            }
            </div>
          ) : (
            <div className="empty">No items found</div>
          )}
        
    </div>
  );
}

export default App;
