import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Navigation from './components/Navigation';
import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';
function App() {
  return (
    <div className="App">
      <Navigation />
    <VenueContainer/>
    <BookingContainer/>
      <AboutUs />
      
      <Footer />

      
    </div>
  )
}




export default App;
