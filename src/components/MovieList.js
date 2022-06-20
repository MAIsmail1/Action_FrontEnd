// import Movie from "./Movie";

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//           axios.get('http://127.0.0.1:8080/movies')
//             .then(res => {
//               const movies = res.data;
//               setMovies(movies);
//             }).catch((err) => console.log(err));
//     },[]
//   );
//   return (
//       <ul>
//         {
//             movies.map(movie =>
//               <li key={movie.id}>{`${movie.title} | ${movie.rating} | ${movie.genre} | ${movie.timeLength} | ${movie.price}`}</li>
//             )
//         }
//       </ul>
//   );
// }

// export default MovieList;