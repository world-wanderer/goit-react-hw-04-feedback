import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import React, { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickFeedback = event => {
    console.log(event.target);
    const { name } = event.target;
    if (name === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (name === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <>
      <SectionTitle title="Please, leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClickFeedback}
        />
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </SectionTitle>
    </>
  );
}

export default App;
