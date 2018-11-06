import React from 'react'

const Scroll = (prop) =>{
	return(
		<div style={{overflowY:'scroll', border:'2px solid black', height:'800px'}}>
		 {prop.children}
		</div>
	);
}

export default Scroll;