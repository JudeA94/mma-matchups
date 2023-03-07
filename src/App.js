import { useState } from 'react';
import './App.css';

const App = () => {
  const [schedule, setSchedule] = useState(null)
  const currentYear = new Date().getFullYear()

const getMatchups = () => {
  fetch(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${currentYear}?key=2182ee43c6a142abb19f2461ce29b13e`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setSchedule(data)
    console.log(data[0].name)
  })
  .catch(err => console.error(err));
}
  return (
    <div>
    <button onClick={getMatchups}>load schedule</button>
    {schedule && <h1>{schedule[0].Name}</h1>}
    </div>
  );
}

export default App;
