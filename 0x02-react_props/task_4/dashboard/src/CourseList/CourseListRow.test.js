import React from 'react';
import {shallow} from 'enzyme';
import CourseListRow from './CourseListRow';

describe("when isHeader is true", () =>{
 it('test the component renders one cell with colspan = 2 when textSecondCell does not exist',() =>{
   const wrapper = shallow(
     <CourseListRow isHeader={true} textFirstCell="Test run" />
   );
   expect(wrapper.html()).toBe('<tr><th colSpan="2">Test run</th></tr>');
 });
 it("test the component renders two cells when textSecondCell is present", () =>{
  const wrapper = shallow(<CourseListRow isHeader={true}textFirstCell="Test run" textSecondCell="test"/>
  );
  expect(wrapper.find('tr').children().length).toBe(2)
 });
});

describe("When isHeader is false", () => {
 it("test the component renders correctly two td elements within a tr element", () => {
  const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" />)
  expect(wrapper.find('tr').children().length).toBe(2)
 });
});