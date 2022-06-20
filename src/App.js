import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';
import React from 'react';
import Carousel, {CarouselItem} from './components/Carousel';




export default function App() {
  return (
    <p>
    <div className="App">
      <Navigation />
      <Carousel>
        <CarouselItem>
          Image 1
        </CarouselItem>
        <CarouselItem>
          Image 2
        </CarouselItem>
        <CarouselItem>
          Image 3
        </CarouselItem>
      </Carousel>
      <VenueContainer/>
      <BookingContainer/>
      <AboutUs />
      <Footer />
      

    </div>
  )
      
    
    </p>
  );
}




// export default App;
// export default App;
