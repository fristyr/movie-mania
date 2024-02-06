import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexPage from '../../pages/index.vue'

describe('Checking Index page ', () => {
    it('Index page is a Vue instance', () => {
      const wrapper = mount(IndexPage)
      expect(wrapper.vm).toBeDefined()
    })
  })