import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: 'transparent',
  padding: '$3 $4',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '1px solid $system5',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$system1',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$action2',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    borderColor: '$system5',
  },

  '&:placeholder': {
    color: '$system3',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
