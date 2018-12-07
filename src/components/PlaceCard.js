import React, { Suspense, Component } from 'react';
import PlaceList from './Place/PlaceList';
import FooterIns from './Footer/FooterIns';
import SearchBox from './SearchBox/SearchBox';
import { places } from './Place/places';
import { Spinner } from './Spinner'


class PlaceCard extends Component {
	constructor(){
		super();
		this.state ={
			places: places,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}

  render(){
  	const {places, searchfield} = this.state;
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
	      			<SearchBox searchChange={this.onSearchChange}/>
		      			<PlaceList places={filteredPlace}/>
	      		<FooterIns />
      		</Suspense>
      	</div>
	);
  }
}

export default PlaceCard;