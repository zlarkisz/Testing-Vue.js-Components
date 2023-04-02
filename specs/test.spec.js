import { mount } from "@vue/test-utils";

import TestComponent from "@/test";
import ListComponent from "@/list";

test("mount a vue component", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: "H@$ka",
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test("ListComponent", () => {
  const wrapper = mount(ListComponent);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({ marvelMovies: [...movies, "Endgame"] });
  expect(wrapper).toMatchSnapshot();
});
