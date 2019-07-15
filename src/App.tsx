import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './containers/aboutMePage/aboutMePageContainer';
import NavigationBar from './components/navigationBar/navigationBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import AllPages from './containers/allPages/allPages';

// Sort out Library Font Awesome Function Later

// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
// library.add(faTwitterSquare);


const App: React.FC = () => {
  return (
    <>
      <AllPages />
    </>
  );
}

export default App;
