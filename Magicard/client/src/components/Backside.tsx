import React, { Component } from 'react';
import { makePrediction } from '../predictors/predictor';

class BackSide extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { prediction: '' };
  }

  handleOnClick(event: any) : void {
    this.setState({ name: "Charles" });
  }


  render() {
    return (
      <div className="prediction">
        {this.props.prediction}
      </div>
    );
  }
}

export default BackSide;
