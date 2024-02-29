import React from 'react'
import { render, screen } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo Render", async () => {

    const city = "Buenos Aires"
    const country = "Argentina"

    render(<CityInfo city={city} country={country} />)

    const cityAndCountryComponents = await screen.findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city);
    expect(cityAndCountryComponents[1]).toHaveTextContent(country);
})