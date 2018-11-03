import React from 'react';
import {shallow} from 'enzyme';
import Home from '../';
import InfoPage from '../components/InfoPage';

describe('Home', () => {
  describe('Home component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Home />);
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('InfoPage component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<InfoPage/>);
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
