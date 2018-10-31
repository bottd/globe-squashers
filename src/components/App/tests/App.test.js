import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '../';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
