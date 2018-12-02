import React from 'react';
import './style.css'

const Place = ({name,location,region,images,telephone}) =>{
	return(
		<div className=" sheet bg-light-blue dib br3 pa2 ma3 grow" style={{maxWidth: '100%', maxHeight: '100%'}}>
		<h2>{region}</h2>
		<img width={'50%'} height={'50%'} src={images} alt="photos"/>
			<div>
			<h3>{name}</h3>
			<h4>{location}</h4>
			<p>{telephone}</p>
			</div>
		</div>
	);
}

export default Place;