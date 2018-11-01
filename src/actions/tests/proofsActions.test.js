import {addProof, removeProof} from '../proofsActions';

describe('proofsActions', () => {
  describe('addProof', () => {
    it('Should have a type of ADD_PROOF and carry a proof object', () => {
      const mockProof = {id: 1, image: 'image.com'};
      const expected = {
        type: 'ADD_PROOF',
        proof: mockProof,
      };
      const result = addProof(mockProof);
      expect(result).toEqual(expected);
    });
  });
  describe('removeProof', () => {
    it('Should have a type of REMOVE_PROOF and carry a proof id', () => {
      const id = 10;
      const expected = {
        type: 'REMOVE_PROOF',
        id,
      };
      const result = removeProof(id);
      expect(result).toEqual(expected);
    });
  });
});
