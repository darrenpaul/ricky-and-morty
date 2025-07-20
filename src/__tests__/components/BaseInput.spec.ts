import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseInput from '../../components/elements/BaseInput.vue'

describe('baseInput', () => {
  it('renders properly', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'initialText',
        label: 'My input',
      },
    })
    const input = wrapper.find('input')

    await input.setValue('Hello world')

    expect(input.element.value).toBe('Hello world')
  })

  it('renders with label prop', () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'initialText',
        label: 'My input',
      },
    })
    expect(wrapper.html()).toContain('My input')
  })

  it('renders with id prop', () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: 'initialText',
        id: '123',
      },
    })

    const input = wrapper.find('input')

    expect(input.attributes().id).eq('123')
  })

  it('modelValue should be updated', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        'modelValue': 'initialText',
        'onUpdate:modelValue': e => wrapper.setProps({ modelValue: e }),
      },
    })

    await wrapper.find('input').setValue('test')

    expect(wrapper.props('modelValue')).toBe('test')
  })
})
