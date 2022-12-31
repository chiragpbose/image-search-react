import React, { Component } from "react";
import ImageUserInterface from "./components/imageUserInterface";
import SearchBox from "./components/SearchBox";
import Loader from "./components/Loader";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchtext: "house",
    };
  }

  fetchApi = () => {
    fetch(
      `https://api.unsplash.com/search/photos?page=2&query=${
        this.state.searchtext || "car"
      }&client_id=GNJZxCKJyFr3eDd_305YbiL4JyzOFcg6NZYCkSyF-_A`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  };

  searchbar = (e) => {
    this.setState({
      searchtext: e.target.value,
    });
  };

  componentDidMount() {
    this.fetchApi();
  }
  componentDidUpdate(previousProp, previousState) {
    console.log(previousState);
    if (previousState.searchtext !== this.state.searchtext) {
      this.fetchApi();
    }
  }
  render() {
    return (
      <>
        <SearchBox getText={this.searchbar} />
        {!this.state.data ? <Loader /> : <ImageUserInterface getData={this.state.data} />}
      </>
    );
  }
}
