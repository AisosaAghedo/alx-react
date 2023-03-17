import React from 'react';
import CourseList from './CourseList';
import shallow from 'enzyme'

describe('test for courselist component', ()=>{
 it("test that CourseList component renders without crashing", ()=>{
  const wrapper = shallow(<CourseList />)
  expect(wrapper.exists).toBe(true)
 });
 it("test that it renders the 5 different rows", ()=>{
  const wrapper = shallow(<CourseList />)
  expect(wrapper.find("CourseListRow").length).toBe(5);
 });
})