import { useState, useEffect, useContext, useRef } from 'react'
import MatchUp from '../matchUp/matchUp'
import { PredictionsContext } from '../../context/predictionsContext'
import html2canvas from 'html2canvas'
import ShareButtons from '../shareButtons/shareButtons'

const FightCard = ({ matchUps }) => {
  const captureRef = useRef(null)
  const predictions = useContext(PredictionsContext)
  const [mainCard, setMainCard] = useState(null)
  const [undercard, setUnderCard] = useState(null)
  const [viewMainCard, setViewMainCard] = useState(true)
  const [picksShareUrl, setPicksShareUrl] = useState(null)
  const [updated, setUpdated] = useState(null)


  useEffect(() => {
    const activeMatches = matchUps.filter(
      (match) => match.Active && match.Fighters.length,
    )
    setMainCard(activeMatches.slice(0, 5))
    setUnderCard(activeMatches.slice(5))
  }, [matchUps])

  const toggleView = (card) => {
    card === 'Main' ? setViewMainCard(true) : setViewMainCard(false)
  }

  const handleCaptureScreenshot = () => {
    html2canvas(captureRef.current).then((canvas) => {
      const picksShareUrl = canvas.toDataURL()
      setPicksShareUrl(picksShareUrl)
      setUpdated(true)
    })
  }

  return (
    <>
      <button
        onClick={() => toggleView('Main')}
        data-testid="mainCardBtnTestId"
      >
        Main Card
      </button>
      <button
        onClick={() => toggleView('Under')}
        data-testid="underCardBtnTestId"
      >
        Under Card
      </button>
      <div ref={captureRef}>
        {mainCard &&
          viewMainCard &&
          mainCard.map((fight) => (
            <MatchUp key={fight.FightId} fighters={fight.Fighters} />
          ))}
        {undercard &&
          !viewMainCard &&
          undercard.map((fight) => (
            <MatchUp key={fight.FightId} fighters={fight.Fighters} />
          ))}
      </div>
      <button onClick={() => console.log(predictions)}>Save Predictions</button>
      <button onClick={handleCaptureScreenshot}>Capture Screenshot</button>
      {picksShareUrl && <img src={picksShareUrl} alt="..." />}
      {picksShareUrl && <ShareButtons picksShareUrl={picksShareUrl} updated={updated}/>}
    </>
  )
}

export default FightCard
