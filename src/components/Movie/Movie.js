import { Button } from "bootstrap";
import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="movie-detail" style={{marginTop: "100px"}}>
        <h1 >{this.props.movie.Title}</h1>
        <p>Year -{this.props.movie.Year}</p>
        <img src={this.props.movie.Poster}></img>
        <p style={{paddingRight: "10px", paddingTop: "10px"}}>{this.props.movie.Plot}</p>
        <button className="btn btn-success" style={{marginBottom: "30px", marginRight: "10px"}}>👍</button>
        <button className="btn btn-danger" style={{marginBottom: "30px"}}>👎</button>
      </div>
    );
  }
}

function mapState(state) {
  return {
    movie: state.movieDetail,
  };
}

export default connect(mapState, { getMovieDetail })(Movie);
