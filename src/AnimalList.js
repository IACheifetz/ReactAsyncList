import React from 'react';

export default function AnimalList({ Animals }) {
  return <div className='animal-list'>
    { 
      Animals.map(Animal => 
        <div className="animal" key={Animal.Name + Animal.Habitat}>
          <h2>Species: {Animal.Name}</h2>
          <h3>Type: {Animal.Type}</h3>
          <p>Habitat Range: {Animal.Habitat}</p>
          <p>Life Expectancy: {Animal.LifeExpectancy} years </p>
        </div>
      )
    }

  </div>;
}