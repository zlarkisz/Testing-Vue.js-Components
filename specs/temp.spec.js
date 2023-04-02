import Temprature from "@/temprature";
import { mount } from "@vue/test-utils";

describe("computed", () => {
  test("celsius", () => {
    const { vm } = mount(Temprature);
    expect(vm.celsius).toBe(0);
    // wrapper.setData({ degrees: 23 });
    vm.degrees = 23;
    expect(vm.celsius).toBe(23);
  });

  test("fahrenheit", () => {
    const { vm } = mount(Temprature);
    expect(vm.fahrenheit).toBe(32);
    // wrapper.setData({ degrees: 23 });
    vm.degrees = 16;
    expect(vm.fahrenheit).toBe(60.8);
  });
});

test("temprature", () => {
  const wrapper = mount(Temprature, {
    propsData: {
      temp: 40,
    },
  });
  const { vm } = wrapper;

  expect(vm.degrees).toBe(40);
  expect(vm.type).toBe("celsius");

  wrapper.setProps({ temp: "50f" });

  expect(vm.degrees).toBe(50);
  expect(vm.type).toBe("fahrenheit");
});
