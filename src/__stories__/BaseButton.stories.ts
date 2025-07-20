import type { Meta, StoryObj } from '@storybook/vue3-vite'
import BaseButton from '@/components/elements/BaseButton.vue'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'

const meta = {
  title: 'BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    default: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: ButtonVariant.GHOST,
    default: 'Button',
  },
}

export const Square: Story = {
  args: {
    size: ButtonSize.SQUARE,
    default: 'X',
  },
}
