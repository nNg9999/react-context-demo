import React, { Component } from 'react'

import { compose } from "recompose";

import withThemeContext from '../hoc/withThemeContext';
import withLanguageContext from '../hoc/withLanguageContext';
import withLog from '../hoc/withLog';



class Header extends Component {

  render() {
    const { theme, language } = this.props;
    const { toggleTheme } = this.props.theme;
    const { toggleLanguage } = this.props.language;

    return (
      <header style={{ background: theme.config.headerBg, color: theme.config.fontColor }}>

        <div className="logo-container">
          <img src={theme.config.logo} alt="img" />
        </div>
        <div className="language-selector">
          {language.labels.langSelectLabel}
          <select value={language.name} onChange={(event) => toggleLanguage(event.currentTarget.value)}>
            <option value="en">English</option>
            <option value="gr">Germnan</option>
            <option value="fr">French</option>
            <option value="sp">Spanish</option>
            <option value="hn">Hindi</option>
          </select>
        </div>
        <div className="theme-selector">
          <span className="label">{language.labels.themeSelectLabel}({theme.type})</span>
          <label className="switch">
            <input type="checkbox" checked={theme.type === 'light'} onChange={(event) => toggleTheme(event.currentTarget.value)} />
            <span className="slider round"></span>

          </label>
        </div>
      </header>
    );
  };
};

export default compose(withLog, withThemeContext, withLanguageContext)(Header);