import React, { Component, createContext } from 'react';

import storage from '../utils/storage';

import lightLogo from './../assets/medium_light.png';
import darkLogo from './../assets/medium_dark.png';

const { Provider, Consumer } = createContext();

export const themeConfig = {
  light: {
    headerBg: '#F7B30C',
    fontColor: 'black',
    bodybg: 'white',
    logo: lightLogo
  },
  dark: {
    headerBg: '#3c3c3c',
    fontColor: 'white',
    bodybg: 'black',
    logo: darkLogo
  }
};

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  toggleTheme = () => {
    this.setState(({ isChecked, theme }) => ({
      isChecked: !isChecked,
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };

  state = {
    theme: "light",
    isChecked: false,
    toggleTheme: this.toggleTheme,
  };


  componentDidMount() {
    const persistedContacts = storage.get("theme");

    if (persistedContacts) {
      this.setState({
        theme: persistedContacts,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme } = this.state;

    if (prevState.theme !== theme) {
      storage.save('theme', theme);
    }
  }

  render() {

    return <Provider value={{

      isChecked: this.state.isChecked,
      type: this.state.theme,
      config: themeConfig[this.state.theme],
      toggleTheme: this.toggleTheme,
    }}
    >
      {this.props.children}
    </ Provider>;
  }
}