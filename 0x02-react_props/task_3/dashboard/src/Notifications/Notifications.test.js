import React from 'react';
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("tests that Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children().length).toEqual(3);
  });


  it('tests that Notifications renders the html text "Here is a list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });

  it("renders first NotificationItem element with the right html", () => {
    const wrapper = shallow(<Notifications />);
    const firstChild = wrapper.find("ul").children().first();
    expect(firstChild.html()).toBe(
      '<li data-notification-type="default">New course available</li>'
    );
  });
});
