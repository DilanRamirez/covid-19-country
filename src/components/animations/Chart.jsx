import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/chart.json";

class ChartAnimation extends Component {
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
        <Lottie options={defaultOptions} height={70} width={200} />
      </div>
    );
  }
}

export default ChartAnimation;
