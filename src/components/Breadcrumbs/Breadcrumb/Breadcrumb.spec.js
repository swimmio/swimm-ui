import { shallowMount } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';

describe('Breadcrumb', () => {
  it('should render item', async () => {
    const wrapper = shallowMount(Breadcrumb, {
      propsData: { icon: 'g', name: 'g' },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render router-link for link', async () => {
    const wrapper = shallowMount(Breadcrumb, {
      propsData: { icon: 'g', name: 'g', link: '/g' },
      slots: {
        default: '<router-link class="router-link"></router-link>',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
