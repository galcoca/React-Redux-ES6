import React from 'react'
import { render, screen } from '@testing-library/react'
import Weather from './Weather'

test("Weather Render", async () => {

    render(<Weather temperature={10} />)

    const temp = await screen.findAllByRole("heading")

    expect(temp[0]).toHaveTextContent(10);
})