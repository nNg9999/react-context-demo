import React, { Component } from 'react'


import { compose } from 'recompose';
import withThemeContext from '../hoc/withThemeContext';
import withLanguageContext from '../hoc/withLanguageContext';
// import withLog from '../hoc/withLog';


class Body extends Component {

  render() {

    const { theme, language } = this.props;

    return (
      <div className="body" style={{ color: theme.config.fontColor, background: theme.config.bodybg }}>
        <div>{language.labels.body}</div>
      </div>
    );
  };
};


export default compose(withThemeContext, withLanguageContext)(Body);