import React from 'react';
import Nav from '../';
import {shallow} from 'enzyme';

describe('Nav', () => {
  it('Should render like snapshot', () => {
    const wrapper = shallow(<Nav/>);
    expect(wrapper).toMatchSnapshot();
  });
});
