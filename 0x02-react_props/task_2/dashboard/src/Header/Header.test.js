import React from 'react';
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  it("Tests that Header component renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
  it("Verifies that the component renders img and h1 tags", () =>{
   const wrapper = shallow(<Header />);
   expect(wrapper.find('img')).toBeDefined();
   expect(wrapper.find("h1")).toBeDefined();
  });
});
