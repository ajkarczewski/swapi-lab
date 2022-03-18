import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from  '../../services/api-calls'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  }, [])

  return (
    <>
      <h2> Starship Details</h2>
      Name: {starshipDetails.name}{starshipDetails.model}
      
    </>
  );
}

export default StarshipDetails;