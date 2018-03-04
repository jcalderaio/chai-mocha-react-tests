import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

// Use to group together similar tests
describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['New comment', 'Other new comment'] };
    component = renderComponent(CommentList, null, props);
  });
  // Use 'it' to test a single attribute of a target
  it('shows an LI for each component', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('Other new comment');
  });
});
