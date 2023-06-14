import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { TextInputProps } from 'typings/components'

import TextInput from './text-input'
import { provideTheme } from 'helpers'

const defaultProps: TextInputProps = {
  label: 'Test Input',
  value: 'Test Value',
  id: 'test-input-id',
}

const onChange = jest.fn()

const setup = (props: TextInputProps) =>
  render(provideTheme(<TextInput onChange={onChange} {...props} />))

describe('TextInput', () => {
  it('should render a default text-input', () => {
    const wrapper = setup(defaultProps)

    expect(wrapper.container).toMatchSnapshot()
  }),
    it('should change the value of the input', () => {
      const wrapper = setup(defaultProps)

      const input = wrapper.getByLabelText('Test Input')

      userEvent.type(input, 'Test')

      expect(onChange).toHaveBeenCalledTimes(4)
    })
})
