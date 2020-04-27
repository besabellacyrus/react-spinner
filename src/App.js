import React from 'react';
import useSpinner from './spinner/useSpinner';

import './App.css';

function App() {
  const [spinner, showSpinner, hideSpinner] = useSpinner();

  const handleSubmit = () => {
    //mimic api call
    showSpinner();
    setTimeout(() => {
      hideSpinner();
    }, 2000);
  }


  return (
    <div className="App">
      <button onClick={handleSubmit}>Fetch</button>
      { spinner }
    </div>
  );
}

export default App;
