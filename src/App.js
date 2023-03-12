import React from 'react';
import Card from './Components/Cards/Card';
import FooterOne from './Components/Cards/footer';
import images from './Components/data';
import GovtStrip from './Components/GovtStrip';
import Slideshow from './Components/ImageSlider';
import LastFooter from './Components/lastFooer';
import Navbar from './Components/NavMUI';
// import NavigationBar from './Components/NavigationBar';
import NewsTicker from './Components/NewsTicker';
import Strip from './Components/Strip';

function App() {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      {/* <NavigationBar /> */}
      <Navbar />
      <Slideshow images={images}/>
      <NewsTicker />
      <Card />
      <FooterOne />
      <LastFooter />
    </React.Fragment>
  );
}

export default App
