import { MessageFeedback } from 'components/MessageFeedback/MessageFeedback';

import {
  StatisticsDiv,
  StatisticsTitleH,
  BlockStatisticsDiv,
  StatisticsSpan,
} from './Statistics.styled';

export const Statistics = ({ clicks, total, positiv }) => {
  return (
    <>
      <StatisticsDiv>
        <StatisticsTitleH>
          Статистика 
        </StatisticsTitleH>
        {total() ? (
          <BlockStatisticsDiv>
            <StatisticsSpan>Good {clicks.good}</StatisticsSpan>
            <StatisticsSpan>
              Neutral {clicks.neutral}
            </StatisticsSpan>
            <StatisticsSpan>Bad {clicks.bad}</StatisticsSpan>
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
