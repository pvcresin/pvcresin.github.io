import { Preview } from '@storybook/react'

const preview: Preview = {
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'ja',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ja', right: '🇯🇵', title: '日本語' },
          { value: 'en', right: '🇺🇸', title: 'English' },
        ],
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
