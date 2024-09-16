import { mount, flushPromises } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { describe, it, vi, expect } from 'vitest';
import { useStore } from 'vuex';

// Mock Vuex for testing
vi.mock('vuex', () => ({
  useStore: vi.fn(),
}));

describe('Home.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(Home);
    expect(wrapper.exists()).toBe(true);
  });

  it('loads data on mount and shows loading indicator', async () => {
    useStore.mockReturnValue({
      dispatch: vi.fn(),
    });

    const wrapper = mount(Home);
    const loadingIndicator = wrapper.find('svg');

    await flushPromises(); // Wait for data loading

    expect(useStore().dispatch).toHaveBeenCalledWith('shows/loadShows');
    expect(loadingIndicator.exists()).toBe(true);
  });

  it('handles error state', async () => {
    useStore.mockReturnValue({
      dispatch: vi.fn().mockRejectedValue(new Error('API Error')),
    });

    const wrapper = mount(Home);
    await flushPromises(); // Wait for error handling

    const errorMessage = wrapper.find('p');
    expect(errorMessage.text()).toContain('There was an error fetching the shows');
  });

});