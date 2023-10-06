import { useState } from 'react';

import { MessageFeedback } from 'components/MessageFeedback/MessageFeedback';

import { Statistics } from './Statistics/Statistics';

import { Feedback } from './Feedback/Feedback';


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
   

  const handleClickTwo = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () =>
    good > 0 ? (
      `${Math.floor((good / countTotalFeedback()) * 100)}%`
    ) : (
      <MessageFeedback message="No  positive feedback!" />
    );

  
    
    const invitationMessage = 'Надайте , будь ласка , відгук ...';

    return (
      <>      
        <Feedback
          invitationMessage={invitationMessage}
          options={['good', 'neutral', 'bad']}          
          onLeaveFeedback={handleClickTwo}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positiv={countPositiveFeedbackPercentage}
        />
      </>
    );
  
}

