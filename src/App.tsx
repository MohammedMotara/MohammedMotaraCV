import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/navigationBar';
import AllContent from './containers/allContent/allContent';



const App: React.FC = () => {
  
  return (
    <>
      <NavigationBar />
      <AllContent />
    </>
  );
}

export default App;
