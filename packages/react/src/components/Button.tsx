import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '$2 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$action2',

        '&:not(:disabled):hover': {
          backgroundColor: '$action1',
        },

        '&:disabled': {
          color: '$system4',
          backgroundColor: '$system6',
        },
      },

      secondary: {
        color: '$action1',
        backgroundColor: '$action6',

        '&:not(:disabled):hover': {
          backgroundColor: '$action5',
        },

        '&:disabled': {
          color: '$system4',
          backgroundColor: '$system6',
        },
      },

      outline: {
        color: '$action1',
        border: '2px solid $system6',

        '&:not(:disabled):hover': {
          borderColor: '$system5',
        },

        '&:disabled': {
          color: '$system4',
          borderColor: '$system5',
        },
      },

      ghost: {
        color: '$system2',

        '&:not(:disabled):hover': {
          backgroundColor: '$system6',
        },

        '&:disabled': {
          color: '$system4',
        },
      },
    },

    size: {
      sm: {
        height: 24,
        fontSize: '$xs',
      },

      md: {
        height: 30,
      },

      lg: {
        height: 40,
      },

      xl: {
        height: 56,
        fontSize: '$lg',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
