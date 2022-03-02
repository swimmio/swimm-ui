import { mount } from '@vue/test-utils';
import SwAvatar, { SIZE, SHAPE } from '@/components/Avatar/SwAvatar';

const TEXT = 'swimm';
const IMAGE = 'someImage';

describe('SwAvatar', () => {
  describe('prop validator', () => {
    it('should show options from SIZE are valid', () => {
      const validator = SwAvatar.props.size.validator;
      Object.values(SIZE).forEach(optionalValidSize =>
        expect(validator(optionalValidSize)).toBeTruthy()
      );
    });

    it('should show option which is not on SIZE as invalid', () => {
      const validator = SwAvatar.props.size.validator;
      expect(validator('swimm')).toBeFalsy();
    });

    it('should show options from SHAPE are valid', () => {
      const validator = SwAvatar.props.shape.validator;
      Object.values(SHAPE).forEach(optionalValidShape =>
        expect(validator(optionalValidShape)).toBeTruthy()
      );
    });

    it('should show option which is not on SHAPE as invalid', () => {
      const validator = SwAvatar.props.shape.validator;
      expect(validator('swimm')).toBeFalsy();
    });
  });

  describe('text render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(SwAvatar, { propsData: { text: TEXT } });
    });

    it('should render only the first letter of text and as capitalize', () => {
      expect(wrapper.text()).toHaveLength(1);
      expect(wrapper.text()).toEqual(TEXT.charAt(0));
      expect(wrapper.find('span.capitalize').exists()).toBeTruthy();
    });

    it('should not render an img', () => {
      expect(wrapper.find('img').exists()).toBeFalsy();
    });

    it('should get default values of size and shape', () => {
      expect(wrapper.find('.wrapper.large').exists()).toBeTruthy();
      expect(wrapper.find('.wrapper.round').exists()).toBeTruthy();
    });
  });

  describe('image render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(SwAvatar, { propsData: { text: TEXT, src: IMAGE } });
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
      expect(wrapper.find('.wrapper.large').exists()).toBeTruthy();
      expect(wrapper.find('.wrapper.round').exists()).toBeTruthy();
    });
  });

  describe('size and shape props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(SwAvatar, {
        propsData: {
          text: TEXT,
          src: IMAGE,
          size: SIZE.HUGE,
          shape: SHAPE.SQUARE
        }
      });
    });

    it('should have classes of size and shape from props', () => {
      expect(wrapper.find('.wrapper.huge').exists()).toBeTruthy();
      expect(wrapper.find('.wrapper.square').exists()).toBeTruthy();
    });

    it('should show image', () => {
      expect(wrapper.find('img').exists()).toBeTruthy();
      expect(wrapper.text()).toBeFalsy();
    });
  });
});
