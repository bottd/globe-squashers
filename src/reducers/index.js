import {combineReducers} from 'redux';
import {proofsReducer} from './proofsReducer';
import {imagesReducer} from './imagesReducer';
import {imageReducer} from './imageReducer';
import {userReducer} from './userReducer';
import {apiReducer} from './apiReducer';

export const rootReducer = combineReducers({
  API: apiReducer,
  proofs: proofsReducer,
  images: imagesReducer,
  image: imageReducer,
  user: userReducer,
});
