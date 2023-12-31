import { MessageFeedback } from 'components/MessageFeedback/MessageFeedback';

import {
  StatisticsDiv,
  StatisticsTitleH,
  BlockStatisticsDiv,
  StatisticsSpan,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiv }) => {
  return (
    <>
      <StatisticsDiv>
        <StatisticsTitleH>
          Статистика 
        </StatisticsTitleH>
        {total() ? (
          <BlockStatisticsDiv>
            <StatisticsSpan>Good {good}</StatisticsSpan>
            <StatisticsSpan>
              Neutral {neutral}
            </StatisticsSpan>
            <StatisticsSpan>Bad {bad}</StatisticsSpan>
            <StatisticsSpan>Total {total()}</StatisticsSpan>

            {positiv() ? (
              <StatisticsSpan>Positive feedback -  {positiv()}</StatisticsSpan>
            ) : (
              <MessageFeedback message="No positive feedback! 2" />
            )}
          </BlockStatisticsDiv>
        ) : (
          <MessageFeedback message="No  feedback!" />
        )}
      </StatisticsDiv>
    </>
  );
};
