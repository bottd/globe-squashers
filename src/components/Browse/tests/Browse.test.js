import React from 'react';
import {shallow} from 'enzyme';
import {Browse, mapStateToProps, mapDispatchToProps} from '../';
import ProofCard from '../components/ProofCard';

describe('Browse', () => {
  describe('Browse component', () => {
    it('should render like snapshot', () => {
      const wrapper = shallow(<Browse proofs={[]} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('ProofCard component', () => {
    it('Should render like snapshot', () => {
      const mockProof = {
        url: 'image.com',
        title: 'A title',
        note: 'This is fake'
      }
      const wrapper = shallow(<ProofCard {...mockProof}/>);
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
