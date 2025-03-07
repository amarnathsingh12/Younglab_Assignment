import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    fetch(`http://localhost:3001/api/greet?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
          setError('');
        } else if (data.error) {
          setError(data.error);
          setMessage('');
        }
      });
  };

  return (
    <div className="App">
      <h1>Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Get Greeting</button>

      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
