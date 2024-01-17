import React from "react";

import "./styles/socials.css";

const Band = () => {
    const divstyle = {
        border: '12px black',
        margin: '-550px',
        position: 'relative',
        top: '-550px',
        left: '0px'
    }
    return (
        <div className="band">
            <div className="band">
                <iframe style={divstyle} src="https://open.spotify.com/embed/artist/2YafwQJGtoEn81X6wPvjdh?utm_source=generator&theme=0" width="100%" height="360" frameBorder="1000" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="spotify"></iframe>
            </div>
        </div>
    );
}; export default Band

