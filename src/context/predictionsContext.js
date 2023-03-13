import { createContext, useState } from "react";

export const PredictionsContext = createContext()

export const PredictionsContextProvider = ({children}) => {
  const [predictions, setPredictions] = useState({})
  return (
    <PredictionsContext.Provider value={predictions}>
      { children }
    </PredictionsContext.Provider>
  )
}
