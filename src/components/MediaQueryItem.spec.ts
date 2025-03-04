import { shallowMount } from '@vue/test-utils';
import MediaQueryItem, { type MediaQueryItemModel } from './MediaQueryItem.vue';
import type { PartialDeep } from 'type-fest';

// For the purposes of testing this component, we only need to use one media query to mock with
const testMediaQueryItem: MediaQueryItemModel = {
  query: 'prefers-reduced-motion',
  values: ['reduce', 'no-preference'],
  docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion',
}

function mockMatchMedia(data: PartialDeep<MediaQueryList>) {
  vi.spyOn(window, 'matchMedia').mockImplementation(query => {
    return {
      onchange: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      ...data,
      // Nothing should override the below
      matches: data.media === query ? (data.matches || false) : false,
      media: data.media === query ? data.media : '',
    }
  });
}

describe('MediaQueryItem', () => {
  it('displays query', () => {
    // Arrange
    const wrapper = shallowMount(MediaQueryItem, {
      props: { data: testMediaQueryItem }
    });

    // Assert
    expect(wrapper.find('h2').text()).toBe(testMediaQueryItem.query);
  });

  it('displays values', () => {
    // Arrange
    const wrapper = shallowMount(MediaQueryItem, {
      props: { data: testMediaQueryItem }
    });

    // Assert
    expect(wrapper.findAll('li').length).toBe(testMediaQueryItem.values.length);
    for (let i = 0; i < testMediaQueryItem.values.length; i++) {
      expect(wrapper.findAll('li').at(i)!.text()).toBe(testMediaQueryItem.values[i]);
    }
  });

  it('displays docs', () => {
    // Arrange
    const wrapper = shallowMount(MediaQueryItem, {
      props: { data: testMediaQueryItem }
    });

    // Assert
    expect(wrapper.find('a').attributes('href')).toBe(testMediaQueryItem.docs);
  });

  describe('detected value', () => {
    testMediaQueryItem.values.forEach(value => {
      it(`displays "${value}" when detected`, () => {
        // Arrange
        mockMatchMedia({
          matches: true,
          media: `(${testMediaQueryItem.query}: ${value})`
        });
        const wrapper = shallowMount(MediaQueryItem, {
          props: { data: testMediaQueryItem }
        });
  
        // Assert
        expect(wrapper.text()).toContain(`Detected: ${value}`);
      });
    });

    it('displays "unsupported" when nothing is detected', () => {
      // Arrange
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: false,
        media: '',
        onchange: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn() // deprecated
      });
      const wrapper = shallowMount(MediaQueryItem, {
        props: { data: testMediaQueryItem }
      });

      // Assert
      expect(wrapper.text()).toContain('Detected: unsupported');
    });
  });
});