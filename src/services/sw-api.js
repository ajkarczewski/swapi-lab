const baseUrl ='http://swapi.dev/api/'

export function getStarship() {
  return fetch('$baseUrl}/starship')
  .then(res => res.json())
}