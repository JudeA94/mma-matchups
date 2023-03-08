import { useState } from 'react'

const NavBar = ({ schedule }) => {
  const [eventIdx, setEventId] = useState(0)
  const today = new Date()
  const upcoming = schedule.filter((event) => Date.parse(event.Day) > today)
  const eventsRemaining = upcoming.length - 1
  return (
    <div>
      <h1>{upcoming[eventIdx].Name}</h1>
      {eventIdx > 0 && (
        <button onClick={() => setEventId(eventIdx - 1)}>Previous</button>
      )}
      {eventIdx < eventsRemaining && (
        <button onClick={() => setEventId(eventIdx + 1)}>Next</button>
      )}
    </div>
  )
}

export default NavBar
