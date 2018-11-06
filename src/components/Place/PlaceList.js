import React from 'react';
import Place from './Place'

const PlaceList = ({places}) =>{
	return(
		<div>
		{
			places.map((user,i) =>{
				return(
					<Place
					key={i.toString()} 
					name={places[i].name} 
					region={places[i].region} 
					location={places[i].location} 
					telephone={places[i].telephone}
					/>
				);
			})	
		}
		</div>
	);
}

export default PlaceList;