import { shallowMount } from '@vue/test-utils';
import SwToggle from '@/components/Toggle/SwToggle';

describe('SwToggle', () => {
  it('should be enabled and checked', () => {
    const wrapper = shallowMount(SwToggle, { propsData: { value: true } });
    expect(wrapper.find('input').attributes().disabled).toBeFalsy();
    expect(wrapper.find('.wrapper.disabled').exists()).toBeFalsy();
    const toggle = wrapper.find('input');
    expect(toggle.element.checked).toBeTruthy();
  });

  it('should be enabled and unchecked', () => {
    const wrapper = shallowMount(SwToggle, { propsData: { value: false } });
    expect(wrapper.find('input').attributes().disabled).toBeFalsy();
    expect(wrapper.find('.wrapper.disabled').exists()).toBeFalsy();
    const toggle = wrapper.find('input');
    expect(toggle.element.checked).toBeFalsy();
  });

  it('should change to checked on trigger', async () => {
    const wrapper = shallowMount(SwToggle, { propsData: { value: false } });
    const toggle = wrapper.find('input');
    await toggle.setChecked();
    expect(toggle.element.checked).toBeTruthy();
    expect(wrapper.emitted('change')).toHaveLength(1);
    expect(wrapper.emitted('change')[0]).toEqual([true]);
  });

  it('should change to unchecked on trigger', async () => {
    const wrapper = shallowMount(SwToggle, { propsData: { value: true } });
    const toggle = wrapper.find('input');
    await toggle.setChecked(false);
    expect(toggle.element.checked).toBeFalsy();
    expect(wrapper.emitted('change')).toHaveLength(1);
    expect(wrapper.emitted('change')[0]).toEqual([false]);
  });

  it('should be disabled and checked', () => {
    const wrapper = shallowMount(SwToggle, {
      propsData: { value: true, disabled: true }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
    expect(wrapper.find('.wrapper.disabled').exists()).toBeTruthy();
    const toggle = wrapper.find('input');
    expect(toggle.element.checked).toBeTruthy();
  });

  it('should be disabled and unchecked', () => {
    const wrapper = shallowMount(SwToggle, {
      propsData: { value: false, disabled: true }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
    expect(wrapper.find('.wrapper.disabled').exists()).toBeTruthy();
    const toggle = wrapper.find('input');
    expect(toggle.element.checked).toBeFalsy();
  });

  it('should not change to checked when disabled', async () => {
    const wrapper = shallowMount(SwToggle, {
      propsData: { value: false, disabled: true }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
    const toggle = wrapper.find('input');
    await toggle.trigger('click');
    expect(toggle.element.checked).toBeFalsy();
    expect(wrapper.emitted()).toEqual({});
  });

  it('should not change to unchecked when disabled', async () => {
    const wrapper = shallowMount(SwToggle, {
      propsData: { value: true, disabled: true }
    });
    expect(wrapper.find('input').attributes().disabled).toBeTruthy();
    const toggle = wrapper.find('input');
    await toggle.trigger('click');
    expect(toggle.element.checked).toBeTruthy();
    expect(wrapper.emitted()).toEqual({});
  });
});
