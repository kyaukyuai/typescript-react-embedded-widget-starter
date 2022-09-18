import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Widget from '.'

export default {
  title: 'Example/Widget',
  component: Widget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Widget>

const Template: ComponentStory<typeof Widget> = () => <Widget />

export const Main = Template.bind({})
