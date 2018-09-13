/* @flow */
import {
  CLEAN_CACHE,
  EXSIST_CACHE,
  RETRIEVE_DATA,
  SELECT_FULL
} from "../MyReducer/constants";

import { _retrieveData, _clearCache, _existCache } from "../loadData";

export function actionClearCache() {
  //console.log('actionClearCache');
  _clearCache();
  return {
    type: CLEAN_CACHE
  };
}

export function actionExistCache(props) {
  //console.log('actionExistCache-1');
  _existCache().then(function(v) {
    //console.log('actionExistCache-2');
    props.navigation.dispatch({ type: EXSIST_CACHE, cache: v });
    //console.log(props.getState());
    //props.navigation.setParams({cache:v});
  });
  return {};
}

export function actionRetrieveData(props) {
  //console.log('actionRetrieveData-1');
  _retrieveData().then(function(data) {
    if (data) {
      //console.log('actionRetrieveData-2',data);
      //console.log('STATE',props.navigation);
      props.navigation.dispatch({ type: RETRIEVE_DATA, data });
    }
  });
}

export function actionSelectFull(props, fullsrc) {
  //console.log('actionSelectFull',props);
  //props.navigation.dispatch({type:SELECT_FULL, fullsrc});
  //return {type:SELECT_FULL,fullsrc:fullsrc};
}
export function actionDeselectFull(props) {
  //console.log('actionDeselectFull',props);
  //props.navigation.dispatch({type:SELECT_FULL, fullsrc});
  //return {type:SELECT_FULL,fullsrc:fullsrc};
}
