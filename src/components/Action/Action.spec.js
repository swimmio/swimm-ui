import { shallowMount } from '@vue/test-utils';
import Action from '@/components/Action/Action';

describe('Action', () => {
  it('renders default button', () => {
    const wrapper = shallowMount(Action);
    expect(wrapper.text()).toMatch('Button text');
  });
});