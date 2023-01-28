import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div>
        <p className={css.statisticItem}>
          Good: <span className={css.statisticValue}>{good}</span>
        </p>
        <p className={css.statisticItem}>
          Neutral: <span className={css.statisticValue}>{neutral}</span>
        </p>
        <p className={css.statisticItem}>
          Bad: <span className={css.statisticValue}>{bad}</span>
        </p>
        <p className={css.statisticItem}>
          Total: <span className={css.statisticValue}>{total}</span>
        </p>
        <p className={css.statisticItem}>
          Positive feedback:{' '}
          {Number.isNaN(positivePercentage) ? (
            <span className={css.statisticValue}>0%</span>
          ) : (
            <span className={css.statisticValue}>{positivePercentage}%</span>
          )}
        </p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
