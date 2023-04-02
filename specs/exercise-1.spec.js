import { mount } from "@vue/test-utils";
import { faker } from "@faker-js/faker";

import UserList from "@/exercise-1";

test("component renders the users", () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: [faker.name.fullName()],
    },
  });

  const li = wrapper.find("li");

  expect(li.text()).toBe(wrapper.props("users")[0]);
});
