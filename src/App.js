import Footer from './components/Footer';
import React from 'react';
import Navigation from './components/Navigation';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';


function App() {
  return (
    <>
    <Navigation />
    <VenueContainer/>
    <BookingContainer/>
    <Footer />
    </>
  );
}

export default App;
