import BookingList from '../components/BookingList';
import NewBooking from '../components/NewBooking';
import React, {Fragment} from 'react';
import MovieList from '../components/MovieList';

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