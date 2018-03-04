import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use to group together similar tests
describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  // Use 'it' to test a single attribute of a target
  it('shows a comment box component', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list component', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
