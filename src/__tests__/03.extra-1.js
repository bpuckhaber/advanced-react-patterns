import * as React from 'react'
import {render} from '@testing-library/react'
import App from '../exercise/03.extra-1'

test('throws error when a toggle component is used outside of a <Toggle/>', () => {
  expect(() => render(<App />)).toThrow(
    'useToggleContext must be used within a <Toggle/>',
  )
})
