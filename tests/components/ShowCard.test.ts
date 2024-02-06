import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowCard from '../../components/ShowCard.vue'

describe('ShowCard', () => {
  it('Show Card is a Vue instance', () => {
    // Mock the `show` prop
    const mockShow = {
      name: "Test Show",
      image: { medium: "https://placehold.co/210x295" },
      rating: { average: 9.0 },
      genres: ['Drama', 'Thriller'],
      status: 'Running',
      id: 123
    };

    const wrapper = mount(ShowCard, {
      props: { show: mockShow }
    })

    expect(wrapper.vm).toBeTruthy()
    // You can add more assertions here to test specific functionalities or data rendering
  })
})
