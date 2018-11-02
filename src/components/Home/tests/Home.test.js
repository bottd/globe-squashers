import React from 'react';
import {shallow} from 'enzyme';
import Home from '../';

describe('Home component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
