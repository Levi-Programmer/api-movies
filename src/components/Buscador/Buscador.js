import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { getMovies, addMovieFavorite } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
       <h2 style={{textAlign: "center", marginBottom: "50px", marginTop: "100px"}}>Search movies and series</h2>
        <form style={{display: "flex", justifyContent: "center"}} className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
       
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-dark">Search</button>
        </form>
        <ul>
          {this.props.movies?.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`} style={{fontSize: "19px", textDecoration: "none"}}>{movie.Title}</Link>
                <p>- {movie.Year}</p>
                <img src={movie.Poster}></img>
                <button
                className="btn btn-success"
                style={{borderRadius: "0", display: "block", marginLeft: "100px", marginTop: "30px", color: "white", marginBottom: "50px"}}
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  Favorites
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}



export default connect(mapStateToProps, { getMovies, addMovieFavorite })(
  Buscador
);
