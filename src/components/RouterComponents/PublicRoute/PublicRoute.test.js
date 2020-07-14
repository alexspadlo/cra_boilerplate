import React from 'react'
import { render } from '@testing-library/react'
import PublicRoute from './PublicRoute'
import HomePage from '../../HomePage/HomePage'
import { BrowserRouter } from 'react-router-dom'

describe('Testing PublicRoute Component', () => {
    test('Should render HomePage in the main path', () => {
        const { container, getByText } = render(
            <BrowserRouter>
                <PublicRoute
                    exact
                    path='/'
                    component={HomePage}
                />
            </BrowserRouter>
        )
        expect(getByText('HEY !')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})