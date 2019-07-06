import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './containers/aboutMePage/aboutMePageContainer';
import NavigationBar from './components/navigationBar/navigationBar';
import { library } from '@fortawesome/fontawesome-svg-core';

// Sort out Library Font Awesome Function Later

// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
// library.add(faTwitterSquare);


const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <AboutMe />
    </>
  );
}

export default App;
