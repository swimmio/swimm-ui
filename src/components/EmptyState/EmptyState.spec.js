import { shallowMount } from '@vue/test-utils';
import EmptyState from './EmptyState.vue';
import Icon from '../Icon/Icon.vue';

describe('EmptyState', () => {
  it('render minimal empty state', () => {
    const wrapper = shallowMount(EmptyState, {
      components: { Icon },
      propsData: { title: 'hey', description: 'you' }
    });
    expect(wrapper.text()).toMatch('hey you');
  });

  it('render empty state with icon', async () => {
    const wrapper = await shallowMount(EmptyState, {
      components: { Icon },
      propsData: { title: 'hey', description: 'you', iconName: 'pr' }
    });
    expect(wrapper.text()).toMatch('hey you');
    expect(wrapper.findAll('.icon')).toHaveLength(1);
  });

  it('render empty state with action', async () => {
    const wrapper = await shallowMount(EmptyState, {
      components: { Icon },
      propsData: { title: 'hey', description: 'you', iconName: 'pr' },
      slots: {
        default: '<div class="test-me">hello</div>'
      }
    });
    expect(wrapper.text()).toMatch('hey you');
    expect(wrapper.findAll('.icon')).toHaveLength(1);
    expect(wrapper.findAll('.test-me')).toHaveLength(1);
  });
});
