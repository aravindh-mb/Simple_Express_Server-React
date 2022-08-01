import React , {Component} from 'react'
// import {getMovies} from '../services/fakeMovieService'
import '../services/movie.scss';
// import swal from 'sweetalert';

class Movie extends Component{
// constructor(){
//     super();

    state = {
        moviesArray :[]
    }
// }

componentDidMount(){
  const APIUrl = "http://localhost:3000/data"
    fetch(APIUrl)
        .then(response => response.json())
        // .then(responsez => console.log(responsez))
        .then(data =>this.setState({moviesArray:data}))
        .catch(error => alert("error"+error))
}

handleData = (movie)=>{
    console.log(movie)
    const movies = this.state.moviesArray.filter(m =>m._id !== movie._id)
    console.log(movies ) 
    console.log("one ")
    this.setState({ moviesArray : movies })  
}
render(){
    return(
          <>
  <div className="container">
  <div>
    <br></br>
    <table className="table table-responsive table-hover ">
        <thead className="bg-primary">
            <tr>
            <th>Title</th>
            <th>IMDB ID</th>
            <th>Year</th>
            <th>Poster</th>
            <th>Search</th>
            </tr>
        </thead>
    <tbody>
        {
        this.state.moviesArray.map((movie,index)=>(
            <tr key={movie._id}>
            <td>{movie.genre.name}</td>
            <td>{movie.title}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><img src={movie.Poster} alt="image"  loading="lazy"></img></td>
            <td><button onClick={()=>this.handleData(movie)} type="button" className="btn btn-danger">Delete</button></td>
            </tr>
        ))
        }
    </tbody>
       </table>
    </div>
  </div>
          </>
        )
    }
}
export default Movie;

// import React, { Component} from 'react';
// import {getMovies} from '../services/movieData'

// class Movie extends Component{

//     state = {

//         movies : getMovies()
//     }

//     handleDelete = (movie) => {
//         //console.log(movie)
//         const movies = this.state.movies.filter(m => m._id !== movie._id)
//         console.log(movies)
//         this.setState({ movies : movies})
//     }


//     render(){
//         const {length:count} = this.state.movies

//         if(count === 0)
//             return <p>There is no movies in the database</p>;

//          return(
//             <React.Fragment>
//         <div>
//             <p>Showing {count} movies in the database</p>
//             <table className="table">
//             <thead>
//     <tr>
//       <th>Title</th>
//       <th>Genre</th>
//       <th>Stock</th>
//       <th>Rate</th>
//     </tr>
//   </thead> 
//   <tbody>{
//       this.state.movies.map(movie => (
        
//         <tr key={movie._id}>
//         <td>{movie.title}</td>
//         <td>{movie.genre.name}</td>
//         <td>{movie.numberInStock}</td>
//         <td>{movie.dailyRentalRate}</td>
//         <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//       </tr>   
//         ))   
//       }
  
// </tbody>
// </table>
//            </div> 
//             </React.Fragment>
       
//             )
//     }

// }

// export default  Movie;