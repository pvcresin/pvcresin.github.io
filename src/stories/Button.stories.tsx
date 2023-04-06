import type { StoryObj, Meta } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
}

export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Button',
  },
}

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
