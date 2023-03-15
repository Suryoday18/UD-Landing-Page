import React from 'react';
import Card from './Components/Cards/Card';
import DetailsAndLinks from './Components/Cards/DetailsAndLinks';
import CheckListAndForm from './Components/Cards/CheckListAndForm';
import images from './Components/data';
import GovtStrip from './Components/GovtStrip';
import Slideshow from './Components/ImageSlider';
import Footer from './Components/Footer';
import Navbar from './Components/NavMUI';
import NewsTicker from './Components/NewsTicker';
import Strip from './Components/Strip';

function App() {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      <Navbar />
      <Slideshow images={images}/>
      <NewsTicker />
      <Card />
      <DetailsAndLinks />
      <CheckListAndForm />
      <Footer />
    </React.Fragment>
  );
}

export default App
