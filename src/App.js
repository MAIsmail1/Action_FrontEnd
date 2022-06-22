import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import VenueContainer from './containers/ManagementContainer';
import BookingContainer from './containers/BookingContainer';
import React from 'react';
import Carousel, {CarouselItem} from './components/Carousel';
import MonthlyNewsletter from './components/MonthlyNewsletter';
import TopFilms from './components/TopFilms';
// import { Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import MovieList from './components/MovieList';
import NewBooking from './components/NewBooking';



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
