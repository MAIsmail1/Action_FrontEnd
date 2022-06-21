import './App.css';
import React from 'react';
import Minions from "./images/Minions.jpeg"

// Carousel
import Carousel, {CarouselItem} from './components/Carousel';


export default function App() {
  return (
    <div className="App">
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

    </div>
  );
}



// export default App;
