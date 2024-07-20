const advancedMatching = undefined; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};

 // For tracking page view

let ReactPixel: any;

function initFBPixel(PIXEL_ID: string){
    if(PIXEL_ID){
        ReactPixel =  require('react-facebook-pixel').default;
        ReactPixel.init(PIXEL_ID, advancedMatching, options);
    }
}


async function setPageAnalytics(){
    ReactPixel?.pageView();
}

export  {  initFBPixel, setPageAnalytics };