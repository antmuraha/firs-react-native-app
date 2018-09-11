import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../MyNavigator';

import {
  CLEAN_CACHE,
  EXSIST_CACHE,
  RETRIEVE_DATA,
  SELECT_FULL,
  DESELECT_FULL
} from './constants';

//??? Need initialNavState ???
//console.log('initialNavState: ',initialNavState);
/*
const initialState = {
}
*/
function nav(state, action) {
  //console.log('Reducer:nav()',state, action);
  let nextState;
  switch (action.type) {
    case CLEAN_CACHE:{
      return {...state, cache:false, data:false};
    }
    case EXSIST_CACHE:{
      return {...state, cache:action.cache};
    }
    case RETRIEVE_DATA:{
      return {...state, data:action.data,cache:true};
    }
/*    case SELECT_FULL:{
      return {...state, fullsrc:action.fullsrc};
    }*/
/*    case DESELECT_FULL:{
      return {...state, fullsrc:''};
    }*/
    default:{
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;}
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }

  const MyReducer = combineReducers({
    nav
  });

  export default MyReducer;
