import { shallowMount } from "@vue/test-utils";
import Home from "./Home.vue";
import MediaQueryItem from "@/components/MediaQueryItem.vue";
import { items } from "@/data/list";

describe("Home", () => {
  it("renders media query item list", () => {
    // Arrange
    const wrapper = shallowMount(Home);

    // Act
    const mediaQueryItems = wrapper.findAllComponents(MediaQueryItem);

    // Assert
    expect(mediaQueryItems.length).toBe(items.length);
    mediaQueryItems.forEach((mediaQueryItem, index) => {
      const item = items[index];
      expect(mediaQueryItem.props("data")).toBe(item);
    });
  });
});