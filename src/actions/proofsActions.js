export const addProof = proof => ({
  type: 'ADD_PROOF',
  proof,
});

export const removeProof = id => ({
  type: 'REMOVE_PROOF',
  id,
});
