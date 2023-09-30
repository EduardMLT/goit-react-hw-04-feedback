import {
  FeedbackOptionsDiv,
  FeedbackOptionsH,
  BlockButton,
  BlockButtonButtons,
} from '../FeedbackOptions/FeedbackOptions.styled';

export const Feedback = ({ invitationMessage, options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackOptionsDiv>
        <FeedbackOptionsH>{invitationMessage}</FeedbackOptionsH>
        <BlockButton>
          {options.map(option => (
            <BlockButtonButtons
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BlockButtonButtons>
          ))}
        </BlockButton>
      </FeedbackOptionsDiv>
    </>
  );
};
