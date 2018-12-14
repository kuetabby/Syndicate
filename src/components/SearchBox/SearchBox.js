import React from 'react'
import './style.css'

function SearchBox({searchChange}){
	return(
		<div className="pa2">
		 <input
		 className='search pa2 ba b--green bg-lightest-blue'
		 type='search'
		 placeholder='Search Your Region'
		 onChange={searchChange} 
		/>
		</div>
	);
}

export default SearchBox;