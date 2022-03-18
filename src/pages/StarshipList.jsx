import React, { useState, useEffect } from 'react';
import { getStarships } from '../services/api-calls'
import { Link } from 'react-router-dom';



const StarshipList = () => {
  const [starshipList, setStarshipList] = useState({})

  useEffect(() => {
    getStarships()
      .then(starshipList => setStarshipList(starshipList.results))
  })


  return (
    <>
    <div className='icon-container'>
      {starshipList.length ?
        <>
          {starshipList.map((starship, idx) => (
            <div id="classDiv" key={idx}>
              <Link to="/starship" state={{ starship }}>
                {starship.name}
              </Link><br />
            </div>
          ))}
        </>
        :
        <>
          <h2>Loading starships..</h2>
        </>}
        </div>
    </>
  );

}

export default StarshipList;