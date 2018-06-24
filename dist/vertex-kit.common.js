module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "vgs7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "/whu":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("3Eo+")('meta');
var isObject = __webpack_require__("EqjI");
var has = __webpack_require__("D2L2");
var setDesc = __webpack_require__("evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "1kS7":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "21It":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("FtD3");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "2p1q":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk");
var createDesc = __webpack_require__("fU25");
module.exports = __webpack_require__("bUqO") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "5VQ+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7GwW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var settle = __webpack_require__("21It");
var buildURL = __webpack_require__("DQCr");
var parseHeaders = __webpack_require__("oJlt");
var isURLSameOrigin = __webpack_require__("GHBc");
var createError = __webpack_require__("FtD3");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("thJu");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("p1b6");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "7gX0":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "B0bq":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fWfb");
module.exports = __webpack_require__("FeBl").Object.getOwnPropertySymbols;


/***/ }),

/***/ "Biqn":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Ttsf");

var _Object$getOwnPropertySymbols = __webpack_require__("qp3O");

var _Object$keys = __webpack_require__("qO4g");

var defineProperty = __webpack_require__("fKPv");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "Cdx3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("sB3e");
var $keys = __webpack_require__("lktj");

__webpack_require__("uqUo")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "DIVP":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "DQCr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "EuXz":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("bUqO") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "FtD3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("t8qj");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "GHBc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "JP+z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "KCLY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("cGG2");
var normalizeHeaderName = __webpack_require__("5VQ+");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("7GwW");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("7GwW");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("KNAl")))

/***/ }),

/***/ "KNAl":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("o/zv");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "Kh4W":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("dSzd");


/***/ }),

/***/ "LKZe":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NpIQ");
var createDesc = __webpack_require__("X8DO");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var has = __webpack_require__("D2L2");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("+E39") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "MfeA":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("Vg1y")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "NpIQ":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "OzIq":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "Q0Ak":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9bBU");

/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "R3AP":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var hide = __webpack_require__("2p1q");
var has = __webpack_require__("WBcL");
var SRC = __webpack_require__("ulTY")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("7gX0").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "Re3r":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "Rrel":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("TcQ7");
var gOPN = __webpack_require__("n0T6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "TNV1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "Ttsf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cnlX");

/***/ }),

/***/ "UKM+":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "V3l/":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "VWgF":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("7gX0");
var global = __webpack_require__("OzIq");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("V3l/") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "Vg1y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var fails = __webpack_require__("zgIt");
var defined = __webpack_require__("/whu");
var wks = __webpack_require__("kkCw");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "Vp6e":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WBcL":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "X8DO":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "Xc4G":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "XmWM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("KCLY");
var utils = __webpack_require__("cGG2");
var InterceptorManager = __webpack_require__("fuGk");
var dispatchRequest = __webpack_require__("xLtR");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bUqO":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("zgIt")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "cGG2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("JP+z");
var isBuffer = __webpack_require__("Re3r");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "cWxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("dVOP");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "cnlX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("iInB");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "crlp":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var LIBRARY = __webpack_require__("O4g8");
var wksExt = __webpack_require__("Kh4W");
var defineProperty = __webpack_require__("evD5").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "dIwP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dVOP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("O4g8") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "fKPv":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("Q0Ak");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "fU25":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "fWfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7KvD");
var has = __webpack_require__("D2L2");
var DESCRIPTORS = __webpack_require__("+E39");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var META = __webpack_require__("06OY").KEY;
var $fails = __webpack_require__("S82l");
var shared = __webpack_require__("e8AB");
var setToStringTag = __webpack_require__("e6n0");
var uid = __webpack_require__("3Eo+");
var wks = __webpack_require__("dSzd");
var wksExt = __webpack_require__("Kh4W");
var wksDefine = __webpack_require__("crlp");
var enumKeys = __webpack_require__("Xc4G");
var isArray = __webpack_require__("7UMu");
var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var createDesc = __webpack_require__("X8DO");
var _create = __webpack_require__("Yobk");
var gOPNExt = __webpack_require__("Rrel");
var $GOPD = __webpack_require__("LKZe");
var $DP = __webpack_require__("evD5");
var $keys = __webpack_require__("lktj");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("n0T6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NpIQ").f = $propertyIsEnumerable;
  __webpack_require__("1kS7").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("O4g8")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("hJx8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "fuGk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "iInB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("TcQ7");
var $getOwnPropertyDescriptor = __webpack_require__("LKZe").f;

__webpack_require__("uqUo")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "jFbC":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Cdx3");
module.exports = __webpack_require__("FeBl").Object.keys;


/***/ }),

/***/ "jhxf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
var document = __webpack_require__("OzIq").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var has = __webpack_require__("D2L2");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "kkCw":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VWgF")('wks');
var uid = __webpack_require__("ulTY");
var Symbol = __webpack_require__("OzIq").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "lDLk":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("DIVP");
var IE8_DOM_DEFINE = __webpack_require__("xZa+");
var toPrimitive = __webpack_require__("s4j0");
var dP = Object.defineProperty;

exports.f = __webpack_require__("bUqO") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', { defineProperty: __webpack_require__("evD5").f });


/***/ }),

/***/ "mtWM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tIFN");

/***/ }),

/***/ "n0T6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("Ibhu");
var hiddenKeys = __webpack_require__("xnc9").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "o/zv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("KNAl")))

/***/ }),

/***/ "oJlt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "p1b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "pBtG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "pxG4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "qO4g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jFbC");

/***/ }),

/***/ "qRfI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "qp3O":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B0bq");

/***/ }),

