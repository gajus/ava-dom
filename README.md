# ava-dom

[![Travis build status](http://img.shields.io/travis/gajus/ava-dom/master.svg?style=flat-square)](https://travis-ci.org/gajus/ava-dom)
[![Coveralls](https://img.shields.io/coveralls/gajus/ava-dom.svg?style=flat-square)](https://coveralls.io/github/gajus/ava-dom)
[![NPM version](http://img.shields.io/npm/v/ava-dom.svg?style=flat-square)](https://www.npmjs.org/package/ava-dom)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Port of [jest-dom](https://github.com/testing-library/jest-dom) to [ava](https://www.npmjs.com/package/ava).

## Installation

```bash
npm install --save-dev ava-dom

```

Configure ava to `require` `ava-dom/shim` before every test file.

```
{
	"ava": {
		"require": [
			"ava-dom/shim"
		]
	}
}

```

Alternatively, just load call `shim` function in ava test.

```js
import ava from 'ava';
import {
  shim,
} from 'ava-dom';

shim();

```

## Usage

ava-dom adds all jest-dom methods to ava assertions prototype, i.e. all jest-dom methods are accessible under ava's `t` variable.

```js
import ava from 'ava';

test();

```

## Compatibility with jest-dom

All [jest-dom](https://github.com/testing-library/jest-dom) methods are available in ava-dom

* [`toBeChecked`](https://github.com/testing-library/jest-dom#tobechecked)
* [`toBeDisabled`](https://github.com/testing-library/jest-dom#tobedisabled)
* [`toBeEmpty`](https://github.com/testing-library/jest-dom#tobeempty)
* [`toBeEmptyDOMElement`](https://github.com/testing-library/jest-dom#tobeemptydomelement)
* [`toBeEnabled`](https://github.com/testing-library/jest-dom#tobeenabled)
* [`toBeInTheDocument`](https://github.com/testing-library/jest-dom#tobeinthedocument)
* [`toBeInTheDOM`](https://github.com/testing-library/jest-dom#tobeinthedom)
* [`toBeInvalid`](https://github.com/testing-library/jest-dom#tobeinvalid)
* [`toBePartiallyChecked`](https://github.com/testing-library/jest-dom#tobepartiallychecked)
* [`toBeRequired`](https://github.com/testing-library/jest-dom#toberequired)
* [`toBeValid`](https://github.com/testing-library/jest-dom#tobevalid)
* [`toBeVisible`](https://github.com/testing-library/jest-dom#tobevisible)
* [`toContainElement`](https://github.com/testing-library/jest-dom#tocontainelement)
* [`toContainHTML`](https://github.com/testing-library/jest-dom#tocontainhtml)
* [`toHaveAttribute`](https://github.com/testing-library/jest-dom#tohaveattribute)
* [`toHaveClass`](https://github.com/testing-library/jest-dom#tohaveclass)
* [`toHaveDescription`](https://github.com/testing-library/jest-dom#tohavedescription)
* [`toHaveDisplayValue`](https://github.com/testing-library/jest-dom#tohavedisplayvalue)
* [`toHaveFocus`](https://github.com/testing-library/jest-dom#tohavefocus)
* [`toHaveFormValues`](https://github.com/testing-library/jest-dom#tohaveformvalues)
* [`toHaveStyle`](https://github.com/testing-library/jest-dom#tohavestyle)
* [`toHaveTextContent`](https://github.com/testing-library/jest-dom#tohavetextcontent)
* [`toHaveValue`](https://github.com/testing-library/jest-dom#tohavevalue)
