import FruitBasket from "@/fruit-basket";
import { mount } from "@vue/test-utils";

test("can add fruits to the basket with DOM", () => {
  const wrapper = mount(FruitBasket);

  const input = wrapper.find("input");
  const button = wrapper.find("button");
  expect(wrapper.findAll("li").length).toBe(0);

  input.element.value = "Apple";
  input.trigger("input");
  expect(wrapper.vm.fruit).toBe("Apple");

  button.trigger("click");
  expect(wrapper.vm.fruit).toBe("");
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(["Apple"]));
  expect(wrapper.findAll("li").length).toBe(1);
});
