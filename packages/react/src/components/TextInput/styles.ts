import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: 'transparent',
  padding: '$3 $4',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '1px solid $system5',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$action2',
  },

  '&:has(input:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    borderColor: '$system5',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$system1',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$system3',
  },
})
