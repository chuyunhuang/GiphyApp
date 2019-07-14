import React from "react";
import axios from "axios";
import APIKEY from "./giphy";
import OneGif from "./singleCard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      result: []
    };
  }

  handleChange = e => {
    const input = e.target.value;
    this.setState({ searchInput: input });
  };

  handleClick = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${
          this.state.searchInput
        }`
      )
      .then(data => {
        this.setState({ result: data.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="entire-app-view">
        <div className="main-header">Yun's Giphy Search App</div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter sth"
            onChange={this.handleChange}
          />
          <button className="search-btn" onClick={this.handleClick}>
            Go!
          </button>
        </div>
        <div className="card-wrapper">
          {this.state.result.map((e, i) => {
            return (
              <OneGif id={e.id} imageUrl={e.images.original.url} key={i} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