/***/ "qwQ3":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("Vg1y")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "s4j0":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("UKM+");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "t8qj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "tIFN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var bind = __webpack_require__("JP+z");
var Axios = __webpack_require__("XmWM");
var defaults = __webpack_require__("KCLY");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("dVOP");
axios.CancelToken = __webpack_require__("cWxy");
axios.isCancel = __webpack_require__("pBtG");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("pxG4");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "thJu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "ulTY":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "uqUo":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var fails = __webpack_require__("S82l");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "vgs7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("Biqn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("EuXz");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// EXTERNAL MODULE: ./src/scss/app.scss
var app = __webpack_require__("Vp6e");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/grid/Row.vue
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Row = ({
  name: 'XRow',
  props: {
    gutter: {
      type: [Boolean, String],
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5d5a95ce","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/grid/Row.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
	'row',
	_vm.gutter ? 'row-no-gutter' : ''
]},[_vm._t("default")],2)}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/js/components/grid/Row.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  Row,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var grid_Row = (Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/grid/Col.vue
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Col = ({
  name: 'XCol',
  props: {
    span: {
      type: [Number, String],
      required: true
    },
    offset: {
      type: [Number, String],
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f0d816fa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/grid/Col.vue
var Col_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    ("col-" + _vm.span),
    _vm.offset ? ("col-offset-" + _vm.offset) : ''
  ]},[_vm._t("default")],2)}
var Col_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/grid/Col.vue
/* script */


/* template */

/* template functional */
var Col___vue_template_functional__ = false
/* styles */
var Col___vue_styles__ = null
/* scopeId */
var Col___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Col___vue_module_identifier__ = null

var Col_Component = normalizeComponent(
  Col,
  Col_render,
  Col_staticRenderFns,
  Col___vue_template_functional__,
  Col___vue_styles__,
  Col___vue_scopeId__,
  Col___vue_module_identifier__
)

/* harmony default export */ var grid_Col = (Col_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/panel/Panel.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Panel = ({
  name: 'XPanel',
  props: {
    margin: {
      type: [Boolean, String],
      default: false
    },
    alt: {
      type: [Boolean, String],
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7faf7e58","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/panel/Panel.vue
var Panel_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
	'panel',
	_vm.margin ? 'panel-margin' : ''
]},[(_vm.loading)?_c('div',{staticClass:"progress-line"}):_vm._e(),_vm._v(" "),(_vm.$slots.title || _vm.$slots.extra)?_c('div',{staticClass:"panel-heading"},[(_vm.$slots.title)?_c('div',{staticClass:"panel-title"},[_vm._t("title")],2):_vm._e(),_vm._v(" "),(_vm.$slots.extra)?_c('div',{staticClass:"panel-extra"},[_vm._t("extra")],2):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.$slots.default)?_c('div',{staticClass:"panel-body"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.$slots.footer)?_c('div',{class:[
		'panel-footer',
		_vm.alt ? 'panel-alt' : ''
	]},[_vm._t("footer")],2):_vm._e()])}
var Panel_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/panel/Panel.vue
/* script */


/* template */

/* template functional */
var Panel___vue_template_functional__ = false
/* styles */
var Panel___vue_styles__ = null
/* scopeId */
var Panel___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Panel___vue_module_identifier__ = null

var Panel_Component = normalizeComponent(
  Panel,
  Panel_render,
  Panel_staticRenderFns,
  Panel___vue_template_functional__,
  Panel___vue_styles__,
  Panel___vue_scopeId__,
  Panel___vue_module_identifier__
)

/* harmony default export */ var panel_Panel = (Panel_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/button/Button.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Button = ({
  name: 'XButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4da8688e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/button/Button.vue
var Button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[
			'btn',
      _vm.type ? ("btn-" + _vm.type) : '',
      _vm.size ? ("btn-" + _vm.size) : ''
    ],attrs:{"disabled":_vm.disabled,"type":"button"},on:{"click":_vm.handleClick}},[(_vm.icon)?_c('span',{class:("btn-icon icon icon-" + _vm.icon)}):_vm._e(),_vm._v(" "),(_vm.$slots.default)?_c('span',{staticClass:"btn-text"},[_vm._t("default")],2):_vm._e()])}
var Button_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/button/Button.vue
/* script */


/* template */

/* template functional */
var Button___vue_template_functional__ = false
/* styles */
var Button___vue_styles__ = null
/* scopeId */
var Button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Button___vue_module_identifier__ = null

var Button_Component = normalizeComponent(
  Button,
  Button_render,
  Button_staticRenderFns,
  Button___vue_template_functional__,
  Button___vue_styles__,
  Button___vue_scopeId__,
  Button___vue_module_identifier__
)

/* harmony default export */ var button_Button = (Button_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/button/ButtonGroup.vue
//
//
//
//
//
/* harmony default export */ var ButtonGroup = ({
  name: 'XButtonGroup'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5363fdf6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/button/ButtonGroup.vue
var ButtonGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-group"},[_vm._t("default")],2)}
var ButtonGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/button/ButtonGroup.vue
/* script */


/* template */

/* template functional */
var ButtonGroup___vue_template_functional__ = false
/* styles */
var ButtonGroup___vue_styles__ = null
/* scopeId */
var ButtonGroup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ButtonGroup___vue_module_identifier__ = null

var ButtonGroup_Component = normalizeComponent(
  ButtonGroup,
  ButtonGroup_render,
  ButtonGroup_staticRenderFns,
  ButtonGroup___vue_template_functional__,
  ButtonGroup___vue_styles__,
  ButtonGroup___vue_scopeId__,
  ButtonGroup___vue_module_identifier__
)

/* harmony default export */ var button_ButtonGroup = (ButtonGroup_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/icon/Icon.vue
//
//
//
/* harmony default export */ var Icon = ({
  name: 'XIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 13
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-14ea61b8","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/icon/Icon.vue
var Icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:("icon icon-" + _vm.name)})}
var Icon_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/icon/Icon.vue
/* script */


/* template */

/* template functional */
var Icon___vue_template_functional__ = false
/* styles */
var Icon___vue_styles__ = null
/* scopeId */
var Icon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Icon___vue_module_identifier__ = null

var Icon_Component = normalizeComponent(
  Icon,
  Icon_render,
  Icon_staticRenderFns,
  Icon___vue_template_functional__,
  Icon___vue_styles__,
  Icon___vue_scopeId__,
  Icon___vue_module_identifier__
)

/* harmony default export */ var icon_Icon = (Icon_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/sidebar/Sidebar.vue
//
//
//
//
//
//
//
/* harmony default export */ var Sidebar = ({
  name: 'XSidebar'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e48f50a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/sidebar/Sidebar.vue
var Sidebar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar sidebar-dark"},[_c('div',{staticClass:"sidebar-inner"},[_vm._t("default")],2)])}
var Sidebar_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/sidebar/Sidebar.vue
/* script */


/* template */

/* template functional */
var Sidebar___vue_template_functional__ = false
/* styles */
var Sidebar___vue_styles__ = null
/* scopeId */
var Sidebar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Sidebar___vue_module_identifier__ = null

var Sidebar_Component = normalizeComponent(
  Sidebar,
  Sidebar_render,
  Sidebar_staticRenderFns,
  Sidebar___vue_template_functional__,
  Sidebar___vue_styles__,
  Sidebar___vue_scopeId__,
  Sidebar___vue_module_identifier__
)

/* harmony default export */ var sidebar_Sidebar = (Sidebar_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/sidebar/SidebarItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SidebarItem = ({
  name: 'XSidebarItem',
  props: {
    link: String,
    icon: {
      default: null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9fa5e7ae","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/sidebar/SidebarItem.vue
var SidebarItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{staticClass:"sidebar-item",attrs:{"to":_vm.link}},[(_vm.icon)?_c('div',{staticClass:"sidebar-icon"},[_c('span',{class:("icon icon-" + _vm.icon)})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"sidebar-text"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"sidebar-arrow"},[_c('span',{staticClass:"icon icon-chevron-right"})])])}
var SidebarItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/sidebar/SidebarItem.vue
/* script */


/* template */

/* template functional */
var SidebarItem___vue_template_functional__ = false
/* styles */
var SidebarItem___vue_styles__ = null
/* scopeId */
var SidebarItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SidebarItem___vue_module_identifier__ = null

var SidebarItem_Component = normalizeComponent(
  SidebarItem,
  SidebarItem_render,
  SidebarItem_staticRenderFns,
  SidebarItem___vue_template_functional__,
  SidebarItem___vue_styles__,
  SidebarItem___vue_scopeId__,
  SidebarItem___vue_module_identifier__
)

/* harmony default export */ var sidebar_SidebarItem = (SidebarItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/sidebar/SidebarGroup.vue
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SidebarGroup = ({
  name: 'XSidebarGroup',
  props: {
    title: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e2c6b4a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/sidebar/SidebarGroup.vue
var SidebarGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-group"},[_c('div',{staticClass:"sidebar-heading"},[_c('strong',{staticClass:"sidebar-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('span',{staticClass:"sidebar-line"})]),_vm._v(" "),_vm._t("default")],2)}
var SidebarGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/sidebar/SidebarGroup.vue
/* script */


/* template */

/* template functional */
var SidebarGroup___vue_template_functional__ = false
/* styles */
var SidebarGroup___vue_styles__ = null
/* scopeId */
var SidebarGroup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SidebarGroup___vue_module_identifier__ = null

var SidebarGroup_Component = normalizeComponent(
  SidebarGroup,
  SidebarGroup_render,
  SidebarGroup_staticRenderFns,
  SidebarGroup___vue_template_functional__,
  SidebarGroup___vue_styles__,
  SidebarGroup___vue_scopeId__,
  SidebarGroup___vue_module_identifier__
)

/* harmony default export */ var sidebar_SidebarGroup = (SidebarGroup_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/helpers/Loading.vue
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loading = ({
  name: 'XLoading'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d8dfa41","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/helpers/Loading.vue
var Loading_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Loading_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading"},[_c('div',{staticClass:"ball-beat"},[_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div')])])}]

// CONCATENATED MODULE: ./src/js/components/helpers/Loading.vue
/* script */


/* template */

/* template functional */
var Loading___vue_template_functional__ = false
/* styles */
var Loading___vue_styles__ = null
/* scopeId */
var Loading___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Loading___vue_module_identifier__ = null

var Loading_Component = normalizeComponent(
  Loading,
  Loading_render,
  Loading_staticRenderFns,
  Loading___vue_template_functional__,
  Loading___vue_styles__,
  Loading___vue_scopeId__,
  Loading___vue_module_identifier__
)

/* harmony default export */ var helpers_Loading = (Loading_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/tag/Tag.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tag = ({
  name: 'XTag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose: function handleClose(e) {
      this.$emit('close', e);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7669223c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/tag/Tag.vue
var Tag_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{class:[
			'tag',
      _vm.type ? ("tag-" + _vm.type) : ''
    ]},[_c('span',{staticClass:"tag-text"},[_vm._t("default")],2),_vm._v(" "),(_vm.closable)?_c('span',{staticClass:"icon icon-x tag-close",attrs:{"tabindex":"0"},on:{"click":_vm.handleClose,"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleClose($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key," ")){ return null; }return _vm.handleClose($event)}]}}):_vm._e()])])}
var Tag_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/tag/Tag.vue
/* script */


/* template */

/* template functional */
var Tag___vue_template_functional__ = false
/* styles */
var Tag___vue_styles__ = null
/* scopeId */
var Tag___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Tag___vue_module_identifier__ = null

var Tag_Component = normalizeComponent(
  Tag,
  Tag_render,
  Tag_staticRenderFns,
  Tag___vue_template_functional__,
  Tag___vue_styles__,
  Tag___vue_scopeId__,
  Tag___vue_module_identifier__
)

/* harmony default export */ var tag_Tag = (Tag_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/form/Input.vue
//
//
//
//
//
/* harmony default export */ var Input = ({
  name: 'XInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    type: {
      default: 'text'
    },
    value: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', e.target.value);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fd581a0e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/form/Input.vue
var Input_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{staticClass:"form-input",attrs:{"type":_vm.type,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.handleInput}})}
var Input_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/form/Input.vue
/* script */


/* template */

/* template functional */
var Input___vue_template_functional__ = false
/* styles */
var Input___vue_styles__ = null
/* scopeId */
var Input___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Input___vue_module_identifier__ = null

var Input_Component = normalizeComponent(
  Input,
  Input_render,
  Input_staticRenderFns,
  Input___vue_template_functional__,
  Input___vue_styles__,
  Input___vue_scopeId__,
  Input___vue_module_identifier__
)

/* harmony default export */ var form_Input = (Input_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/form/Textarea.vue
//
//
//
//
//
/* harmony default export */ var Textarea = ({
  name: 'XTextarea',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      this.$emit('input', e.target.value);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-68901d52","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/form/Textarea.vue
var Textarea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{staticClass:"form-input",attrs:{"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.handleInput}})}
var Textarea_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/form/Textarea.vue
/* script */


/* template */

/* template functional */
var Textarea___vue_template_functional__ = false
/* styles */
var Textarea___vue_styles__ = null
/* scopeId */
var Textarea___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Textarea___vue_module_identifier__ = null

var Textarea_Component = normalizeComponent(
  Textarea,
  Textarea_render,
  Textarea_staticRenderFns,
  Textarea___vue_template_functional__,
  Textarea___vue_styles__,
  Textarea___vue_scopeId__,
  Textarea___vue_module_identifier__
)

/* harmony default export */ var form_Textarea = (Textarea_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/form/FormGroup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FormGroup = ({
  name: 'XFormGroup',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    type: {
      default: 'text'
    },
    value: [String, Number, Object, Array, Boolean],
    options: Array,
    tabindex: [String, Number],
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    optional: {
      type: Boolean,
      default: false
    },
    source: {
      type: String,
      default: 'input'
    },
    errors: {
      default: null
    },
    label: String,
    col: {
      default: null
    },
    offset: {
      default: null
    }
  },
  methods: {
    handleInput: function handleInput(input) {
      this.$emit('input', input);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9c611e84","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/form/FormGroup.vue
var FormGroup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.col)?_c('x-col',{attrs:{"span":_vm.col,"offset":_vm.offset}},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"form-label"},[(_vm.$slots.label)?_vm._t("label"):[_c('span',[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.optional)?_c('small',{staticClass:"form-optional"},[_vm._v("(optional)")]):_vm._e()]],2),_vm._v(" "),_c(("x-" + _vm.source),_vm._b({tag:"component",on:{"input":_vm.handleInput}},'component',_vm.$props,false)),_vm._v(" "),(_vm.errors && _vm.errors.length)?_c('small',{staticClass:"error-input"},[_vm._v(_vm._s(_vm.errors[0]))]):_vm._e()],1)]):_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"form-label"},[(_vm.$slots.label)?_vm._t("label"):[_c('span',[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.optional)?_c('small',{staticClass:"form-optional"},[_vm._v("(optional)")]):_vm._e()]],2),_vm._v(" "),_c(("x-" + _vm.source),_vm._b({tag:"component",on:{"input":_vm.handleInput}},'component',_vm.$props,false)),_vm._v(" "),(_vm.errors && _vm.errors.length)?_c('small',{staticClass:"error-input"},[_vm._v(_vm._s(_vm.errors[0]))]):_vm._e()],1)}
var FormGroup_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/form/FormGroup.vue
/* script */


/* template */

/* template functional */
var FormGroup___vue_template_functional__ = false
/* styles */
var FormGroup___vue_styles__ = null
/* scopeId */
var FormGroup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var FormGroup___vue_module_identifier__ = null

var FormGroup_Component = normalizeComponent(
  FormGroup,
  FormGroup_render,
  FormGroup_staticRenderFns,
  FormGroup___vue_template_functional__,
  FormGroup___vue_styles__,
  FormGroup___vue_scopeId__,
  FormGroup___vue_module_identifier__
)

/* harmony default export */ var form_FormGroup = (FormGroup_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/form/Select.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Select = ({
  name: 'XSelect',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    tabindex: {
      default: 0
    },
    value: [Object, Array],
    options: Array,
    disabled: {
      default: false,
      type: Boolean
    },
    multiple: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      showDropdown: false,
      selectIndex: -1
    };
  },
  methods: {
    remove: function remove(x, i) {
      var payload = this.value;
      payload.splice(i, 1);
      this.$emit('input', payload);
      this.close();
    },
    select: function select(option) {
      if (this.multiple) {
        var payload = this.value;
        payload.push(option);
        this.$emit('input', payload);
      } else {
        this.$emit('input', option);
      }

      this.close();
    },
    onEnter: function onEnter() {
      if (this.disabled) return;
      if (this.selectIndex < 0) return;
      var option = this.options[this.selectIndex];
      this.select(option);
    },
    onBlur: function onBlur() {
      this.close();
    },
    close: function close() {
      this.showDropdown = false;
      this.selectIndex = -1;
    },
    open: function open() {
      this.showDropdown = true;
    },
    toggle: function toggle() {
      if (this.disabled) return;

      if (this.showDropdown) {
        this.close();
      } else {
        this.open();
      }
    },
    onMouse: function onMouse(index) {
      this.selectIndex = index;
    },
    onUpKey: function onUpKey(e) {
      var _this = this;

      if (this.disabled) return;

      if (this.selectIndex > 0) {
        this.selectIndex--;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            // todo: algo to find best scroll position
            _this.$refs.items.scrollTop -= 28;
          });
        }
      } else {
        this.selectIndex = this.options.length - 1;
        this.$nextTick(function () {
          _this.$refs.items.scrollTop = _this.selectIndex * 28;
        });
      }
    },
    onDownKey: function onDownKey(e) {
      var _this2 = this;

      if (this.disabled) return;

      if (!this.showDropdown) {
        this.open();
      }

      if (this.options.length - 1 > this.selectIndex) {
        this.selectIndex++;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            _this2.$refs.items.scrollTop += 28;
          });
        }
      } else {
        this.selectIndex = 0;
        this.$nextTick(function () {
          _this2.$refs.items.scrollTop = 0;
        });
      }
    },
    handleKeyOnFocus: function handleKeyOnFocus(e) {
      var keyCode = e.keyCode || e.which;

      if (!e.shiftKey && keyCode !== 9 && !this.showDropdown) {
        this.open();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a3df8054","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/form/Select.vue
var Select_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-form"},[_c('div',{ref:"toggle",staticClass:"select-input",attrs:{"tabindex":_vm.disabled ? -1 : _vm.tabindex,"disabled":_vm.disabled},on:{"click":_vm.toggle,"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.onDownKey($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onEnter($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.onUpKey($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.onBlur($event)}],"blur":_vm.onBlur}},[(_vm.multiple)?_c('div',{staticClass:"select-text"},[(_vm.value.length)?_c('div',{staticClass:"select-tags"},_vm._l((_vm.value),function(x,i){return _c('div',{staticClass:"tag tag-primary"},[_c('span',{staticClass:"tag-text"},[_vm._v("\n              "+_vm._s(x.value)+"\n            ")]),_vm._v(" "),_c('span',{staticClass:"icon icon-x tag-close",attrs:{"tabindex":"0"},on:{"mousedown":function($event){$event.preventDefault();$event.stopPropagation();_vm.remove(x, i)}}})])})):_c('div',[_vm._v("Select")])]):_c('div',{staticClass:"select-text"},[_vm._v("\n        "+_vm._s(_vm.value && _vm.value.value ? _vm.value.value : 'Select')+"\n      ")]),_vm._v(" "),_c('span',{class:[("select-icon icon icon-chevron-" + (_vm.showDropdown ? 'up' : 'down'))]})]),_vm._v(" "),(_vm.showDropdown)?_c('div',{staticClass:"select-dropdown"},[_c('div',{staticClass:"select-inner"},[_c('div',{ref:"items",staticClass:"select-items"},_vm._l((_vm.options),function(option,i){return _c('div',{class:['select-item', _vm.selectIndex === i ? 'select-active':''],on:{"mouseover":function($event){$event.preventDefault();_vm.onMouse(i)},"mousedown":function($event){$event.preventDefault();_vm.select(option)}}},[_c('span',[_vm._v(_vm._s(option.value))])])}))])]):_vm._e()])}
var Select_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/form/Select.vue
/* script */


/* template */

/* template functional */
var Select___vue_template_functional__ = false
/* styles */
var Select___vue_styles__ = null
/* scopeId */
var Select___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Select___vue_module_identifier__ = null

var Select_Component = normalizeComponent(
  Select,
  Select_render,
  Select_staticRenderFns,
  Select___vue_template_functional__,
  Select___vue_styles__,
  Select___vue_scopeId__,
  Select___vue_module_identifier__
)

/* harmony default export */ var form_Select = (Select_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/form/Switch.vue
//
//
//
//
//
//
//
/* harmony default export */ var Switch = ({
  name: 'XSwitch',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [Boolean, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      default: 0
    }
  },
  methods: {
    toggleSwitch: function toggleSwitch(e) {
      if (this.disabled) return;
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-262f63b0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/form/Switch.vue
var Switch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"switch",class:[{'switch-checked': _vm.value, 'switch-disabled': _vm.disabled}],attrs:{"tabindex":_vm.disabled ? -1 : _vm.tabindex},on:{"click":_vm.toggleSwitch,"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key," ")){ return null; }$event.preventDefault();return _vm.toggleSwitch($event)}}})])}
var Switch_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/form/Switch.vue
/* script */


/* template */

/* template functional */
var Switch___vue_template_functional__ = false
/* styles */
var Switch___vue_styles__ = null
/* scopeId */
var Switch___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Switch___vue_module_identifier__ = null

var Switch_Component = normalizeComponent(
  Switch,
  Switch_render,
  Switch_staticRenderFns,
  Switch___vue_template_functional__,
  Switch___vue_styles__,
  Switch___vue_scopeId__,
  Switch___vue_module_identifier__
)

/* harmony default export */ var form_Switch = (Switch_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/alert/Alert.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Alert = ({
  name: 'XAlert',
  props: {
    message: String,
    type: {
      default: 'success'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose: function handleClose(e) {
      this.$emit('close', e);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2b241c30","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/alert/Alert.vue
var Alert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{class:[
				'alert',
	      _vm.type ? ("alert-" + _vm.type) : ''
	    ]},[_c('div',{staticClass:"alert-inner"},[_c('div',{staticClass:"alert-icon"},[_c('span',{staticClass:"icon icon-alert-circle"})]),_vm._v(" "),_c('div',{staticClass:"alert-text"},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),(_vm.closable)?_c('div',{staticClass:"alert-close",on:{"click":_vm.handleClose}},[_c('span',{staticClass:"icon icon-x"})]):_vm._e()])])])}
var Alert_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/alert/Alert.vue
/* script */


/* template */

/* template functional */
var Alert___vue_template_functional__ = false
/* styles */
var Alert___vue_styles__ = null
/* scopeId */
var Alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Alert___vue_module_identifier__ = null

var Alert_Component = normalizeComponent(
  Alert,
  Alert_render,
  Alert_staticRenderFns,
  Alert___vue_template_functional__,
  Alert___vue_styles__,
  Alert___vue_scopeId__,
  Alert___vue_module_identifier__
)

/* harmony default export */ var alert_Alert = (Alert_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/modal/Modal.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Modal = ({
  name: 'XModal',
  props: {
    alt: {
      type: [Boolean, String],
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    okText: {
      default: 'Ok'
    },
    cancelText: {
      default: 'Cancel'
    }
  },
  methods: {
    handleMaskClick: function handleMaskClick(e) {
      this.close();
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    ok: function ok() {
      this.$emit('ok');
    },
    close: function close() {
      this.cancel();
    },
    handleWrapperClick: function handleWrapperClick() {
      this.close();
    },
    handleKeyCode: function handleKeyCode(evt) {
      if (evt.keyCode === 27) {
        // esc
        this.close();
      }
    }
  },
  mounted: function mounted() {
    document.addEventListener('keydown', this.handleKeyCode);
  },
  beforeDestory: function beforeDestory() {
    document.removeEventListener('keydown', this.handleKeyCode);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c68150c2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/modal/Modal.vue
var Modal_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"modal-container"},[_c('div',{staticClass:"modal-mask",on:{"click":_vm.handleMaskClick}}),_vm._v(" "),_c('div',{staticClass:"modal-wrapper",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleWrapperClick($event)}}},[_c('div',{staticClass:"modal"},[_c('div',{staticClass:"modal-heading"},[(_vm.$slots.title)?_c('div',{staticClass:"modal-title"},[_vm._t("title")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"modal-close",on:{"click":_vm.close}},[_c('span',{staticClass:"icon icon-x"})])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._t("default")],2),_vm._v(" "),_c('div',{class:[
	     				'modal-footer',
	     				_vm.alt ? 'modal-alt' : ''
	     			]},[(_vm.$slots.footer)?[_vm._t("footer")]:_c('div',{staticClass:"modal-actions"},[_c('x-button',{on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.cancelText))]),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},on:{"click":_vm.ok}},[_vm._v(_vm._s(_vm.okText))])],1)],2)])])])])}
var Modal_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/modal/Modal.vue
/* script */


/* template */

/* template functional */
var Modal___vue_template_functional__ = false
/* styles */
var Modal___vue_styles__ = null
/* scopeId */
var Modal___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Modal___vue_module_identifier__ = null

var Modal_Component = normalizeComponent(
  Modal,
  Modal_render,
  Modal_staticRenderFns,
  Modal___vue_template_functional__,
  Modal___vue_styles__,
  Modal___vue_scopeId__,
  Modal___vue_module_identifier__
)

/* harmony default export */ var modal_Modal = (Modal_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/dropdown/Dropdown.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Dropdown = ({
  name: 'XDropdown',
  props: {
    icon: {
      default: null
    },
    title: String,
    dir: {
      default: 'left'
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    toggle: function toggle() {
      if (this.show) {
        this.close();
      } else {
        this.open();
      }
    },
    open: function open() {
      var _this = this;

      this.show = true;
      this.$nextTick(function () {
        document.addEventListener('click', _this.clickOutEvent);
        document.addEventListener('keydown', _this.handleKeyCode);
      });
    },
    close: function close() {
      document.removeEventListener('click', this.clickOutEvent);
      document.removeEventListener('keydown', this.handleKeyCode);
      this.show = false;
    },
    clickOutEvent: function clickOutEvent(evt) {
      var $dd = this.$refs.inside;

      if (evt.target !== $dd && !$dd.contains(evt.target)) {
        this.close();
      }
    },
    handleKeyCode: function handleKeyCode(evt) {
      if (evt.keyCode === 27) {
        this.close();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26d4bfaa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/dropdown/Dropdown.vue
var Dropdown_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown"},[_vm._t("button",[_c('x-button',{attrs:{"icon":_vm.icon},on:{"click":function($event){_vm.toggle()}}},[(_vm.title)?_c('span',[_vm._v(_vm._s(_vm.title))]):_vm._e()])],{toggle:_vm.toggle}),_vm._v(" "),_c('div',{ref:"inside",class:("dropdown-inner dropdown-" + _vm.dir)},[_c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_vm._t("menu"):_vm._e()],2)],1)],2)}
var Dropdown_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/dropdown/Dropdown.vue
/* script */


/* template */

/* template functional */
var Dropdown___vue_template_functional__ = false
/* styles */
var Dropdown___vue_styles__ = null
/* scopeId */
var Dropdown___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Dropdown___vue_module_identifier__ = null

var Dropdown_Component = normalizeComponent(
  Dropdown,
  Dropdown_render,
  Dropdown_staticRenderFns,
  Dropdown___vue_template_functional__,
  Dropdown___vue_styles__,
  Dropdown___vue_scopeId__,
  Dropdown___vue_module_identifier__
)

/* harmony default export */ var dropdown_Dropdown = (Dropdown_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/dropdown/DropdownMenu.vue
//
//
//
//
//
/* harmony default export */ var DropdownMenu = ({
  name: 'XDropdownMenu'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-35cd2f64","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/dropdown/DropdownMenu.vue
var DropdownMenu_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-menu"},[_vm._t("default")],2)}
var DropdownMenu_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/dropdown/DropdownMenu.vue
/* script */


/* template */

/* template functional */
var DropdownMenu___vue_template_functional__ = false
/* styles */
var DropdownMenu___vue_styles__ = null
/* scopeId */
var DropdownMenu___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DropdownMenu___vue_module_identifier__ = null

var DropdownMenu_Component = normalizeComponent(
  DropdownMenu,
  DropdownMenu_render,
  DropdownMenu_staticRenderFns,
  DropdownMenu___vue_template_functional__,
  DropdownMenu___vue_styles__,
  DropdownMenu___vue_scopeId__,
  DropdownMenu___vue_module_identifier__
)

/* harmony default export */ var dropdown_DropdownMenu = (DropdownMenu_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/dropdown/DropdownItem.vue
//
//
//
//
//
//
//
//
/* harmony default export */ var DropdownItem = ({
  name: 'XDropdownItem',
  props: {
    divide: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6245e6b6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/dropdown/DropdownItem.vue
var DropdownItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.divide)?_c('div',{staticClass:"dropdown-divide"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dropdown-item"},[_vm._t("default")],2)])}
var DropdownItem_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/dropdown/DropdownItem.vue
/* script */


/* template */

/* template functional */
var DropdownItem___vue_template_functional__ = false
/* styles */
var DropdownItem___vue_styles__ = null
/* scopeId */
var DropdownItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DropdownItem___vue_module_identifier__ = null

var DropdownItem_Component = normalizeComponent(
  DropdownItem,
  DropdownItem_render,
  DropdownItem_staticRenderFns,
  DropdownItem___vue_template_functional__,
  DropdownItem___vue_styles__,
  DropdownItem___vue_scopeId__,
  DropdownItem___vue_module_identifier__
)

/* harmony default export */ var dropdown_DropdownItem = (DropdownItem_Component.exports);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external___commonjs___vue___commonjs2___vue___root___Vue__ = __webpack_require__("lRwf");
var external___commonjs___vue___commonjs2___vue___root___Vue___default = /*#__PURE__*/__webpack_require__.n(external___commonjs___vue___commonjs2___vue___root___Vue__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/loading-bar/Bar.vue
//
//
//
//
//
//
//
/* harmony default export */ var Bar = ({
  name: 'XLoadingBar',
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    start: function start() {
      this.show = true;
    },
    finish: function finish() {
      this.show = false;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5682c2f5","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/loading-bar/Bar.vue
var Bar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"loading-bar"},[_c('div',{staticClass:"progress-line"})])])}
var Bar_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/loading-bar/Bar.vue
/* script */


/* template */

/* template functional */
var Bar___vue_template_functional__ = false
/* styles */
var Bar___vue_styles__ = null
/* scopeId */
var Bar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Bar___vue_module_identifier__ = null

var Bar_Component = normalizeComponent(
  Bar,
  Bar_render,
  Bar_staticRenderFns,
  Bar___vue_template_functional__,
  Bar___vue_styles__,
  Bar___vue_scopeId__,
  Bar___vue_module_identifier__
)

/* harmony default export */ var loading_bar_Bar = (Bar_Component.exports);

// CONCATENATED MODULE: ./src/js/components/loading-bar/index.js


var bar = new external___commonjs___vue___commonjs2___vue___root___Vue___default.a(loading_bar_Bar).$mount();
document.body.appendChild(bar.$el);
/* harmony default export */ var loading_bar = (bar);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/message/Message.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Message = ({
  name: 'XMessageItem',
  props: {
    item: {
      required: true
    }
  },
  computed: {
    iconClass: function iconClass() {
      var classArr = {
        'success': 'check-circle',
        'error': 'x-circle',
        'warning': 'alert-circle',
        'info': 'info'
      };
      return this.icon || classArr[this.item.type];
    }
  },
  mounted: function mounted() {
    this.startTimer();
  },
  methods: {
    startTimer: function startTimer() {
      var _this = this;

      if (this.item.duration === 0) return;
      setTimeout(function () {
        _this.$emit('close', _this.item.id);
      }, this.item.duration);
    },
    close: function close() {
      this.$emit('close', this.item.id);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09503a7c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/message/Message.vue
var Message_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"move-up"}},[_c('div',{staticClass:"message-wrap"},[_c('div',{staticClass:"message-item"},[_c('div',{class:['message-content', ("message-" + (_vm.item.type))]},[_c('div',{staticClass:"message-icon"},[_c('i',{class:['icon', ("icon-" + _vm.iconClass)]})]),_vm._v(" "),_c('div',{staticClass:"message-text"},[_vm._v("\n  \t\t    "+_vm._s(_vm.item.text)+"\n  \t\t  ")]),_vm._v(" "),(_vm.item.duration === 0)?_c('div',{staticClass:"message-close",on:{"click":_vm.close}},[_c('span',{staticClass:"icon icon-x"})]):_vm._e()])])])])}
var Message_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/message/Message.vue
/* script */


/* template */

/* template functional */
var Message___vue_template_functional__ = false
/* styles */
var Message___vue_styles__ = null
/* scopeId */
var Message___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Message___vue_module_identifier__ = null

var Message_Component = normalizeComponent(
  Message,
  Message_render,
  Message_staticRenderFns,
  Message___vue_template_functional__,
  Message___vue_styles__,
  Message___vue_scopeId__,
  Message___vue_module_identifier__
)

/* harmony default export */ var message_Message = (Message_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/message/MessageList.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var MessageList = ({
  name: 'XMessageList',
  components: {
    XMessageItem: message_Message
  },
  data: function data() {
    return {
      counter: 1,
      messages: []
    };
  },
  methods: {
    onClose: function onClose(i) {
      this.messages.splice(i, 1);
    },
    getNewId: function getNewId() {
      return this.counter++;
    },
    push: function push(type, text) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      var id = this.getNewId();
      var message = {
        id: id,
        type: type,
        text: text,
        duration: duration
      };
      this.messages.push(message);
      return message;
    },
    info: function info(text) {
      return this.push('info', text);
    },
    success: function success(text) {
      return this.push('success', text);
    },
    error: function error(text) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4000;
      return this.push('error', text, duration);
    },
    warning: function warning(text) {
      return this.push('warning', text);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cc8f0294","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/message/MessageList.vue
var MessageList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message-container"},[_c('div',{staticClass:"message-inner"},_vm._l((_vm.messages),function(item,index){return _c('x-message-item',{key:item.id,attrs:{"item":item},on:{"close":function($event){_vm.onClose(index)}}})}))])}
var MessageList_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/message/MessageList.vue
/* script */


/* template */

/* template functional */
var MessageList___vue_template_functional__ = false
/* styles */
var MessageList___vue_styles__ = null
/* scopeId */
var MessageList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var MessageList___vue_module_identifier__ = null

var MessageList_Component = normalizeComponent(
  MessageList,
  MessageList_render,
  MessageList_staticRenderFns,
  MessageList___vue_template_functional__,
  MessageList___vue_styles__,
  MessageList___vue_scopeId__,
  MessageList___vue_module_identifier__
)

/* harmony default export */ var message_MessageList = (MessageList_Component.exports);

// CONCATENATED MODULE: ./src/js/components/message/index.js


var message = new external___commonjs___vue___commonjs2___vue___root___Vue___default.a(message_MessageList).$mount();
document.body.appendChild(message.$el);
/* harmony default export */ var components_message = (message);
// CONCATENATED MODULE: ./src/js/lib/Helpers.js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/form/Typeahead.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Typeahead = ({
  name: 'XTypeahead',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    tabindex: {
      default: 0
    },
    value: Object,
    url: String,
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      showDropdown: false,
      selectIndex: -1,
      options: []
    };
  },
  computed: {
    selectedText: function selectedText() {
      return this.value && this.value.value ? this.value.value : 'Select';
    }
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      this.$http.get(this.url).then(function (res) {
        _this.$set(_this.$data, 'options', res.data.options);
      });
    },
    select: function select(option) {
      this.$emit('input', option);
      this.close();
    },
    onEnter: function onEnter() {
      if (this.disabled) return;
      if (this.selectIndex < 0) return;
      var option = this.options[this.selectIndex];
      this.select(option);
    },
    onBlur: function onBlur() {
      this.close();
    },
    close: function close() {
      this.showDropdown = false;
      this.selectIndex = -1;
    },
    open: function open() {
      this.showDropdown = true;
      this.fetch();
    },
    toggle: function toggle() {
      if (this.disabled) return;

      if (this.showDropdown) {
        this.close();
      } else {
        this.open();
      }
    },
    onMouse: function onMouse(index) {
      this.selectIndex = index;
    },
    onUpKey: function onUpKey(e) {
      var _this2 = this;

      if (this.disabled) return;

      if (this.selectIndex > 0) {
        this.selectIndex--;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            // todo: algo to find best scroll position
            _this2.$refs.items.scrollTop -= 28;
          });
        }
      } else {
        this.selectIndex = this.options.length - 1;
        this.$nextTick(function () {
          _this2.$refs.items.scrollTop = _this2.selectIndex * 28;
        });
      }
    },
    onDownKey: function onDownKey(e) {
      var _this3 = this;

      if (this.disabled) return;

      if (!this.showDropdown) {
        this.open();
      }

      if (this.options.length - 1 > this.selectIndex) {
        this.selectIndex++;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            _this3.$refs.items.scrollTop += 28;
          });
        }
      } else {
        this.selectIndex = 0;
        this.$nextTick(function () {
          _this3.$refs.items.scrollTop = 0;
        });
      }
    },
    handleKeyOnFocus: function handleKeyOnFocus(e) {
      var keyCode = e.keyCode || e.which;

      if (!e.shiftKey && keyCode !== 9 && !this.showDropdown) {
        this.open();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7f700f22","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/form/Typeahead.vue
var Typeahead_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-form"},[_c('div',{ref:"toggle",staticClass:"select-input",attrs:{"tabindex":_vm.disabled ? -1 : _vm.tabindex,"disabled":_vm.disabled},on:{"click":_vm.toggle,"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.onDownKey($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onEnter($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.onUpKey($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.onBlur($event)}],"blur":_vm.onBlur}},[_c('span',{staticClass:"select-text"},[_vm._v(_vm._s(_vm.selectedText))]),_vm._v(" "),_c('span',{class:[("select-icon icon icon-chevron-" + (_vm.showDropdown ? 'up' : 'down'))]})]),_vm._v(" "),(_vm.showDropdown)?_c('div',{staticClass:"select-dropdown"},[_c('div',{staticClass:"select-inner"},[_c('div',{ref:"items",staticClass:"select-items"},_vm._l((_vm.options),function(option,i){return _c('div',{class:['select-item', _vm.selectIndex === i ? 'select-active':''],on:{"mouseover":function($event){$event.preventDefault();_vm.onMouse(i)},"mousedown":function($event){$event.preventDefault();_vm.select(option)}}},[_c('span',[_vm._v(_vm._s(option.value))])])}))])]):_vm._e()])}
var Typeahead_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/form/Typeahead.vue
/* script */


/* template */

/* template functional */
var Typeahead___vue_template_functional__ = false
/* styles */
var Typeahead___vue_styles__ = null
/* scopeId */
var Typeahead___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Typeahead___vue_module_identifier__ = null

var Typeahead_Component = normalizeComponent(
  Typeahead,
  Typeahead_render,
  Typeahead_staticRenderFns,
  Typeahead___vue_template_functional__,
  Typeahead___vue_styles__,
  Typeahead___vue_scopeId__,
  Typeahead___vue_module_identifier__
)

/* harmony default export */ var form_Typeahead = (Typeahead_Component.exports);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("qwQ3");
var es6_regexp_search_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_search);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/typeahead/TypeaheadArray.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TypeaheadArray = ({
  name: 'XTypeaheadArray',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    tabindex: {
      default: 0
    },
    value: [Object, Array],
    options: Array,
    disabled: {
      default: false,
      type: Boolean
    },
    multiple: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      showDropdown: false,
      selectIndex: -1,
      search: ''
    };
  },
  computed: {
    availableOptions: function availableOptions() {
      var _this = this;

      return this.options.filter(function (option) {
        var searchRegex = new RegExp(_this.search, 'i');
        return searchRegex.test(option.name) || searchRegex.test(option.value);
      });
    }
  },
  methods: {
    remove: function remove(x, i) {
      var payload = this.value;
      payload.splice(i, 1);
      this.$emit('input', payload);
    },
    onSearch: function onSearch(e) {
      this.search = event.target.value; // xhr
    },
    onUpKey: function onUpKey(e) {
      var _this2 = this;

      if (this.disabled) return;

      if (this.selectIndex > 0) {
        this.selectIndex--;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            // todo: algo to find best scroll position
            _this2.$refs.items.scrollTop -= 28;
          });
        }
      } else {
        this.selectIndex = this.options.length - 1;
        this.$nextTick(function () {
          _this2.$refs.items.scrollTop = _this2.selectIndex * 28;
        });
      }
    },
    onDownKey: function onDownKey(e) {
      var _this3 = this;

      if (this.disabled) return;

      if (!this.showDropdown) {
        this.open();
      }

      if (this.options.length - 1 > this.selectIndex) {
        this.selectIndex++;

        if (this.selectIndex > 4) {
          this.$nextTick(function () {
            _this3.$refs.items.scrollTop += 28;
          });
        }
      } else {
        this.selectIndex = 0;
        this.$nextTick(function () {
          _this3.$refs.items.scrollTop = 0;
        });
      }
    },
    onKeydownMain: function onKeydownMain(e) {
      this.open();
    },
    select: function select(option) {
      if (this.multiple) {
        var payload = this.value;
        payload.push(option);
        this.$emit('input', payload);
      } else {
        this.$emit('input', option);
      }

      this.close();
    },
    onEnter: function onEnter() {
      if (this.disabled) return;
      if (this.selectIndex < 0) return;
      var option = this.options[this.selectIndex];
      this.select(option);
    },
    onBlur: function onBlur() {
      this.close();
    },
    onMouse: function onMouse(index) {
      this.selectIndex = index;
    },
    close: function close() {
      this.showDropdown = false;
      this.selectIndex = -1;
      this.search = '';
    },
    open: function open() {
      var _this4 = this;

      this.showDropdown = true;
      this.$nextTick(function () {
        // cannot used key from parent due to macrotask in vue,
        // will be microtask in 2.6
        _this4.$refs.search.focus();
      });
    },
    toggle: function toggle() {
      if (this.disabled) return;

      if (this.showDropdown) {
        this.close();
      } else {
        this.open();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-da42dd78","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/typeahead/TypeaheadArray.vue
var TypeaheadArray_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-form"},[_c('div',{ref:"toggle",staticClass:"select-input",attrs:{"tabindex":_vm.disabled ? -1 : _vm.tabindex,"disabled":_vm.disabled},on:{"click":_vm.toggle,"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.onKeydownMain($event)}}},[(_vm.multiple)?_c('div',{staticClass:"select-text"},[(_vm.value.length)?_c('div',{staticClass:"select-tags"},_vm._l((_vm.value),function(x,i){return _c('div',{staticClass:"tag tag-primary"},[_c('span',{staticClass:"tag-text"},[_vm._v("\n      \t\t\t\t"+_vm._s(x.value)+"\n      \t\t\t")]),_vm._v(" "),_c('span',{staticClass:"icon icon-x tag-close",on:{"mousedown":function($event){$event.preventDefault();_vm.remove(x, i)}}})])})):_c('div',[_vm._v("Select")])]):_c('div',{staticClass:"select-text"},[_vm._v("\n      \t"+_vm._s(_vm.value && _vm.value.value ? _vm.value.value : 'Select')+"\n      ")]),_vm._v(" "),_c('span',{class:[("select-icon icon icon-chevron-" + (_vm.showDropdown ? 'up' : 'down'))]})]),_vm._v(" "),(_vm.showDropdown)?_c('div',{staticClass:"select-dropdown"},[_c('div',{staticClass:"select-inner"},[_c('div',{staticClass:"select-search-wrap"},[_c('input',{ref:"search",staticClass:"select-search",attrs:{"type":"text","placeholder":"Search..."},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.onDownKey($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onEnter($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.onUpKey($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.onBlur($event)}],"input":_vm.onSearch,"blur":_vm.onBlur}})]),_vm._v(" "),_c('div',{ref:"items",staticClass:"select-items"},_vm._l((_vm.availableOptions),function(option,i){return _c('div',{class:['select-item', _vm.selectIndex === i ? 'select-active':''],on:{"mouseover":function($event){$event.preventDefault();_vm.onMouse(i)},"mousedown":function($event){$event.preventDefault();_vm.select(option)}}},[_c('span',[_vm._v(_vm._s(option.value))])])}))])]):_vm._e()])}
var TypeaheadArray_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/typeahead/TypeaheadArray.vue
/* script */


/* template */

/* template functional */
var TypeaheadArray___vue_template_functional__ = false
/* styles */
var TypeaheadArray___vue_styles__ = null
/* scopeId */
var TypeaheadArray___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TypeaheadArray___vue_module_identifier__ = null

var TypeaheadArray_Component = normalizeComponent(
  TypeaheadArray,
  TypeaheadArray_render,
  TypeaheadArray_staticRenderFns,
  TypeaheadArray___vue_template_functional__,
  TypeaheadArray___vue_styles__,
  TypeaheadArray___vue_scopeId__,
  TypeaheadArray___vue_module_identifier__
)

/* harmony default export */ var typeahead_TypeaheadArray = (TypeaheadArray_Component.exports);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("MfeA");
var es6_regexp_match_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_match);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/upload/Image.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Image = ({
  name: 'XImageUpload',
  data: function data() {
    return {
      uploadedFile: null
    };
  },
  methods: {
    close: function close() {
      this.uploadedFile = null;
    },
    onDragOver: function onDragOver(e) {},
    handleDrop: function handleDrop(e) {
      this.upload(e.dataTransfer.files[0]);
    },
    upload: function upload(file) {
      var _this = this;

      if (!file || !file.type.match(/image.*/)) return;
      var fileReader = new FileReader();

      fileReader.onload = function (event) {
        _this.uploadedFile = event.target.result;
      };

      fileReader.readAsDataURL(file);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6186f6f3","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/upload/Image.vue
var Image_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-image"},[(_vm.uploadedFile)?_c('div',{staticClass:"upload-image-preview"},[_c('div',{staticClass:"upload-image-close",on:{"click":function($event){$event.preventDefault();return _vm.close($event)}}},[_c('span',{staticClass:"icon icon-x"})]),_vm._v(" "),_c('img',{staticClass:"upload-image-img",attrs:{"src":_vm.uploadedFile}})]):_c('div',{staticClass:"upload-image-inner",attrs:{"tabindex":"0"},on:{"dragover":function($event){$event.preventDefault();return _vm.onDragOver($event)},"drop":function($event){$event.preventDefault();return _vm.handleDrop($event)}}},[_vm._m(0)])])}
var Image_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-image-content"},[_c('span',{staticClass:"upload-image-icon icon icon-image"}),_vm._v(" "),_c('small',[_vm._v("Click or drag files here to upload")])])}]

// CONCATENATED MODULE: ./src/js/components/upload/Image.vue
/* script */


/* template */

/* template functional */
var Image___vue_template_functional__ = false
/* styles */
var Image___vue_styles__ = null
/* scopeId */
var Image___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Image___vue_module_identifier__ = null

var Image_Component = normalizeComponent(
  Image,
  Image_render,
  Image_staticRenderFns,
  Image___vue_template_functional__,
  Image___vue_styles__,
  Image___vue_scopeId__,
  Image___vue_module_identifier__
)

/* harmony default export */ var upload_Image = (Image_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/table/Table.vue
//
//
//
//
//
//
//
//
/* harmony default export */ var Table = ({
  name: 'XTable'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6a698821","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/table/Table.vue
var Table_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_vm._t("default"),_vm._v(" "),(_vm.$slots.tfoot)?_c('tfoot',[_vm._t("tfoot")],2):_vm._e()],2)}
var Table_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/table/Table.vue
/* script */


/* template */

/* template functional */
var Table___vue_template_functional__ = false
/* styles */
var Table___vue_styles__ = null
/* scopeId */
var Table___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Table___vue_module_identifier__ = null

var Table_Component = normalizeComponent(
  Table,
  Table_render,
  Table_staticRenderFns,
  Table___vue_template_functional__,
  Table___vue_styles__,
  Table___vue_scopeId__,
  Table___vue_module_identifier__
)

/* harmony default export */ var table_Table = (Table_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/table/TableRow.vue
//
//
//
//
//
/* harmony default export */ var TableRow = ({
  name: 'XTr'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-adfca104","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/table/TableRow.vue
var TableRow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_vm._t("default")],2)}
var TableRow_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/table/TableRow.vue
/* script */


/* template */

/* template functional */
var TableRow___vue_template_functional__ = false
/* styles */
var TableRow___vue_styles__ = null
/* scopeId */
var TableRow___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TableRow___vue_module_identifier__ = null

var TableRow_Component = normalizeComponent(
  TableRow,
  TableRow_render,
  TableRow_staticRenderFns,
  TableRow___vue_template_functional__,
  TableRow___vue_styles__,
  TableRow___vue_scopeId__,
  TableRow___vue_module_identifier__
)

/* harmony default export */ var table_TableRow = (TableRow_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/table/TableHead.vue
//
//
//
//
//
/* harmony default export */ var TableHead = ({
  name: 'XThead'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f871b84","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/table/TableHead.vue
var TableHead_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_vm._t("default")],2)}
var TableHead_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/table/TableHead.vue
/* script */


/* template */

/* template functional */
var TableHead___vue_template_functional__ = false
/* styles */
var TableHead___vue_styles__ = null
/* scopeId */
var TableHead___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TableHead___vue_module_identifier__ = null

var TableHead_Component = normalizeComponent(
  TableHead,
  TableHead_render,
  TableHead_staticRenderFns,
  TableHead___vue_template_functional__,
  TableHead___vue_styles__,
  TableHead___vue_scopeId__,
  TableHead___vue_module_identifier__
)

/* harmony default export */ var table_TableHead = (TableHead_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/table/TableBody.vue
//
//
//
//
//
/* harmony default export */ var TableBody = ({
  name: 'XTbody'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64f46a0c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/table/TableBody.vue
var TableBody_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tbody',[_vm._t("default")],2)}
var TableBody_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/table/TableBody.vue
/* script */


/* template */

/* template functional */
var TableBody___vue_template_functional__ = false
/* styles */
var TableBody___vue_styles__ = null
/* scopeId */
var TableBody___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TableBody___vue_module_identifier__ = null

var TableBody_Component = normalizeComponent(
  TableBody,
  TableBody_render,
  TableBody_staticRenderFns,
  TableBody___vue_template_functional__,
  TableBody___vue_styles__,
  TableBody___vue_scopeId__,
  TableBody___vue_module_identifier__
)

/* harmony default export */ var table_TableBody = (TableBody_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/table/TableCell.vue
/* harmony default export */ var TableCell = ({
  name: 'XTableCell',
  render: function render(createElement) {
    return createElement(this.type, // tag name
    {
      class: [this.size ? "w-".concat(this.size) : null],
      style: {
        'text-align': this.align
      }
    }, this.$slots.default // array of children
    );
  },
  props: {
    size: {
      default: null
    },
    type: {
      default: 'td'
    },
    align: {
      default: 'left'
    }
  }
});
// CONCATENATED MODULE: ./src/js/components/table/TableCell.vue
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var TableCell___vue_template_functional__ = false
/* styles */
var TableCell___vue_styles__ = null
/* scopeId */
var TableCell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TableCell___vue_module_identifier__ = null

var TableCell_Component = normalizeComponent(
  TableCell,
  __vue_render__,
  __vue_static_render_fns__,
  TableCell___vue_template_functional__,
  TableCell___vue_styles__,
  TableCell___vue_scopeId__,
  TableCell___vue_module_identifier__
)

/* harmony default export */ var table_TableCell = (TableCell_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/anish/style/vertex-kit/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/table/TableFooter.vue
//
//
//
//
//
/* harmony default export */ var TableFooter = ({
  name: 'XTfoot'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-41aeb38f","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/table/TableFooter.vue
var TableFooter_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tfoot',[_vm._t("default")],2)}
var TableFooter_staticRenderFns = []

// CONCATENATED MODULE: ./src/js/components/table/TableFooter.vue
/* script */


/* template */

/* template functional */
var TableFooter___vue_template_functional__ = false
/* styles */
var TableFooter___vue_styles__ = null
/* scopeId */
var TableFooter___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TableFooter___vue_module_identifier__ = null

var TableFooter_Component = normalizeComponent(
  TableFooter,
  TableFooter_render,
  TableFooter_staticRenderFns,
  TableFooter___vue_template_functional__,
  TableFooter___vue_styles__,
  TableFooter___vue_scopeId__,
  TableFooter___vue_module_identifier__
)

/* harmony default export */ var table_TableFooter = (TableFooter_Component.exports);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/js/lib/Http.js

var http = axios_default.a.create({});
/* harmony default export */ var Http = (http);
// CONCATENATED MODULE: ./src/js/app.js




































var components = {
  Row: grid_Row,
  Col: grid_Col,
  Panel: panel_Panel,
  Button: button_Button,
  ButtonGroup: button_ButtonGroup,
  Icon: icon_Icon,
  Sidebar: sidebar_Sidebar,
  SidebarItem: sidebar_SidebarItem,
  SidebarGroup: sidebar_SidebarGroup,
  Loading: helpers_Loading,
  Tag: tag_Tag,
  Input: form_Input,
  Textarea: form_Textarea,
  FormGroup: form_FormGroup,
  Select: form_Select,
  Switch: form_Switch,
  Alert: alert_Alert,
  Modal: modal_Modal,
  Dropdown: dropdown_Dropdown,
  DropdownMenu: dropdown_DropdownMenu,
  DropdownItem: dropdown_DropdownItem,
  Typeahead: form_Typeahead,
  TypeaheadArray: typeahead_TypeaheadArray,
  Image: upload_Image,
  Table: table_Table,
  TableCell: table_TableCell,
  TableHead: table_TableHead,
  TableRow: table_TableRow,
  TableBody: table_TableBody,
  TableFooter: table_TableFooter
};
var actions = {
  LoadingBar: loading_bar,
  Message: components_message,
  Http: Http
};

function install(Vue) {
  if (install.installed) return;

  for (var item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item]);
    }
  }

  Vue.prototype.$bar = loading_bar;
  Vue.prototype.$message = components_message;
  Vue.prototype.$http = Http;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var js_app = (objectSpread_default()({
  install: install
}, components, actions));
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
;(function () {
  if (typeof window !== 'undefined') {
    let i
    if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
      __webpack_require__.p = i[1] // eslint-disable-line
    }
  } else {
    __webpack_require__.p = '/' // eslint-disable-line
  }
})()


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (js_app);



/***/ }),

/***/ "xLtR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var transformData = __webpack_require__("TNV1");
var isCancel = __webpack_require__("pBtG");
var defaults = __webpack_require__("KCLY");
var isAbsoluteURL = __webpack_require__("dIwP");
var combineURLs = __webpack_require__("qRfI");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "xZa+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("bUqO") && !__webpack_require__("zgIt")(function () {
  return Object.defineProperty(__webpack_require__("jhxf")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "zgIt":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ })

/******/ })["default"];
//# sourceMappingURL=vertex-kit.common.js.map