import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import {Create} from '../';

describe('Create', () => {
  describe('Create component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <MemoryRouter>
          <Create fetchImages={jest.fn()} page={2} images={[]} />,
        </MemoryRouter>
      );
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});