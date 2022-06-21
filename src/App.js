import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';
import React from 'react';
import Carousel, {CarouselItem} from './components/Carousel';






export default function App() {
  return (
    <div className="App">
     <Header />
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
  
      
  );
}




// export default App;
// export default App;
