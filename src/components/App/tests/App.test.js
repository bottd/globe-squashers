import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {App} from '../';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App fetchImages={jest.fn()} />);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
