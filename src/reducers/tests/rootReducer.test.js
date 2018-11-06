import {rootReducer} from '../';

describe('rootReducer', () => {
  it('Should match snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });
});
