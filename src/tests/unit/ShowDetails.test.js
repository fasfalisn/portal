import ShowDetails from '@/views/ShowDetails.vue';
import { mount, flushPromises } from '@vue/test-utils';
import { describe, it, vi, expect } from 'vitest';
import { fetchShow } from '@/services/showsService';

vi.mock('@/services/showsService', () => ({
  fetchShow: vi.fn(),
}));

describe('ShowDetails.vue', () => {
  it('handles error state', async () => {
    fetchShow.mockRejectedValue(new Error('API Error'));

    const wrapper = mount(ShowDetails);
    await flushPromises();

    const errorMessage = wrapper.find('p');
    expect(errorMessage.text()).toContain('Sorry, there was an error fetching the show or the show doesn\'t exist');
  });

  it('handles show not found', async () => {
    fetchShow.mockResolvedValue({
      ok: false,
      status: 404,
    });

    const wrapper = mount(ShowDetails);
    await flushPromises();

    const errorMessage = wrapper.find('p');
    expect(errorMessage.text()).toContain('Sorry, there was an error fetching the show or the show doesn\'t exist');
  });
});