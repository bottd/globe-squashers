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

    it('Should call scrollTo on click', () => {
      window.scrollTo = jest.fn();
      const btn = wrapper.find('.scroll-to-info');
      btn.simulate('click');
      expect(window.scrollTo).toHaveBeenCalled();
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

    it('Should call scrollTo on click', () => {
      window.scrollTo = jest.fn();
      const btn = wrapper.find('.scroll-to-home');
      btn.simulate('click');
      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
