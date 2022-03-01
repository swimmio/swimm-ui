import { shallowMount } from '@vue/test-utils';
import Breadcrumb from './Breadcrumb.vue';

describe('Breadcrumb', () => {
  it('should render item', async () => {
    const wrapper = shallowMount(Breadcrumb, {
      propsData: { icon: 'g', name: 'g' }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render router-link for link', async () => {
    const wrapper = shallowMount(Breadcrumb, {
      propsData: { icon: 'g', name: 'g', link: '/g' },
      components: {
        'router-link': {
          template: '<div class="router-link"></div>'
        }
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
