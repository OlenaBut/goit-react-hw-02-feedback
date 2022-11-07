import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(item => (
    <li key={item}>
      <button className= {css.button} type="button" onClick={onLeaveFeedback}>
        {item}
      </button>
    </li>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};