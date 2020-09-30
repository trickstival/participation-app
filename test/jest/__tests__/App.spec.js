import { mount, createLocalVue } from '@vue/test-utils'
import { useQuasar } from '../quasarSetup'
import QBUTTON from './demo/QBtn-demo.vue'

describe('Mount Quasar', () => {
  const localVue = createLocalVue()
  localVue.use(useQuasar)

  const wrapper = mount(QBUTTON, {
    localVue
  })
  const vm = wrapper.vm

  it('has a created hook', () => {
    expect(typeof vm.increment).toBe('function')
  })

  it('accesses the shallowMount', () => {
    expect(vm.$el.textContent).toContain('rocket muffin')
    expect(wrapper.text()).toContain('rocket muffin') // easier
    expect(wrapper.find('p').text()).toContain('rocket muffin')
  })

  it('sets the correct default data', () => {
    expect(typeof vm.counter).toBe('number')
    const defaultData2 = QBUTTON.data()
    expect(defaultData2.counter).toBe(0)
  })

  it('correctly updates data when button is pressed', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(vm.counter).toBe(1)
  })
})
