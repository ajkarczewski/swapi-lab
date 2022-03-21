import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from  '../../services/api-calls'
import { Link } from 'react-router-dom'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  }, [])

  return (
    <> <div className='icon-container'>
      <div id="classDiv">
      NAME: {starshipDetails.name}
      <br></br>
      MODEL: {starshipDetails.model}
      <Link to="/starships" id="link-button">RETURN</Link>
      </div>
      </div>
    </>
  );
}

export default StarshipDetails;