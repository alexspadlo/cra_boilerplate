import React from 'react'
import { render } from '@testing-library/react'
import HomePage from './HomePage'

describe('Testing HomePage Component', () => {
    test('Do not render without the props', () => {
        const { container, getByText } = render(<HomePage />)
        expect(getByText('HEY !')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})