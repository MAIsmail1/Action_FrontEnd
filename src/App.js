import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';
import React from 'react';

function App() {


// Carousel
import Carousel, {CarouselItem} from './components/Carousel';


export default function App() {
  return (
    <p>
    <div className="App">
      <Navigation />
      <VenueContainer/>
      <BookingContainer/>
      <AboutUs />
      <Footer />
    </div>
  )
      <Carousel>
        <CarouselItem>
          Image 3
        </CarouselItem>
        <CarouselItem>
          Image 2
        </CarouselItem>
        <CarouselItem>
          Image 3
        </CarouselItem>
      </Carousel>

    </div>
    </p>
  );
}




export default App;
// export default App;
