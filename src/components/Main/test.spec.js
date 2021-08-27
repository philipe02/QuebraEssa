import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(
      <Main
        title="Projeto Hackaton"
        description="Projeto desenvolvido para o Hackaton da Hub Salvador"
      />
    )

    expect(
      screen.getByRole('heading', { name: /projeto hackaton/i })
    ).toBeInTheDocument()
  })
})
