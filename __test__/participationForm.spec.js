import ParticipationForm from '../src/components/ParticipationForm'

describe('ParticipationForm component', () => {
  // const mockedStore = {
  //   participations: [
  //     {
  //       firstName: 'Foo',
  //       lastName: 'Bar',
  //       participation: 1
  //     },
  //     {
  //       firstName: 'Baz',
  //       lastName: 'bla',
  //       participation: 20
  //     },
  //     {
  //       firstName: 'THird',
  //       lastName: 'One',
  //       participation: 14
  //     }
  //   ]
  // }

  it('should not be able to add participation with empty fields', () => {
    const wrapper = render(ParticipationForm, { store: mockedStore })

    expect(wrapper)
  })
})
