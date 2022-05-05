import React from 'react';

export default function GameList({ Games }) {
  return <div className='game-list'>
    { 
      Games.map(Game => 
        <div className="game" key={Game.Name + Game.Console}>
          <h2>{Game.Name}</h2>
          <h3>Released On: {Game.Console}</h3>
          <p>Cost On Release: ${Game.OriginalPrice}</p>
        </div>
      )
    }

  </div>;
}