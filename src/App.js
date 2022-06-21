import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';
import React from 'react';

// Carousel
import Carousel, {CarouselItem} from './components/Carousel';
import MonthlyNewsletter from './components/MonthlyNewsletter';


export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousel>
        <CarouselItem>
        <img src={require("./images/Minions.jpeg")}  alt="Minions" width="70%"/>
        </CarouselItem>
        <CarouselItem>
        <img src={require("./images/Lightyear.jpeg")}  alt="Lightyear" width="70%"/>
        </CarouselItem>
        <CarouselItem>
        <img src={require("./images/Giftcard.jpeg")}  alt="Giftcard" width="70%"/>
        </CarouselItem>
      </Carousel>
      <VenueContainer/>
      <BookingContainer/>      
      <MonthlyNewsletter/>
      <AboutUs />
      <Footer />
      

    </div>
  
      
  );
}




// export default App;
// export default App;
