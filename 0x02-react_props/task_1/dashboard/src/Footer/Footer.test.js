import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("Tests that Footer component renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
  it("Verifies that the components at the very least renders the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text('copyright'));
    
  });
});
