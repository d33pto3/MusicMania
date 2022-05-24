import React from "react";

const MusicCard = ({song}) => {
    return(
        <div className="app">
            <div className="song">
                <div>
                    <h4>{song.title_short}</h4>
                    <p>{song.artist.name}</p>
                    <button>{song.link}</button>
                </div>
                <div>
                    <img src={song.artist.picture_small !== 'N/A' ? song.artist.picture_small : 'https://via.placeholder.com/400'}
                    alt={song.title_short}
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicCard;