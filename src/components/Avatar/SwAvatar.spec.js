/* eslint-disable @typescript-eslint/no-empty-function */
import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SwAvatar, { SwAvatarSizeValues } from '@/components/Avatar/SwAvatar.vue';

const TEXT = 'swimm';
const IMAGE = 'someImage';
const mockGlobalDirective = {
  global: {
    directives: { tooltip() {} },
  },
};

describe('SwAvatar', () => {
  describe('prop validator', () => {
    it('should show options from SIZE are valid', () => {
      const validator = SwAvatar.props.size.validator;
      Object.values(SwAvatarSizeValues).forEach((optionalValidSize) =>
        expect(validator(optionalValidSize)).toBeTruthy()
      );
    });

    it('should show option which is not on SIZE as invalid', () => {
      const validator = SwAvatar.props.size.validator;
      expect(validator('swimm')).toBeFalsy();
    });
  });

  describe('text render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(SwAvatar, {
        propsData: { text: TEXT },
        ...mockGlobalDirective,
      });
    });

    it('should render only the first letter of text and as capitalize', () => {
      expect(wrapper.text()).toHaveLength(1);
      expect(wrapper.text()).toEqual(TEXT.toUpperCase().charAt(0));
    });

    it('should not render an img', () => {
      expect(wrapper.find('img').exists()).toBeFalsy();
    });

    it('should get default values of size and shape', () => {
      expect(wrapper.find('.avatar.small').exists()).toBeTruthy();
      expect(wrapper.find('.avatar.square').exists()).toBeFalsy();
    });
  });

  describe('image render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(SwAvatar, {
        propsData: { text: TEXT, src: IMAGE },
        ...mockGlobalDirective,
      });
    });

    it('should render the image', () => {
      expect(wrapper.find('img').exists()).toBeTruthy();
      expect(wrapper.find('img').attributes().src).toEqual(IMAGE);
      expect(wrapper.find('img').attributes().alt).toEqual(TEXT);
    });

    it('should not render text', () => {
      expect(wrapper.text()).toBeFalsy();
    });

    it('should get default values of size and shape', () => {
      expect(wrapper.find('.avatar.small').exists()).toBeTruthy();
      expect(wrapper.find('.avatar.square').exists()).toBeFalsy();
    });
  });

  describe('size and shape props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(SwAvatar, {
        propsData: {
          text: TEXT,
          src: IMAGE,
          size: 'huge',
          square: true,
        },
        ...mockGlobalDirective,
      });
    });

    it('should have classes of size and shape from props', () => {
      expect(wrapper.find('.avatar.huge').exists()).toBeTruthy();
      expect(wrapper.find('.avatar.square').exists()).toBeTruthy();
    });
  });
});
