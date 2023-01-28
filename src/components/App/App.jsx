import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (previousValue, number) => previousValue + number,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div className={css.container}>
        <div className={css.feedbackBox}>
          <Section title="Please leave feedback!">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onClickBtn}
            />
          </Section>

          <Section title={'Statistics'}>
            {this.countTotalFeedback() === 0 ? (
              <Notification Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
