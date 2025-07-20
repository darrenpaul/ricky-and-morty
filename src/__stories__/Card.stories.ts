import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Card from '../Card.vue'

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    image: 'Image',
    heading: 'Heading',
    body: 'Body',
  },
}
