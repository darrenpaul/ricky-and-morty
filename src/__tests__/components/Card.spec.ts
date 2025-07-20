import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Card from '../../components/Card.vue'

describe('card', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, {})
    expect(wrapper.attributes().id).equal('card')
  })

  it('renders image slot', () => {
    const Layout = {
      template: `
        <div>
          <Card>
              <slot name='image' />
          </Card>
        </div>
      `,
    }

    const wrapper = mount(Layout, {
      slots: {
        image: 'Image Content',
      },
    })

    expect(wrapper.html()).toContain('Image Content')
  })

  it('render with heading slot', () => {
    const Layout = {
      template: `
        <div>
          <Card>
              <slot name='heading' />
          </Card>
        </div>
      `,
    }

    const wrapper = mount(Layout, {
      slots: {
        heading: 'Heading Content',
      },
    })

    expect(wrapper.html()).toContain('Heading Content')
  })

  it('renders with body slot', () => {
    const Layout = {
      template: `
        <div>
          <Card>
              <slot name='body' />
          </Card>
        </div>
      `,
    }

    const wrapper = mount(Layout, {
      slots: {
        body: 'Body Content',
      },
    })

    expect(wrapper.html()).toContain('Body Content')
  })
})
