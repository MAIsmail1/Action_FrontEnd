import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';

import VenueContainer from './containers/ManagementContainer';
import BookingContainer from './containers/BookingContainer';
import MovieContainer from './containers/MovieContainer';
import BookingConfirmation from './containers/BookingConfirmation';
import NewMovieContainer from './containers/NewMovieContainer';
import EditButton from './components/managementPage/EditButton';
import VenueList from './components/managementPage/VenueList';
import VenueAdd from './components/managementPage/VenueAdd';
import EditMovieById from './components/managementPage/EditMovieById';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="employee-login" element={<VenueContainer />} />
        <Route path="view_all_movies" element={<MovieContainer />} />
        <Route path="return_from_movies" element={<VenueContainer/>} />
        <Route path="confirmation" element={<BookingConfirmation/>} />
        <Route path="/employee-login/add_new_movie" element={<NewMovieContainer/>} />
        <Route path="/employee-login/edit_movie" element={<EditMovieById />} />
        {/* <Route path="booking" element={<BookingContainer />} /> */}
        <Route path="employee-login/list-of-venue" element={<VenueList/>} />
        <Route path="employee-login/add-venue" element={<VenueAdd/>} />


    </Routes>
  </BrowserRouter>
);