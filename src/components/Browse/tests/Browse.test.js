import React from 'react';
import {shallow} from 'enzyme';
import {Browse, mapStateToProps, mapDispatchToProps} from '../';

describe('Browse', () => {
  describe('Browse component', () => {
    it('should render like snapshot', () => {
      const wrapper = shallow(<Browse proofs={[]} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Map state to props', () => {
    it('Should return the proofs from state', () => {
      const mockState = {
        proofs: [],
        other: [],
      };
      const expected = {
        proofs: [],
      };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('Map dispatch to props', () => {
    it('Should return an empty object', () => {
      const result = mapDispatchToProps(jest.fn());
      expect(result).toEqual({});
    });
  });
});
