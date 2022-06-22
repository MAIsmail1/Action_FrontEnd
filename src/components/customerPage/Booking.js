const Booking = ({booking}) => {

    const {movieName, venue, timeTable} = booking

    return(
        <>
        <p>Movie Details:</p>
        <p>Movie Title: {movieName}</p>
        <p>Venue: {venue}</p>
        <p>Timings: {timeTable}</p>
        </>
    )

}

export default Booking;