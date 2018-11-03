import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import {Create} from '../';

describe('Create', () => {
  describe('Create component', () => {
    let wrapper, create;
    beforeEach(() => {
      wrapper = mount(
        <Create
          fetchImages={jest.fn()}
          fetchImage={jest.fn()}
          page={2}
          images={[]}
          image={{}}
        />,
      );
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
