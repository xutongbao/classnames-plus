classnames-plus
===========


A simple JavaScript utility for conditionally joining classnames-plus together.

Install with [npm](https://www.npmjs.com/), [Bower](https://bower.io/), or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install classnames-plus --save
```

Bower:
```sh
bower install classnames-plus --save
```

Yarn (note that `yarn add` automatically saves the package to the `dependencies` in `package.json`):
```sh
yarn add classnames-plus
```

Use with [Node.js](https://nodejs.org/en/), [Browserify](http://browserify.org/), or [webpack](https://webpack.github.io/):

```js
var classNamesPlus = require('classnames-plus');
classNamesPlus('foo', 'bar'); // => 'foo bar'
```

```js
var classNamesPlus = require('classnames-plus');
var tabActiveIndex = 0;
var result = classNamesPlus({
  btn: true,
  'btn-pressed': false,
  'btn-over': true
}, 
{
  'fun': function() {
    return 'fun-plus';
  }
},
function () {
    if (0 === tabActiveIndex) {
      return 'active';
    } else {
      return '';
    }    
});
console.log(result);  // => 'btn btn-over fun-plus active'
```


## License

[MIT](LICENSE). Copyright (c) 2018 Xu Tongbao.
