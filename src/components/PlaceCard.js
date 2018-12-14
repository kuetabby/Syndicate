import React, { Suspense, useState } from 'react';
import PlaceList from './Place/PlaceList';
import FooterIns from './Footer/FooterIns';
import SearchBox from './SearchBox/SearchBox';
import { places } from './Place/places';
import { Spinner } from './Spinner'


function PlaceCard(){
	useState(places)
	const [searchfield, setField] = useState('')

	const onSearchChange = (event) =>{
		setField(event.target.value)
	}

  	const filteredPlace = places.filter(place =>{
		return(
			 place.name.toLowerCase().includes(searchfield.toLowerCase())
				||
			 place.region.toLowerCase().includes(searchfield.toLowerCase())
		);
	})
	console.log(filteredPlace)
	return(
		<div className='tc'>
			<Suspense fallback={<Spinner size='medium' />}>
	      		<h1>Penyewaan Lapangan Badminton</h1>
	      			<SearchBox searchChange={onSearchChange}/>
		      			<PlaceList places={filteredPlace}/>
	      		<FooterIns />
      		</Suspense>
      	</div>
	);
}

export default PlaceCard;