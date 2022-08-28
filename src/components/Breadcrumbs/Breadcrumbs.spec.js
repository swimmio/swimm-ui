import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Breadcrumbs from './Breadcrumbs.vue';

describe('Breadcrumbs', () => {
  it('renders empty array', async () => {
    const wrapper = shallowMount(Breadcrumbs, {
      propsData: { items: [] },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders default Breadcrumbs', async () => {
    const wrapper = shallowMount(Breadcrumbs, {
      propsData: {
        items: [{ icon: 'g', name: 'g' }],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders breadcrumbs with links', async () => {
    const wrapper = shallowMount(Breadcrumbs, {
      propsData: {
        items: [
          { icon: 'g', name: 'g', link: '/g' },
          { icon: 'b', name: 'b', link: '/b' },
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
