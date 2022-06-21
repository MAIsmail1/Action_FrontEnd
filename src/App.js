import './App.css';

// Carousel
import Carousel, {CarouselItem} from './components/Carousel';


export default function App() {
  return (
    <p>
    <div className="App">
      <Carousel>
        <CarouselItem>
        <img src="Lightyear.jpg" alt="Lightyear">
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



// export default App;
