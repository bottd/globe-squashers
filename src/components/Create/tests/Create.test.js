import React from 'react';
import {shallow, mount} from 'enzyme';
import {Create} from '../';
import {render} from 'react-testing-library';

describe('Create', () => {
  describe('Create component', () => {
    let wrapper;
    beforeEach(() => {
     wrapper = shallow(
        <Create
          addProof={jest.fn()}
          fetchImages={jest.fn()}
          fetchImage={jest.fn()}
          setPage={jest.fn()}
          resetImages={jest.fn()}
          page={2}
          images={[1, 2, 3]}
          image={{}}
        />,
      );
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should have be loaded after mount', () => {
      expect(wrapper.state().isLoaded).toBe(true);
    });

    it('Should be able to cycleImages', async () => {
      await wrapper.instance().cycleImage(1);
      expect(wrapper.state().currentImage).toBe(1);
    });
  });
});
