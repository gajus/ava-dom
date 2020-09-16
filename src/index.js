// @flow

/* eslint-disable fp/no-mutating-assign */
/* eslint-disable fp/no-this */
/* eslint-disable import/no-namespace */

import * as matchers from '@testing-library/jest-dom/matchers';
import {
  Assertions,
} from 'ava/lib/assert';
import * as utils from 'jest-matcher-utils';

export const shim = () => {
  const extension = {};

  const matcherNames = [
    'toBeChecked',
    'toBeDisabled',
    'toBeEmpty',
    'toBeEmptyDOMElement',
    'toBeEnabled',
    'toBeInTheDocument',
    'toBeInTheDOM',
    'toBeInvalid',
    'toBePartiallyChecked',
    'toBeRequired',
    'toBeValid',
    'toBeVisible',
    'toContainElement',
    'toContainHTML',
    'toHaveAttribute',
    'toHaveClass',
    'toHaveDescription',
    'toHaveDisplayValue',
    'toHaveFocus',
    'toHaveFormValues',
    'toHaveStyle',
    'toHaveTextContent',
    'toHaveValue',
  ];

  for (const matcherName of matcherNames) {
    extension[matcherName] = function (...args) {
      const check = matchers[matcherName].call({utils}, ...args);

      this.true(check.pass, check.message());
    };
  }

  Object.assign(
    Assertions.prototype,
    extension,
  );
};
