import { mount } from '@vue/test-utils'
import { twMerge } from 'tailwind-merge'
import { describe, expect, it } from 'vitest'
import Badge from '../../components/elements/Badge.vue'
import { badgeBase, BadgeVariant } from '../../constants/badge-class'

describe('badge', () => {
  it('renders with default', () => {
    const wrapper = mount(Badge, {})

    expect(wrapper.classes()).toEqual(twMerge(...[badgeBase, BadgeVariant.PRIMARY]).split(' '))
  })

  it('renders with secondary variant prop', () => {
    const wrapper = mount(Badge, { props: { variant: BadgeVariant.SECONDARY } })

    expect(wrapper.classes()).toEqual(twMerge(...[badgeBase, BadgeVariant.SECONDARY]).split(' '))
  })

  it('render default with incorrect variant prop', () => {
    const wrapper = mount(Badge, { props: { variant: 'apple' } })

    expect(wrapper.classes()).not.toEqual(twMerge(...[badgeBase, BadgeVariant.PRIMARY]).split(' '))
  })

  it('renders default slot', () => {
    const Layout = {
      template: `
        <div>
          <Badge>
            <slot />
          </Badge>
        </div>
      `,
    }

    const wrapper = mount(Layout, {
      slots: {
        default: 'Main Content',
      },
    })

    expect(wrapper.html()).toContain('Main Content')
  })
})
