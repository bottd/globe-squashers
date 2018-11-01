import {combineReducers} from 'redux';
import {proofsReducer} from './proofsReducer';
import {imagesReducer} from './imagesReducer';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  proofs: proofsReducer,
  images: imagesReducer,
  user: userReducer
});
