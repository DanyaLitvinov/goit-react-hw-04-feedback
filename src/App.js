import React, { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });



  
  const onLeaveFeedback = (e) => {
    const currentBtnValue = e.currentTarget.value;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [currentBtnValue]: prevFeedback[currentBtnValue] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const valuesArr = Object.values(feedback);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((feedback.good / countTotalFeedback()) * 100);
  };

  const btnNames = Object.keys(feedback);
  const totalFeedback = countTotalFeedback();

  return (
    <div className="App">
      <section>
        <FeedbackOptions options={btnNames} onLeaveFeedback={onLeaveFeedback} />
        {totalFeedback > 0 ? (
          <Statistics
            stat={feedback}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </section>
    </div>
  );
}

export default App;
