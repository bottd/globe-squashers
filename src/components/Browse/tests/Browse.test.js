import React from 'react';
import {shallow} from 'enzyme';
import {Browse} from '../';

describe('Browse', () => {
  describe('Browse component', () => {
    it('should render like snapshot', () => {
      const wrapper = shallow(<Browse/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
