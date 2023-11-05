import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateClics = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={() => this.updateClics('good')}>Good</button>
          <button onClick={() => this.updateClics('neutral')}>Neutral</button>
          <button onClick={() => this.updateClics('bad')}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </section>
    );
  }
}
