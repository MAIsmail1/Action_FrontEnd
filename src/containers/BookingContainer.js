import BookingList from '../components/customerPage/BookingList';
import NewBooking from '../components/customerPage/NewBooking';
import React, {Fragment} from 'react';
import MovieList from '../components/customerPage/MovieList';

const BookingContainer = () => {


    return(
        <>
            <Fragment>
                <h1></h1>
                <BookingList/>
                <NewBooking/>
                

            </Fragment>
        </>
    )
}

export default BookingContainer;