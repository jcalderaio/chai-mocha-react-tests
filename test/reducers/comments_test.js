import { expect } from '../test_helper';
import CommentsReducer from '../../src/reducers/reducer_comments';
import { ADD_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action of unknown type', () => {
    expect(CommentsReducer(undefined, {})).to.eql([]);
  });
  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: ADD_COMMENT, payload: 'new comment' };
    expect(CommentsReducer([], action)).to.eql(['new comment']);
  });
});
