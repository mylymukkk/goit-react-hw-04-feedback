import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onClickBtn = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        throw new Error('Error');
    }
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce(
      (previousValue, number) => previousValue + number,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.container}>
      <div className={css.feedbackBox}>
        <Section title="Please leave feedback!">
          <FeedbackOptions options={options} onLeaveFeedback={onClickBtn} />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() === 0 ? (
            <Notification Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </div>
  );
};
