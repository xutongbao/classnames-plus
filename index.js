/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/classnames-plus
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

  function classNamesPlus () {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNamesPlus.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (typeof arg[key] === 'function') {
            var temp = arg[key]();
            var inner = classNamesPlus.call(null, temp);
            if (inner) {
              classes.push(inner);
            }
          } else {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }            
          }
        }
      } else if (argType === 'function') {
        classes.push(arg());
      }
    }

    return classes.join(' ');
  }

	if (typeof module !== 'undefined' && module.exports) {
		classNamesPlus.default = classNamesPlus;
		module.exports = classNamesPlus;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnamesplus', consistent with npm package name
		define('classnamesplus', [], function () {
			return classNamesPlus;
		});
	} else {
		window.classNamesPlus = classNamesPlus;
	}
}());
