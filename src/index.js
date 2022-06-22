import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';

import VenueContainer from './containers/VenueContainer';
import BookingContainer from './containers/BookingContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="venue" element={<VenueContainer />} />
        <Route path="booking" element={<BookingContainer />} />
    </Routes>
  </BrowserRouter>
);