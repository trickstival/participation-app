import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { useQuasar } from '../quasarSetup'
import ParticipationForm from 'src/components/ParticipationForm'

describe('ParticipationForm component', () => {
  const localVue = createLocalVue()
  localVue.use(useQuasar)
  localVue.use(Vuex)

  let store, mutations
  beforeEach(() => {
    mutations = {
      addParticipation: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })
  })

  it('should not be able to call addParticipation with empty fields', () => {
    const wrapper = mount(ParticipationForm, {
      localVue,
      store
    })
    wrapper.vm.addParticipation = jest.fn()
    wrapper.find('.send-button').trigger('click')
    expect(wrapper.vm.addParticipation).not.toHaveBeenCalled()
  })

  it('should trigger axios and store when adding participations', async () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)

    const mockedResponseId = 10
    const axios = {
      post: jest.fn().mockReturnValue({ data: { id: mockedResponseId } })
    }
    const wrapper = mount(ParticipationForm, {
      localVue,
      store,
      attachTo: '#root',
      mocks: {
        $axios: axios
      }
    })

    const newParticipation = {
      firstName: 'foo',
      lastName: 'bar',
      participation: 5
    }

    await wrapper.find('.first-name-input input').setValue(newParticipation.firstName)
    await wrapper.find('.last-name-input input').setValue(newParticipation.lastName)
    await wrapper.find('.participation-input input').setValue(newParticipation.participation)
    expect(wrapper.vm.$refs.form.validate()).toBeTruthy()

    wrapper.vm.$q.notify = jest.fn()

    await wrapper.find('.send-button').trigger('click')

    expect(axios.post).toHaveBeenCalledWith('/participation', newParticipation)
    expect(mutations.addParticipation).toHaveBeenCalledWith({}, { ...newParticipation, id: mockedResponseId })

    wrapper.destroy()
    div.remove()
  })
})
