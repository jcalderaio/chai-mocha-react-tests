import { combineReducers } from 'redux';
import CommentsReducer from './reducer_comments';

export default combineReducers({
  comments: CommentsReducer
});
