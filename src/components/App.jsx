import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onNumberFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeural => prevNeural + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const options = ['good', 'neutral', 'bad'];

  const total = good + neutral + bad;

  const positive = Math.round((good / total) * 100);

  return (
    <div>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onNumberFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </div>
  );
};
