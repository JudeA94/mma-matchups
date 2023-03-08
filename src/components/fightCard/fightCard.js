import MatchUp from '../matchUp/matchUp'

const FightCard = ({ matchUps }) => {
  return (
    <>
      {matchUps.map((fight) => {
        if (fight.Active)
          return <MatchUp key={fight.FightId} fighters={fight.Fighters} />
        return null
      })}
    </>
  )
}

export default FightCard
