import { useState } from 'react'
import FightCard from './components/fightCard/fightCard'
import NavBar from './components/navBar/navBar'
import './App.css'

const App = () => {
  const [schedule, setSchedule] = useState(null)
  const [eventId, setEventId] = useState(null)
  const [matchUps, setMatchUps] = useState(null)
  const [loading, setLoading] = useState(false)
  const today = new Date()
  const currentYear = today.getFullYear()
  
  useState(() => {
    setLoading(true)
    fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/${currentYear}?key=2182ee43c6a142abb19f2461ce29b13e`,
    )
      .then((response) => response.json())
      .then((data) => {
        const upcoming = data.filter((event) => Date.parse(event.Day) > today).sort((a,b) => Date.parse(a.Day) - Date.parse(b.Day))
        setSchedule(upcoming)
        setEventId(upcoming[0].EventId)
        setLoading(false)
        getMatchups()
      })
      .catch((err) => console.error(err))
      setLoading(false)
  },[])

  const getMatchups = () => {
    setLoading(true)
    fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=2182ee43c6a142abb19f2461ce29b13e`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMatchUps(data.Fights)
        setLoading(false)
      })
      .catch((err) => console.error(err))
      setLoading(false)
  }
  
  return (
    <div>
      {schedule && <NavBar schedule={schedule} eventId={eventId} setEventId={setEventId} />}
      <button onClick={getMatchups}>load fights</button>
      {loading && <div><h1>Loading...</h1></div>}
      {matchUps && (
        <div>
          <FightCard matchUps={matchUps} />
        </div>
      )}
    </div>
  )
}

export default App
