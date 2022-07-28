import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    console.log(this.props.movies);
    return (
      <div >
        <h2 style={{textAlign: "center", marginTop: "100px", marginBottom: "50px"}}>Your favorite Movies and Series</h2>
        <div>
          {this.props.movies?.map((movie) => {
            return (
              <div key={movie.imdbID} style={{marginLeft: "50px", marginTop: "10px"}}>
    
                <Link to={`/movie/${movie.id}`} style={{textDecoration: "none", paddingRight: "5px"}}>{"-" + movie.title}</Link>
                <button
                className="btn btn-danger"
                style={{borderRadius: "0px", fontSize: "10px", padding: "5px 10px", marginRight: "10px"}}
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatch(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapState, mapDispatch)(ConnectedList);
