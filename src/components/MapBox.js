import React, {Suspense, Component} from 'react'
import ReactMapboxGl, { Source, Popup } from "react-mapbox-gl";
import FooterIns from './Footer/FooterIns';
import Masjid from './Istiqlal.jpg'
import { Spinner } from './Spinner'

								// BELOM KELAR
const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoia3VldGFiYnkiLCJhIjoiY2psbmNham5rMWhocTN2bjdxYXo2Y29rMiJ9.owkPCPzjsCYupwR3IKoNtA'
});

const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    "mapbox://mapbox.satellite",
  ],
  "tileSize": 512
};

class MapBox extends Component{

	clickMap = (e) =>{
		console.log(e);
	}

	render(){
		return(
			<div>
			<Suspense fallback={<Spinner size='medium' />} >
				<Map
				  style={"mapbox://styles/mapbox/streets-v9"}
				  center={[106.8271528, -6.1753924]}
        		  zoom={[11]}
				  containerStyle={{
				    height: "100vh",
				    width: "100vw"
				  }}>
				<Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
				<Popup
				  coordinates={[106.8313176, -6.1699753]}
				  style={{width:'80px', height:'30px'}}
				  onClick={this.clickMap}
		          offset={{
		          'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
		            }}>
				  <img width='100%' height='100%' src={Masjid} alt="Masjid Istiqlal"/>
				</Popup>
				</Map>
        <FooterIns />
        </Suspense>
			</div>
		);
	}
}

export default MapBox;
