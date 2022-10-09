import type React from 'react'

const targetKeyCodes = ['ENTER', 'SPACE']

const onKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
  if (targetKeyCodes.includes(e.code.toUpperCase())) {
    e.currentTarget.click()
    e.preventDefault()
  }
}

export const handlers = { onKeyPress }
