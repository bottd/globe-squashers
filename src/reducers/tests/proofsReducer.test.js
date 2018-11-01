import {proofsReducer} from '../proofsReducer';

describe('proofsReducer', () => {
  it('Should have a default state', () => {
    const expected = [];
    const result = proofsReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('Should add a proof on type ADD_PROOF', () => {
    const mockState = [{id: 1}];
    const mockProof = {id: 2};
    const mockAction = {
      type: 'ADD_PROOF',
      proof: mockProof,
    };
    const expected = [{id: 2}, {id: 1}];
    const result = proofsReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
  it('Should remove a proof on type REMOVE_PROOF', () => {
    const mockState = [{id: 1}, {id: 2}, {id: 3}];
    const mockAction = {
      type: 'REMOVE_PROOF',
      proofId: 2,
    };
    const expected = [{id: 1}, {id: 3}];
    const result = proofsReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
