// @flow

import test, {
  before,
} from 'ava';
import {
  shim,
} from '../../src';
import {
  render,
  setupBrowser,
} from '../helpers';

before(() => {
  shim();

  setupBrowser();
});

test('handles checkbox input', (t) => {
  const {queryByTestId} = render(`
    <input type="checkbox" checked data-testid="input-checkbox-checked" />
    <input type="checkbox" data-testid="input-checkbox-unchecked" />
  `);

  t.toBeChecked(queryByTestId('input-checkbox-checked'));
});
