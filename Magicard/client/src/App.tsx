import React, { Component } from 'react';
import { makePrediction } from './predictors/predictor';
import close from './images/close.png';
import './App.css';

import BackSide from './components/Backside';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      kek: false,
      prediction: '',
      name: '',
      age: ''
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick = () => {
    const el: HTMLElement | null = document.getElementById('card');
    if (el) {
      if (!this.state.kek) {
        if ((this.state.name.length < 30) && (this.state.age.length < 4)
        && (this.state.name.length > 0) && (Number(this.state.age) > 0)) {
          this.setState({prediction: makePrediction(this.state.name, this.state.age)});
          el.classList.add('flipped');
          this.setState({kek: true});
        }
        else {
          if (this.state.name.length > 30) {
              this.setState({name: ''});
            }
          else if (this.state.age.length > 3) {
              this.setState({age: ''});
            }
        }
      }
      else {
        el.classList.remove('flipped');
        this.setState({kek: false});
      }
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="scroll-bar">
          <div className="App-logo"></div>
          <div className="card-container">
          <div className="gray-container" id="card">
            <div className="front">
              <div className="first">Magic card</div>
              <div className="second">
              <span className="name-header">Name:  </span>
              <input type="text" name="name" id="name" className="kek name-input" onChange={this.onChange} value={this.state.name} />
              </div>
              <div className="second">
                <span className="name-header">Age:  </span>
                <input type="number" name="age" id="age" className="kek age-input" onChange={this.onChange} value={this.state.age}/>
                <span className="clicks name-header" onClick={this.onClick}>LEARN TRUTH</span>
              </div>
            </div>
            <div className="back">
                <div className="close-container">
                  <img src={close} alt="close-icon" className="close" onClick={this.onClick}/>
                </div>
                <BackSide prediction={this.state.prediction}/>
            </div>
            </div>
          </div>
          <div className="help">
            What's up hackathon checker! This text will explain you how to use a magic card if you didn't get it.
            First, enter your name and age, then click a button to make a magic prediction. Its result depends on your own fate...
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
