import { SET_DATE } from './../constants';
import moment from 'moment';

const initialState = moment().format('YYYY-MM-DD');

function date(state = initialState, action) {
  switch(action.type) {
    case SET_DATE: {
      if (action.hasOwnProperty('date')) {
        return action.date
      }
      return initialState; 
    }
    default:
      return state;
  }
}

export default date;