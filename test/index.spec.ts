import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
