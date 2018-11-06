import React from 'react';
import {shallow, mount} from 'enzyme';
import {Create} from '../';
import {render} from 'react-testing-library';

describe('Create', () => {
  describe('Create component', () => {
    let wrapper, create, fetchImages, fetchImage, setPage, resetImages;
    beforeEach(() => {
      fetchImages = jest.fn();
      fetchImage = jest.fn();
      setPage = jest.fn();
      resetImages = jest.fn();
      wrapper = render(
        <Create
          fetchImages={fetchImages}
          fetchImage={fetchImage}
          setPage={setPage}
          resetImages={resetImages}
          page={2}
          images={[1, 2, 3]}
          image={{}}
        />,
      );
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });
});
