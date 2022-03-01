import SwButton from "@/components/SwButton/SwButton";
import {mount} from "@vue/test-utils";
import { THEMES, SIZES, STATES } from "@/components/SwButton/SwButton";

describe('SwButton', () => {
  it('renders default button', () => {
    const wrapper = mount(SwButton, {
      slots: {
        default: 'SwButton text'
      },
    });
    expect(wrapper.text()).toMatch('SwButton text');
    expect(wrapper.find('[data-testid="icon-right"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="icon-left"]').exists()).toBeFalsy();
  });

  it('renders default button with icon on right', () => {
    const wrapper = mount(SwButton, {
      slots: {
        default: 'SwButton text'
      },
      propsData: {
        icon: 'add',
      }
    });
    expect(wrapper.text()).toMatch('SwButton text');
    expect(wrapper.find('[data-testid="icon-right"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="icon-left"]').exists()).toBeFalsy();
  });

  it('renders default button with icon on left', () => {
    const wrapper = mount(SwButton, {
      slots: {
        default: 'SwButton text'
      },
      propsData: {
        icon: 'add',
        iconOnLeft: true,
      }
    });
    expect(wrapper.text()).toMatch('SwButton text');
    expect(wrapper.find('[data-testid="icon-left"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="icon-right"]').exists()).toBeFalsy();
  });

  it('renders secondary button', () => {
    const wrapper = mount(SwButton, {
      slots: {
        default: 'SwButton text'
      },
      propsData: {
        theme: THEMES.SECONDARY,
      }
    });
    expect(wrapper.text()).toMatch('SwButton text');
    expect(wrapper.find('.secondary').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="icon-left"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="icon-right"]').exists()).toBeFalsy();
  });

  it('renders disabled button', () => {
    const wrapper = mount(SwButton, {
      slots: {
        default: 'SwButton text'
      },
      propsData: {
        state: STATES.DISABLED,
      }
    });
    expect(wrapper.text()).toMatch('SwButton text');
    expect(wrapper.find('.disabled').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="icon-left"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="icon-right"]').exists()).toBeFalsy();
  });

  it('renders small button', () => {
    const wrapper = mount(SwButton, {
      slots: {
        default: 'SwButton text'
      },
      propsData: {
        size: SIZES.SMALL,
      }
    });
    expect(wrapper.text()).toMatch('SwButton text');
    expect(wrapper.find('.small').exists()).toBeTruthy();
    expect(wrapper.find('[data-testid="icon-left"]').exists()).toBeFalsy();
    expect(wrapper.find('[data-testid="icon-right"]').exists()).toBeFalsy();
  });
});
