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
					name={places[i].name} 
					region={places[i].region} 
					location={places[i].location} 
					telephone={places[i].telephone}
					/>
				</Link>
				);
			}).slice(0, 10)	
		}
		</div>
	);
}

export default PlaceList;