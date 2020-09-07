import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/loading.json";

class Search extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={70} width={100} />
      </div>
    );
  }
}

export default Search;
