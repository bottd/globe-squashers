import React from 'react';
import {mount} from 'enzyme';
import {Create} from '../';

describe('Create', () => {
  describe('Create component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Create fetchImages={jest.fn()} page={2} images={[]} />,
      );
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
