import React from 'react'
import { places } from './Place/places';
import { Link} from 'react-router-dom';
// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
/*function get(id){
    const isPlace = p => p.id === id
    return places.find(isPlace)
}*/
const Player = ({match}) => {
  console.log(match)
  const place = places.find(i => i.id === parseInt(match.params.id))
  
  if (!place) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div className="tc">
      <h2>IS THIS THE REAL LIFE ?</h2>
      <h3>IS THIS A FANTASY ?</h3>
    </div>
  )
}

export default Player