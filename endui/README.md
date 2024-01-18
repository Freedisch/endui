# endui [![Build Status](https://app.travis-ci.com/Freedisch/endui.svg?branch=develop)](https://travis-ci.org/Freedisch/endui)

A library for creating user interfaces.

## Installation

```bash
$ npm i @endui/react
```

## Example

```js
import {Button, buttonVariants} from '@endui/react;

<Button variant="ghost" size="lg">
  Hello world
</Button>


<button className={buttonVariants({
  variant: 'ghost',
  className: 'w-fit',
  size: 'lg',
})}
>
  Hello button
</button>
```

## API Documentation

### createElement(name, element)

Create a new element.

Parameters:

- `name`: \_String\_\_
- `element`: _Object_
  - `getDefaultProps`: _Function_ (Returns _Object_)
  - `render`: _Function_ (Returns _String_)
    - _this_ context:
      - `props`: _Object_
      - `children`: _String_

Returns: _undefined_

Example:

```js
Float.createElement('AwesomeButton', {
  getDefaultProps: function () {
    return { type: 'primary' };
  },

  render: function () {
    return (
      '<button class="btn btn-' +
      this.props.type +
      '">' +
      this.children +
      '</button>'
    );
  },
});
```

### extendUIofComponents(elements)

Add elements to the current Float instance from other Float instances.

Parameters:

- `elements`: _Object_

Returns: _undefined_

Example:

```js
const Float = require('float-ui');
const Float_PS = require('float-ps');

console.log(Float.getElements());
// => {HelloButton: {render: function() {...}}}

console.log(FLOAT_PS);
// => {break: {render: function() {...}}, CommandButton: {render: function() {...}}

Float.extendElements(FLOAT_PS);

console.log(Float.getElements());
// => {HelloButton: {render: function() {...}}, break: render: function() {...}, CommandButton: {render: function() {...}}}
```

### getElements()

Parameters: None

Returns: _Object_

Example:

```js
console.log(Float.getElements());
// => {someElement: {render: function() {...}}, someOtherElement: {getDefaultProps: function() {...}, render: function() {...}}
```

### renderElement(html)

Renders an element.

Parameters:

- `html`: _String_

Returns: _String_

Examples:

```js
console.log(Float.renderElement('<b>hi</b>'));
// => <b>hi</b>

console.log(
  Float.renderElement('<AwesomeButton type="Danger">Delete</AwesomeButton>')
);
// => <button class="btn btn-primary">Delete</button>

console.log(
  Float.renderElement('<div><h1>Welcome!</h1><HelloButton name="Phil" /></div>')
);
// => <div><h1>Welcome!</h1><button>Hello Phil</button></div>
```

# LICENSE

[MIT](LICENSE)
