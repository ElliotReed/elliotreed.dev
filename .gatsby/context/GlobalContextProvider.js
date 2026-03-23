import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
  mode: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
      // break
    }
    case "DEVELOPER_MODE": {
      return {
        ...state,
        mode: "developer",
      }
      // break
    }
    case "MUSICIAN_MODE": {
      return {
        ...state,
        mode: "musician",
      }
      // break
    }

    default:
      throw new Error("Bad action type.")
  }
}
export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}


