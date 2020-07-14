import React from 'react'
import { render } from '@testing-library/react'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter } from 'react-router-dom'

describe('Testing PrivateRoute Component', () => {
    test('Do not render without the props', () => {
        const { container } = render(
            <BrowserRouter>
                <PrivateRoute />
            </BrowserRouter>
        )
        expect(container.firstChild).toBeNull()
    })
})