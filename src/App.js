import './App.css';
import Footer from './components/customerPage/structure/Footer';
import AboutUs from './components/customerPage/AboutUs';
import Header from './components/customerPage/structure/Header';
import BookingContainer from './containers/BookingContainer';
import React from 'react';
import Carousel, {CarouselItem} from './components/customerPage/Carousel';
import TopFilms from './components/customerPage/TopFilms';
// import { Container } from '@mui/material';





export default function App() {
  return (
    <div className="App">
      
      
{/* <Container
  container
  justifyContent="center"
  alignItems="center"
> */}
     <Header />
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
      <TopFilms/>
      {/* <VenueContainer/> */}
      <BookingContainer/>      
      {/* <MonthlyNewsletter/>*/}
      <AboutUs />
      <Footer />


    </div>
  
      
  );
}
