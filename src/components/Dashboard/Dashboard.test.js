import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('Testing Dashboard Component', () => {
    test('Do not render without the props', () => {
        const { container, getByText } = render(<Dashboard />)
        expect(getByText('HEY YOU ARE IN A PRIVATE ROUTE!!!')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})