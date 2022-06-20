import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';
import React from 'react';
import MonthlyNewsletter from './components/MonthlyNewsletter';

function App() {


  return (
    <div className="App">
      <Navigation />
      <VenueContainer/>
      <BookingContainer/>
      <MonthlyNewsletter/>
      <AboutUs />

      <Footer />
    </div>
  )
}




export default App;
