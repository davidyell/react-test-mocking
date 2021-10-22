import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import App from './App'
import {FetchCard} from "./Card/FetchCard";

describe('App component', () => {
  test('Renders the actual card title', async () => {
    render(<App />)

    await waitFor(() => expect(screen.getByText('Serra Angel')).toBeInTheDocument())
    await waitFor(() => expect(FetchCard).toHaveBeenCalled())
  })

  test('Renders the fixture card title', async () => {
    jest.mock('./Card/FetchCard')

    render(<App />)

    await waitFor(() => expect(screen.getByText('Emerald Dragonfly')).toBeInTheDocument())
    await waitFor(() => expect(FetchCard).toHaveBeenCalled())
  })
})


