import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header/>', () => {
  it('should render the header', () => {
    render(<Header />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
