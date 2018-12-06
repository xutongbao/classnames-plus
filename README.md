classnames-plus
===========


A simple JavaScript utility for conditionally joining classNames together.

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

Old functions are still available:
```js
var classNamesPlus = require('classnames-plus');
classNamesPlus('foo', 'bar'); // => 'foo bar'
```


add functions:
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

in React:
```js
import React, { Component } from 'react'
import classNamesPlus from 'classnames-plus'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActiveIndex: 0
    }
  } 
  handleClick(tabActiveIndex) {
    this.setState({tabActiveIndex})
  } 
  render() {
    return (
      <ul>
        <li className={
            classNamesPlus('m-tab', () => {
              return this.state.tabActiveIndex === 0 ? 'active': ''
            })
          } 
          onClick={this.handleClick.bind(this, 0)}>css
        </li>
        <li className={
            classNamesPlus('m-tab', () => {
              return this.state.tabActiveIndex === 1 ? 'active': ''
            })
          } 
          onClick={this.handleClick.bind(this, 1)}>javascript
        </li> 
        <li className={
            classNamesPlus('m-tab', () => {
              return this.state.tabActiveIndex === 2 ? 'active': ''
            })
          } 
          onClick={this.handleClick.bind(this, 2)}>html
        </li>                
      </ul>
    );
  }
}

export default App;
```


## License

[MIT](LICENSE). Copyright (c) 2018 Xu Tongbao.
