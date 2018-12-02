import React from 'react';
import Place from './Place'
import { Link} from 'react-router-dom';

const PlaceList = ({places}) =>{
	return(
		<div>
		{
			places.map((user,i) =>{
				return(
				<Link to={`/search/${user.id}`} key={i.toString()}>
					<Place
					region={places[i].region} 
					images={places[i].images}
					name={places[i].name} 
					location={places[i].location} 
					/>
				</Link>
				);
			})	
		}
		</div>
	);
}

export default PlaceList;