import { useContext, createContext, useReducer } from "react"

import { AuthInitialState, AuthReducer, AuthTypes } from "./reducers/auth"

const combineReducers = (slices: any) => (prevState: any, action: any) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action),
    }),
    prevState
  )

const Reducers = combineReducers({
  auth: AuthReducer,
})

const InitialStates = {
  auth: AuthInitialState,
}

export const AppContext = createContext({
  state: InitialStates,
  dispatch: (arg1: any) => undefined,
})

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(Reducers, InitialStates)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export { useAppContext, AuthTypes }
