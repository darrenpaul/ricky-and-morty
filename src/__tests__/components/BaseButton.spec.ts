import { mount } from '@vue/test-utils'
import { twMerge } from 'tailwind-merge'
import { describe, expect, it } from 'vitest'
import BaseButton from '../../components/elements/BaseButton.vue'
import { buttonBase, ButtonSize, ButtonVariant } from '../../constants/button-class'

describe('baseButton', () => {
  it('renders with default slot', () => {
    const Layout = {
      template: `
        <div>
          <BaseButton>
            <slot />
          </BaseButton>
        </div>
      `,
    }

    const wrapper = mount(Layout, {
      slots: {
        default: 'My button',
      },
    })

    expect(wrapper.html()).toContain('My button')
  })

  it('emits an event when clicked', () => {
    const wrapper = mount(BaseButton)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('renders with ghost variant prop', () => {
    const wrapper = mount(BaseButton, { props: { variant: ButtonVariant.GHOST } })

    expect(wrapper.classes()).toEqual(
      twMerge(...[buttonBase, ButtonVariant.GHOST, ButtonSize.MEDIUM]).split(' '),
    )
  })

  it('renders with ghost variant and square size props', () => {
    const wrapper = mount(BaseButton, {
      props: { variant: ButtonVariant.GHOST, size: ButtonSize.SQUARE },
    })

    expect(wrapper.classes()).toEqual(
      twMerge(...[buttonBase, ButtonVariant.GHOST, ButtonSize.SQUARE]).split(' '),
    )
  })
})
