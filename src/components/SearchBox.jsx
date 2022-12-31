import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <>
        <div className=" mb-10 bg-blue-100 h-32 w-1/1 flex justify-center items-center">
          <input
            onChange={this.props.getText}
            type="text"
            placeholder="Search Image Here"
            className=" w-5/12 h-14 rounded-lg pl-3 focus:outline-none focus:border-purple-700 focus:ring-blue-700 focus:ring-2"
          ></input>
        </div>
      </>
    );
  }
}
