import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
return (
	<><ul>
		<li className={css.item}>
			<p className={css.text}>Good:{good}</p>
		</li>
		<li className={css.item}>
			<p className={css.text}>Neutral:{neutral}</p>
		</li>
		<li className={css.item}>
			<p className={css.text}>Bad:{bad}</p>
		</li>
		<li className={css.item}>
			<p className={css.text}>Total:{total}</p>
		</li>
		<li className={css.item}>
			<p className={css.text}>Positive feedback:{positiveFeedback} %</p>
		</li>
	</ul>
		</>
	);
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};