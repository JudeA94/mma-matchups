import { useState, useContext } from 'react'
import { PredictionsContext } from '../../context/predictionsContext'

const MatchUp = ({ fighters }) => {
  const fighter1 = fighters[0]
  const fighter2 = fighters[1]
  const fight = `${fighter1.FirstName} ${fighter1.LastName} vs ${fighter2.FirstName} ${fighter2.LastName}`
  const [fighter1Class, setFighter1Class] = useState('drawer')
  const [fighter2Class, setFighter2Class] = useState('drawer')
  const [winner, setWinner] = useState(null)
  const [method, setMethod] = useState(null)
  const { setPredictions } = useContext(PredictionsContext)

  const updatePrediction = (winner, method) => {
    if (method === 'Draw') {
      setPredictions((prevState) => ({ ...prevState, [fight]: 'Draw' }))
    } else if (!winner || !method) {
      setPredictions((prevState) => ({ ...prevState, [fight]: null }))
    } else {
      setPredictions((prevState) => ({
        ...prevState,
        [fight]: `${winner} by ${method}`,
      }))
    }
  }

  const handleClickFighter1 = () => {
    if (method === 'Draw') setMethod(null)
    if (fighter1Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setMethod(null)
      setWinner(null)
      updatePrediction(null, null)
    } else {
      setFighter1Class('winner')
      setFighter2Class('loser')
      const updatedWinner = `${fighter1.FirstName} ${fighter1.LastName}`
      const updatedMethod = method
      setWinner(updatedWinner)
      updatePrediction(updatedWinner, updatedMethod)
    }
  }

  const handleClickFighter2 = () => {
    if (method === 'Draw') setMethod(null)
    if (fighter2Class === 'winner') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setMethod(null)
      setWinner(null)
      updatePrediction(null, null)
    } else {
      setFighter2Class('winner')
      setFighter1Class('loser')
      const updatedWinner = `${fighter2.FirstName} ${fighter2.LastName}`
      const updatedMethod = method
      setWinner(updatedWinner)
      updatePrediction(updatedWinner, updatedMethod)
    }
  }

  const handleMethodSelection = (method) => {
    if (method === 'Draw') {
      setFighter1Class('drawer')
      setFighter2Class('drawer')
      setWinner(null)
    }
    setMethod(method)
    updatePrediction(winner, method)
  }

  return (
    <div className="matchUp" data-testid="matchUpTestId">
      <div className="fighters">
        <button
          className={fighter1Class}
          data-testid="fighter1TestId"
          onClick={handleClickFighter1}
        >
          {fighter1.FirstName} {fighter1.LastName}
        </button>
        <span className="vs" data-testid="vsTestId">
          VS
        </span>
        <button
          className={fighter2Class}
          data-testid="fighter2TestId"
          onClick={handleClickFighter2}
        >
          {fighter2.FirstName} {fighter2.LastName}
        </button>
        <div className="dropdown">
          <button className="dropbtn">{method || 'Method'}</button>
          <div className="dropdown-content">
            <button onClick={() => handleMethodSelection('KO / TKO')}>
              KO / TKO
            </button>
            <button onClick={() => handleMethodSelection('Submission')}>
              Submission
            </button>
            <button onClick={() => handleMethodSelection('Decision')}>
              Decision
            </button>
            <button onClick={() => handleMethodSelection('DQ / NC')}>
              DQ / NC
            </button>
            {!winner && (
              <button onClick={() => handleMethodSelection('Draw')}>
                Draw
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchUp
