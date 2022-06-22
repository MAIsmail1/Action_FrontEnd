import BookingList from '../components/BookingList';
import NewBooking from '../components/NewBooking';
import React, {Fragment} from 'react';

const BookingContainer = () => {


    return(
        <>
            <Fragment>
            <h1>Booking Container</h1>
            <BookingList/>
            <NewBooking/>
        </Fragment>
        </>
    )
}

export default BookingContainer;