import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatList from './components/catList';
import CatDetails from './components/catDetails';
import NameInput from './components/nameInput';
import Activity from './components/activity';
import AddCat from './components/addCat';
import ActivityContextProvider from './contexts/activityContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Cat Context API Exercise</h1>
      </header>
      {/* ActivityContextProvider provides wrapped children components in order to pass props to them. */}
      <ActivityContextProvider>
        <CatList />
        <CatDetails />
        <NameInput />
        <Activity />
        <AddCat />
      </ActivityContextProvider>
    </div>
  );
}

export default App;
