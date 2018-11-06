import React from 'react';
import './style.css'

const Place = ({name,location,region,images,telephone}) =>{
	return(
		<div className=" sheet bg-light-blue dib br2 pa3 ma2 grow">
		<img src={``} alt="photos"/>
			<div>
			<h3>{name}</h3>
			<h4>{region}</h4>
			<h5>{location}</h5>
			<p>{telephone}</p>
			</div>
		</div>
	);
}

export default Place;