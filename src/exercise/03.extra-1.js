// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

function Toggle({...props}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider value={{on, toggle}} {...props} />
}

function useToggleContext() {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggleContext must be used within a <Toggle/>')
  }

  return context
}

function ToggleOn({children}) {
  const {on} = useToggleContext()
  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggleContext()
  return on ? null : children
}

function ToggleButton({...props}) {
  const {on, toggle} = useToggleContext()
  return <Switch on={on} onClick={toggle} {...props} />
}

// TODO: can throw error the same way that we did in the one of our prev exercises?
function App() {
  return <ToggleButton />
}

export default App
