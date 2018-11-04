export function proofsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_PROOF':
      return [action.proof, ...state];
    case 'REMOVE_PROOF':
      return state.filter(proof => proof.id !== action.proofId);
    default:
      return state;
  }
}
