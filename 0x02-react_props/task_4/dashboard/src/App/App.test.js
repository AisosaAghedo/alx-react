import React from 'react';
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from '../CourseList/CourseList';

describe("<App />", () => {
  it("Tests that App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it("Tests that it contains Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Notifications />));
  });
  it("Tests that it contains Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Header />));
  });
  it("Tests that it contains Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Login />));
  });
  it("Tests that it contains Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Footer />));
  });
  it("test to check that CourseList is not displayed", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.containsMatchingElement(<CourseList/>)).toBe(false)
  });

})
const wrapper_isLoggedIn = shallow(<App isLoggedIn={true} />);
describe("App Component when isLoggedin is true", () => {
  it("test that it does not render Login component", () => {
    expect(wrapper_isLoggedIn.containsMatchingElement(<Login />)).toEqual(
      false
    );
  });

  it("test that it renders CourseList component", () => {
    expect(wrapper_isLoggedIn.containsMatchingElement(<CourseList />)).toEqual(
      true
    );
  });
});
