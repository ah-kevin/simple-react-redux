/**
 * Created by dg_lennon on 16/6/2.
 */
import {LOCATION_CHANGE} from 'react-router-redux';
import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});
export default (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    });
  }
  return state;
}
