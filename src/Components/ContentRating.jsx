import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRates: 0,

      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRates : prevState.totalRates + 1
        }));
      },

      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRates : prevState.totalRates + 1
        }));
      },
    };

   
  }
  render() {
    return (
      <div className="content-rating">
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p>Total Rates ({this.state.totalRates})</p>
      </div>
    );
  }
}

export default ContentRating;
