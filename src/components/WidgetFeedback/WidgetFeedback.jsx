import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section"; 
import { Notification } from "components/Notification";
import css from 'components/WidgetFeedback/WidgetFeedback.module.css'

class WidgetFeedback extends Component {
 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 onClickBtn = e => {
    this.setState(prevState => {
      return {
        [e.target.innerText]: prevState[e.target.innerText] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const total = this.countTotalFeedback();
    console.log(total);
    return <> <div className={css.widgetFeedbackContainer} >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onClickBtn}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
    </>
  }
}

export default WidgetFeedback;