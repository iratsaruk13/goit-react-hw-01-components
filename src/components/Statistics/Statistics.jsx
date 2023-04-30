import PropTypes from "prop-types";
import {
  Statistic,
  Title,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPer,
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPer>{percentage}</StatsPer>
          </StatsItem>
        ))}
      </StatsList>
    </Statistic>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
