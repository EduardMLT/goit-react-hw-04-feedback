import { Component } from 'react';

import { MessageFeedback } from 'components/MessageFeedback/MessageFeedback';

import { Statistics } from './Statistics/Statistics';

import { Feedback } from './Feedback/Feedback';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
   

  handleClickTwo = type => {
    this.setState(prevState => {      
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (totalFeedback, value) => totalFeedback + value,
      0
    );

  countPositiveFeedbackPercentage = () =>
    this.state.good > 0 ? (
      `${Math.floor((this.state.good / this.countTotalFeedback()) * 100)}%`
    ) : (
      <MessageFeedback message="No  positive feedback!" />
    );

  render() {
    
    const invitationMessage = 'Надайте , будь ласка , відгук ...';

    return (
      <>      
        <Feedback
          invitationMessage={invitationMessage}
          options={['good', 'neutral', 'bad']}          
          onLeaveFeedback={this.handleClickTwo}
        />

        <Statistics
          clicks={this.state}
          total={this.countTotalFeedback}
          positiv={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
