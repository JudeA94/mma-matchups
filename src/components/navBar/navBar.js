import { useEffect, useState } from 'react'

const NavBar = ({ schedule, eventId, setEventId, getMatchups }) => {
  const [eventIdx, setEventIdx] = useState(0)
  const eventsRemaining = schedule.length - 1
  
  const handleChangeEvent = (direction) => {
    setEventIdx(eventIdx + direction)
    setEventId(schedule[eventIdx + direction].EventId)
  }

  useEffect(() => getMatchups(eventId),[eventId])

  return (
    <div className='navBar'>
      <div className='navChild'>
        {eventIdx > 0 && (
          <button className='navButton' onClick={() => handleChangeEvent(-1)}>Previous</button>
        )}
      </div>
      <div className='navChild'>
        <h1 className='eventTitle'>{schedule[eventIdx].Name}</h1>
      </div>
      <div className='navChild'>
        {eventIdx < eventsRemaining && (
          <button className='navButton' onClick={() => handleChangeEvent(+1)}>Next</button>
        )}
      </div>
    </div>
  )
}

export default NavBar
