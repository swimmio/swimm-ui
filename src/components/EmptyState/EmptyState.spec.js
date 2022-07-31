import { shallowMount } from '@vue/test-utils';
import EmptyState from './EmptyState.vue';
import Icon from '../Icon/Icon.vue';

describe('EmptyState', () => {
  it('render minimal empty state', () => {
    const wrapper = shallowMount(EmptyState, {
      components: { Icon },
      propsData: { title: 'title', description: 'description' },
    });
    expect(wrapper.find('.title').text()).toMatch('title');
    expect(wrapper.find('.description').text()).toMatch('description');
  });

  it('render empty state with icon', () => {
    const wrapper = shallowMount(EmptyState, {
      components: { Icon },
      propsData: { title: 'title', description: 'description', iconName: 'pr' },
    });
    expect(wrapper.find('.title').text()).toMatch('title');
    expect(wrapper.find('.description').text()).toMatch('description');
    expect(wrapper.findAll('.icon')).toHaveLength(1);
  });

  it('render empty state with action', () => {
    const wrapper = shallowMount(EmptyState, {
      components: { Icon },
      propsData: { title: 'title', description: 'description', iconName: 'pr' },
      slots: {
        default: '<div class="test-me">hello</div>',
      },
    });
    expect(wrapper.find('.title').text()).toMatch('title');
    expect(wrapper.find('.description').text()).toMatch('description');
    expect(wrapper.findAll('.icon')).toHaveLength(1);
    expect(wrapper.findAll('.test-me')).toHaveLength(1);
  });
});
