// Core
import React, { Component } from 'react';

// Components
import Header from './Header';
import Body from './Body';

// НОС
// import withLog from './hoc/withLog';


// context
import ThemeContext from '../context/ThemeContex';
import LanguageContext from '../context/LanguageContext';

//utils
// import { ToastContainer, toast } from 'react-toastify';

//styles
// import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {


  render() {

    return (


      <ThemeContext >
        <LanguageContext>
          <Header />
          <Body />
        </LanguageContext>
      </ThemeContext>


    );
  }
}

export default App;