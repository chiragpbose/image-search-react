import React, { Component } from "react";

export default class ImageUserInterface extends Component {
  render() {
    return (
      <div className=" flex flex-wrap pl-10 pr-10 justify-center">
        {this.props.getData.results.map((ele, i) => {
          return (
            <>
              <div key={i} className=" h-62 w-1/5 mr-10 mb-10">
                <img
                  src={ele.urls.regular}
                  alt="photos"
                  className=" w-1/1 h-full"
                />
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
