import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { ButtonProps } from 'typings/components'
import { provideTheme } from 'helpers'

import Button from './button'

const defaultProps: ButtonProps = {
  color: 'primary',
  variant: 'contained',
}

const handleClick = jest.fn()

const setup = (props: ButtonProps) =>
  render(
    provideTheme(
      <Button onClick={handleClick} {...props}>
        Test Button
      </Button>
    )
  )

describe('Button', () => {
  it('renders a default button and click on it', () => {
    const wrapper = setup(defaultProps)

    const button = wrapper.getByRole('button')

    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)

    expect(wrapper.container).toMatchSnapshot()
  })
})
