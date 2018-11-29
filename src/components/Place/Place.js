import React from 'react';
import './style.css'

const Place = ({name,location,region,images,telephone}) =>{
	return(
		<div className=" sheet bg-light-blue dib br2 pa3 ma2 grow">
		<h2>{region}</h2>
			<div>
			<img src={``} alt="photos"/>
			<h3>{name}</h3>
			<h5>{location}</h5>
			<p>{telephone}</p>
			</div>
		</div>
	);
}

export default Place;