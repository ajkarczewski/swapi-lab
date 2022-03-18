const baseUrl = 'https://swapi.dev/api'

export function getStarships() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}

export function getDetails(spaceShipURL) {
return fetch (`${spaceShipURL}`)
.then(res => res.json())
}

