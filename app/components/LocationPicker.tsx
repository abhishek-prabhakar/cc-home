import {APIProvider} from '@vis.gl/react-google-maps';


function LocationPicker(){

    return <div>
        <APIProvider apiKey={'Your API key here'} onLoad={() => console.log('Maps API has loaded.')}>
        <h1>Hello, world!</h1>
        </APIProvider>
    </div>
}

export default LocationPicker;