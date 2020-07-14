import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Testing App Container', () => {
  test('Render without props and match snapshot', () => {
    const container = render(<App />)
    expect(container).toMatchSnapshot()
  })
})