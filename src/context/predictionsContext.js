import { createContext, useState } from "react";

export const PredictionsContext = createContext({
  predictions: {},
  setPredictions: () => {}
});

export const PredictionsContextProvider = ({children}) => {
  const [predictions, setPredictions] = useState({});
  return (
    <PredictionsContext.Provider value={{predictions, setPredictions}}>
      { children }
    </PredictionsContext.Provider>
  )
}
