import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  onPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivFeedback = this.onPositivePercentage();

    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateClick}
          />
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {total}</p>
          <p>Positiv feedback: {positivFeedback}%</p>
        </div>
      </section>
    );
  }
}
