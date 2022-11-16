import React from 'react'
import { render } from '@testing-library/react'
import ButtonSquare from '../Elements/ButtonSquare'




// simple test for checking if Square button renders the input title

describe(ButtonSquare, () => {

    it('renders button with correct text', () => {
        const  { getByTestId } = render(<ButtonSquare title='Click me' )

        expect(getByTestId('buttonSquare').textContent).toEqual('Click me')

    })
})