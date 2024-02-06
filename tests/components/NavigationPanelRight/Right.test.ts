import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Right from '../../../components/NavigationPanel/Right.vue' 
import { genres } from '~/constants/genres'

describe('NavigationPanel for Right component', () => {
    it('Right is a Vue instance', () => {
        const wrapper = mount(Right)
        expect(wrapper.vm).toBeTruthy()
    })
    // Verifying genres section rendered correctly
    it('Rendering genres section', () => {
        const wrapper = mount(Right)
        expect(wrapper.text()).toContain('Genres')
    })
    // Verifying if "See more..." text navigates correctly according to the /genres path
    it('Navigate /genres when "See more..." was clicked', async () => {
        const wrapper = mount(Right, {
            global: {
                stubs: {
                    NuxtLink: {
                        template: '<a :href="to"><slot /></a>',
                        props: ['to']
                    }
                }
            }
        })
        const seeMoreLink = wrapper.find('a[href="/genres"]')
        expect(seeMoreLink.exists()).toBe(true)
    })

    // Verifying if genres list is rendered according to the genres util data
    it('renders a list of genres', () => {
        const wrapper = mount(Right, {
            props: {
                genres: genres.slice(1, 5)
            },
           
        })
        const genresList = wrapper.findAll('.genre-item') 
        expect(genresList.length).toBeGreaterThan(0)
    })

   
})

