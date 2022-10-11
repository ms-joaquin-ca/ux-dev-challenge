import styled from 'styled-components'

export const StyledButton = styled.button({
  backgroundColor: 'darkgray',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'white',
    color: 'darkgray',
  },
})
