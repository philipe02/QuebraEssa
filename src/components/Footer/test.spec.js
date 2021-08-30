import Footer from '.'
import { render, screen } from '@testing-library/react'

describe('<Footer/>', () => {
  it('should render the heading', () => {
    render(<Footer />)
    expect(screen.queryByText('Ligue-nos')).toBeInTheDocument()
  })
})
