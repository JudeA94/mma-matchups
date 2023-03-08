import { useState } from 'react'
import MatchUp from '../matchUp/matchUp'

const FightCard = ({ matchUps }) => {
useState(() => {},[matchUps])

  return (
    <>
      {matchUps.map((fight) => {
        if (fight.Active && fight.Fighters.length)
          return <MatchUp key={fight.FightId} fighters={fight.Fighters} />
        return null
      })}
    </>
  )
}

export default FightCard
