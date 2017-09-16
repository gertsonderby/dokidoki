import expect from 'testHelpers/expect';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import App from 'App';

it('renders without crashing', () => {
  const app = TestUtils.renderIntoDocument(<App />);
  return expect(app, 'to have rendered', <div />);
});
