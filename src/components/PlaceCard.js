import React, { Suspense, useReducer } from 'react';
import PlaceList from './Place/PlaceList';
import FooterIns from './Footer/FooterIns';
import SearchBox from './SearchBox/SearchBox';
import { places } from './Place/places';
import { Spinner } from './Spinner'


function PlaceCard(){
	const [state, dispatch] = useReducer((state, action) =>{
		switch(action.type){
			case 'Change_Field': return{
				...state,
				searchfield: action.payload
			}
			case 'Request_Success': return{
				...state,
				palace: action.payload,
			}
			default: return state
		}
	},{
		palace: places,
		searchfield: '',
	})

	const onSearchChange = (event) =>{
		dispatch({type: 'Change_Field', payload: event.target.value})
	}

  	const filteredPlace = state.palace.filter(place =>{
		return(
			 place.name.toLowerCase().includes(state.searchfield.toLowerCase())
				||
			 place.region.toLowerCase().includes(state.searchfield.toLowerCase())
		);
	})
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