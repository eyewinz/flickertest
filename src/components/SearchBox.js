import React from "react";
import axios from "axios";
import ImageResult from "./ImageResult";
import "./SearchBox.css";

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      inputValue: "",
    };
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
    axios
      .get(
        `https://api.flickr.com/services/feeds/photos_public.gne?tags=${event.target.value}&format=json&nojsoncallback=true`
      )
      .then((res) => {
        console.log(res.data.items);
        this.setState({
          result: res.data.items,
        });
      })
      .catch((err) => {});
  };

  render() {
    return (
      <>
        <div className="SearchBox">
          <label className="Label">What do you like to see : </label>
          <input
            className="InputBox"
            type="text"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            placeholder="Enter your search term here..."
          />
        </div>
        <ImageResult resultItems={this.state.result} />
      </>
    );
  }
}
