import './App.css';
import { useState } from 'react';

function App() {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  return (
    <p>
      Position:
      {lat.toFixed(3)},
      {lng.toFixed(3)}
    </p>
  );
}

export default App;
