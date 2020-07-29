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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/dayjs/dayjs.min.js":
/*!**********************************************************************************!*\
  !*** /Users/toriyama/Desktop/pvcresin.github.io/node_modules/dayjs/dayjs.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return!e&&r&&(l=r),r||!e&&l},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "../../node_modules/riot-observable/dist/observable.js":
/*!**************************************************************************************************!*\
  !*** /Users/toriyama/Desktop/pvcresin.github.io/node_modules/riot-observable/dist/observable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function(window, undefined) {var observable = function(el) {

  /**
   * Extend the original object or create a new empty one
   * @type { Object }
   */

  el = el || {}

  /**
   * Private variables
   */
  var callbacks = {},
    slice = Array.prototype.slice

  /**
   * Public Api
   */

  // extend the el object adding the observable methods
  Object.defineProperties(el, {
    /**
     * Listen to the given `event` ands
     * execute the `callback` each time an event is triggered.
     * @param  { String } event - event id
     * @param  { Function } fn - callback function
     * @returns { Object } el
     */
    on: {
      value: function(event, fn) {
        if (typeof fn == 'function')
          (callbacks[event] = callbacks[event] || []).push(fn)
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Removes the given `event` listeners
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    off: {
      value: function(event, fn) {
        if (event == '*' && !fn) callbacks = {}
        else {
          if (fn) {
            var arr = callbacks[event]
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) arr.splice(i--, 1)
            }
          } else delete callbacks[event]
        }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Listen to the given `event` and
     * execute the `callback` at most once
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    one: {
      value: function(event, fn) {
        function on() {
          el.off(event, on)
          fn.apply(el, arguments)
        }
        return el.on(event, on)
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Execute all callback functions that listen to
     * the given `event`
     * @param   { String } event - event id
     * @returns { Object } el
     */
    trigger: {
      value: function(event) {

        // getting the arguments
        var arglen = arguments.length - 1,
          args = new Array(arglen),
          fns,
          fn,
          i

        for (i = 0; i < arglen; i++) {
          args[i] = arguments[i + 1] // skip first argument
        }

        fns = slice.call(callbacks[event] || [], 0)

        for (i = 0; fn = fns[i]; ++i) {
          fn.apply(el, args)
        }

        if (callbacks['*'] && event != '*')
          el.trigger.apply(el, ['*', event].concat(args))

        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    }
  })

  return el

}
  /* istanbul ignore next */
  // support CommonJS, AMD & browser
  if (true)
    module.exports = observable
  else {}

})(typeof window != 'undefined' ? window : undefined);

/***/ }),

/***/ "../../node_modules/riot-route/lib/index.js":
/*!***************************************************************************************!*\
  !*** /Users/toriyama/Desktop/pvcresin.github.io/node_modules/riot-route/lib/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var riot_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! riot-observable */ "../../node_modules/riot-observable/dist/observable.js");
/* harmony import */ var riot_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(riot_observable__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Simple client-side router
 * @module riot-route
 */

var RE_ORIGIN = /^.+?\/\/+[^/]+/,
  EVENT_LISTENER = 'EventListener',
  REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
  ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
  HAS_ATTRIBUTE = 'hasAttribute',
  POPSTATE = 'popstate',
  HASHCHANGE = 'hashchange',
  TRIGGER = 'trigger',
  MAX_EMIT_STACK_LEVEL = 3,
  win = typeof window != 'undefined' && window,
  doc = typeof document != 'undefined' && document,
  hist = win && history,
  loc = win && (hist.location || win.location), // see html5-history-api
  prot = Router.prototype, // to minify more
  clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
  central = riot_observable__WEBPACK_IMPORTED_MODULE_0___default()();

var
  started = false,
  routeFound = false,
  debouncedEmit,
  current,
  parser,
  secondParser,
  emitStack = [],
  emitStackLevel = 0;

/**
 * Default parser. You can replace it via router.parser method.
 * @param {string} path - current path (normalized)
 * @returns {array} array
 */
function DEFAULT_PARSER(path) {
  return path.split(/[/?#]/)
}

/**
 * Default parser (second). You can replace it via router.parser method.
 * @param {string} path - current path (normalized)
 * @param {string} filter - filter string (normalized)
 * @returns {array} array
 */
function DEFAULT_SECOND_PARSER(path, filter) {
  var f = filter
    .replace(/\?/g, '\\?')
    .replace(/\*/g, '([^/?#]+?)')
    .replace(/\.\./, '.*');
  var re = new RegExp(("^" + f + "$"));
  var args = path.match(re);

  if (args) { return args.slice(1) }
}

/**
 * Simple/cheap debounce implementation
 * @param   {function} fn - callback
 * @param   {number} delay - delay in seconds
 * @returns {function} debounced function
 */
function debounce(fn, delay) {
  var t;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  }
}

/**
 * Set the window listeners to trigger the routes
 * @param {boolean} autoExec - see route.start
 */
function start(autoExec) {
  debouncedEmit = debounce(emit, 1);
  win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
  win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
  doc[ADD_EVENT_LISTENER](clickEvent, click);

  if (autoExec) { emit(true); }
}

/**
 * Router class
 */
function Router() {
  this.$ = [];
  riot_observable__WEBPACK_IMPORTED_MODULE_0___default()(this); // make it observable
  central.on('stop', this.s.bind(this));
  central.on('emit', this.e.bind(this));
}

function normalize(path) {
  return path.replace(/^\/|\/$/, '')
}

function isString(str) {
  return typeof str == 'string'
}

/**
 * Get the part after domain name
 * @param {string} href - fullpath
 * @returns {string} path from root
 */
function getPathFromRoot(href) {
  return (href || loc.href).replace(RE_ORIGIN, '')
}

/**
 * Get the part after base
 * @param {string} href - fullpath
 * @returns {string} path from base
 */
function getPathFromBase(href) {
  var base = route._.base;
  return base[0] === '#'
    ? (href || loc.href || '').split(base)[1] || ''
    : (loc ? getPathFromRoot(href) : href || '').replace(base, '')
}

function emit(force) {
  // the stack is needed for redirections
  var isRoot = emitStackLevel === 0;
  if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) { return }

  emitStackLevel++;
  emitStack.push(function() {
    var path = getPathFromBase();
    if (force || path !== current) {
      central[TRIGGER]('emit', path);
      current = path;
    }
  });

  if (isRoot) {
    var first;
    while (first = emitStack.shift()) { first(); } // stack increses within this call
    emitStackLevel = 0;
  }
}

function click(e) {
  if (
    e.which !== 1 // not left click
    || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
    || e.defaultPrevented // or default prevented
  ) { return }

  var el = e.target;
  while (el && el.nodeName !== 'A') { el = el.parentNode; }

  if (
    !el || el.nodeName !== 'A' // not A tag
    || el[HAS_ATTRIBUTE]('download') // has download attr
    || !el[HAS_ATTRIBUTE]('href') // has no href attr
    || el.target && el.target !== '_self' // another window or frame
    || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) === -1 // cross origin
  ) { return }

  var base = route._.base;

  if (el.href !== loc.href
    && (
      el.href.split('#')[0] === loc.href.split('#')[0] // internal jump
      || base[0] !== '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
      || base[0] === '#' && el.href.split(base)[0] !== loc.href.split(base)[0] // outside of #base
      || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
    )) { return }

  e.preventDefault();
}

/**
 * Go to the path
 * @param {string} path - destination path
 * @param {string} title - page title
 * @param {boolean} shouldReplace - use replaceState or pushState
 * @returns {boolean} - route not found flag
 */
function go(path, title, shouldReplace) {
  // Server-side usage: directly execute handlers for the path
  if (!hist) { return central[TRIGGER]('emit', getPathFromBase(path)) }

  path = route._.base + normalize(path);
  title = title || doc.title;
  // browsers ignores the second parameter `title`
  shouldReplace
    ? hist.replaceState(null, title, path)
    : hist.pushState(null, title, path);
  // so we need to set it manually
  doc.title = title;
  routeFound = false;
  emit();
  return routeFound
}

/**
 * Go to path or set action
 * a single string:                go there
 * two strings:                    go there with setting a title
 * two strings and boolean:        replace history with setting a title
 * a single function:              set an action on the default route
 * a string/RegExp and a function: set an action on the route
 * @param {(string|function)} first - path / action / filter
 * @param {(string|RegExp|function)} second - title / action
 * @param {boolean} third - replace flag
 */
prot.m = function(first, second, third) {
  if (isString(first) && (!second || isString(second))) { go(first, second, third || false); }
  else if (second) { this.r(first, second); }
  else { this.r('@', first); }
};

/**
 * Stop routing
 */
prot.s = function() {
  this.off('*');
  this.$ = [];
};

/**
 * Emit
 * @param {string} path - path
 */
prot.e = function(path) {
  this.$.concat('@').some(function(filter) {
    var args = (filter === '@' ? parser : secondParser)(normalize(path), normalize(filter));
    if (typeof args != 'undefined') {
      this[TRIGGER].apply(null, [filter].concat(args));
      return routeFound = true // exit from loop
    }
  }, this);
};

/**
 * Register route
 * @param {string} filter - filter for matching to url
 * @param {function} action - action to register
 */
prot.r = function(filter, action) {
  if (filter !== '@') {
    filter = '/' + normalize(filter);
    this.$.push(filter);
  }

  this.on(filter, action);
};

var mainRouter = new Router();
var route = mainRouter.m.bind(mainRouter);

// adding base and getPathFromBase to route so we can access them in route.tag's script
route._ = { base: null, getPathFromBase: getPathFromBase };

/**
 * Create a sub router
 * @returns {function} the method of a new Router object
 */
route.create = function() {
  var newSubRouter = new Router();
  // assign sub-router's main method
  var router = newSubRouter.m.bind(newSubRouter);
  // stop only this sub-router
  router.stop = newSubRouter.s.bind(newSubRouter);
  return router
};

/**
 * Set the base of url
 * @param {(str|RegExp)} arg - a new base or '#' or '#!'
 */
route.base = function(arg) {
  route._.base = arg || '#';
  current = getPathFromBase(); // recalculate current path
};

/** Exec routing right now **/
route.exec = function() {
  emit(true);
};

/**
 * Replace the default router to yours
 * @param {function} fn - your parser function
 * @param {function} fn2 - your secondParser function
 */
route.parser = function(fn, fn2) {
  if (!fn && !fn2) {
    // reset parser for testing...
    parser = DEFAULT_PARSER;
    secondParser = DEFAULT_SECOND_PARSER;
  }
  if (fn) { parser = fn; }
  if (fn2) { secondParser = fn2; }
};

/**
 * Helper function to get url query as an object
 * @returns {object} parsed query
 */
route.query = function() {
  var q = {};
  var href = loc.href || current;
  href.replace(/[?&](.+?)=([^&]*)/g, function(_, k, v) { q[k] = v; });
  return q
};

/** Stop routing **/
route.stop = function () {
  if (started) {
    if (win) {
      win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
      win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
      doc[REMOVE_EVENT_LISTENER](clickEvent, click);
    }

    central[TRIGGER]('stop');
    started = false;
  }
};

/**
 * Start routing
 * @param {boolean} autoExec - automatically exec after starting if true
 */
route.start = function (autoExec) {
  if (!started) {
    if (win) {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        start(autoExec);
      } else {
        document.onreadystatechange = function () {
          if (document.readyState === 'interactive') {
            // the timeout is needed to solve
            // a weird safari bug https://github.com/riot/route/issues/33
            setTimeout(function() { start(autoExec); }, 1);
          }
        };
      }
    }

    started = true;
  }
};

/** Prepare the router **/
route.base();
route.parser();

/* harmony default export */ __webpack_exports__["default"] = (route);


/***/ }),

/***/ "../../node_modules/riot-route/lib/tag.js":
/*!*************************************************************************************!*\
  !*** /Users/toriyama/Desktop/pvcresin.github.io/node_modules/riot-route/lib/tag.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js");
/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(riot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var riot_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! riot-route */ "../../node_modules/riot-route/lib/index.js");



riot__WEBPACK_IMPORTED_MODULE_0___default.a.tag2('router', '<yield></yield>', '', '', function(opts) {
    var this$1 = this;


    this.route = riot_route__WEBPACK_IMPORTED_MODULE_1__["default"].create();
    this.select = function (target) {
      [].concat(this$1.tags.route)
        .forEach(function (r) { return r.show = (r === target); });
    };

    this.on('mount', function () {

      window.setTimeout(function () { return riot_route__WEBPACK_IMPORTED_MODULE_1__["default"].start(true); }, 0);
    });

    this.on('unmount', function () {
      this$1.route.stop();
    });
});

riot__WEBPACK_IMPORTED_MODULE_0___default.a.tag2('route', '<virtual if="{show}"><yield></yield></virtual>', '', '', function(opts) {
    var this$1 = this;

    this.show = false;
    var showRoute = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];


      this$1.one('updated', function () {
        flatten(this$1.tags).forEach(function (tag) {
          tag.trigger.apply(tag, [ 'route' ].concat( args ));
          tag.update();
        });
      });
      this$1.parent.select(this$1);
      this$1.parent.update();
    };

    var getPathFromBase = !!window && !!window.route && !!window.route._
                               ? window.route._.getPathFromBase
                               : function () { return ''; };

    if(opts.path === getPathFromBase()){

      setTimeout(showRoute, 0);
    }

    this.parent.route(opts.path, showRoute);

    function flatten(tags) {
      return Object.keys(tags)
        .map(function (key) { return tags[key]; })
        .reduce(function (acc, tag) { return acc.concat(tag); }, [])
    }
});

/* harmony default export */ __webpack_exports__["default"] = (riot_route__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "../../node_modules/riot/riot.js":
/*!****************************************************************************!*\
  !*** /Users/toriyama/Desktop/pvcresin.github.io/node_modules/riot/riot.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Riot v3.13.2, @license MIT */
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  /**
   * Shorter and fast way to select a single node in the DOM
   * @param   { String } selector - unique dom selector
   * @param   { Object } ctx - DOM node where the target of our search will is located
   * @returns { Object } dom node found
   */
  function $(selector, ctx) {
    return (ctx || document).querySelector(selector)
  }

  var
    // be aware, internal usage
    // ATTENTION: prefix the global dynamic variables with `__`
    // tags instances cache
    __TAGS_CACHE = [],
    // tags implementation cache
    __TAG_IMPL = {},
    YIELD_TAG = 'yield',

    /**
     * Const
     */
    GLOBAL_MIXIN = '__global_mixin',

    // riot specific prefixes or attributes
    ATTRS_PREFIX = 'riot-',

    // Riot Directives
    REF_DIRECTIVES = ['ref', 'data-ref'],
    IS_DIRECTIVE = 'data-is',
    CONDITIONAL_DIRECTIVE = 'if',
    LOOP_DIRECTIVE = 'each',
    LOOP_NO_REORDER_DIRECTIVE = 'no-reorder',
    SHOW_DIRECTIVE = 'show',
    HIDE_DIRECTIVE = 'hide',
    KEY_DIRECTIVE = 'key',
    RIOT_EVENTS_KEY = '__riot-events__',

    // for typeof == '' comparisons
    T_STRING = 'string',
    T_OBJECT = 'object',
    T_UNDEF  = 'undefined',
    T_FUNCTION = 'function',

    XLINK_NS = 'http://www.w3.org/1999/xlink',
    SVG_NS = 'http://www.w3.org/2000/svg',
    XLINK_REGEX = /^xlink:(\w+)/,

    WIN = typeof window === T_UNDEF ? /* istanbul ignore next */ undefined : window,

    // special native tags that cannot be treated like the others
    RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
    RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,
    RE_EVENTS_PREFIX = /^on/,
    RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,
    // some DOM attributes must be normalized
    CASE_SENSITIVE_ATTRIBUTES = {
      'viewbox': 'viewBox',
      'preserveaspectratio': 'preserveAspectRatio'
    },
    /**
     * Matches boolean HTML attributes in the riot tag definition.
     * With a long list like this, a regex is faster than `[].indexOf` in most browsers.
     * @const {RegExp}
     * @see [attributes.md](https://github.com/riot/compiler/blob/dev/doc/attributes.md)
     */
    RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,
    // version# for IE 8-11, 0 for others
    IE_VERSION = (WIN && WIN.document || /* istanbul ignore next */ {}).documentMode | 0;

  /**
   * Create a generic DOM node
   * @param   { String } name - name of the DOM node we want to create
   * @returns { Object } DOM node just created
   */
  function makeElement(name) {
    return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name)
  }

  /**
   * Set any DOM attribute
   * @param { Object } dom - DOM node we want to update
   * @param { String } name - name of the property we want to set
   * @param { String } val - value of the property we want to set
   */
  function setAttribute(dom, name, val) {
    var xlink = XLINK_REGEX.exec(name);
    if (xlink && xlink[1])
      { dom.setAttributeNS(XLINK_NS, xlink[1], val); }
    else
      { dom.setAttribute(name, val); }
  }

  var styleNode;
  // Create cache and shortcut to the correct property
  var cssTextProp;
  var byName = {};
  var needsInject = false;

  // skip the following code on the server
  if (WIN) {
    styleNode = ((function () {
      // create a new style element with the correct type
      var newNode = makeElement('style');
      // replace any user node or insert the new one into the head
      var userNode = $('style[type=riot]');

      setAttribute(newNode, 'type', 'text/css');
      /* istanbul ignore next */
      if (userNode) {
        if (userNode.id) { newNode.id = userNode.id; }
        userNode.parentNode.replaceChild(newNode, userNode);
      } else { document.head.appendChild(newNode); }

      return newNode
    }))();
    cssTextProp = styleNode.styleSheet;
  }

  /**
   * Object that will be used to inject and manage the css of every tag instance
   */
  var styleManager = {
    styleNode: styleNode,
    /**
     * Save a tag style to be later injected into DOM
     * @param { String } css - css string
     * @param { String } name - if it's passed we will map the css to a tagname
     */
    add: function add(css, name) {
      byName[name] = css;
      needsInject = true;
    },
    /**
     * Inject all previously saved tag styles into DOM
     * innerHTML seems slow: http://jsperf.com/riot-insert-style
     */
    inject: function inject() {
      if (!WIN || !needsInject) { return }
      needsInject = false;
      var style = Object.keys(byName)
        .map(function (k) { return byName[k]; })
        .join('\n');
      /* istanbul ignore next */
      if (cssTextProp) { cssTextProp.cssText = style; }
      else { styleNode.innerHTML = style; }
    },

    /**
     * Remove a tag style of injected DOM later.
     * @param {String} name a registered tagname
     */
    remove: function remove(name) {
      delete byName[name];
      needsInject = true;
    }
  };

  /**
   * The riot template engine
   * @version v3.0.8
   */

  /* istanbul ignore next */
  var skipRegex = (function () { //eslint-disable-line no-unused-vars

    var beforeReChars = '[{(,;:?=|&!^~>%*/';

    var beforeReWords = [
      'case',
      'default',
      'do',
      'else',
      'in',
      'instanceof',
      'prefix',
      'return',
      'typeof',
      'void',
      'yield'
    ];

    var wordsLastChar = beforeReWords.reduce(function (s, w) {
      return s + w.slice(-1)
    }, '');

    var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/;
    var RE_VN_CHAR = /[$\w]/;

    function prev (code, pos) {
      while (--pos >= 0 && /\s/.test(code[pos])){ }
      return pos
    }

    function _skipRegex (code, start) {

      var re = /.*/g;
      var pos = re.lastIndex = start++;
      var match = re.exec(code)[0].match(RE_REGEX);

      if (match) {
        var next = pos + match[0].length;

        pos = prev(code, pos);
        var c = code[pos];

        if (pos < 0 || ~beforeReChars.indexOf(c)) {
          return next
        }

        if (c === '.') {

          if (code[pos - 1] === '.') {
            start = next;
          }

        } else if (c === '+' || c === '-') {

          if (code[--pos] !== c ||
              (pos = prev(code, pos)) < 0 ||
              !RE_VN_CHAR.test(code[pos])) {
            start = next;
          }

        } else if (~wordsLastChar.indexOf(c)) {

          var end = pos + 1;

          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])){ }
          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
            start = next;
          }
        }
      }

      return start
    }

    return _skipRegex

  })();

  /**
   * riot.util.brackets
   *
   * - `brackets    ` - Returns a string or regex based on its parameter
   * - `brackets.set` - Change the current riot brackets
   *
   * @module
   */

  /* global riot */

  /* istanbul ignore next */
  var brackets = (function (UNDEF) {

    var
      REGLOB = 'g',

      R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

      R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,

      S_QBLOCKS = R_STRINGS.source + '|' +
        /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
        /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,

      UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),

      NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,

      S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,

      FINDBRACES = {
        '(': RegExp('([()])|'   + S_QBLOCK2, REGLOB),
        '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
        '{': RegExp('([{}])|'   + S_QBLOCK2, REGLOB)
      },

      DEFAULT = '{ }';

    var _pairs = [
      '{', '}',
      '{', '}',
      /{[^}]*}/,
      /\\([{}])/g,
      /\\({)|{/g,
      RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB),
      DEFAULT,
      /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
      /(^|[^\\]){=[\S\s]*?}/
    ];

    var
      cachedBrackets = UNDEF,
      _regex,
      _cache = [],
      _settings;

    function _loopback (re) { return re }

    function _rewrite (re, bp) {
      if (!bp) { bp = _cache; }
      return new RegExp(
        re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
      )
    }

    function _create (pair) {
      if (pair === DEFAULT) { return _pairs }

      var arr = pair.split(' ');

      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
        throw new Error('Unsupported brackets "' + pair + '"')
      }
      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
      arr[6] = _rewrite(_pairs[6], arr);
      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);
      arr[8] = pair;
      return arr
    }

    function _brackets (reOrIdx) {
      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
    }

    _brackets.split = function split (str, tmpl, _bp) {
      // istanbul ignore next: _bp is for the compiler
      if (!_bp) { _bp = _cache; }

      var
        parts = [],
        match,
        isexpr,
        start,
        pos,
        re = _bp[6];

      var qblocks = [];
      var prevStr = '';
      var mark, lastIndex;

      isexpr = start = re.lastIndex = 0;

      while ((match = re.exec(str))) {

        lastIndex = re.lastIndex;
        pos = match.index;

        if (isexpr) {

          if (match[2]) {

            var ch = match[2];
            var rech = FINDBRACES[ch];
            var ix = 1;

            rech.lastIndex = lastIndex;
            while ((match = rech.exec(str))) {
              if (match[1]) {
                if (match[1] === ch) { ++ix; }
                else if (!--ix) { break }
              } else {
                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);
              }
            }
            re.lastIndex = ix ? str.length : rech.lastIndex;
            continue
          }

          if (!match[3]) {
            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);
            continue
          }
        }

        if (!match[1]) {
          unescapeStr(str.slice(start, pos));
          start = re.lastIndex;
          re = _bp[6 + (isexpr ^= 1)];
          re.lastIndex = start;
        }
      }

      if (str && start < str.length) {
        unescapeStr(str.slice(start));
      }

      parts.qblocks = qblocks;

      return parts

      function unescapeStr (s) {
        if (prevStr) {
          s = prevStr + s;
          prevStr = '';
        }
        if (tmpl || isexpr) {
          parts.push(s && s.replace(_bp[5], '$1'));
        } else {
          parts.push(s);
        }
      }

      function pushQBlock(_pos, _lastIndex, slash) { //eslint-disable-line
        if (slash) {
          _lastIndex = skipRegex(str, _pos);
        }

        if (tmpl && _lastIndex > _pos + 2) {
          mark = '\u2057' + qblocks.length + '~';
          qblocks.push(str.slice(_pos, _lastIndex));
          prevStr += str.slice(start, _pos) + mark;
          start = _lastIndex;
        }
        return _lastIndex
      }
    };

    _brackets.hasExpr = function hasExpr (str) {
      return _cache[4].test(str)
    };

    _brackets.loopKeys = function loopKeys (expr) {
      var m = expr.match(_cache[9]);

      return m
        ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
        : { val: expr.trim() }
    };

    _brackets.array = function array (pair) {
      return pair ? _create(pair) : _cache
    };

    function _reset (pair) {
      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
        _cache = _create(pair);
        _regex = pair === DEFAULT ? _loopback : _rewrite;
        _cache[9] = _regex(_pairs[9]);
      }
      cachedBrackets = pair;
    }

    function _setSettings (o) {
      var b;

      o = o || {};
      b = o.brackets;
      Object.defineProperty(o, 'brackets', {
        set: _reset,
        get: function () { return cachedBrackets },
        enumerable: true
      });
      _settings = o;
      _reset(b);
    }

    Object.defineProperty(_brackets, 'settings', {
      set: _setSettings,
      get: function () { return _settings }
    });

    /* istanbul ignore next: in the browser riot is always in the scope */
    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
    _brackets.set = _reset;
    _brackets.skipRegex = skipRegex;

    _brackets.R_STRINGS = R_STRINGS;
    _brackets.R_MLCOMMS = R_MLCOMMS;
    _brackets.S_QBLOCKS = S_QBLOCKS;
    _brackets.S_QBLOCK2 = S_QBLOCK2;

    return _brackets

  })();

  /**
   * @module tmpl
   *
   * tmpl          - Root function, returns the template value, render with data
   * tmpl.hasExpr  - Test the existence of a expression inside a string
   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
   */

  /* istanbul ignore next */
  var tmpl = (function () {

    var _cache = {};

    function _tmpl (str, data) {
      if (!str) { return str }

      return (_cache[str] || (_cache[str] = _create(str))).call(
        data, _logErr.bind({
          data: data,
          tmpl: str
        })
      )
    }

    _tmpl.hasExpr = brackets.hasExpr;

    _tmpl.loopKeys = brackets.loopKeys;

    // istanbul ignore next
    _tmpl.clearCache = function () { _cache = {}; };

    _tmpl.errorHandler = null;

    function _logErr (err, ctx) {

      err.riotData = {
        tagName: ctx && ctx.__ && ctx.__.tagName,
        _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
      };

      if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }
      else if (
        typeof console !== 'undefined' &&
        typeof console.error === 'function'
      ) {
        console.error(err.message);
        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line
        console.log(this.data); // eslint-disable-line
      }
    }

    function _create (str) {
      var expr = _getTmpl(str);

      if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }

      return new Function('E', expr + ';')    // eslint-disable-line no-new-func
    }

    var RE_DQUOTE = /\u2057/g;
    var RE_QBMARK = /\u2057(\d+)~/g;

    function _getTmpl (str) {
      var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
      var qstr = parts.qblocks;
      var expr;

      if (parts.length > 2 || parts[0]) {
        var i, j, list = [];

        for (i = j = 0; i < parts.length; ++i) {

          expr = parts[i];

          if (expr && (expr = i & 1

              ? _parseExpr(expr, 1, qstr)

              : '"' + expr
                  .replace(/\\/g, '\\\\')
                  .replace(/\r\n?|\n/g, '\\n')
                  .replace(/"/g, '\\"') +
                '"'

            )) { list[j++] = expr; }

        }

        expr = j < 2 ? list[0]
             : '[' + list.join(',') + '].join("")';

      } else {

        expr = _parseExpr(parts[1], 0, qstr);
      }

      if (qstr.length) {
        expr = expr.replace(RE_QBMARK, function (_, pos) {
          return qstr[pos]
            .replace(/\r/g, '\\r')
            .replace(/\n/g, '\\n')
        });
      }
      return expr
    }

    var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/;
    var
      RE_BREND = {
        '(': /[()]/g,
        '[': /[[\]]/g,
        '{': /[{}]/g
      };

    function _parseExpr (expr, asText, qstr) {

      expr = expr
        .replace(/\s+/g, ' ').trim()
        .replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

      if (expr) {
        var
          list = [],
          cnt = 0,
          match;

        while (expr &&
              (match = expr.match(RE_CSNAME)) &&
              !match.index
          ) {
          var
            key,
            jsb,
            re = /,|([[{(])|$/g;

          expr = RegExp.rightContext;
          key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

          while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }

          jsb  = expr.slice(0, match.index);
          expr = RegExp.rightContext;

          list[cnt++] = _wrapExpr(jsb, 1, key);
        }

        expr = !cnt ? _wrapExpr(expr, asText)
             : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
      }
      return expr

      function skipBraces (ch, re) {
        var
          mm,
          lv = 1,
          ir = RE_BREND[ch];

        ir.lastIndex = re.lastIndex;
        while (mm = ir.exec(expr)) {
          if (mm[0] === ch) { ++lv; }
          else if (!--lv) { break }
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex;
      }
    }

    // istanbul ignore next: not both
    var // eslint-disable-next-line max-len
      JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
      JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
      JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

    function _wrapExpr (expr, asText, key) {
      var tb;

      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
        if (mvar) {
          pos = tb ? 0 : pos + match.length;

          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar;
            if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }
          } else if (pos) {
            tb = !JS_NOPROPS.test(s.slice(pos));
          }
        }
        return match
      });

      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
      }

      if (key) {

        expr = (tb
            ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
          ) + '?"' + key + '":""';

      } else if (asText) {

        expr = 'function(v){' + (tb
            ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
          ) + ';return v||v===0?v:""}.call(this)';
      }

      return expr
    }

    _tmpl.version = brackets.version = 'v3.0.8';

    return _tmpl

  })();

  /* istanbul ignore next */
  var observable = function(el) {

    /**
     * Extend the original object or create a new empty one
     * @type { Object }
     */

    el = el || {};

    /**
     * Private variables
     */
    var callbacks = {},
      slice = Array.prototype.slice;

    /**
     * Public Api
     */

    // extend the el object adding the observable methods
    Object.defineProperties(el, {
      /**
       * Listen to the given `event` ands
       * execute the `callback` each time an event is triggered.
       * @param  { String } event - event id
       * @param  { Function } fn - callback function
       * @returns { Object } el
       */
      on: {
        value: function(event, fn) {
          if (typeof fn == 'function')
            { (callbacks[event] = callbacks[event] || []).push(fn); }
          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Removes the given `event` listeners
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      off: {
        value: function(event, fn) {
          if (event == '*' && !fn) { callbacks = {}; }
          else {
            if (fn) {
              var arr = callbacks[event];
              for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                if (cb == fn) { arr.splice(i--, 1); }
              }
            } else { delete callbacks[event]; }
          }
          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Listen to the given `event` and
       * execute the `callback` at most once
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      one: {
        value: function(event, fn) {
          function on() {
            el.off(event, on);
            fn.apply(el, arguments);
          }
          return el.on(event, on)
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Execute all callback functions that listen to
       * the given `event`
       * @param   { String } event - event id
       * @returns { Object } el
       */
      trigger: {
        value: function(event) {
          var arguments$1 = arguments;


          // getting the arguments
          var arglen = arguments.length - 1,
            args = new Array(arglen),
            fns,
            fn,
            i;

          for (i = 0; i < arglen; i++) {
            args[i] = arguments$1[i + 1]; // skip first argument
          }

          fns = slice.call(callbacks[event] || [], 0);

          for (i = 0; fn = fns[i]; ++i) {
            fn.apply(el, args);
          }

          if (callbacks['*'] && event != '*')
            { el.trigger.apply(el, ['*', event].concat(args)); }

          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      }
    });

    return el

  };

  /**
   * Short alias for Object.getOwnPropertyDescriptor
   */
  function getPropDescriptor (o, k) {
    return Object.getOwnPropertyDescriptor(o, k)
  }

  /**
   * Check if passed argument is undefined
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isUndefined(value) {
    return typeof value === T_UNDEF
  }

  /**
   * Check whether object's property could be overridden
   * @param   { Object }  obj - source object
   * @param   { String }  key - object property
   * @returns { Boolean } true if writable
   */
  function isWritable(obj, key) {
    var descriptor = getPropDescriptor(obj, key);
    return isUndefined(obj[key]) || descriptor && descriptor.writable
  }

  /**
   * Extend any object with other properties
   * @param   { Object } src - source object
   * @returns { Object } the resulting extended object
   *
   * var obj = { foo: 'baz' }
   * extend(obj, {bar: 'bar', foo: 'bar'})
   * console.log(obj) => {bar: 'bar', foo: 'bar'}
   *
   */
  function extend(src) {
    var obj;
    var i = 1;
    var args = arguments;
    var l = args.length;

    for (; i < l; i++) {
      if (obj = args[i]) {
        for (var key in obj) {
          // check if this property of the source object could be overridden
          if (isWritable(src, key))
            { src[key] = obj[key]; }
        }
      }
    }
    return src
  }

  /**
   * Alias for Object.create
   */
  function create(src) {
    return Object.create(src)
  }

  var settings = extend(create(brackets.settings), {
    skipAnonymousTags: true,
    // the "value" attributes will be preserved
    keepValueAttributes: false,
    // handle the auto updates on any DOM event
    autoUpdate: true
  });

  /**
   * Shorter and fast way to select multiple nodes in the DOM
   * @param   { String } selector - DOM selector
   * @param   { Object } ctx - DOM node where the targets of our search will is located
   * @returns { Object } dom nodes found
   */
  function $$(selector, ctx) {
    return [].slice.call((ctx || document).querySelectorAll(selector))
  }

  /**
   * Create a document text node
   * @returns { Object } create a text node to use as placeholder
   */
  function createDOMPlaceholder() {
    return document.createTextNode('')
  }

  /**
   * Toggle the visibility of any DOM node
   * @param   { Object }  dom - DOM node we want to hide
   * @param   { Boolean } show - do we want to show it?
   */

  function toggleVisibility(dom, show) {
    dom.style.display = show ? '' : 'none';
    dom.hidden = show ? false : true;
  }

  /**
   * Get the value of any DOM attribute on a node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { String } name - name of the attribute we want to get
   * @returns { String | undefined } name of the node attribute whether it exists
   */
  function getAttribute(dom, name) {
    return dom.getAttribute(name)
  }

  /**
   * Remove any DOM attribute from a node
   * @param   { Object } dom - DOM node we want to update
   * @param   { String } name - name of the property we want to remove
   */
  function removeAttribute(dom, name) {
    dom.removeAttribute(name);
  }

  /**
   * Set the inner html of any DOM node SVGs included
   * @param { Object } container - DOM node where we'll inject new html
   * @param { String } html - html to inject
   * @param { Boolean } isSvg - svg tags should be treated a bit differently
   */
  /* istanbul ignore next */
  function setInnerHTML(container, html, isSvg) {
    // innerHTML is not supported on svg tags so we neet to treat them differently
    if (isSvg) {
      var node = container.ownerDocument.importNode(
        new DOMParser()
          .parseFromString(("<svg xmlns=\"" + SVG_NS + "\">" + html + "</svg>"), 'application/xml')
          .documentElement,
        true
      );

      container.appendChild(node);
    } else {
      container.innerHTML = html;
    }
  }

  /**
   * Minimize risk: only zero or one _space_ between attr & value
   * @param   { String }   html - html string we want to parse
   * @param   { Function } fn - callback function to apply on any attribute found
   */
  function walkAttributes(html, fn) {
    if (!html) { return }
    var m;
    while (m = RE_HTML_ATTRS.exec(html))
      { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }
  }

  /**
   * Create a document fragment
   * @returns { Object } document fragment
   */
  function createFragment() {
    return document.createDocumentFragment()
  }

  /**
   * Insert safely a tag to fix #1962 #1649
   * @param   { HTMLElement } root - children container
   * @param   { HTMLElement } curr - node to insert
   * @param   { HTMLElement } next - node that should preceed the current node inserted
   */
  function safeInsert(root, curr, next) {
    root.insertBefore(curr, next.parentNode && next);
  }

  /**
   * Convert a style object to a string
   * @param   { Object } style - style object we need to parse
   * @returns { String } resulting css string
   * @example
   * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'
   */
  function styleObjectToString(style) {
    return Object.keys(style).reduce(function (acc, prop) {
      return (acc + " " + prop + ": " + (style[prop]) + ";")
    }, '')
  }

  /**
   * Walk down recursively all the children tags starting dom node
   * @param   { Object }   dom - starting node where we will start the recursion
   * @param   { Function } fn - callback to transform the child node just found
   * @param   { Object }   context - fn can optionally return an object, which is passed to children
   */
  function walkNodes(dom, fn, context) {
    if (dom) {
      var res = fn(dom, context);
      var next;
      // stop the recursion
      if (res === false) { return }

      dom = dom.firstChild;

      while (dom) {
        next = dom.nextSibling;
        walkNodes(dom, fn, res);
        dom = next;
      }
    }
  }



  var dom = /*#__PURE__*/Object.freeze({
    $$: $$,
    $: $,
    createDOMPlaceholder: createDOMPlaceholder,
    mkEl: makeElement,
    setAttr: setAttribute,
    toggleVisibility: toggleVisibility,
    getAttr: getAttribute,
    remAttr: removeAttribute,
    setInnerHTML: setInnerHTML,
    walkAttrs: walkAttributes,
    createFrag: createFragment,
    safeInsert: safeInsert,
    styleObjectToString: styleObjectToString,
    walkNodes: walkNodes
  });

  /**
   * Check against the null and undefined values
   * @param   { * }  value -
   * @returns {Boolean} -
   */
  function isNil(value) {
    return isUndefined(value) || value === null
  }

  /**
   * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
   * @param { * } value -
   * @returns { Boolean } -
   */
  function isBlank(value) {
    return isNil(value) || value === ''
  }

  /**
   * Check if passed argument is a function
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isFunction(value) {
    return typeof value === T_FUNCTION
  }

  /**
   * Check if passed argument is an object, exclude null
   * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isObject(value) {
    return value && typeof value === T_OBJECT // typeof null is 'object'
  }

  /**
   * Check if a DOM node is an svg tag or part of an svg
   * @param   { HTMLElement }  el - node we want to test
   * @returns {Boolean} true if it's an svg node
   */
  function isSvg(el) {
    var owner = el.ownerSVGElement;
    return !!owner || owner === null
  }

  /**
   * Check if passed argument is a kind of array
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isArray(value) {
    return Array.isArray(value) || value instanceof Array
  }

  /**
   * Check if the passed argument is a boolean attribute
   * @param   { String } value -
   * @returns { Boolean } -
   */
  function isBoolAttr(value) {
    return RE_BOOL_ATTRS.test(value)
  }

  /**
   * Check if passed argument is a string
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isString(value) {
    return typeof value === T_STRING
  }



  var check = /*#__PURE__*/Object.freeze({
    isBlank: isBlank,
    isFunction: isFunction,
    isObject: isObject,
    isSvg: isSvg,
    isWritable: isWritable,
    isArray: isArray,
    isBoolAttr: isBoolAttr,
    isNil: isNil,
    isString: isString,
    isUndefined: isUndefined
  });

  /**
   * Check whether an array contains an item
   * @param   { Array } array - target array
   * @param   { * } item - item to test
   * @returns { Boolean } -
   */
  function contains(array, item) {
    return array.indexOf(item) !== -1
  }

  /**
   * Specialized function for looping an array-like collection with `each={}`
   * @param   { Array } list - collection of items
   * @param   {Function} fn - callback function
   * @returns { Array } the array looped
   */
  function each(list, fn) {
    var len = list ? list.length : 0;
    var i = 0;
    for (; i < len; i++) { fn(list[i], i); }
    return list
  }

  /**
   * Faster String startsWith alternative
   * @param   { String } str - source string
   * @param   { String } value - test string
   * @returns { Boolean } -
   */
  function startsWith(str, value) {
    return str.slice(0, value.length) === value
  }

  /**
   * Function returning always a unique identifier
   * @returns { Number } - number from 0...n
   */
  var uid = (function uid() {
    var i = -1;
    return function () { return ++i; }
  })();

  /**
   * Helper function to set an immutable property
   * @param   { Object } el - object where the new property will be set
   * @param   { String } key - object key where the new property will be stored
   * @param   { * } value - value of the new property
   * @param   { Object } options - set the propery overriding the default options
   * @returns { Object } - the initial object
   */
  function define(el, key, value, options) {
    Object.defineProperty(el, key, extend({
      value: value,
      enumerable: false,
      writable: false,
      configurable: true
    }, options));
    return el
  }

  /**
   * Convert a string containing dashes to camel case
   * @param   { String } str - input string
   * @returns { String } my-string -> myString
   */
  function toCamel(str) {
    return str.replace(/-(\w)/g, function (_, c) { return c.toUpperCase(); })
  }

  /**
   * Warn a message via console
   * @param   {String} message - warning message
   */
  function warn(message) {
    if (console && console.warn) { console.warn(message); }
  }



  var misc = /*#__PURE__*/Object.freeze({
    contains: contains,
    each: each,
    getPropDescriptor: getPropDescriptor,
    startsWith: startsWith,
    uid: uid,
    defineProperty: define,
    objectCreate: create,
    extend: extend,
    toCamel: toCamel,
    warn: warn
  });

  /**
   * Set the property of an object for a given key. If something already
   * exists there, then it becomes an array containing both the old and new value.
   * @param { Object } obj - object on which to set the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be set
   * @param { Boolean } ensureArray - ensure that the property remains an array
   * @param { Number } index - add the new item in a certain array position
   */
  function arrayishAdd(obj, key, value, ensureArray, index) {
    var dest = obj[key];
    var isArr = isArray(dest);
    var hasIndex = !isUndefined(index);

    if (dest && dest === value) { return }

    // if the key was never set, set it once
    if (!dest && ensureArray) { obj[key] = [value]; }
    else if (!dest) { obj[key] = value; }
    // if it was an array and not yet set
    else {
      if (isArr) {
        var oldIndex = dest.indexOf(value);
        // this item never changed its position
        if (oldIndex === index) { return }
        // remove the item from its old position
        if (oldIndex !== -1) { dest.splice(oldIndex, 1); }
        // move or add the item
        if (hasIndex) {
          dest.splice(index, 0, value);
        } else {
          dest.push(value);
        }
      } else { obj[key] = [dest, value]; }
    }
  }

  /**
   * Detect the tag implementation by a DOM node
   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
   */
  function get(dom) {
    return dom.tagName && __TAG_IMPL[getAttribute(dom, IS_DIRECTIVE) ||
      getAttribute(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]
  }

  /**
   * Get the tag name of any DOM node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
   * @returns { String } name to identify this dom node in riot
   */
  function getName(dom, skipDataIs) {
    var child = get(dom);
    var namedTag = !skipDataIs && getAttribute(dom, IS_DIRECTIVE);
    return namedTag && !tmpl.hasExpr(namedTag) ?
      namedTag : child ? child.name : dom.tagName.toLowerCase()
  }

  /**
   * Return a temporary context containing also the parent properties
   * @this Tag
   * @param { Tag } - temporary tag context containing all the parent properties
   */
  function inheritParentProps() {
    if (this.parent) { return extend(create(this), this.parent) }
    return this
  }

  /*
    Includes hacks needed for the Internet Explorer version 9 and below
    See: http://kangax.github.io/compat-table/es5/#ie8
         http://codeplanet.io/dropping-ie8/
  */

  var
    reHasYield  = /<yield\b/i,
    reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
    reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
    reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
    rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
    tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION,
    GENERIC = 'div',
    SVG = 'svg';


  /*
    Creates the root element for table or select child elements:
    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
  */
  function specialTags(el, tmpl, tagName) {

    var
      select = tagName[0] === 'o',
      parent = select ? 'select>' : 'table>';

    // trim() is important here, this ensures we don't have artifacts,
    // so we can check if we have only one element inside the parent
    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
    parent = el.firstChild;

    // returns the immediate parent if tr/th/td/col is the only element, if not
    // returns the whole tree, as this can include additional elements
    /* istanbul ignore next */
    if (select) {
      parent.selectedIndex = -1;  // for IE9, compatible w/current riot behavior
    } else {
      // avoids insertion of cointainer inside container (ex: tbody inside tbody)
      var tname = rootEls[tagName];
      if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }
    }
    return parent
  }

  /*
    Replace the yield tag from any tag template with the innerHTML of the
    original tag in the page
  */
  function replaceYield(tmpl, html) {
    // do nothing if no yield
    if (!reHasYield.test(tmpl)) { return tmpl }

    // be careful with #1343 - string on the source having `$1`
    var src = {};

    html = html && html.replace(reYieldSrc, function (_, ref, text) {
      src[ref] = src[ref] || text;   // preserve first definition
      return ''
    }).trim();

    return tmpl
      .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs
        return src[ref] || def || ''
      })
      .replace(reYieldAll, function (_, def) {        // yield without any "from"
        return html || def || ''
      })
  }

  /**
   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
   *
   * @param   { String } tmpl  - The template coming from the custom tag definition
   * @param   { String } html - HTML content that comes from the DOM element where you
   *           will mount the tag, mostly the original tag in the page
   * @param   { Boolean } isSvg - true if the root node is an svg
   * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
   */
  function mkdom(tmpl, html, isSvg) {
    var match   = tmpl && tmpl.match(/^\s*<([-\w]+)/);
    var  tagName = match && match[1].toLowerCase();
    var el = makeElement(isSvg ? SVG : GENERIC);

    // replace all the yield tags with the tag inner html
    tmpl = replaceYield(tmpl, html);

    /* istanbul ignore next */
    if (tblTags.test(tagName))
      { el = specialTags(el, tmpl, tagName); }
    else
      { setInnerHTML(el, tmpl, isSvg); }

    return el
  }

  var EVENT_ATTR_RE = /^on/;

  /**
   * True if the event attribute starts with 'on'
   * @param   { String } attribute - event attribute
   * @returns { Boolean }
   */
  function isEventAttribute(attribute) {
    return EVENT_ATTR_RE.test(attribute)
  }

  /**
   * Loop backward all the parents tree to detect the first custom parent tag
   * @param   { Object } tag - a Tag instance
   * @returns { Object } the instance of the first custom parent tag found
   */
  function getImmediateCustomParent(tag) {
    var ptag = tag;
    while (ptag.__.isAnonymous) {
      if (!ptag.parent) { break }
      ptag = ptag.parent;
    }
    return ptag
  }

  /**
   * Trigger DOM events
   * @param   { HTMLElement } dom - dom element target of the event
   * @param   { Function } handler - user function
   * @param   { Object } e - event object
   */
  function handleEvent(dom, handler, e) {
    var ptag = this.__.parent;
    var item = this.__.item;

    if (!item)
      { while (ptag && !item) {
        item = ptag.__.item;
        ptag = ptag.__.parent;
      } }

    // override the event properties
    /* istanbul ignore next */
    if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }
    /* istanbul ignore next */
    if (isWritable(e, 'target')) { e.target = e.srcElement; }
    /* istanbul ignore next */
    if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }

    e.item = item;

    handler.call(this, e);

    // avoid auto updates
    if (!settings.autoUpdate) { return }

    if (!e.preventUpdate) {
      var p = getImmediateCustomParent(this);
      // fixes #2083
      if (p.isMounted) { p.update(); }
    }
  }

  /**
   * Attach an event to a DOM node
   * @param { String } name - event name
   * @param { Function } handler - event callback
   * @param { Object } dom - dom node
   * @param { Tag } tag - tag instance
   */
  function setEventHandler(name, handler, dom, tag) {
    var eventName;
    var cb = handleEvent.bind(tag, dom, handler);

    // avoid to bind twice the same event
    // possible fix for #2332
    dom[name] = null;

    // normalize event name
    eventName = name.replace(RE_EVENTS_PREFIX, '');

    // cache the listener into the listeners array
    if (!contains(tag.__.listeners, dom)) { tag.__.listeners.push(dom); }
    if (!dom[RIOT_EVENTS_KEY]) { dom[RIOT_EVENTS_KEY] = {}; }
    if (dom[RIOT_EVENTS_KEY][name]) { dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]); }

    dom[RIOT_EVENTS_KEY][name] = cb;
    dom.addEventListener(eventName, cb, false);
  }

  /**
   * Create a new child tag including it correctly into its parent
   * @param   { Object } child - child tag implementation
   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
   * @param   { String } innerHTML - inner html of the child node
   * @param   { Object } parent - instance of the parent tag including the child custom tag
   * @returns { Object } instance of the new child tag just created
   */
  function initChild(child, opts, innerHTML, parent) {
    var tag = createTag(child, opts, innerHTML);
    var tagName = opts.tagName || getName(opts.root, true);
    var ptag = getImmediateCustomParent(parent);
    // fix for the parent attribute in the looped elements
    define(tag, 'parent', ptag);
    // store the real parent tag
    // in some cases this could be different from the custom parent tag
    // for example in nested loops
    tag.__.parent = parent;

    // add this tag to the custom parent tag
    arrayishAdd(ptag.tags, tagName, tag);

    // and also to the real parent tag
    if (ptag !== parent)
      { arrayishAdd(parent.tags, tagName, tag); }

    return tag
  }

  /**
   * Removes an item from an object at a given key. If the key points to an array,
   * then the item is just removed from the array.
   * @param { Object } obj - object on which to remove the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be removed
   * @param { Boolean } ensureArray - ensure that the property remains an array
  */
  function arrayishRemove(obj, key, value, ensureArray) {
    if (isArray(obj[key])) {
      var index = obj[key].indexOf(value);
      if (index !== -1) { obj[key].splice(index, 1); }
      if (!obj[key].length) { delete obj[key]; }
      else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }
    } else if (obj[key] === value)
      { delete obj[key]; } // otherwise just delete the key
  }

  /**
   * Adds the elements for a virtual tag
   * @this Tag
   * @param { Node } src - the node that will do the inserting or appending
   * @param { Tag } target - only if inserting, insert before this tag's first child
   */
  function makeVirtual(src, target) {
    var this$1 = this;

    var head = createDOMPlaceholder();
    var tail = createDOMPlaceholder();
    var frag = createFragment();
    var sib;
    var el;

    this.root.insertBefore(head, this.root.firstChild);
    this.root.appendChild(tail);

    this.__.head = el = head;
    this.__.tail = tail;

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      this$1.__.virts.push(el); // hold for unmounting
      el = sib;
    }

    if (target)
      { src.insertBefore(frag, target.__.head); }
    else
      { src.appendChild(frag); }
  }

  /**
   * makes a tag virtual and replaces a reference in the dom
   * @this Tag
   * @param { tag } the tag to make virtual
   * @param { ref } the dom reference location
   */
  function makeReplaceVirtual(tag, ref) {
    if (!ref.parentNode) { return }
    var frag = createFragment();
    makeVirtual.call(tag, frag);
    ref.parentNode.replaceChild(frag, ref);
  }

  /**
   * Update dynamically created data-is tags with changing expressions
   * @param { Object } expr - expression tag and expression info
   * @param { Tag }    parent - parent for tag creation
   * @param { String } tagName - tag implementation we want to use
   */
  function updateDataIs(expr, parent, tagName) {
    var tag = expr.tag || expr.dom._tag;
    var ref;

    var ref$1 = tag ? tag.__ : {};
    var head = ref$1.head;
    var isVirtual = expr.dom.tagName === 'VIRTUAL';

    if (tag && expr.tagName === tagName) {
      tag.update();
      return
    }

    // sync _parent to accommodate changing tagnames
    if (tag) {
      // need placeholder before unmount
      if(isVirtual) {
        ref = createDOMPlaceholder();
        head.parentNode.insertBefore(ref, head);
      }

      tag.unmount(true);
    }

    // unable to get the tag name
    if (!isString(tagName)) { return }

    expr.impl = __TAG_IMPL[tagName];

    // unknown implementation
    if (!expr.impl) { return }

    expr.tag = tag = initChild(
      expr.impl, {
        root: expr.dom,
        parent: parent,
        tagName: tagName
      },
      expr.dom.innerHTML,
      parent
    );

    each(expr.attrs, function (a) { return setAttribute(tag.root, a.name, a.value); });
    expr.tagName = tagName;
    tag.mount();

    // root exist first time, after use placeholder
    if (isVirtual) { makeReplaceVirtual(tag, ref || tag.root); }

    // parent is the placeholder tag, not the dynamic tag so clean up
    parent.__.onUnmount = function () {
      var delName = tag.opts.dataIs;
      arrayishRemove(tag.parent.tags, delName, tag);
      arrayishRemove(tag.__.parent.tags, delName, tag);
      tag.unmount();
    };
  }

  /**
   * Nomalize any attribute removing the "riot-" prefix
   * @param   { String } attrName - original attribute name
   * @returns { String } valid html attribute name
   */
  function normalizeAttrName(attrName) {
    if (!attrName) { return null }
    attrName = attrName.replace(ATTRS_PREFIX, '');
    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }
    return attrName
  }

  /**
   * Update on single tag expression
   * @this Tag
   * @param { Object } expr - expression logic
   * @returns { undefined }
   */
  function updateExpression(expr) {
    if (this.root && getAttribute(this.root,'virtualized')) { return }

    var dom = expr.dom;
    // remove the riot- prefix
    var attrName = normalizeAttrName(expr.attr);
    var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);
    var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';
    var ref = this.__;
    var isAnonymous = ref.isAnonymous;
    var parent = dom && (expr.parent || dom.parentNode);
    var keepValueAttributes = settings.keepValueAttributes;
    // detect the style attributes
    var isStyleAttr = attrName === 'style';
    var isClassAttr = attrName === 'class';
    var isValueAttr = attrName === 'value';

    var value;

    // if it's a tag we could totally skip the rest
    if (expr._riot_id) {
      if (expr.__.wasCreated) {
        expr.update();
      // if it hasn't been mounted yet, do that now.
      } else {
        expr.mount();
        if (isVirtual) {
          makeReplaceVirtual(expr, expr.root);
        }
      }
      return
    }

    // if this expression has the update method it means it can handle the DOM changes by itself
    if (expr.update) { return expr.update() }

    var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;

    // ...it seems to be a simple expression so we try to calculate its value
    value = tmpl(expr.expr, context);

    var hasValue = !isBlank(value);
    var isObj = isObject(value);

    // convert the style/class objects to strings
    if (isObj) {
      if (isClassAttr) {
        value = tmpl(JSON.stringify(value), this);
      } else if (isStyleAttr) {
        value = styleObjectToString(value);
      }
    }

    // remove original attribute
    if (expr.attr &&
        (
          // the original attribute can be removed only if we are parsing the original expression
          !expr.wasParsedOnce ||
          // or its value is false
          value === false ||
          // or if its value is currently falsy...
          // We will keep the "value" attributes if the "keepValueAttributes"
          // is enabled though
          (!hasValue && (!isValueAttr || isValueAttr && !keepValueAttributes))
        )
    ) {
      // remove either riot-* attributes or just the attribute name
      removeAttribute(dom, getAttribute(dom, expr.attr) ? expr.attr : attrName);
    }

    // for the boolean attributes we don't need the value
    // we can convert it to checked=true to checked=checked
    if (expr.bool) { value = value ? attrName : false; }
    if (expr.isRtag) { return updateDataIs(expr, this, value) }
    if (expr.wasParsedOnce && expr.value === value) { return }

    // update the expression value
    expr.value = value;
    expr.wasParsedOnce = true;

    // if the value is an object (and it's not a style or class attribute) we can not do much more with it
    if (isObj && !isClassAttr && !isStyleAttr && !isToggle) { return }
    // avoid to render undefined/null values
    if (!hasValue) { value = ''; }

    // textarea and text nodes have no attribute name
    if (!attrName) {
      // about #815 w/o replace: the browser converts the value to a string,
      // the comparison by "==" does too, but not in the server
      value += '';
      // test for parent avoids error with invalid assignment to nodeValue
      if (parent) {
        // cache the parent node because somehow it will become null on IE
        // on the next iteration
        expr.parent = parent;
        if (parent.tagName === 'TEXTAREA') {
          parent.value = value;                    // #1113
          if (!IE_VERSION) { dom.nodeValue = value; }  // #1625 IE throws here, nodeValue
        }                                         // will be available on 'updated'
        else { dom.nodeValue = value; }
      }
      return
    }

    switch (true) {
    // handle events binding
    case isFunction(value):
      if (isEventAttribute(attrName)) {
        setEventHandler(attrName, value, dom, this);
      }
      break
    // show / hide
    case isToggle:
      toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);
      break
    // handle attributes
    default:
      if (expr.bool) {
        dom[attrName] = value;
      }

      if (isValueAttr && dom.value !== value) {
        dom.value = value;
      } else if (hasValue && value !== false) {
        setAttribute(dom, attrName, value);
      }

      // make sure that in case of style changes
      // the element stays hidden
      if (isStyleAttr && dom.hidden) { toggleVisibility(dom, false); }
    }
  }

  /**
   * Update all the expressions in a Tag instance
   * @this Tag
   * @param { Array } expressions - expression that must be re evaluated
   */
  function update(expressions) {
    each(expressions, updateExpression.bind(this));
  }

  /**
   * We need to update opts for this tag. That requires updating the expressions
   * in any attributes on the tag, and then copying the result onto opts.
   * @this Tag
   * @param   {Boolean} isLoop - is it a loop tag?
   * @param   { Tag }  parent - parent tag node
   * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
   * @param   { Object }  opts - tag options
   * @param   { Array }  instAttrs - tag attributes array
   */
  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
    // isAnonymous `each` tags treat `dom` and `root` differently. In this case
    // (and only this case) we don't need to do updateOpts, because the regular parse
    // will update those attrs. Plus, isAnonymous tags don't need opts anyway
    if (isLoop && isAnonymous) { return }
    var ctx = isLoop ? inheritParentProps.call(this) : parent || this;

    each(instAttrs, function (attr) {
      if (attr.expr) { updateExpression.call(ctx, attr.expr); }
      // normalize the attribute names
      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;
    });
  }

  /**
   * Update the tag expressions and options
   * @param { Tag } tag - tag object
   * @param { * } data - data we want to use to extend the tag properties
   * @param { Array } expressions - component expressions array
   * @returns { Tag } the current tag instance
   */
  function componentUpdate(tag, data, expressions) {
    var __ = tag.__;
    var nextOpts = {};
    var canTrigger = tag.isMounted && !__.skipAnonymous;

    // inherit properties from the parent tag
    if (__.isAnonymous && __.parent) { extend(tag, __.parent); }
    extend(tag, data);

    updateOpts.apply(tag, [__.isLoop, __.parent, __.isAnonymous, nextOpts, __.instAttrs]);

    if (
      canTrigger &&
      tag.isMounted &&
      isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)
    ) {
      return tag
    }

    extend(tag.opts, nextOpts);

    if (canTrigger) { tag.trigger('update', data); }
    update.call(tag, expressions);
    if (canTrigger) { tag.trigger('updated'); }

    return tag
  }

  /**
   * Get selectors for tags
   * @param   { Array } tags - tag names to select
   * @returns { String } selector
   */
  function query(tags) {
    // select all tags
    if (!tags) {
      var keys = Object.keys(__TAG_IMPL);
      return keys + query(keys)
    }

    return tags
      .filter(function (t) { return !/[^-\w]/.test(t); })
      .reduce(function (list, t) {
        var name = t.trim().toLowerCase();
        return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]"
      }, '')
  }

  /**
   * Another way to create a riot tag a bit more es6 friendly
   * @param { HTMLElement } el - tag DOM selector or DOM node/s
   * @param { Object } opts - tag logic
   * @returns { Tag } new riot tag instance
   */
  function Tag(el, opts) {
    // get the tag properties from the class constructor
    var ref = this;
    var name = ref.name;
    var tmpl = ref.tmpl;
    var css = ref.css;
    var attrs = ref.attrs;
    var onCreate = ref.onCreate;
    // register a new tag and cache the class prototype
    if (!__TAG_IMPL[name]) {
      tag(name, tmpl, css, attrs, onCreate);
      // cache the class constructor
      __TAG_IMPL[name].class = this.constructor;
    }

    // mount the tag using the class instance
    mount$1(el, name, opts, this);
    // inject the component css
    if (css) { styleManager.inject(); }

    return this
  }

  /**
   * Create a new riot tag implementation
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag(name, tmpl, css, attrs, fn) {
    if (isFunction(attrs)) {
      fn = attrs;

      if (/^[\w-]+\s?=/.test(css)) {
        attrs = css;
        css = '';
      } else
        { attrs = ''; }
    }

    if (css) {
      if (isFunction(css))
        { fn = css; }
      else
        { styleManager.add(css, name); }
    }

    name = name.toLowerCase();
    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name
  }

  /**
   * Create a new riot tag implementation (for use by the compiler)
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag2(name, tmpl, css, attrs, fn) {
    if (css) { styleManager.add(css, name); }

    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name
  }

  /**
   * Mount a tag using a specific tag implementation
   * @param   { * } selector - tag DOM selector or DOM node/s
   * @param   { String } tagName - tag implementation name
   * @param   { Object } opts - tag logic
   * @returns { Array } new tags instances
   */
  function mount(selector, tagName, opts) {
    var tags = [];
    var elem, allTags;

    function pushTagsTo(root) {
      if (root.tagName) {
        var riotTag = getAttribute(root, IS_DIRECTIVE), tag;

        // have tagName? force riot-tag to be the same
        if (tagName && riotTag !== tagName) {
          riotTag = tagName;
          setAttribute(root, IS_DIRECTIVE, tagName);
        }

        tag = mount$1(
          root,
          riotTag || root.tagName.toLowerCase(),
          isFunction(opts) ? opts() : opts
        );

        if (tag)
          { tags.push(tag); }
      } else if (root.length)
        { each(root, pushTagsTo); } // assume nodeList
    }

    // inject styles into DOM
    styleManager.inject();

    if (isObject(tagName) || isFunction(tagName)) {
      opts = tagName;
      tagName = 0;
    }

    // crawl the DOM to find the tag
    if (isString(selector)) {
      selector = selector === '*' ?
        // select all registered tags
        // & tags found with the riot-tag attribute set
        allTags = query() :
        // or just the ones named like the selector
        selector + query(selector.split(/, */));

      // make sure to pass always a selector
      // to the querySelectorAll function
      elem = selector ? $$(selector) : [];
    }
    else
      // probably you have passed already a tag or a NodeList
      { elem = selector; }

    // select all the registered and mount them inside their root elements
    if (tagName === '*') {
      // get all custom tags
      tagName = allTags || query();
      // if the root els it's just a single tag
      if (elem.tagName)
        { elem = $$(tagName, elem); }
      else {
        // select all the children for all the different root elements
        var nodeList = [];

        each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });

        elem = nodeList;
      }
      // get rid of the tagName
      tagName = 0;
    }

    pushTagsTo(elem);

    return tags
  }

  // Create a mixin that could be globally shared across all the tags
  var mixins = {};
  var globals = mixins[GLOBAL_MIXIN] = {};
  var mixins_id = 0;

  /**
   * Create/Return a mixin by its name
   * @param   { String }  name - mixin name (global mixin if object)
   * @param   { Object }  mix - mixin logic
   * @param   { Boolean } g - is global?
   * @returns { Object }  the mixin logic
   */
  function mixin(name, mix, g) {
    // Unnamed global
    if (isObject(name)) {
      mixin(("__" + (mixins_id++) + "__"), name, true);
      return
    }

    var store = g ? globals : mixins;

    // Getter
    if (!mix) {
      if (isUndefined(store[name]))
        { throw new Error(("Unregistered mixin: " + name)) }

      return store[name]
    }

    // Setter
    store[name] = isFunction(mix) ?
      extend(mix.prototype, store[name] || {}) && mix :
      extend(store[name] || {}, mix);
  }

  /**
   * Update all the tags instances created
   * @returns { Array } all the tags instances
   */
  function update$1() {
    return each(__TAGS_CACHE, function (tag) { return tag.update(); })
  }

  function unregister(name) {
    styleManager.remove(name);
    return delete __TAG_IMPL[name]
  }

  var version = 'v3.13.2';

  var core = /*#__PURE__*/Object.freeze({
    Tag: Tag,
    tag: tag,
    tag2: tag2,
    mount: mount,
    mixin: mixin,
    update: update$1,
    unregister: unregister,
    version: version
  });

  /**
   * Add a mixin to this tag
   * @returns { Tag } the current tag instance
   */
  function componentMixin(tag$$1) {
    var mixins = [], len = arguments.length - 1;
    while ( len-- > 0 ) mixins[ len ] = arguments[ len + 1 ];

    each(mixins, function (mix) {
      var instance;
      var obj;
      var props = [];

      // properties blacklisted and will not be bound to the tag instance
      var propsBlacklist = ['init', '__proto__'];

      mix = isString(mix) ? mixin(mix) : mix;

      // check if the mixin is a function
      if (isFunction(mix)) {
        // create the new mixin instance
        instance = new mix();
      } else { instance = mix; }

      var proto = Object.getPrototypeOf(instance);

      // build multilevel prototype inheritance chain property list
      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }
      while (obj = Object.getPrototypeOf(obj || instance))

      // loop the keys in the function prototype or the all object keys
      each(props, function (key) {
        // bind methods to tag
        // allow mixins to override other properties/parent mixins
        if (!contains(propsBlacklist, key)) {
          // check for getters/setters
          var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);
          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

          // apply method only if it does not already exist on the instance
          if (!tag$$1.hasOwnProperty(key) && hasGetterSetter) {
            Object.defineProperty(tag$$1, key, descriptor);
          } else {
            tag$$1[key] = isFunction(instance[key]) ?
              instance[key].bind(tag$$1) :
              instance[key];
          }
        }
      });

      // init method will be called automatically
      if (instance.init)
        { instance.init.bind(tag$$1)(tag$$1.opts); }
    });

    return tag$$1
  }

  /**
   * Move the position of a custom tag in its parent tag
   * @this Tag
   * @param   { String } tagName - key where the tag was stored
   * @param   { Number } newPos - index where the new tag will be stored
   */
  function moveChild(tagName, newPos) {
    var parent = this.parent;
    var tags;
    // no parent no move
    if (!parent) { return }

    tags = parent.tags[tagName];

    if (isArray(tags))
      { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }
    else { arrayishAdd(parent.tags, tagName, this); }
  }

  /**
   * Move virtual tag and all child nodes
   * @this Tag
   * @param { Node } src  - the node that will do the inserting
   * @param { Tag } target - insert before this tag's first child
   */
  function moveVirtual(src, target) {
    var this$1 = this;

    var el = this.__.head;
    var sib;
    var frag = createFragment();

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      el = sib;
      if (el === this$1.__.tail) {
        frag.appendChild(el);
        src.insertBefore(frag, target.__.head);
        break
      }
    }
  }

  /**
   * Convert the item looped into an object used to extend the child tag properties
   * @param   { Object } expr - object containing the keys used to extend the children tags
   * @param   { * } key - value to assign to the new object returned
   * @param   { * } val - value containing the position of the item in the array
   * @returns { Object } - new object containing the values of the original item
   *
   * The variables 'key' and 'val' are arbitrary.
   * They depend on the collection type looped (Array, Object)
   * and on the expression used on the each tag
   *
   */
  function mkitem(expr, key, val) {
    var item = {};
    item[expr.key] = key;
    if (expr.pos) { item[expr.pos] = val; }
    return item
  }

  /**
   * Unmount the redundant tags
   * @param   { Array } items - array containing the current items to loop
   * @param   { Array } tags - array containing all the children tags
   */
  function unmountRedundant(items, tags, filteredItemsCount) {
    var i = tags.length;
    var j = items.length - filteredItemsCount;

    while (i > j) {
      i--;
      remove.apply(tags[i], [tags, i]);
    }
  }


  /**
   * Remove a child tag
   * @this Tag
   * @param   { Array } tags - tags collection
   * @param   { Number } i - index of the tag to remove
   */
  function remove(tags, i) {
    tags.splice(i, 1);
    this.unmount();
    arrayishRemove(this.parent, this, this.__.tagName, true);
  }

  /**
   * Move the nested custom tags in non custom loop tags
   * @this Tag
   * @param   { Number } i - current position of the loop tag
   */
  function moveNestedTags(i) {
    var this$1 = this;

    each(Object.keys(this.tags), function (tagName) {
      moveChild.apply(this$1.tags[tagName], [tagName, i]);
    });
  }

  /**
   * Move a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function move(root, nextTag, isVirtual) {
    if (isVirtual)
      { moveVirtual.apply(this, [root, nextTag]); }
    else
      { safeInsert(root, this.root, nextTag.root); }
  }

  /**
   * Insert and mount a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function insert(root, nextTag, isVirtual) {
    if (isVirtual)
      { makeVirtual.apply(this, [root, nextTag]); }
    else
      { safeInsert(root, this.root, nextTag.root); }
  }

  /**
   * Append a new tag into the DOM
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function append(root, isVirtual) {
    if (isVirtual)
      { makeVirtual.call(this, root); }
    else
      { root.appendChild(this.root); }
  }

  /**
   * Return the value we want to use to lookup the postion of our items in the collection
   * @param   { String }  keyAttr         - lookup string or expression
   * @param   { * }       originalItem    - original item from the collection
   * @param   { Object }  keyedItem       - object created by riot via { item, i in collection }
   * @param   { Boolean } hasKeyAttrExpr  - flag to check whether the key is an expression
   * @returns { * } value that we will use to figure out the item position via collection.indexOf
   */
  function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) {
    if (keyAttr) {
      return hasKeyAttrExpr ?  tmpl(keyAttr, keyedItem) :  originalItem[keyAttr]
    }

    return originalItem
  }

  /**
   * Manage tags having the 'each'
   * @param   { HTMLElement } dom - DOM node we need to loop
   * @param   { Tag } parent - parent tag instance where the dom node is contained
   * @param   { String } expr - string contained in the 'each' attribute
   * @returns { Object } expression object for this each loop
   */
  function _each(dom, parent, expr) {
    var mustReorder = typeof getAttribute(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || removeAttribute(dom, LOOP_NO_REORDER_DIRECTIVE);
    var keyAttr = getAttribute(dom, KEY_DIRECTIVE);
    var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;
    var tagName = getName(dom);
    var impl = __TAG_IMPL[tagName];
    var parentNode = dom.parentNode;
    var placeholder = createDOMPlaceholder();
    var child = get(dom);
    var ifExpr = getAttribute(dom, CONDITIONAL_DIRECTIVE);
    var tags = [];
    var isLoop = true;
    var innerHTML = dom.innerHTML;
    var isAnonymous = !__TAG_IMPL[tagName];
    var isVirtual = dom.tagName === 'VIRTUAL';
    var oldItems = [];

    // remove the each property from the original tag
    removeAttribute(dom, LOOP_DIRECTIVE);
    removeAttribute(dom, KEY_DIRECTIVE);

    // parse the each expression
    expr = tmpl.loopKeys(expr);
    expr.isLoop = true;

    if (ifExpr) { removeAttribute(dom, CONDITIONAL_DIRECTIVE); }

    // insert a marked where the loop tags will be injected
    parentNode.insertBefore(placeholder, dom);
    parentNode.removeChild(dom);

    expr.update = function updateEach() {
      // get the new items collection
      expr.value = tmpl(expr.val, parent);

      var items = expr.value;
      var frag = createFragment();
      var isObject = !isArray(items) && !isString(items);
      var root = placeholder.parentNode;
      var tmpItems = [];
      var hasKeys = isObject && !!items;

      // if this DOM was removed the update here is useless
      // this condition fixes also a weird async issue on IE in our unit test
      if (!root) { return }

      // object loop. any changes cause full redraw
      if (isObject) {
        items = items ? Object.keys(items).map(function (key) { return mkitem(expr, items[key], key); }) : [];
      }

      // store the amount of filtered items
      var filteredItemsCount = 0;

      // loop all the new items
      each(items, function (_item, index) {
        var i = index - filteredItemsCount;
        var item = !hasKeys && expr.key ? mkitem(expr, _item, index) : _item;

        // skip this item because it must be filtered
        if (ifExpr && !tmpl(ifExpr, extend(create(parent), item))) {
          filteredItemsCount ++;
          return
        }

        var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);
        // reorder only if the items are not objects
        // or a key attribute has been provided
        var doReorder = !isObject && mustReorder && typeof _item === T_OBJECT || keyAttr;
        var oldPos = oldItems.indexOf(itemId);
        var isNew = oldPos === -1;
        var pos = !isNew && doReorder ? oldPos : i;
        // does a tag exist in this position?
        var tag = tags[pos];
        var mustAppend = i >= oldItems.length;
        var mustCreate = doReorder && isNew || !doReorder && !tag || !tags[i];

        // new tag
        if (mustCreate) {
          tag = createTag(impl, {
            parent: parent,
            isLoop: isLoop,
            isAnonymous: isAnonymous,
            tagName: tagName,
            root: dom.cloneNode(isAnonymous),
            item: item,
            index: i,
          }, innerHTML);

          // mount the tag
          tag.mount();

          if (mustAppend)
            { append.apply(tag, [frag || root, isVirtual]); }
          else
            { insert.apply(tag, [root, tags[i], isVirtual]); }

          if (!mustAppend) { oldItems.splice(i, 0, item); }
          tags.splice(i, 0, tag);
          if (child) { arrayishAdd(parent.tags, tagName, tag, true); }
        } else if (pos !== i && doReorder) {
          // move
          if (keyAttr || contains(items, oldItems[pos])) {
            move.apply(tag, [root, tags[i], isVirtual]);
            // move the old tag instance
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            // move the old item
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
          }

          // update the position attribute if it exists
          if (expr.pos) { tag[expr.pos] = i; }

          // if the loop tags are not custom
          // we need to move all their custom tags into the right position
          if (!child && tag.tags) { moveNestedTags.call(tag, i); }
        }

        // cache the original item to use it in the events bound to this node
        // and its children
        extend(tag.__, {
          item: item,
          index: i,
          parent: parent
        });

        tmpItems[i] = itemId;

        if (!mustCreate) { tag.update(item); }
      });

      // remove the redundant tags
      unmountRedundant(items, tags, filteredItemsCount);

      // clone the items array
      oldItems = tmpItems.slice();

      root.insertBefore(frag, placeholder);
    };

    expr.unmount = function () {
      each(tags, function (t) { t.unmount(); });
    };

    return expr
  }

  var RefExpr = {
    init: function init(dom, parent, attrName, attrValue) {
      this.dom = dom;
      this.attr = attrName;
      this.rawValue = attrValue;
      this.parent = parent;
      this.hasExp = tmpl.hasExpr(attrValue);
      return this
    },
    update: function update() {
      var old = this.value;
      var customParent = this.parent && getImmediateCustomParent(this.parent);
      // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
      var tagOrDom = this.dom.__ref || this.tag || this.dom;

      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;

      // the name changed, so we need to remove it from the old key (if present)
      if (!isBlank(old) && customParent) { arrayishRemove(customParent.refs, old, tagOrDom); }
      if (!isBlank(this.value) && isString(this.value)) {
        // add it to the refs of parent tag (this behavior was changed >=3.0)
        if (customParent) { arrayishAdd(
          customParent.refs,
          this.value,
          tagOrDom,
          // use an array if it's a looped node and the ref is not an expression
          null,
          this.parent.__.index
        ); }

        if (this.value !== old) {
          setAttribute(this.dom, this.attr, this.value);
        }
      } else {
        removeAttribute(this.dom, this.attr);
      }

      // cache the ref bound to this dom node
      // to reuse it in future (see also #2329)
      if (!this.dom.__ref) { this.dom.__ref = tagOrDom; }
    },
    unmount: function unmount() {
      var tagOrDom = this.tag || this.dom;
      var customParent = this.parent && getImmediateCustomParent(this.parent);
      if (!isBlank(this.value) && customParent)
        { arrayishRemove(customParent.refs, this.value, tagOrDom); }
    }
  };

  /**
   * Create a new ref directive
   * @param   { HTMLElement } dom - dom node having the ref attribute
   * @param   { Tag } context - tag instance where the DOM node is located
   * @param   { String } attrName - either 'ref' or 'data-ref'
   * @param   { String } attrValue - value of the ref attribute
   * @returns { RefExpr } a new RefExpr object
   */
  function createRefDirective(dom, tag, attrName, attrValue) {
    return create(RefExpr).init(dom, tag, attrName, attrValue)
  }

  /**
   * Trigger the unmount method on all the expressions
   * @param   { Array } expressions - DOM expressions
   */
  function unmountAll(expressions) {
    each(expressions, function (expr) {
      if (expr.unmount) { expr.unmount(true); }
      else if (expr.tagName) { expr.tag.unmount(true); }
      else if (expr.unmount) { expr.unmount(); }
    });
  }

  var IfExpr = {
    init: function init(dom, tag, expr) {
      removeAttribute(dom, CONDITIONAL_DIRECTIVE);
      extend(this, { tag: tag, expr: expr, stub: createDOMPlaceholder(), pristine: dom });
      var p = dom.parentNode;
      p.insertBefore(this.stub, dom);
      p.removeChild(dom);

      return this
    },
    update: function update$$1() {
      this.value = tmpl(this.expr, this.tag);

      if (!this.stub.parentNode) { return }

      if (this.value && !this.current) { // insert
        this.current = this.pristine.cloneNode(true);
        this.stub.parentNode.insertBefore(this.current, this.stub);
        this.expressions = parseExpressions.apply(this.tag, [this.current, true]);
      } else if (!this.value && this.current) { // remove
        this.unmount();
        this.current = null;
        this.expressions = [];
      }

      if (this.value) { update.call(this.tag, this.expressions); }
    },
    unmount: function unmount() {
      if (this.current) {
        if (this.current._tag) {
          this.current._tag.unmount();
        } else if (this.current.parentNode) {
          this.current.parentNode.removeChild(this.current);
        }
      }

      unmountAll(this.expressions || []);
    }
  };

  /**
   * Create a new if directive
   * @param   { HTMLElement } dom - if root dom node
   * @param   { Tag } context - tag instance where the DOM node is located
   * @param   { String } attr - if expression
   * @returns { IFExpr } a new IfExpr object
   */
  function createIfDirective(dom, tag, attr) {
    return create(IfExpr).init(dom, tag, attr)
  }

  /**
   * Walk the tag DOM to detect the expressions to evaluate
   * @this Tag
   * @param   { HTMLElement } root - root tag where we will start digging the expressions
   * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
   * @returns { Array } all the expressions found
   */
  function parseExpressions(root, mustIncludeRoot) {
    var this$1 = this;

    var expressions = [];

    walkNodes(root, function (dom) {
      var type = dom.nodeType;
      var attr;
      var tagImpl;

      if (!mustIncludeRoot && dom === root) { return }

      // text node
      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))
        { expressions.push({dom: dom, expr: dom.nodeValue}); }

      if (type !== 1) { return }

      var isVirtual = dom.tagName === 'VIRTUAL';

      // loop. each does it's own thing (for now)
      if (attr = getAttribute(dom, LOOP_DIRECTIVE)) {
        if(isVirtual) { setAttribute(dom, 'loopVirtual', true); } // ignore here, handled in _each
        expressions.push(_each(dom, this$1, attr));
        return false
      }

      // if-attrs become the new parent. Any following expressions (either on the current
      // element, or below it) become children of this expression.
      if (attr = getAttribute(dom, CONDITIONAL_DIRECTIVE)) {
        expressions.push(createIfDirective(dom, this$1, attr));
        return false
      }

      if (attr = getAttribute(dom, IS_DIRECTIVE)) {
        if (tmpl.hasExpr(attr)) {
          expressions.push({
            isRtag: true,
            expr: attr,
            dom: dom,
            attrs: [].slice.call(dom.attributes)
          });

          return false
        }
      }

      // if this is a tag, stop traversing here.
      // we ignore the root, since parseExpressions is called while we're mounting that root
      tagImpl = get(dom);

      if(isVirtual) {
        if(getAttribute(dom, 'virtualized')) {dom.parentElement.removeChild(dom); } // tag created, remove from dom
        if(!tagImpl && !getAttribute(dom, 'virtualized') && !getAttribute(dom, 'loopVirtual'))  // ok to create virtual tag
          { tagImpl = { tmpl: dom.outerHTML }; }
      }

      if (tagImpl && (dom !== root || mustIncludeRoot)) {
        var hasIsDirective = getAttribute(dom, IS_DIRECTIVE);
        if(isVirtual && !hasIsDirective) { // handled in update
          // can not remove attribute like directives
          // so flag for removal after creation to prevent maximum stack error
          setAttribute(dom, 'virtualized', true);
          var tag = createTag(
            {tmpl: dom.outerHTML},
            {root: dom, parent: this$1},
            dom.innerHTML
          );

          expressions.push(tag); // no return, anonymous tag, keep parsing
        } else {
          if (hasIsDirective && isVirtual)
            { warn(("Virtual tags shouldn't be used together with the \"" + IS_DIRECTIVE + "\" attribute - https://github.com/riot/riot/issues/2511")); }

          expressions.push(
            initChild(
              tagImpl,
              {
                root: dom,
                parent: this$1
              },
              dom.innerHTML,
              this$1
            )
          );
          return false
        }
      }

      // attribute expressions
      parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {
        if (!expr) { return }
        expressions.push(expr);
      }]);
    });

    return expressions
  }

  /**
   * Calls `fn` for every attribute on an element. If that attr has an expression,
   * it is also passed to fn.
   * @this Tag
   * @param   { HTMLElement } dom - dom node to parse
   * @param   { Array } attrs - array of attributes
   * @param   { Function } fn - callback to exec on any iteration
   */
  function parseAttributes(dom, attrs, fn) {
    var this$1 = this;

    each(attrs, function (attr) {
      if (!attr) { return false }

      var name = attr.name;
      var bool = isBoolAttr(name);
      var expr;

      if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {
        expr =  createRefDirective(dom, this$1, name, attr.value);
      } else if (tmpl.hasExpr(attr.value)) {
        expr = {dom: dom, expr: attr.value, attr: name, bool: bool};
      }

      fn(attr, expr);
    });
  }

  /**
   * Manage the mount state of a tag triggering also the observable events
   * @this Tag
   * @param { Boolean } value - ..of the isMounted flag
   */
  function setMountState(value) {
    var ref = this.__;
    var isAnonymous = ref.isAnonymous;
    var skipAnonymous = ref.skipAnonymous;

    define(this, 'isMounted', value);

    if (!isAnonymous || !skipAnonymous) {
      if (value) { this.trigger('mount'); }
      else {
        this.trigger('unmount');
        this.off('*');
        this.__.wasCreated = false;
      }
    }
  }

  /**
   * Mount the current tag instance
   * @returns { Tag } the current tag instance
   */
  function componentMount(tag$$1, dom, expressions, opts) {
    var __ = tag$$1.__;
    var root = __.root;
    root._tag = tag$$1; // keep a reference to the tag just created

    // Read all the attrs on this instance. This give us the info we need for updateOpts
    parseAttributes.apply(__.parent, [root, root.attributes, function (attr, expr) {
      if (!__.isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = tag$$1; }
      attr.expr = expr;
      __.instAttrs.push(attr);
    }]);

    // update the root adding custom attributes coming from the compiler
    walkAttributes(__.impl.attrs, function (k, v) { __.implAttrs.push({name: k, value: v}); });
    parseAttributes.apply(tag$$1, [root, __.implAttrs, function (attr, expr) {
      if (expr) { expressions.push(expr); }
      else { setAttribute(root, attr.name, attr.value); }
    }]);

    // initialiation
    updateOpts.apply(tag$$1, [__.isLoop, __.parent, __.isAnonymous, opts, __.instAttrs]);

    // add global mixins
    var globalMixin = mixin(GLOBAL_MIXIN);

    if (globalMixin && !__.skipAnonymous) {
      for (var i in globalMixin) {
        if (globalMixin.hasOwnProperty(i)) {
          tag$$1.mixin(globalMixin[i]);
        }
      }
    }

    if (__.impl.fn) { __.impl.fn.call(tag$$1, opts); }

    if (!__.skipAnonymous) { tag$$1.trigger('before-mount'); }

    // parse layout after init. fn may calculate args for nested custom tags
    each(parseExpressions.apply(tag$$1, [dom, __.isAnonymous]), function (e) { return expressions.push(e); });

    tag$$1.update(__.item);

    if (!__.isAnonymous && !__.isInline) {
      while (dom.firstChild) { root.appendChild(dom.firstChild); }
    }

    define(tag$$1, 'root', root);

    // if we need to wait that the parent "mount" or "updated" event gets triggered
    if (!__.skipAnonymous && tag$$1.parent) {
      var p = getImmediateCustomParent(tag$$1.parent);
      p.one(!p.isMounted ? 'mount' : 'updated', function () {
        setMountState.call(tag$$1, true);
      });
    } else {
      // otherwise it's not a child tag we can trigger its mount event
      setMountState.call(tag$$1, true);
    }

    tag$$1.__.wasCreated = true;

    return tag$$1
  }

  /**
   * Unmount the tag instance
   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
   * @returns { Tag } the current tag instance
   */
  function tagUnmount(tag, mustKeepRoot, expressions) {
    var __ = tag.__;
    var root = __.root;
    var tagIndex = __TAGS_CACHE.indexOf(tag);
    var p = root.parentNode;

    if (!__.skipAnonymous) { tag.trigger('before-unmount'); }

    // clear all attributes coming from the mounted tag
    walkAttributes(__.impl.attrs, function (name) {
      if (startsWith(name, ATTRS_PREFIX))
        { name = name.slice(ATTRS_PREFIX.length); }

      removeAttribute(root, name);
    });

    // remove all the event listeners
    tag.__.listeners.forEach(function (dom) {
      Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {
        dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);
      });
    });

    // remove tag instance from the global tags cache collection
    if (tagIndex !== -1) { __TAGS_CACHE.splice(tagIndex, 1); }

    // clean up the parent tags object
    if (__.parent && !__.isAnonymous) {
      var ptag = getImmediateCustomParent(__.parent);

      if (__.isVirtual) {
        Object
          .keys(tag.tags)
          .forEach(function (tagName) { return arrayishRemove(ptag.tags, tagName, tag.tags[tagName]); });
      } else {
        arrayishRemove(ptag.tags, __.tagName, tag);
      }
    }

    // unmount all the virtual directives
    if (tag.__.virts) {
      each(tag.__.virts, function (v) {
        if (v.parentNode) { v.parentNode.removeChild(v); }
      });
    }

    // allow expressions to unmount themselves
    unmountAll(expressions);
    each(__.instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });

    // clear the tag html if it's necessary
    if (mustKeepRoot) { setInnerHTML(root, ''); }
    // otherwise detach the root tag from the DOM
    else if (p) { p.removeChild(root); }

    // custom internal unmount function to avoid relying on the observable
    if (__.onUnmount) { __.onUnmount(); }

    // weird fix for a weird edge case #2409 and #2436
    // some users might use your software not as you've expected
    // so I need to add these dirty hacks to mitigate unexpected issues
    if (!tag.isMounted) { setMountState.call(tag, true); }

    setMountState.call(tag, false);

    delete root._tag;

    return tag
  }

  /**
   * Tag creation factory function
   * @constructor
   * @param { Object } impl - it contains the tag template, and logic
   * @param { Object } conf - tag options
   * @param { String } innerHTML - html that eventually we need to inject in the tag
   */
  function createTag(impl, conf, innerHTML) {
    if ( impl === void 0 ) impl = {};
    if ( conf === void 0 ) conf = {};

    var tag = conf.context || {};
    var opts = conf.opts || {};
    var parent = conf.parent;
    var isLoop = conf.isLoop;
    var isAnonymous = !!conf.isAnonymous;
    var skipAnonymous = settings.skipAnonymousTags && isAnonymous;
    var item = conf.item;
    // available only for the looped nodes
    var index = conf.index;
    // All attributes on the Tag when it's first parsed
    var instAttrs = [];
    // expressions on this type of Tag
    var implAttrs = [];
    var tmpl = impl.tmpl;
    var expressions = [];
    var root = conf.root;
    var tagName = conf.tagName || getName(root);
    var isVirtual = tagName === 'virtual';
    var isInline = !isVirtual && !tmpl;
    var dom;

    if (isInline || isLoop && isAnonymous) {
      dom = root;
    } else {
      if (!isVirtual) { root.innerHTML = ''; }
      dom = mkdom(tmpl, innerHTML, isSvg(root));
    }

    // make this tag observable
    if (!skipAnonymous) { observable(tag); }

    // only call unmount if we have a valid __TAG_IMPL (has name property)
    if (impl.name && root._tag) { root._tag.unmount(true); }

    define(tag, '__', {
      impl: impl,
      root: root,
      skipAnonymous: skipAnonymous,
      implAttrs: implAttrs,
      isAnonymous: isAnonymous,
      instAttrs: instAttrs,
      innerHTML: innerHTML,
      tagName: tagName,
      index: index,
      isLoop: isLoop,
      isInline: isInline,
      item: item,
      parent: parent,
      // tags having event listeners
      // it would be better to use weak maps here but we can not introduce breaking changes now
      listeners: [],
      // these vars will be needed only for the virtual tags
      virts: [],
      wasCreated: false,
      tail: null,
      head: null
    });

    // tag protected properties
    return [
      ['isMounted', false],
      // create a unique id to this tag
      // it could be handy to use it also to improve the virtual dom rendering speed
      ['_riot_id', uid()],
      ['root', root],
      ['opts', opts, { writable: true, enumerable: true }],
      ['parent', parent || null],
      // protect the "tags" and "refs" property from being overridden
      ['tags', {}],
      ['refs', {}],
      ['update', function (data) { return componentUpdate(tag, data, expressions); }],
      ['mixin', function () {
        var mixins = [], len = arguments.length;
        while ( len-- ) mixins[ len ] = arguments[ len ];

        return componentMixin.apply(void 0, [ tag ].concat( mixins ));
    }],
      ['mount', function () { return componentMount(tag, dom, expressions, opts); }],
      ['unmount', function (mustKeepRoot) { return tagUnmount(tag, mustKeepRoot, expressions); }]
    ].reduce(function (acc, ref) {
      var key = ref[0];
      var value = ref[1];
      var opts = ref[2];

      define(tag, key, value, opts);
      return acc
    }, extend(tag, item))
  }

  /**
   * Mount a tag creating new Tag instance
   * @param   { Object } root - dom node where the tag will be mounted
   * @param   { String } tagName - name of the riot tag we want to mount
   * @param   { Object } opts - options to pass to the Tag instance
   * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
   * @returns { Tag } a new Tag instance
   */
  function mount$1(root, tagName, opts, ctx) {
    var impl = __TAG_IMPL[tagName];
    var implClass = __TAG_IMPL[tagName].class;
    var context = ctx || (implClass ? create(implClass.prototype) : {});
    // cache the inner HTML to fix #855
    var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
    var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });
    var tag;

    if (impl && root) { tag = createTag(impl, conf, innerHTML); }

    if (tag && tag.mount) {
      tag.mount(true);
      // add this tag to the virtualDom variable
      if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }
    }

    return tag
  }



  var tags = /*#__PURE__*/Object.freeze({
    arrayishAdd: arrayishAdd,
    getTagName: getName,
    inheritParentProps: inheritParentProps,
    mountTo: mount$1,
    selectTags: query,
    arrayishRemove: arrayishRemove,
    getTag: get,
    initChildTag: initChild,
    moveChildTag: moveChild,
    makeReplaceVirtual: makeReplaceVirtual,
    getImmediateCustomParentTag: getImmediateCustomParent,
    makeVirtual: makeVirtual,
    moveVirtual: moveVirtual,
    unmountAll: unmountAll,
    createIfDirective: createIfDirective,
    createRefDirective: createRefDirective
  });

  /**
   * Riot public api
   */
  var settings$1 = settings;
  var util = {
    tmpl: tmpl,
    brackets: brackets,
    styleManager: styleManager,
    vdom: __TAGS_CACHE,
    styleNode: styleManager.styleNode,
    // export the riot internal utils as well
    dom: dom,
    check: check,
    misc: misc,
    tags: tags
  };

  // export the core props/methods
  var Tag$1 = Tag;
  var tag$1 = tag;
  var tag2$1 = tag2;
  var mount$2 = mount;
  var mixin$1 = mixin;
  var update$2 = update$1;
  var unregister$1 = unregister;
  var version$1 = version;
  var observable$1 = observable;

  var riot$1 = extend({}, core, {
    observable: observable,
    settings: settings$1,
    util: util,
  });

  exports.settings = settings$1;
  exports.util = util;
  exports.Tag = Tag$1;
  exports.tag = tag$1;
  exports.tag2 = tag2$1;
  exports.mount = mount$2;
  exports.mixin = mixin$1;
  exports.update = update$2;
  exports.unregister = unregister$1;
  exports.version = version$1;
  exports.observable = observable$1;
  exports.default = riot$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "../components/about.tag":
/*!*******************************!*\
  !*** ../components/about.tag ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "../../node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webp */ "../components/webp.tag");
/* harmony import */ var _webp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webp__WEBPACK_IMPORTED_MODULE_1__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    

riot.tag2('about', '<div class="about-img pure-u-sm-1-4 pure-u-1-2"> <div class="face-wrapper pure-u-1-2"> <img src="resources/icon-pvcresin.svg"> </div> </div> <div class="pure-u-sm-1-24 pure-u-1-1"></div> <div class="about-text pure-u-sm-17-24 pure-u-1-1"> Web Frontend が好きなエンジニア。<br> 学生時代はインタラクション（HCI）を専攻し、主にモバイル / ウェアラブルデバイスに関する研究を行う。<br> 人と意見を交換し、議論しながらモノ作りがしたい。<br> 新しいものが好きなので、貪欲に学んでいく。 <ul> <li class="pure-g"> <div class="icon pure-u-1-12 pure-u-lg-1-24"> <i class="fa fa-birthday-cake" aria-hidden="true"></i> </div> <div class="right pure-u-11-12">{birthday} (Age: {age})</div> </li> <li class="pure-g"> <div class="icon pure-u-1-12 pure-u-lg-1-24"> <i class="fa fa-envelope" aria-hidden="true"></i> </div> <div class="right pure-u-11-12">pvcresin0730@gmail.com</div> </li> <li class="pure-g"> <div class="icon pure-u-1-12 pure-u-lg-1-24"> <i class="fa fa-map-marker-alt" aria-hidden="true"></i> </div> <div class="right pure-u-11-12">Omotesando, Tokyo</div> </li> <li class="pure-g"> <div class="icon pure-u-1-12 pure-u-lg-1-24"> <i class="fa fa-suitcase" aria-hidden="true"></i> </div> <div class="right pure-u-11-12"> <span>Frontend Engineer{\' \'}</span> <a class="company" href="https://jp.corp-sansan.com/" target="_blank">@ Sansan</a> </div> </li> </ul> </div>', 'about,[data-is="about"]{ padding: 0.75rem; } about > .about-img,[data-is="about"] > .about-img{ text-align: center; padding: 0.75rem; margin: 0 auto; } about > .about-img .face-wrapper,[data-is="about"] > .about-img .face-wrapper{ position: relative; width: 100%; } about > .about-img .face-wrapper:before,[data-is="about"] > .about-img .face-wrapper:before{ content: \'\'; display: block; padding-top: 100%; } about > .about-img .face-wrapper img,[data-is="about"] > .about-img .face-wrapper img{ position: absolute; top: 0; left: 0; bottom: 0; right: 0; border-radius: 50%; width: 100%; background: gray; } about > .about-text,[data-is="about"] > .about-text{ text-align: justify; display: flex; flex-direction: column; justify-content: center; padding: 0.75rem; font-size: 1.1rem; } about > .about-text ul li,[data-is="about"] > .about-text ul li{ display: flex; margin-top: 0.5rem; } about > .about-text ul li .icon,[data-is="about"] > .about-text ul li .icon{ display: flex; justify-content: center; align-items: baseline; font-size: 1.5rem; } about > .about-text ul li .right,[data-is="about"] > .about-text ul li .right{ display: flex; align-items: center; padding-left: 0.5rem; } about > .about-text ul li .right a,[data-is="about"] > .about-text ul li .right a{ color: #4e9adb; } about > .about-text ul li .right a:hover,[data-is="about"] > .about-text ul li .right a:hover{ text-decoration: underline; } about > .about-text ul li .right a.company,[data-is="about"] > .about-text ul li .right a.company{ margin-left: 0.3rem; }', 'class="pure-g"', function(opts) {

    this.birthday = '1994-07-30'
    this.age = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().diff(this.birthday, 'years')
});

    
  

/***/ }),

/***/ "../components/awards.tag":
/*!********************************!*\
  !*** ../components/awards.tag ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "../components/list.tag");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_list__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    
riot.tag2('awards', '<list items="{awards}"></list>', '', '', function(opts) {

		this.awards = [
			{
				date: '2015-05',
				title: 'Cloud n アプリケーションコンテスト',
				texts: [
					'WebRTC賞 受賞',
					'チーム：意識中くらいとして参加',
					'プロジェクト: Ichimonitto',
				],
				link: 'http://www.cloudn-service.com/cam04-deven/decon/tohyo/',
			},
			{
				date: '2017-12',
				title: '信州未来アプリコンテスト0',
				texts: [
					'信越情報通信懇談会会長賞 受賞',
					'チーム：意識中くらいとして参加',
					'プロジェクト: MiddleDrive',
				],
				link: 'https://shinshu-futureapp.net/information/contest/',
			},
			{
				date: '2010-03',
				title: '第182回 HCI研究会',
				texts: [
					'学生奨励賞 受賞',
					'スマートウォッチ向けのソフトウェアキーボードに関する研究（修士論文）',
					'プロジェクト: InvisibleFlick',
				],
				link: 'http://www.sighci.jp/contents/page/news',
			},
		]
});

    
  

/***/ }),

/***/ "../components/clubs.tag":
/*!*******************************!*\
  !*** ../components/clubs.tag ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "../components/list.tag");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_list__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    
riot.tag2('clubs', '<list items="{clubs}"></list>', '', '', function(opts) {

		this.clubs = [
			{
				date: '2013-04 - 2017-03',
				title: '総合コンテンツ制作サークル',
				texts: [
					'デジタルコンテンツ制作（音楽・動画・ゲーム・イラスト・文芸）を行う大学内のサークル',
					'同人イベントでの頒布（コミックマーケット・M3）',
					'設立メンバー＆幹事長',
				],
				link: 'https://sokon.jp/',
			},
			{
				date: '2016-04 - 2017-06',
				title: 'Nakano Computer Club',
				texts: [
					'プログラミングに関する情報共有や勉強会の実施を行う大学内のサークル',
					'同人イベントでの頒布（コミックマーケット・技術書典）',
				],
				link: 'https://meiji-ncc.tech/',
			},
			{
				date: '2017-04 - 2019-03',
				title: 'fumble waals',
				texts: [
					'オリジナルボードゲームの制作を行う有志によるサークル',
					'同人イベントでの頒布（コミックマーケット・ゲームマーケット）',
					'企画から制作、販売まで行うが、主にデザインを担当',
				],
				link: 'http://fumblewaals.com/',
			},
		]
});

    
  

/***/ }),

/***/ "../components/education.tag":
/*!***********************************!*\
  !*** ../components/education.tag ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "../components/list.tag");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_list__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    
riot.tag2('education', '<h2 class="section-title">Education</h2> <list items="{schools}"></list>', '', '', function(opts) {

		this.schools = [
			{
				date: '2010-04 - 2013-03',
				title: '本郷高等学校',
				texts: ['東京・巣鴨にある私立の中高一貫校', '生徒会・料理研究会・美術部に所属'],
				link: 'http://www.hongo.ed.jp/',
			},
			{
				date: '2013-04 - 2017-03',
				title: '明治大学',
				texts: [
					'総合数理学部 先端メディアサイエンス学科 1期生',
					'PCでコンテンツ制作をするサークルを立ち上げ、幹事長を務める',
				],
				link: 'http://www.meiji.ac.jp/ims/subject/fms/',
			},
			{
				date: '2017-04 - 2019-03',
				title: '明治大学大学院',
				texts: [
					'先端数理科学研究科 先端メディアサイエンス専攻 修士（工学）',
					'モバイル / ウェアラブルデバイスに関するインタラクションの研究',
					'アルバイトでフロントエンドエンジニアとして働く',
				],
				link: 'http://www.meiji.ac.jp/ams/professor/FMS.html',
			},
		]
});

    
  

/***/ }),

/***/ "../components/first.tag":
/*!*******************************!*\
  !*** ../components/first.tag ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social */ "../components/social.tag");
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_social__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    
riot.tag2('first', '<nav></nav> <div class="container"> <h1>Raika Toriyama</h1> <p>Web / Android Developer</p> <social></social> </div> <div class="container"> <div class="arrow"> <i class="fas fa-chevron-down fa-3x"></i> </div> </div>', 'first,[data-is="first"]{ text-align: center; background: #1a1819; color: white; min-height: 100vh; display: flex; flex-direction: column; justify-content: space-around; } first > nav,[data-is="first"] > nav{ margin: 0 auto; width: 100%; max-width: calc(1200px * 0.8); line-height: 3rem; } first > nav > ul,[data-is="first"] > nav > ul{ display: flex; justify-content: space-around; } first > nav > ul > li,[data-is="first"] > nav > ul > li{ display: inline-block; } first > .container > h1,[data-is="first"] > .container > h1{ font-size: calc(1rem + 250%); margin: 0; } first > .container > p,[data-is="first"] > .container > p{ font-size: 1.5rem; font-family: serif; margin-top: 1rem; } first > .container .arrow,[data-is="first"] > .container .arrow{ display: inline-block; } @media (max-width: 768px) { first .container > h1,[data-is="first"] .container > h1{ font-size: 2.5rem; } first .container > p,[data-is="first"] .container > p{ font-size: 1.2rem; margin-top: 0.5rem; } }', '', function(opts) {
});

    
  

/***/ }),

/***/ "../components/footer.tag":
/*!********************************!*\
  !*** ../components/footer.tag ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "../../node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social */ "../components/social.tag");
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social__WEBPACK_IMPORTED_MODULE_1__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    

riot.tag2('footer', '<div class="container"> <social></social> <p>© {year} pvcresin</p> </div>', 'footer,[data-is="footer"]{ display: block; background: #0f0f0f; color: white; } footer > .container,[data-is="footer"] > .container{ text-align: center; padding: 1rem 0; } footer > .container > p,[data-is="footer"] > .container > p{ color: #525252; padding-bottom: 1rem; }', '', function(opts) {

		this.year = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY')
});

    
  

/***/ }),

/***/ "../components/like.tag":
/*!******************************!*\
  !*** ../components/like.tag ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('like', '<h2 class="section-title">Like</h2> <div class="pure-g"> <div class="like-box pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3"> <div class="like"> <h3>Do</h3> <hr> <ul> <li each="{t, i in do}"> {l} <span class="icon">{i}</span> <span class="text">{t}</span> </li> </ul> </div> </div> <div class="like-box pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3"> <div class="like"> <h3>Watch</h3> <hr> <ul> <li each="{t, i in watch}"> <span class="icon">{i}</span> <span class="text">{t}</span> </li> </ul> </div> </div> <div class="like-box pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3"> <div class="like"> <h3>Eat</h3> <hr> <ul> <li each="{t, i in eat}"> <span class="icon">{i}</span> <span class="text">{t}</span> </li> </ul> </div> </div> </div>', 'like,[data-is="like"]{ display: block; } like > div,[data-is="like"] > div{ padding: 0.75rem; } like > div .like-box,[data-is="like"] > div .like-box{ padding: 0.75rem; } like > div .like-box .like,[data-is="like"] > div .like-box .like{ background: #414141; padding: 0.6rem 1rem; border-radius: 0.3rem; } like > div .like-box .like h3,[data-is="like"] > div .like-box .like h3{ font-size: 1.4rem; margin-bottom: 0.5rem; } like > div .like-box .like hr,[data-is="like"] > div .like-box .like hr{ border-radius: 1rem; margin: 0.5rem 0; border: 1.5px solid; border-color: grey; background: gray; } like > div .like-box .like ul li,[data-is="like"] > div .like-box .like ul li{ line-height: 2rem; } like > div .like-box .like ul li .icon,[data-is="like"] > div .like-box .like ul li .icon{ font-size: 1.4rem; width: 2rem; display: inline-flex; justify-content: center; } like > div .like-box .like ul li .text,[data-is="like"] > div .like-box .like ul li .text{ font-size: 1.2rem; }', '', function(opts) {
		this.do = {
			'💻': 'プログラミング',
			'👟': '散歩',
			'🎤': '一人カラオケ',
			'🚗': 'ミニチュア集め',
		}

		this.watch = {
			'🎬': '映画',
			'😆': 'お笑いネタ',
			'👖': '服',
			'📺': 'メディアアート',
		}

		this.eat = {
			'🍣': '寿司',
			'🍕': 'ピザ',
			'🍜': 'ラーメン',
			'🍰': 'ケーキ',
		}
});

    
  

/***/ }),

/***/ "../components/list.tag":
/*!******************************!*\
  !*** ../components/list.tag ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('list', '<ul> <li each="{item in opts.items}"> <h3> <a href="{item.link}" target="_blank">{item.title}</a> <div class="right"> <hr> <span> <span class="date" if="{item.date.length &lt;= 7}">{item.date}</span> <span class="term" if="{item.date.length &gt; 7}">{item.date}</span> </span> </div> </h3> <p class="sub" each="{t in item.texts}">{t}</p> </li> </ul>', 'list > ul,[data-is="list"] > ul{ padding: 0.75rem; } list > ul li,[data-is="list"] > ul li{ margin-bottom: 1rem; } list > ul li h3,[data-is="list"] > ul li h3{ display: flex; margin: auto; align-items: center; } list > ul li h3 a,[data-is="list"] > ul li h3 a{ color: #4e9adb; padding: 0.75rem; text-align: justify; } list > ul li h3 a:hover,[data-is="list"] > ul li h3 a:hover{ text-decoration: underline; } list > ul li h3 .right,[data-is="list"] > ul li h3 .right{ display: inline-flex; flex-grow: 1; align-items: center; } list > ul li h3 .right hr,[data-is="list"] > ul li h3 .right hr{ display: inline-flex; flex-grow: 1; border: 1.5px solid gray; border-radius: 1rem; min-width: 1rem; background: gray; } list > ul li h3 .right span,[data-is="list"] > ul li h3 .right span{ padding: 0.75rem; display: inline-flex; } list > ul li h3 .right span span,[data-is="list"] > ul li h3 .right span span{ background: #555; color: white; padding: 0.1rem 0.3rem; border-radius: 0.3rem; display: inline-block; text-align: center; font-size: 0.8rem; font-weight: normal; } list > ul li h3 .right span span.date,[data-is="list"] > ul li h3 .right span span.date{ min-width: 4rem; } list > ul li h3 .right span span.term,[data-is="list"] > ul li h3 .right span span.term{ min-width: 8rem; } list > ul li .sub,[data-is="list"] > ul li .sub{ color: #bdbdbd; padding: 0 0.75rem; font-weight: 300; text-align: justify; }', 'class="pure-g pure-u-1-1"', function(opts) {
});

    
  

/***/ }),

/***/ "../components/more.tag":
/*!******************************!*\
  !*** ../components/more.tag ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('more', '<a href="{opts.link}" title="{opts.title}"> <span class="more-button">{text}</span> </a>', 'more,[data-is="more"]{ padding: 0 1.5rem 1.5rem 1.5rem; display: flex; justify-content: center; } more > a > span,[data-is="more"] > a > span{ padding: 0.5rem; background: grey; color: white; border-radius: 3rem; min-width: 10rem; text-align: center; display: block; } more > a > span:hover,[data-is="more"] > a > span:hover{ background: #a3a3a3; }', '', function(opts) {
		this.text = this.opts.text !== undefined ? this.opts.text : 'more'
});

    
  

/***/ }),

/***/ "../components/projects.tag":
/*!**********************************!*\
  !*** ../components/projects.tag ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "../data.js");
/* harmony import */ var _webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webp */ "../components/webp.tag");
/* harmony import */ var _webp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webp__WEBPACK_IMPORTED_MODULE_1__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    

riot.tag2('projects', '<div class="pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1" each="{w, i in projects}"> <div class="card"> <a href="#projects/{w.name.replace(/ /g, `_`)}"> <div class="wrapper"> <webp class="thumbnail" riot-src="{w.img}"></webp> </div> <div class="content"> <h4>{w.name}</h4> <p>{w.sub}</p> </div> </a> </div> </div>', 'projects,[data-is="projects"]{ padding: 0.75rem; display: flex; flex-wrap: wrap; } projects > div,[data-is="projects"] > div{ padding: 0.75rem; } projects > div > .card,[data-is="projects"] > div > .card{ cursor: pointer; background: white; height: 100%; box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1); border-radius: 0.3rem; } projects > div > .card:hover,[data-is="projects"] > div > .card:hover{ box-shadow: 0 8px 10px rgba(10, 10, 10, 0.1), 0 0 6px 4px rgba(10, 10, 10, 0.1); } projects > div > .card > a > .wrapper,[data-is="projects"] > div > .card > a > .wrapper{ position: relative; width: 100%; } projects > div > .card > a > .wrapper:before,[data-is="projects"] > div > .card > a > .wrapper:before{ content: \'\'; display: block; padding-top: 56.25%; } projects > div > .card > a > .wrapper img,[data-is="projects"] > div > .card > a > .wrapper img{ position: absolute; top: 0; left: 0; border-radius: 0.3rem 0.3rem 0 0; display: block; width: 100%; background: #ddd; border-bottom: 1px solid #ddd; } projects > div > .card > a > .content,[data-is="projects"] > div > .card > a > .content{ padding: 0.8rem 1rem; } projects > div > .card > a > .content h4,[data-is="projects"] > div > .card > a > .content h4{ font-size: 1.2rem; margin-bottom: 0.3rem; } projects > div > .card > a > .content p,[data-is="projects"] > div > .card > a > .content p{ font-size: 0.9rem; }', '', function(opts) {

		this.category = 'All'
		this.projects =
			this.opts.limit === undefined ? _data__WEBPACK_IMPORTED_MODULE_0__["default"] : _data__WEBPACK_IMPORTED_MODULE_0__["default"].slice(0, this.opts.limit)

		this.on('updated', () => {

			if (this.opts.category && this.opts.category !== this.category) {
				this.update({
					category: this.opts.category,
					projects:
						this.opts.category === 'All'
							? _data__WEBPACK_IMPORTED_MODULE_0__["default"]
							: _data__WEBPACK_IMPORTED_MODULE_0__["default"].filter((p) => p.category === this.opts.category),
				})
			}
		})
});

    
  

/***/ }),

/***/ "../components/publications.tag":
/*!**************************************!*\
  !*** ../components/publications.tag ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "../components/list.tag");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_list__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    
riot.tag2('publications', '<list items="{publications}"></list>', '', '', function(opts) {

		this.publications = [
			{
				date: '2015-12',
				title: 'SensorPipe',
				texts: [
					'鳥山 らいか, 宮下 芳明. SensorPipe: スマートフォン側のプログラミングを一切行わないスマートフォン連携プログラミング, 第23回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2015), 2015.',
				],
				link: 'https://research.miyashita.com/2015/D160/',
			},
			{
				date: '2018-03',
				title: 'インタラクティブパッケージ',
				texts: [
					'加藤邦拓, 薄羽大樹, 鳥山らいか, 竹内まゆ, 野崎玲那, 細谷美月, 宮下芳明. タッチパネルを拡張する紙製インタフェースを搭載したインタラクティブパッケージの開発, インタラクション2018論文集, pp.889-894, 2018.',
				],
				link: 'https://research.miyashita.com/2018/D193/',
			},
			{
				date: '2018-09',
				title: '透明キーボード',
				texts: [
					'鳥山らいか, 宮下芳明. スマートウォッチ向けのキートップが透明な日本語かな入力インタフェース, 第26回インタラクティブシステムとソフトウェアに関するワークショップ論文集 (WISS 2018), 2018.',
				],
				link: 'https://research.miyashita.com/papers/D202',
			},
			{
				date: '2019-03',
				title: 'InvisibleFlick',
				texts: [
					'鳥山らいか, 宮下芳明. InvisibleFlick: 小型タッチスクリーン端末におけるキートップが透明な日本語入力キーボード, 研究報告ヒューマンコンピュータインタラクション(HCI), Vol.2019-HCI-182, Issue.27, pp. 1-8, 2019.',
				],
				link: 'https://research.miyashita.com/papers/D218',
			},
		]
});

    
  

/***/ }),

/***/ "../components/skills.tag":
/*!********************************!*\
  !*** ../components/skills.tag ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('skills', '<h2 class="section-title">Skills</h2> <div class="pure-g"> <ul class="skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1"> <li each="{s in skills}"> <div class="skill-info"> <span class="name">{s.name}</span><span class="sub">{s.sub}</span> </div> <div class="bar"> <div class="level" riot-style="width:{s.level};"></div> </div> </li> </ul> <ul class="skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1"> <li each="{s in skills1}"> <div class="skill-info"> <span class="name">{s.name}</span><span class="sub">{s.sub}</span> </div> <div class="bar"> <div class="level" riot-style="width:{s.level};"></div> </div> </li> </ul> <ul class="skill-box pure-u-sm-1-2 pure-u-md-1-3 pure-u-1-1"> <li each="{s in skills2}"> <div class="skill-info"> <span class="name">{s.name}</span><span class="sub">{s.sub}</span> </div> <div class="bar"> <div class="level" riot-style="width:{s.level};"></div> </div> </li> </ul> </div>', 'skills > div,[data-is="skills"] > div{ padding: 0.75rem; } skills > div .skill-box,[data-is="skills"] > div .skill-box{ padding: 0.75rem; } skills > div .skill-box > li,[data-is="skills"] > div .skill-box > li{ margin-bottom: 1.2rem; } skills > div .skill-box > li .skill-info,[data-is="skills"] > div .skill-box > li .skill-info{ display: flex; justify-content: space-between; align-items: baseline; } skills > div .skill-box > li .name,[data-is="skills"] > div .skill-box > li .name{ font-size: 1.3em; margin-right: 0.5rem; font-weight: 300; } skills > div .skill-box > li .sub,[data-is="skills"] > div .skill-box > li .sub{ font-size: 0.85rem; color: #bdbdbd; } skills > div .skill-box > li .bar,[data-is="skills"] > div .skill-box > li .bar{ background: #4b4b4b; border-radius: 1rem; } skills > div .skill-box > li .bar .level,[data-is="skills"] > div .skill-box > li .bar .level{ height: 0.7rem; border-radius: 1rem; background: #eaeaea; }', '', function(opts) {
		this.skills = [
			{
				name: 'Android',
				sub: 'Rx Okhttp Retrofit',
				level: '70%',
			},
			{
				name: 'Kotlin',
				sub: 'Anko Ktor',
				level: '80%',
			},
			{
				name: 'Java',
				sub: '',
				level: '85%',
			},
			{
				name: 'Processing',
				sub: '',
				level: '90%',
			},
		]

		this.skills1 = [
			{
				name: 'HTML',
				sub: 'Pug Markdown',
				level: '90%',
			},
			{
				name: 'CSS',
				sub: 'Sass PostCSS CSS-Modules',
				level: '85%',
			},
			{
				name: 'JavaScript',
				sub: 'React Vue Node',
				level: '90%',
			},
			{
				name: 'PHP',
				sub: '',
				level: '40%',
			},
		]

		this.skills2 = [
			{
				name: 'Git',
				sub: '',
				level: '60%',
			},
			{
				name: 'Illustrator',
				sub: '',
				level: '80%',
			},
			{
				name: 'Cacoo',
				sub: '',
				level: '40%',
			},
			{
				name: 'Prott',
				sub: '',
				level: '30%',
			},
		]
});

    
  

/***/ }),

/***/ "../components/social.tag":
/*!********************************!*\
  !*** ../components/social.tag ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('social', '<ul> <li> <a href="https://www.facebook.com/raika.toriyama" target="_blank" title="Facebook" rel="noopener noreferrer"> <i class="fab fa-facebook-f fa-2x"></i> </a> </li> <li> <a href="https://twitter.com/pvcresin/" target="_blank" title="Twitter" rel="noopener noreferrer"> <i class="fab fa-twitter fa-2x"></i> </a> </li> <li> <a href="https://github.com/pvcresin/" target="_blank" title="GitHub" rel="noopener noreferrer"> <i class="fab fa-github fa-2x"></i> </a> </li> <li> <a href="https://www.instagram.com/pvcresin/" target="_blank" title="Instagram" rel="noopener noreferrer"> <i class="fab fa-instagram fa-2x"></i> </a> </li> <li> <a href="https://pvcresin.hatenablog.com/" target="_blank" title="Hatena Blog" rel="noopener noreferrer"> <div class="icon-box hatena"></div> </a> </li> <li> <a href="https://www.wantedly.com/users/18220619" target="_blank" title="Wantedly" rel="noopener noreferrer"> <div class="icon-box wantedly"></div> </a> </li> </ul>', 'social > ul,[data-is="social"] > ul{ display: flex; justify-content: center; align-items: center; padding: 1rem 0; } social > ul li,[data-is="social"] > ul li{ display: inline-block; } social > ul li a,[data-is="social"] > ul li a{ color: #525252; vertical-align: sub; display: inline-block; width: 3rem; } social > ul li a:hover,[data-is="social"] > ul li a:hover{ color: white; } social > ul li a .icon-box,[data-is="social"] > ul li a .icon-box{ margin: auto; width: 2rem; height: 2rem; background: #525252; } social > ul li a .icon-box:hover,[data-is="social"] > ul li a .icon-box:hover{ background: white; } social > ul li a .icon-box.hatena,[data-is="social"] > ul li a .icon-box.hatena{ mask-image: url(./resources/icon-hatena.svg); -webkit-mask-image: url(./resources/icon-hatena.svg); } social > ul li a .icon-box.wantedly,[data-is="social"] > ul li a .icon-box.wantedly{ mask-image: url(./resources/icon-wantedly.svg); -webkit-mask-image: url(./resources/icon-wantedly.svg); }', 'id="social"', function(opts) {
});

    
  

/***/ }),

/***/ "../components/tags.tag":
/*!******************************!*\
  !*** ../components/tags.tag ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('tags', '<span each="{t in opts.tags}">{t}</span>', 'tags,[data-is="tags"]{ display: flex; flex-wrap: wrap; margin: 1rem 0; margin: 0.75rem 0; } tags > span,[data-is="tags"] > span{ margin: 0 0.5rem 0.5rem 0; padding: 0.1rem 0.3rem; border-radius: 0.2rem; background: #555; color: #eee; }', '', function(opts) {
});

    
  

/***/ }),

/***/ "../components/webp.tag":
/*!******************************!*\
  !*** ../components/webp.tag ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    riot.tag2('webp', '<picture> <source srcset="resources/{opts.src||opts.riotSrc}.webp" type="image/webp"> <source srcset="resources/{opts.src||opts.riotSrc}.png" type="image/png"> <img riot-src="resources/{opts.src||opts.riotSrc}.webp"> </picture>', 'webp,[data-is="webp"]{ display: block; } webp > picture,[data-is="webp"] > picture{ width: 100%; height: 100%; } webp > picture > img,[data-is="webp"] > picture > img{ width: 100%; }', '', function(opts) {
		this.on('mounted', () => {
			console.log(this.opts)
		})
});

    
  

/***/ }),

/***/ "../data.js":
/*!******************!*\
  !*** ../data.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const projectsArray = [
  {
    name: 'SensorPipe',
    sub: 'PCとスマホを連携させるプログラミングを支援するスマホアプリ',
    img: 'project-SensorPipe-16-9',
    category: 'Android',
    video: 'gwKyPqt2kd8',
    text:
      'スマートフォンのセンサ情報とPCを連携させたプログラミングを実現するには双方でのアプリケーション開発が必要となり、製作時間がかかる上にハードルが高いものであった。これを解決するため、スマートフォンの各種センサ情報をPCに送信し続け、PC側からもスマートフォンにバイブレーションやウェブサイト表示などの所定の動作をさせる事ができるアプリケーションを開発した。これにより、プログラマはスマートフォン側のプログラミングを一切行わずに、PCでのセンサ情報を用いたプログラミングを行うことができる。WISS2015で発表。',
    implement:
      'Androidアプリケーションとして実装。PCとスマートフォンを同じWi-Fiに接続後、UDP通信を確立することによってデータの送受信を行う。アプリケーションはバックグラウンドで動作する。PC側で利用するときは対応するProcessing用のライブラリを利用可能。',
    keywords: ['Android', 'Programming Experience(PX)', 'UDP', 'cooperation programming', 'sensor'],
    links: {
      プロジェクトページ: 'https://research.miyashita.com/2015/D160/',
    },
  },
  {
    name: 'MiddleDrive',
    sub: 'Bluetooth通信によるアドホック型ドキュメント共同編集アプリ',
    img: 'project-MiddleDrive-16-9',
    category: 'Web',
    video: 'vPAXrlKGeC8',
    text:
      '会議を行う際にその内容を複数人でウェブ上のドキュメントに書き出すことで記録をとったり、議題の整理をしたりすることが多くある。しかし、Wi-Fiの電波がない場所ではこれらのようなウェブアプリケーションは利用することができない。そこで、Wi-Fiなどのネットワーク環境が利用できない状況でも、リアルタイムに共同編集を行うことができるアプリケーションを開発した。ワイヤレスアドホックネットワークを構築し、ネットワーク内のPCとドキュメントの共同編集を行うことが出来る。',
    implement:
      'チームで制作。フロントエンドとWebサーバを担当した。動作プラットフォームはWindowsPC。BluetoothによってPC同士をペアリングし、双方向のデータ通信を行う。各PC内でWebサーバが起動しているため、通常のウェブアプリケーションと同じようにブラウザでアクセスすることが出来る。Bluetooth通信はC#でwin APIを利用することで実現し、WebサーバはNode.jsを用いて実装している。',
    keywords: ['windows', 'Bluetooth', 'co-authoring', 'CSCW', 'win API', 'Ad-hoc network'],
    links: {
      受賞ページ: 'https://www.pref.nagano.lg.jp/joho/app-contest/app-contest0',
    },
  },
  {
    name: 'InvisibleFlick',
    sub: '小型タッチスクリーン端末におけるキートップが透明な日本語入力キーボード',
    img: 'project-InvisibleFlick-16-9',
    category: 'Android',
    text:
      'スマートウォッチのような小型タッチスクリーン端末向けの日本語入力キーボードは、キーやテキストエリアが狭いため、ミスタップの頻発による文字入力速度の低下を招いている。そこで、テンキー部分のキートップを透明にし、背景にテキストエリアを表示する手法を提案。フリックキーボードとテキストエリアの2層のレイヤー構造の導入により、キーとテキストエリアを同時に拡大することができる。既存手法との比較して、文字入力速度・エラー率ともに優れていることが示された。第182回HCI研究会で発表し、学生奨励賞を受賞。修士論文。',
    implement:
      '実験用システムとして、Androidアプリケーションを実装。Google日本語入力APIを使用して、漢字などの文字変換を行っている。',
    keywords: [
      'Android',
      'Human Computer Interaction',
      'smartwatch',
      'text input',
      'flick-keyboard',
    ],
    links: {
      プロジェクトページ: 'https://research.miyashita.com/papers/D218',
      受賞ページ: 'http://www.sighci.jp/contents/page/news',
      Google日本語入力API: 'https://www.google.co.jp/ime/cgiapi.html',
    },
  },
  {
    name: 'Ichimonitto',
    sub: 'ビデオチャットをしながらクイズ番組形式で回答する一問一答学習支援サービス',
    img: 'project-Ichimonitto-16-9',
    category: 'Web',
    text:
      '英単語を知っていても、正確な発音ができなければ相手には伝わらない。そこで、WebRTCを利用した一問一答形式の学習支援サービスを制作した。カメラ映像とボイスチャットによって離れた場所でも一緒に学ぶことが出来る。画面に表示された単語の英語をいち早く、かつ正確に発音できたものがポイントを獲得する。Cloud n アプリケーションコンテストでWebRTC賞を受賞。',
    implement:
      'チームで制作。フロントエンドを担当。Google Speech APIを使うことで、しっかりと認識されるような正確な発音での回答のみ正解とする点がポイント。現在接続しているユーザなどの管理にSkywayのAPIを利用。',
    keywords: ['Web RTC', 'quiz', 'video chat', 'Google Speech API'],
    links: {
      受賞ページ: 'http://www.cloudn-service.com/cam04-deven/decon/tohyo/',
    },
  },
  {
    name: 'GeoMelody',
    sub: '環境音を録音してネット上に集約するサウンドスケープSNS',
    img: 'project-GeoMelody-16-9',
    category: 'Android',
    text:
      '位置情報と環境音を組み合わせて登録するサービス。風景には音が欠かせないという考え方、サウンドスケープをサービスとして組み込んだ作品。ユーザがスマートフォンで環境音を録音すると、音声をGPSや日付の情報と共にサーバにアップロードし、マップ上で閲覧することが出来る。Open Hack U 2014発表作品。',
    implement:
      'チームで制作。アプリの大部分を担当した。Androidアプリケーションとして実装。Yahoo Map APIを使用して、録音された音声のマッピングを行っている。',
    keywords: ['Android', 'soundscape', 'map', 'record', 'microphone', 'GPS'],
    // https://www.youtube.com/embed/PYXsetGI7G8?rel=0&amp;start=3217
    // https://hacku.yahoo.co.jp/open2014/
  },
  {
    name: 'WristSlide',
    sub: 'イメージセンサを用いた手首を滑らせるスマートウォッチの片手操作',
    img: 'project-WristSlide-16-9',
    category: 'Android',
    video: 'w9eHDKby8ro',
    text:
      'スマートウォッチにおいて、スワイプのような連続的な入力を行うには、装着している手と反対の手で操作する必要がある。そこで、手首を机や壁、自身の身体などの上で滑らせることによって、スマートウォッチを片手で操作する手法を提案。バンド下部に埋め込まれたイメージセンサによって、物体に接地した状態での手首の移動量を取得し、片手での2次元方向の入力を可能にした。',
    implement:
      'Android、Wear OSアプリケーションとして実装。スマートフォンと超小型ワイヤレスマウスをペアリングし、自端末にADBコマンドを発行することによってマウスイベントを監視。スマートフォンとペアリングされたスマートウォッチに移動量を送信してアプリケーションを操作する。',
    keywords: [
      'Android',
      'Wear OS',
      'Android Debug Bridge',
      'Human Computer Interaction',
      'smartwatch',
      'image sensor',
      'mouse',
    ],
  },
  {
    name: 'SoumuSSML',
    sub: '視覚障害者のための新しい電子書籍形式に対応したクラウド編集システム',
    img: 'project-SoumuSSML-16-9',
    category: 'Web',
    text:
      '電子書籍を読む際などに用いられる、OS組み込みの読み上げ機能にはイントネーションの間違いが未だに多く残っている。そのため現在は、音声合成マークアップ言語SSMLを用いてイントネーションを出版社の人間が編集し、合成された音声を電子書籍に同封するというやり方が一般的である。そこで、電子書籍に音声ファイルではなくイントネーションを記したデータを同封する新しい電子書籍フォーマットの提案を行った。同時に、出版社の人間がイントネーションを編集し、音声をその都度確認しながらクラウド上で編集するシステムを構築した。実証実験により効果的なツールと認められ、W3Cによって電子書籍の形式EPUBの次期仕様に盛り込まれた。総務省とアルバイト先の想隆社との共同プロジェクト。',
    implement:
      'チームで制作。フロントエンドを担当した。サーバはPHPで実装。主な機能は以下の通り。電子書籍のアップロードと初期の発音記号の自動生成、編集した発音記号（イントネーションを表す）のバージョン管理とDiff表示、編集した音声をその場で再生、書籍内の文字検索、編集者の編集権限変更、ゲラ（校正用の印刷）の印刷機能とコメントのPDFアップロード、書籍内の画像表示。',
    keywords: ['E-book', 'EPUB', 'SSML', 'W3C', 'co-authoring', 'version control'],
    links: {
      実証実験報告書: 'http://www.soumu.go.jp/main_content/000499711.pdf',
    },
  },
  {
    name: 'BuddaBeautify',
    sub: '己の精神を磨くことで見た目も美しくなれるメディアアート作品',
    img: 'project-BuddaBeautify-16-9',
    category: 'Desktop',
    video: 'X0SrajYh780',
    text:
      'Nam June PaikによるTV-Buddhaにインスパイアを受け、己の精神を磨くことと画像処理による美顔化を組み合わせた作品。カメラとプロジェクタによって作られた擬似的な鏡の前で、ユーザは座禅を行う。身体のブレが少ない時は心の乱れも少ないと判断し、鏡の自分の顔に徐々に美顔化処理を行っていく。体験時間は1分程度。',
    implement:
      'チームで制作。Processingで実装。身体にブレの度合いは動体験知によって数値化する。動体検知の実装を担当。顔の美顔化処理には、関川ら[1]のアルゴリズムを利用。',
    keywords: ['media art', 'motion detection', 'image processing'],
    links: {
      'ε-フィルタを用いたリアルタイム顔画像美観化システム':
        'https://www.ieice.org/iss/jpn/Publications/issposter_2015/data/pdf/ISS-P-78.pdf',
    },
  },
  {
    name: 'Make if',
    sub: 'カードを並べてif文をつくるプログラミング教育カードゲーム',
    img: 'project-Makeif-16-9',
    category: 'Design',
    text:
      'プログラミングをする時に必ず使う「if文」をカードで遊びながら学べるゲーム。テキストエディタを模したプレイマットの上に順番にカードを置いていき、if文が完成すると条件分岐によってカードを引かなくてはならない。早く手札を使い切った人が勝利。プログラミング未経験者でも遊ぶことが可能。2017年にゲームマーケット、及びコミックマーケットにて頒布。',
    implement:
      'アナログゲームサークルfumblewaals（ファンブルワールス）で制作。主にデザインを担当。Adobe Illustratorを使用。',
    keywords: ['programming', 'card game', 'analog game'],
    links: {
      商品詳細ページ: 'http://fumblewaals.com/portfolio/make-if/',
      fumblewaals: 'http://fumblewaals.com',
    },
  },
]

/* harmony default export */ __webpack_exports__["default"] = (projectsArray);


/***/ }),

/***/ "../pages/app.tag":
/*!************************!*\
  !*** ../pages/app.tag ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var riot_route_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! riot-route/lib/tag */ "../../node_modules/riot-route/lib/tag.js");
/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top */ "../pages/top.tag");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "../pages/profile.tag");
/* harmony import */ var _projectAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectAll */ "../pages/projectAll.tag");
/* harmony import */ var _projectDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDetail */ "../pages/projectDetail.tag");
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other */ "../pages/other.tag");

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    





riot.tag2('app', '<router> <route path=""> <top></top> </route> <route path="profile.."> <profile></profile> </route> <route path="projects/*"> <projectdetail></projectDetail> </route> <route path="projects.."> <projectall></projectAll> </route> <route path=".."> <other></other> </route> </router>', '', '', function(opts) {
});

    
  

/***/ }),

/***/ "../pages/other.tag":
/*!**************************!*\
  !*** ../pages/other.tag ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/footer */ "../components/footer.tag");

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    
riot.tag2('other', '<section> <div class="container"> <h1>Page Not Found</h1> </div> </section> <footer></footer>', 'other,[data-is="other"]{ text-align: center; min-height: 100vh; display: flex; flex-direction: column; background: #2b2b2b; color: #efefef; } other section,[data-is="other"] section{ flex-grow: 1; display: flex; align-items: center; }', '', function(opts) {
});

    
  

/***/ }),

/***/ "../pages/profile.tag":
/*!****************************!*\
  !*** ../pages/profile.tag ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/scroll */ "./scroll.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/about */ "../components/about.tag");
/* harmony import */ var _components_education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/education */ "../components/education.tag");
/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/skills */ "../components/skills.tag");
/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_skills__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_like__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/like */ "../components/like.tag");
/* harmony import */ var _components_like__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_like__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "../components/footer.tag");

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    





riot.tag2('profile', '<section> <div class="container"> <h2 class="section-title">Profile</h2> <about></about> <like></like> <skills></skills> <education></education> </div> </section> <footer></footer>', 'profile,[data-is="profile"]{ display: block; background: #2b2b2b; color: #efefef; }', '', function(opts) {

		this.on('route', () => {
			_js_scroll__WEBPACK_IMPORTED_MODULE_0__["default"].move()
		})
});

    
  

/***/ }),

/***/ "../pages/projectAll.tag":
/*!*******************************!*\
  !*** ../pages/projectAll.tag ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var riot_route_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! riot-route/lib/tag */ "../../node_modules/riot-route/lib/tag.js");
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/scroll */ "./scroll.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projects */ "../components/projects.tag");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "../components/footer.tag");

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    



riot.tag2('projectall', '<section> <div class="container"> <h2 class="section-title">Projects</h2> <ul> <a each="{p in categories}" onclick="{click.bind(this, p)}"> <li if="{selectedCategory !== p}">{p}</li> <li class="selected" if="{selectedCategory === p}">{p}</li> </a> </ul> <projects category="{selectedCategory}"></projects> </div> </section> <footer></footer>', 'projectall > section,[data-is="projectall"] > section{ background: #eeeeee; color: #222222; min-height: 100vh; } projectall > section .container ul,[data-is="projectall"] > section .container ul{ display: flex; justify-content: space-between; max-width: 400px; padding: 0 1.5rem; margin: 1rem auto 0 auto; } projectall > section .container ul li,[data-is="projectall"] > section .container ul li{ font-size: 0.8rem; display: inline-block; color: gray; padding: 0.5rem 0.5rem; cursor: pointer; border: 1px solid; border-radius: 2rem; text-align: center; } projectall > section .container ul li.selected,[data-is="projectall"] > section .container ul li.selected{ color: white; background: gray; border-color: gray; }', '', function(opts) {

		this.categories = ['All', 'Android', 'Web', 'Desktop', 'Design']
		this.selectedCategory

		this.on('route', () => {
			if (riot_route_lib_tag__WEBPACK_IMPORTED_MODULE_0__["default"].query().category !== undefined) {
				this.update({ selectedCategory: riot_route_lib_tag__WEBPACK_IMPORTED_MODULE_0__["default"].query().category })
			} else {
				this.update({ selectedCategory: this.categories[0] })
			}

			_js_scroll__WEBPACK_IMPORTED_MODULE_1__["default"].move()
		})

		this.click = function(p) {
			this.update({ selectedCategory: p })
		}.bind(this)
});

    
  

/***/ }),

/***/ "../pages/projectDetail.tag":
/*!**********************************!*\
  !*** ../pages/projectDetail.tag ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "../data.js");
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/scroll */ "./scroll.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tags */ "../components/tags.tag");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tags__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/webp */ "../components/webp.tag");
/* harmony import */ var _components_webp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_webp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "../components/footer.tag");

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    




riot.tag2('projectdetail', '<div class="container"> <section> <div class="video-frame" if="{project.video !== undefined}"> <iframe riot-src="https://www.youtube.com/embed/{project.video}?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen="allowfullscreen"></iframe> </div> <div class="img-frame" if="{project.video === undefined}"> <webp riot-src="{project.img}"></webp> </div> <h1> <p>{project.name + \': \'}</p> <span>{project.sub}</span> </h1> <tags tags="{project.keywords}"></tags> <div class="chapter"> <div class="chapter-title"> <h2>Abstract</h2> <hr> </div> <p>{project.text}</p> </div> <div class="chapter"> <div class="chapter-title"> <h2>Implementation</h2> <hr> </div> <p>{project.implement}</p> </div> <div class="chapter" if="{project.links !== undefined}"> <div class="chapter-title"> <h2>Links</h2> <hr> </div> <ol> <li each="{value, key in project.links}"> <span>{key + \': \'}</span><span><a href="{value}">{value}</a></span> </li> </ol> </div> </section> </div> <footer></footer>', 'projectdetail,[data-is="projectdetail"]{ min-height: 100vh; display: block; background: #2b2b2b; color: #efefef; } projectdetail > div > section,[data-is="projectdetail"] > div > section{ padding: 1.5rem; } projectdetail > div > section .video-frame,[data-is="projectdetail"] > div > section .video-frame{ position: relative; width: 100%; padding-top: 56.25%; } projectdetail > div > section .video-frame > iframe,[data-is="projectdetail"] > div > section .video-frame > iframe{ position: absolute; top: 0; right: 0; width: 100%; height: 100%; background: black; } projectdetail > div > section .img-frame,[data-is="projectdetail"] > div > section .img-frame{ width: 100%; } projectdetail > div > section .img-frame > img,[data-is="projectdetail"] > div > section .img-frame > img{ width: 100%; height: 100%; background: black; } projectdetail > div > section h1,[data-is="projectdetail"] > div > section h1{ color: white; margin: 1rem 0; text-align: justify; } projectdetail > div > section .chapter .chapter-title,[data-is="projectdetail"] > div > section .chapter .chapter-title{ display: flex; justify-content: space-between; align-items: center; margin: 1.5rem 0 1rem 0; } projectdetail > div > section .chapter .chapter-title > h2,[data-is="projectdetail"] > div > section .chapter .chapter-title > h2{ font-size: 1.5rem; margin-right: 0.5rem; color: white; } projectdetail > div > section .chapter .chapter-title > hr,[data-is="projectdetail"] > div > section .chapter .chapter-title > hr{ flex-grow: 1; border: 1.5px solid gray; border-radius: 1rem; min-width: 1rem; background: gray; } projectdetail > div > section .chapter p,[data-is="projectdetail"] > div > section .chapter p{ margin: 0.6rem 0; text-align: justify; } projectdetail > div > section .chapter ol,[data-is="projectdetail"] > div > section .chapter ol{ padding-left: 2rem; } projectdetail > div > section .chapter ol li,[data-is="projectdetail"] > div > section .chapter ol li{ list-style-type: decimal; line-height: 1.8rem; } projectdetail > div > section .chapter ol li a,[data-is="projectdetail"] > div > section .chapter ol li a{ color: #4e9adb; } projectdetail > div > section .chapter ol li a:hover,[data-is="projectdetail"] > div > section .chapter ol li a:hover{ text-decoration: underline; } @media (max-width: 768px) { projectdetail h1,[data-is="projectdetail"] h1{ font-size: 1.5rem; } projectdetail h2,[data-is="projectdetail"] h2{ font-size: 1.3rem; } }', '', function(opts) {

		this.project = {
			name: '',
			sub: '',
			img: '',
			video: '',
			text: '',
			implement: '',
			keywords: [],
		}

		this.on('route', (projectName) => {
			this.update({
				project: _data__WEBPACK_IMPORTED_MODULE_0__["default"].filter((d) => d.name === projectName.replace(/_/g, ' '))[0],
			})

			_js_scroll__WEBPACK_IMPORTED_MODULE_1__["default"].move()
		})
});

    
  

/***/ }),

/***/ "../pages/top.tag":
/*!************************!*\
  !*** ../pages/top.tag ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/first */ "../components/first.tag");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/about */ "../components/about.tag");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projects */ "../components/projects.tag");
/* harmony import */ var _components_awards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/awards */ "../components/awards.tag");
/* harmony import */ var _components_publications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/publications */ "../components/publications.tag");
/* harmony import */ var _components_clubs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/clubs */ "../components/clubs.tag");
/* harmony import */ var _components_more__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/more */ "../components/more.tag");
/* harmony import */ var _components_more__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_more__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ "../components/footer.tag");

    var riot = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js")
    







riot.tag2('top', '<first></first> <section> <div class="container"> <h2 class="section-title">About Me</h2> <about></about> <more text="detail" title="View detailed profile" link="#profile"></more> </div> </section> <section> <div class="container"> <h2 class="section-title">Projects</h2> <projects limit="3"></projects> <more title="View all projects" link="#projects"></more> </div> </section> <section> <div class="container"> <h2 class="section-title">Awards</h2> <awards></awards> <h2 class="section-title">Publications</h2> <publications></publications> <h2 class="section-title">Clubs</h2> <clubs></clubs> </div> </section> <footer></footer>', 'top,[data-is="top"]{ display: block; min-height: 100vh; } top > section:nth-child(2n),[data-is="top"] > section:nth-child(2n){ background: #2b2b2b; color: #efefef; } top > section:nth-child(2n + 1),[data-is="top"] > section:nth-child(2n + 1){ background: #eeeeee; color: #222222; }', '', function(opts) {

		this.on('route', () => {
			const path = window.location.hash
			if (window.scrolls[`${path}`] === undefined) {
				window.scroll(0, 0)
			} else {
				window.scroll(0, window.scrolls[`${path}`])
			}
		})
});

    
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! riot */ "../../node_modules/riot/riot.js");
/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(riot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./scroll.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/app */ "../pages/app.tag");




riot__WEBPACK_IMPORTED_MODULE_0___default.a.mount('.root', 'app')

_scroll__WEBPACK_IMPORTED_MODULE_1__["default"].init()


/***/ }),

/***/ "./scroll.js":
/*!*******************!*\
  !*** ./scroll.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
class Scroll {
	static init() {
		window.scrolls = []

		window.addEventListener('scroll', () => {
			const posY = window.pageYOffset
			const path = window.location.hash
			window.scrolls[`${path}`] = posY
		})
	}
	static move() {
		const path = window.location.hash

		if (window.scrolls[`${path}`]) window.scroll(0, 0)
		else window.scroll(0, window.scrolls[`${path}`])
	}
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90b3JpeWFtYS9EZXNrdG9wL3B2Y3Jlc2luLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvdG9yaXlhbWEvRGVza3RvcC9wdmNyZXNpbi5naXRodWIuaW8vbm9kZV9tb2R1bGVzL3Jpb3Qtb2JzZXJ2YWJsZS9kaXN0L29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90b3JpeWFtYS9EZXNrdG9wL3B2Y3Jlc2luLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvcmlvdC1yb3V0ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90b3JpeWFtYS9EZXNrdG9wL3B2Y3Jlc2luLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvcmlvdC1yb3V0ZS9saWIvdGFnLmpzIiwid2VicGFjazovLy8vVXNlcnMvdG9yaXlhbWEvRGVza3RvcC9wdmNyZXNpbi5naXRodWIuaW8vbm9kZV9tb2R1bGVzL3Jpb3QvcmlvdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9hYm91dC50YWciLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvYXdhcmRzLnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9jbHVicy50YWciLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uLnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9maXJzdC50YWciLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvZm9vdGVyLnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9saWtlLnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9saXN0LnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9tb3JlLnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9wcm9qZWN0cy50YWciLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvcHVibGljYXRpb25zLnRhZyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9za2lsbHMudGFnIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL3NvY2lhbC50YWciLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvdGFncy50YWciLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvd2VicC50YWciLCJ3ZWJwYWNrOi8vLy4uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL3BhZ2VzL2FwcC50YWciLCJ3ZWJwYWNrOi8vLy4uL3BhZ2VzL290aGVyLnRhZyIsIndlYnBhY2s6Ly8vLi4vcGFnZXMvcHJvZmlsZS50YWciLCJ3ZWJwYWNrOi8vLy4uL3BhZ2VzL3Byb2plY3RBbGwudGFnIiwid2VicGFjazovLy8uLi9wYWdlcy9wcm9qZWN0RGV0YWlsLnRhZyIsIndlYnBhY2s6Ly8vLi4vcGFnZXMvdG9wLnRhZyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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QUU5QiwyQ0FBSTs7QUFFSiwrQ0FBTTs7Ozs7Ozs7Ozs7OztBQ05OO0FBQUE7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEtBQUs7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsS0FBSztBQUM3QiwwQ0FBMEMsS0FBSztBQUMvQztBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOnQuZGF5anM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLG49XCJzZWNvbmRcIixlPVwibWludXRlXCIscj1cImhvdXJcIixpPVwiZGF5XCIscz1cIndlZWtcIix1PVwibW9udGhcIixvPVwicXVhcnRlclwiLGE9XCJ5ZWFyXCIsaD0vXihcXGR7NH0pLT8oXFxkezEsMn0pLT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT8uPyhcXGR7MSwzfSk/JC8sZj0vXFxbKFteXFxdXSspXXxZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csYz1mdW5jdGlvbih0LG4sZSl7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49bj90OlwiXCIrQXJyYXkobisxLXIubGVuZ3RoKS5qb2luKGUpK3R9LGQ9e3M6Yyx6OmZ1bmN0aW9uKHQpe3ZhciBuPS10LnV0Y09mZnNldCgpLGU9TWF0aC5hYnMobikscj1NYXRoLmZsb29yKGUvNjApLGk9ZSU2MDtyZXR1cm4objw9MD9cIitcIjpcIi1cIikrYyhyLDIsXCIwXCIpK1wiOlwiK2MoaSwyLFwiMFwiKX0sbTpmdW5jdGlvbih0LG4pe3ZhciBlPTEyKihuLnllYXIoKS10LnllYXIoKSkrKG4ubW9udGgoKS10Lm1vbnRoKCkpLHI9dC5jbG9uZSgpLmFkZChlLHUpLGk9bi1yPDAscz10LmNsb25lKCkuYWRkKGUrKGk/LTE6MSksdSk7cmV0dXJuIE51bWJlcigtKGUrKG4tcikvKGk/ci1zOnMtcikpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKGgpe3JldHVybntNOnUseTphLHc6cyxkOmksRDpcImRhdGVcIixoOnIsbTplLHM6bixtczp0LFE6b31baF18fFN0cmluZyhofHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LCQ9e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbD1cImVuXCIsbT17fTttW2xdPSQ7dmFyIHk9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiB2fSxNPWZ1bmN0aW9uKHQsbixlKXt2YXIgcjtpZighdClyZXR1cm4gbDtpZihcInN0cmluZ1wiPT10eXBlb2YgdCltW3RdJiYocj10KSxuJiYobVt0XT1uLHI9dCk7ZWxzZXt2YXIgaT10Lm5hbWU7bVtpXT10LHI9aX1yZXR1cm4hZSYmciYmKGw9cikscnx8IWUmJmx9LGc9ZnVuY3Rpb24odCxuLGUpe2lmKHkodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgcj1uP1wic3RyaW5nXCI9PXR5cGVvZiBuP3tmb3JtYXQ6bixwbDplfTpuOnt9O3JldHVybiByLmRhdGU9dCxuZXcgdihyKX0sRD1kO0QubD1NLEQuaT15LEQudz1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQse2xvY2FsZTpuLiRMLHV0YzpuLiR1LCRvZmZzZXQ6bi4kb2Zmc2V0fSl9O3ZhciB2PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyh0KXt0aGlzLiRMPXRoaXMuJEx8fE0odC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgZD1jLnByb3RvdHlwZTtyZXR1cm4gZC5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZGF0ZSxlPXQudXRjO2lmKG51bGw9PT1uKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKEQudShuKSlyZXR1cm4gbmV3IERhdGU7aWYobiBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKG4pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuJiYhL1okL2kudGVzdChuKSl7dmFyIHI9bi5tYXRjaChoKTtpZihyKXJldHVybiBlP25ldyBEYXRlKERhdGUuVVRDKHJbMV0sclsyXS0xLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscls3XXx8MCkpOm5ldyBEYXRlKHJbMV0sclsyXS0xLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscls3XXx8MCl9cmV0dXJuIG5ldyBEYXRlKG4pfSh0KSx0aGlzLmluaXQoKX0sZC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sZC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gRH0sZC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sZC5pc1NhbWU9ZnVuY3Rpb24odCxuKXt2YXIgZT1nKHQpO3JldHVybiB0aGlzLnN0YXJ0T2Yobik8PWUmJmU8PXRoaXMuZW5kT2Yobil9LGQuaXNBZnRlcj1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQpPHRoaXMuc3RhcnRPZihuKX0sZC5pc0JlZm9yZT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmVuZE9mKG4pPGcodCl9LGQuJGc9ZnVuY3Rpb24odCxuLGUpe3JldHVybiBELnUodCk/dGhpc1tuXTp0aGlzLnNldChlLHQpfSxkLnllYXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiR5XCIsYSl9LGQubW9udGg9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRNXCIsdSl9LGQuZGF5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkV1wiLGkpfSxkLmRhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiREXCIsXCJkYXRlXCIpfSxkLmhvdXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRIXCIscil9LGQubWludXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkbVwiLGUpfSxkLnNlY29uZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJHNcIixuKX0sZC5taWxsaXNlY29uZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy4kZyhuLFwiJG1zXCIsdCl9LGQudW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LGQudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sZC5zdGFydE9mPWZ1bmN0aW9uKHQsbyl7dmFyIGg9dGhpcyxmPSEhRC51KG8pfHxvLGM9RC5wKHQpLGQ9ZnVuY3Rpb24odCxuKXt2YXIgZT1ELncoaC4kdT9EYXRlLlVUQyhoLiR5LG4sdCk6bmV3IERhdGUoaC4keSxuLHQpLGgpO3JldHVybiBmP2U6ZS5lbmRPZihpKX0sJD1mdW5jdGlvbih0LG4pe3JldHVybiBELncoaC50b0RhdGUoKVt0XS5hcHBseShoLnRvRGF0ZSgpLChmP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UobikpLGgpfSxsPXRoaXMuJFcsbT10aGlzLiRNLHk9dGhpcy4kRCxNPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goYyl7Y2FzZSBhOnJldHVybiBmP2QoMSwwKTpkKDMxLDExKTtjYXNlIHU6cmV0dXJuIGY/ZCgxLG0pOmQoMCxtKzEpO2Nhc2Ugczp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0obDxnP2wrNzpsKS1nO3JldHVybiBkKGY/eS12OnkrKDYtdiksbSk7Y2FzZSBpOmNhc2VcImRhdGVcIjpyZXR1cm4gJChNK1wiSG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuICQoTStcIk1pbnV0ZXNcIiwxKTtjYXNlIGU6cmV0dXJuICQoTStcIlNlY29uZHNcIiwyKTtjYXNlIG46cmV0dXJuICQoTStcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LGQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sZC4kc2V0PWZ1bmN0aW9uKHMsbyl7dmFyIGgsZj1ELnAocyksYz1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksZD0oaD17fSxoW2ldPWMrXCJEYXRlXCIsaC5kYXRlPWMrXCJEYXRlXCIsaFt1XT1jK1wiTW9udGhcIixoW2FdPWMrXCJGdWxsWWVhclwiLGhbcl09YytcIkhvdXJzXCIsaFtlXT1jK1wiTWludXRlc1wiLGhbbl09YytcIlNlY29uZHNcIixoW3RdPWMrXCJNaWxsaXNlY29uZHNcIixoKVtmXSwkPWY9PT1pP3RoaXMuJEQrKG8tdGhpcy4kVyk6bztpZihmPT09dXx8Zj09PWEpe3ZhciBsPXRoaXMuY2xvbmUoKS5zZXQoXCJkYXRlXCIsMSk7bC4kZFtkXSgkKSxsLmluaXQoKSx0aGlzLiRkPWwuc2V0KFwiZGF0ZVwiLE1hdGgubWluKHRoaXMuJEQsbC5kYXlzSW5Nb250aCgpKSkudG9EYXRlKCl9ZWxzZSBkJiZ0aGlzLiRkW2RdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxkLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LG4pfSxkLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tELnAodCldKCl9LGQuYWRkPWZ1bmN0aW9uKHQsbyl7dmFyIGgsZj10aGlzO3Q9TnVtYmVyKHQpO3ZhciBjPUQucChvKSxkPWZ1bmN0aW9uKG4pe3ZhciBlPWcoZik7cmV0dXJuIEQudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZChuKnQpKSxmKX07aWYoYz09PXUpcmV0dXJuIHRoaXMuc2V0KHUsdGhpcy4kTSt0KTtpZihjPT09YSlyZXR1cm4gdGhpcy5zZXQoYSx0aGlzLiR5K3QpO2lmKGM9PT1pKXJldHVybiBkKDEpO2lmKGM9PT1zKXJldHVybiBkKDcpO3ZhciAkPShoPXt9LGhbZV09NmU0LGhbcl09MzZlNSxoW25dPTFlMyxoKVtjXXx8MSxsPXRoaXMuJGQuZ2V0VGltZSgpK3QqJDtyZXR1cm4gRC53KGwsdGhpcyl9LGQuc3VidHJhY3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxuKX0sZC5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuXCJJbnZhbGlkIERhdGVcIjt2YXIgZT10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1ELnoodGhpcyksaT10aGlzLiRsb2NhbGUoKSxzPXRoaXMuJEgsdT10aGlzLiRtLG89dGhpcy4kTSxhPWkud2Vla2RheXMsaD1pLm1vbnRocyxjPWZ1bmN0aW9uKHQscixpLHMpe3JldHVybiB0JiYodFtyXXx8dChuLGUpKXx8aVtyXS5zdWJzdHIoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gRC5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWkubWVyaWRpZW18fGZ1bmN0aW9uKHQsbixlKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIGU/ci50b0xvd2VyQ2FzZSgpOnJ9LGw9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06bysxLE1NOkQucyhvKzEsMixcIjBcIiksTU1NOmMoaS5tb250aHNTaG9ydCxvLGgsMyksTU1NTTpoW29dfHxoKHRoaXMsZSksRDp0aGlzLiRELEREOkQucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmMoaS53ZWVrZGF5c01pbix0aGlzLiRXLGEsMiksZGRkOmMoaS53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsYSwzKSxkZGRkOmFbdGhpcy4kV10sSDpTdHJpbmcocyksSEg6RC5zKHMsMixcIjBcIiksaDpkKDEpLGhoOmQoMiksYTokKHMsdSwhMCksQTokKHMsdSwhMSksbTpTdHJpbmcodSksbW06RC5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6RC5zKHRoaXMuJHMsMixcIjBcIiksU1NTOkQucyh0aGlzLiRtcywzLFwiMFwiKSxaOnJ9O3JldHVybiBlLnJlcGxhY2UoZixmdW5jdGlvbih0LG4pe3JldHVybiBufHxsW3RdfHxyLnJlcGxhY2UoXCI6XCIsXCJcIil9KX0sZC51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sZC5kaWZmPWZ1bmN0aW9uKHQsaCxmKXt2YXIgYyxkPUQucChoKSwkPWcodCksbD02ZTQqKCQudXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSksbT10aGlzLSQseT1ELm0odGhpcywkKTtyZXR1cm4geT0oYz17fSxjW2FdPXkvMTIsY1t1XT15LGNbb109eS8zLGNbc109KG0tbCkvNjA0OGU1LGNbaV09KG0tbCkvODY0ZTUsY1tyXT1tLzM2ZTUsY1tlXT1tLzZlNCxjW25dPW0vMWUzLGMpW2RdfHxtLGY/eTpELmEoeSl9LGQuZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZih1KS4kRH0sZC4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIG1bdGhpcy4kTF19LGQubG9jYWxlPWZ1bmN0aW9uKHQsbil7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIGU9dGhpcy5jbG9uZSgpLHI9TSh0LG4sITApO3JldHVybiByJiYoZS4kTD1yKSxlfSxkLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIEQudyh0aGlzLiRkLHRoaXMpfSxkLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LGQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxkLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sZC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LGN9KCk7cmV0dXJuIGcucHJvdG90eXBlPXYucHJvdG90eXBlLGcuZXh0ZW5kPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQobix2LGcpLGd9LGcubG9jYWxlPU0sZy5pc0RheWpzPXksZy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBnKDFlMyp0KX0sZy5lbj1tW2xdLGcuTHM9bSxnfSk7XG4iLCI7KGZ1bmN0aW9uKHdpbmRvdywgdW5kZWZpbmVkKSB7dmFyIG9ic2VydmFibGUgPSBmdW5jdGlvbihlbCkge1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgdGhlIG9yaWdpbmFsIG9iamVjdCBvciBjcmVhdGUgYSBuZXcgZW1wdHkgb25lXG4gICAqIEB0eXBlIHsgT2JqZWN0IH1cbiAgICovXG5cbiAgZWwgPSBlbCB8fCB7fVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIHZhcmlhYmxlc1xuICAgKi9cbiAgdmFyIGNhbGxiYWNrcyA9IHt9LFxuICAgIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbiAgLyoqXG4gICAqIFB1YmxpYyBBcGlcbiAgICovXG5cbiAgLy8gZXh0ZW5kIHRoZSBlbCBvYmplY3QgYWRkaW5nIHRoZSBvYnNlcnZhYmxlIG1ldGhvZHNcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZWwsIHtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gdGhlIGdpdmVuIGBldmVudGAgYW5kc1xuICAgICAqIGV4ZWN1dGUgdGhlIGBjYWxsYmFja2AgZWFjaCB0aW1lIGFuIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAgICAgKiBAcGFyYW0gIHsgU3RyaW5nIH0gZXZlbnQgLSBldmVudCBpZFxuICAgICAqIEBwYXJhbSAgeyBGdW5jdGlvbiB9IGZuIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAgICovXG4gICAgb246IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihldmVudCwgZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgIChjYWxsYmFja3NbZXZlbnRdID0gY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSkucHVzaChmbilcbiAgICAgICAgcmV0dXJuIGVsXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGBldmVudGAgbGlzdGVuZXJzXG4gICAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBldmVudCAtIGV2ZW50IGlkXG4gICAgICogQHBhcmFtICAgeyBGdW5jdGlvbiB9IGZuIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAgICovXG4gICAgb2ZmOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oZXZlbnQsIGZuKSB7XG4gICAgICAgIGlmIChldmVudCA9PSAnKicgJiYgIWZuKSBjYWxsYmFja3MgPSB7fVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBjYWxsYmFja3NbZXZlbnRdXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgY2I7IGNiID0gYXJyICYmIGFycltpXTsgKytpKSB7XG4gICAgICAgICAgICAgIGlmIChjYiA9PSBmbikgYXJyLnNwbGljZShpLS0sIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGRlbGV0ZSBjYWxsYmFja3NbZXZlbnRdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0aGUgZ2l2ZW4gYGV2ZW50YCBhbmRcbiAgICAgKiBleGVjdXRlIHRoZSBgY2FsbGJhY2tgIGF0IG1vc3Qgb25jZVxuICAgICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gZXZlbnQgLSBldmVudCBpZFxuICAgICAqIEBwYXJhbSAgIHsgRnVuY3Rpb24gfSBmbiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBlbFxuICAgICAqL1xuICAgIG9uZToge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGV2ZW50LCBmbikge1xuICAgICAgICBmdW5jdGlvbiBvbigpIHtcbiAgICAgICAgICBlbC5vZmYoZXZlbnQsIG9uKVxuICAgICAgICAgIGZuLmFwcGx5KGVsLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsLm9uKGV2ZW50LCBvbilcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhbGwgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgbGlzdGVuIHRvXG4gICAgICogdGhlIGdpdmVuIGBldmVudGBcbiAgICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IGV2ZW50IC0gZXZlbnQgaWRcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAgICovXG4gICAgdHJpZ2dlcjoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgLy8gZ2V0dGluZyB0aGUgYXJndW1lbnRzXG4gICAgICAgIHZhciBhcmdsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMSxcbiAgICAgICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ2xlbiksXG4gICAgICAgICAgZm5zLFxuICAgICAgICAgIGZuLFxuICAgICAgICAgIGlcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJnbGVuOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXSAvLyBza2lwIGZpcnN0IGFyZ3VtZW50XG4gICAgICAgIH1cblxuICAgICAgICBmbnMgPSBzbGljZS5jYWxsKGNhbGxiYWNrc1tldmVudF0gfHwgW10sIDApXG5cbiAgICAgICAgZm9yIChpID0gMDsgZm4gPSBmbnNbaV07ICsraSkge1xuICAgICAgICAgIGZuLmFwcGx5KGVsLCBhcmdzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrc1snKiddICYmIGV2ZW50ICE9ICcqJylcbiAgICAgICAgICBlbC50cmlnZ2VyLmFwcGx5KGVsLCBbJyonLCBldmVudF0uY29uY2F0KGFyZ3MpKVxuXG4gICAgICAgIHJldHVybiBlbFxuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZWxcblxufVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAvLyBzdXBwb3J0IENvbW1vbkpTLCBBTUQgJiBicm93c2VyXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBvYnNlcnZhYmxlXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBvYnNlcnZhYmxlIH0pXG4gIGVsc2VcbiAgICB3aW5kb3cub2JzZXJ2YWJsZSA9IG9ic2VydmFibGVcblxufSkodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZCk7IiwiaW1wb3J0IG9ic2VydmFibGUgZnJvbSAncmlvdC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBTaW1wbGUgY2xpZW50LXNpZGUgcm91dGVyXG4gKiBAbW9kdWxlIHJpb3Qtcm91dGVcbiAqL1xuXG52YXIgUkVfT1JJR0lOID0gL14uKz9cXC9cXC8rW14vXSsvLFxuICBFVkVOVF9MSVNURU5FUiA9ICdFdmVudExpc3RlbmVyJyxcbiAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gJ3JlbW92ZScgKyBFVkVOVF9MSVNURU5FUixcbiAgQUREX0VWRU5UX0xJU1RFTkVSID0gJ2FkZCcgKyBFVkVOVF9MSVNURU5FUixcbiAgSEFTX0FUVFJJQlVURSA9ICdoYXNBdHRyaWJ1dGUnLFxuICBQT1BTVEFURSA9ICdwb3BzdGF0ZScsXG4gIEhBU0hDSEFOR0UgPSAnaGFzaGNoYW5nZScsXG4gIFRSSUdHRVIgPSAndHJpZ2dlcicsXG4gIE1BWF9FTUlUX1NUQUNLX0xFVkVMID0gMyxcbiAgd2luID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3csXG4gIGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCxcbiAgaGlzdCA9IHdpbiAmJiBoaXN0b3J5LFxuICBsb2MgPSB3aW4gJiYgKGhpc3QubG9jYXRpb24gfHwgd2luLmxvY2F0aW9uKSwgLy8gc2VlIGh0bWw1LWhpc3RvcnktYXBpXG4gIHByb3QgPSBSb3V0ZXIucHJvdG90eXBlLCAvLyB0byBtaW5pZnkgbW9yZVxuICBjbGlja0V2ZW50ID0gZG9jICYmIGRvYy5vbnRvdWNoc3RhcnQgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snLFxuICBjZW50cmFsID0gb2JzZXJ2YWJsZSgpO1xuXG52YXJcbiAgc3RhcnRlZCA9IGZhbHNlLFxuICByb3V0ZUZvdW5kID0gZmFsc2UsXG4gIGRlYm91bmNlZEVtaXQsXG4gIGN1cnJlbnQsXG4gIHBhcnNlcixcbiAgc2Vjb25kUGFyc2VyLFxuICBlbWl0U3RhY2sgPSBbXSxcbiAgZW1pdFN0YWNrTGV2ZWwgPSAwO1xuXG4vKipcbiAqIERlZmF1bHQgcGFyc2VyLiBZb3UgY2FuIHJlcGxhY2UgaXQgdmlhIHJvdXRlci5wYXJzZXIgbWV0aG9kLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBjdXJyZW50IHBhdGggKG5vcm1hbGl6ZWQpXG4gKiBAcmV0dXJucyB7YXJyYXl9IGFycmF5XG4gKi9cbmZ1bmN0aW9uIERFRkFVTFRfUEFSU0VSKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguc3BsaXQoL1svPyNdLylcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHBhcnNlciAoc2Vjb25kKS4gWW91IGNhbiByZXBsYWNlIGl0IHZpYSByb3V0ZXIucGFyc2VyIG1ldGhvZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gY3VycmVudCBwYXRoIChub3JtYWxpemVkKVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIGZpbHRlciBzdHJpbmcgKG5vcm1hbGl6ZWQpXG4gKiBAcmV0dXJucyB7YXJyYXl9IGFycmF5XG4gKi9cbmZ1bmN0aW9uIERFRkFVTFRfU0VDT05EX1BBUlNFUihwYXRoLCBmaWx0ZXIpIHtcbiAgdmFyIGYgPSBmaWx0ZXJcbiAgICAucmVwbGFjZSgvXFw/L2csICdcXFxcPycpXG4gICAgLnJlcGxhY2UoL1xcKi9nLCAnKFteLz8jXSs/KScpXG4gICAgLnJlcGxhY2UoL1xcLlxcLi8sICcuKicpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKChcIl5cIiArIGYgKyBcIiRcIikpO1xuICB2YXIgYXJncyA9IHBhdGgubWF0Y2gocmUpO1xuXG4gIGlmIChhcmdzKSB7IHJldHVybiBhcmdzLnNsaWNlKDEpIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUvY2hlYXAgZGVib3VuY2UgaW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gZm4gLSBjYWxsYmFja1xuICogQHBhcmFtICAge251bWJlcn0gZGVsYXkgLSBkZWxheSBpbiBzZWNvbmRzXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgZGVsYXkpIHtcbiAgdmFyIHQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgIHQgPSBzZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdGhlIHdpbmRvdyBsaXN0ZW5lcnMgdG8gdHJpZ2dlciB0aGUgcm91dGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9FeGVjIC0gc2VlIHJvdXRlLnN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHN0YXJ0KGF1dG9FeGVjKSB7XG4gIGRlYm91bmNlZEVtaXQgPSBkZWJvdW5jZShlbWl0LCAxKTtcbiAgd2luW0FERF9FVkVOVF9MSVNURU5FUl0oUE9QU1RBVEUsIGRlYm91bmNlZEVtaXQpO1xuICB3aW5bQUREX0VWRU5UX0xJU1RFTkVSXShIQVNIQ0hBTkdFLCBkZWJvdW5jZWRFbWl0KTtcbiAgZG9jW0FERF9FVkVOVF9MSVNURU5FUl0oY2xpY2tFdmVudCwgY2xpY2spO1xuXG4gIGlmIChhdXRvRXhlYykgeyBlbWl0KHRydWUpOyB9XG59XG5cbi8qKlxuICogUm91dGVyIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgdGhpcy4kID0gW107XG4gIG9ic2VydmFibGUodGhpcyk7IC8vIG1ha2UgaXQgb2JzZXJ2YWJsZVxuICBjZW50cmFsLm9uKCdzdG9wJywgdGhpcy5zLmJpbmQodGhpcykpO1xuICBjZW50cmFsLm9uKCdlbWl0JywgdGhpcy5lLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemUocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9eXFwvfFxcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnXG59XG5cbi8qKlxuICogR2V0IHRoZSBwYXJ0IGFmdGVyIGRvbWFpbiBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZiAtIGZ1bGxwYXRoXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBwYXRoIGZyb20gcm9vdFxuICovXG5mdW5jdGlvbiBnZXRQYXRoRnJvbVJvb3QoaHJlZikge1xuICByZXR1cm4gKGhyZWYgfHwgbG9jLmhyZWYpLnJlcGxhY2UoUkVfT1JJR0lOLCAnJylcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHBhcnQgYWZ0ZXIgYmFzZVxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgLSBmdWxscGF0aFxuICogQHJldHVybnMge3N0cmluZ30gcGF0aCBmcm9tIGJhc2VcbiAqL1xuZnVuY3Rpb24gZ2V0UGF0aEZyb21CYXNlKGhyZWYpIHtcbiAgdmFyIGJhc2UgPSByb3V0ZS5fLmJhc2U7XG4gIHJldHVybiBiYXNlWzBdID09PSAnIydcbiAgICA/IChocmVmIHx8IGxvYy5ocmVmIHx8ICcnKS5zcGxpdChiYXNlKVsxXSB8fCAnJ1xuICAgIDogKGxvYyA/IGdldFBhdGhGcm9tUm9vdChocmVmKSA6IGhyZWYgfHwgJycpLnJlcGxhY2UoYmFzZSwgJycpXG59XG5cbmZ1bmN0aW9uIGVtaXQoZm9yY2UpIHtcbiAgLy8gdGhlIHN0YWNrIGlzIG5lZWRlZCBmb3IgcmVkaXJlY3Rpb25zXG4gIHZhciBpc1Jvb3QgPSBlbWl0U3RhY2tMZXZlbCA9PT0gMDtcbiAgaWYgKE1BWF9FTUlUX1NUQUNLX0xFVkVMIDw9IGVtaXRTdGFja0xldmVsKSB7IHJldHVybiB9XG5cbiAgZW1pdFN0YWNrTGV2ZWwrKztcbiAgZW1pdFN0YWNrLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhdGggPSBnZXRQYXRoRnJvbUJhc2UoKTtcbiAgICBpZiAoZm9yY2UgfHwgcGF0aCAhPT0gY3VycmVudCkge1xuICAgICAgY2VudHJhbFtUUklHR0VSXSgnZW1pdCcsIHBhdGgpO1xuICAgICAgY3VycmVudCA9IHBhdGg7XG4gICAgfVxuICB9KTtcblxuICBpZiAoaXNSb290KSB7XG4gICAgdmFyIGZpcnN0O1xuICAgIHdoaWxlIChmaXJzdCA9IGVtaXRTdGFjay5zaGlmdCgpKSB7IGZpcnN0KCk7IH0gLy8gc3RhY2sgaW5jcmVzZXMgd2l0aGluIHRoaXMgY2FsbFxuICAgIGVtaXRTdGFja0xldmVsID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGljayhlKSB7XG4gIGlmIChcbiAgICBlLndoaWNoICE9PSAxIC8vIG5vdCBsZWZ0IGNsaWNrXG4gICAgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5IC8vIG9yIG1ldGEga2V5c1xuICAgIHx8IGUuZGVmYXVsdFByZXZlbnRlZCAvLyBvciBkZWZhdWx0IHByZXZlbnRlZFxuICApIHsgcmV0dXJuIH1cblxuICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgd2hpbGUgKGVsICYmIGVsLm5vZGVOYW1lICE9PSAnQScpIHsgZWwgPSBlbC5wYXJlbnROb2RlOyB9XG5cbiAgaWYgKFxuICAgICFlbCB8fCBlbC5ub2RlTmFtZSAhPT0gJ0EnIC8vIG5vdCBBIHRhZ1xuICAgIHx8IGVsW0hBU19BVFRSSUJVVEVdKCdkb3dubG9hZCcpIC8vIGhhcyBkb3dubG9hZCBhdHRyXG4gICAgfHwgIWVsW0hBU19BVFRSSUJVVEVdKCdocmVmJykgLy8gaGFzIG5vIGhyZWYgYXR0clxuICAgIHx8IGVsLnRhcmdldCAmJiBlbC50YXJnZXQgIT09ICdfc2VsZicgLy8gYW5vdGhlciB3aW5kb3cgb3IgZnJhbWVcbiAgICB8fCBlbC5ocmVmLmluZGV4T2YobG9jLmhyZWYubWF0Y2goUkVfT1JJR0lOKVswXSkgPT09IC0xIC8vIGNyb3NzIG9yaWdpblxuICApIHsgcmV0dXJuIH1cblxuICB2YXIgYmFzZSA9IHJvdXRlLl8uYmFzZTtcblxuICBpZiAoZWwuaHJlZiAhPT0gbG9jLmhyZWZcbiAgICAmJiAoXG4gICAgICBlbC5ocmVmLnNwbGl0KCcjJylbMF0gPT09IGxvYy5ocmVmLnNwbGl0KCcjJylbMF0gLy8gaW50ZXJuYWwganVtcFxuICAgICAgfHwgYmFzZVswXSAhPT0gJyMnICYmIGdldFBhdGhGcm9tUm9vdChlbC5ocmVmKS5pbmRleE9mKGJhc2UpICE9PSAwIC8vIG91dHNpZGUgb2YgYmFzZVxuICAgICAgfHwgYmFzZVswXSA9PT0gJyMnICYmIGVsLmhyZWYuc3BsaXQoYmFzZSlbMF0gIT09IGxvYy5ocmVmLnNwbGl0KGJhc2UpWzBdIC8vIG91dHNpZGUgb2YgI2Jhc2VcbiAgICAgIHx8ICFnbyhnZXRQYXRoRnJvbUJhc2UoZWwuaHJlZiksIGVsLnRpdGxlIHx8IGRvYy50aXRsZSkgLy8gcm91dGUgbm90IGZvdW5kXG4gICAgKSkgeyByZXR1cm4gfVxuXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuLyoqXG4gKiBHbyB0byB0aGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBkZXN0aW5hdGlvbiBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBwYWdlIHRpdGxlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFJlcGxhY2UgLSB1c2UgcmVwbGFjZVN0YXRlIG9yIHB1c2hTdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59IC0gcm91dGUgbm90IGZvdW5kIGZsYWdcbiAqL1xuZnVuY3Rpb24gZ28ocGF0aCwgdGl0bGUsIHNob3VsZFJlcGxhY2UpIHtcbiAgLy8gU2VydmVyLXNpZGUgdXNhZ2U6IGRpcmVjdGx5IGV4ZWN1dGUgaGFuZGxlcnMgZm9yIHRoZSBwYXRoXG4gIGlmICghaGlzdCkgeyByZXR1cm4gY2VudHJhbFtUUklHR0VSXSgnZW1pdCcsIGdldFBhdGhGcm9tQmFzZShwYXRoKSkgfVxuXG4gIHBhdGggPSByb3V0ZS5fLmJhc2UgKyBub3JtYWxpemUocGF0aCk7XG4gIHRpdGxlID0gdGl0bGUgfHwgZG9jLnRpdGxlO1xuICAvLyBicm93c2VycyBpZ25vcmVzIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGB0aXRsZWBcbiAgc2hvdWxkUmVwbGFjZVxuICAgID8gaGlzdC5yZXBsYWNlU3RhdGUobnVsbCwgdGl0bGUsIHBhdGgpXG4gICAgOiBoaXN0LnB1c2hTdGF0ZShudWxsLCB0aXRsZSwgcGF0aCk7XG4gIC8vIHNvIHdlIG5lZWQgdG8gc2V0IGl0IG1hbnVhbGx5XG4gIGRvYy50aXRsZSA9IHRpdGxlO1xuICByb3V0ZUZvdW5kID0gZmFsc2U7XG4gIGVtaXQoKTtcbiAgcmV0dXJuIHJvdXRlRm91bmRcbn1cblxuLyoqXG4gKiBHbyB0byBwYXRoIG9yIHNldCBhY3Rpb25cbiAqIGEgc2luZ2xlIHN0cmluZzogICAgICAgICAgICAgICAgZ28gdGhlcmVcbiAqIHR3byBzdHJpbmdzOiAgICAgICAgICAgICAgICAgICAgZ28gdGhlcmUgd2l0aCBzZXR0aW5nIGEgdGl0bGVcbiAqIHR3byBzdHJpbmdzIGFuZCBib29sZWFuOiAgICAgICAgcmVwbGFjZSBoaXN0b3J5IHdpdGggc2V0dGluZyBhIHRpdGxlXG4gKiBhIHNpbmdsZSBmdW5jdGlvbjogICAgICAgICAgICAgIHNldCBhbiBhY3Rpb24gb24gdGhlIGRlZmF1bHQgcm91dGVcbiAqIGEgc3RyaW5nL1JlZ0V4cCBhbmQgYSBmdW5jdGlvbjogc2V0IGFuIGFjdGlvbiBvbiB0aGUgcm91dGVcbiAqIEBwYXJhbSB7KHN0cmluZ3xmdW5jdGlvbil9IGZpcnN0IC0gcGF0aCAvIGFjdGlvbiAvIGZpbHRlclxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cHxmdW5jdGlvbil9IHNlY29uZCAtIHRpdGxlIC8gYWN0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHRoaXJkIC0gcmVwbGFjZSBmbGFnXG4gKi9cbnByb3QubSA9IGZ1bmN0aW9uKGZpcnN0LCBzZWNvbmQsIHRoaXJkKSB7XG4gIGlmIChpc1N0cmluZyhmaXJzdCkgJiYgKCFzZWNvbmQgfHwgaXNTdHJpbmcoc2Vjb25kKSkpIHsgZ28oZmlyc3QsIHNlY29uZCwgdGhpcmQgfHwgZmFsc2UpOyB9XG4gIGVsc2UgaWYgKHNlY29uZCkgeyB0aGlzLnIoZmlyc3QsIHNlY29uZCk7IH1cbiAgZWxzZSB7IHRoaXMucignQCcsIGZpcnN0KTsgfVxufTtcblxuLyoqXG4gKiBTdG9wIHJvdXRpbmdcbiAqL1xucHJvdC5zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub2ZmKCcqJyk7XG4gIHRoaXMuJCA9IFtdO1xufTtcblxuLyoqXG4gKiBFbWl0XG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHBhdGhcbiAqL1xucHJvdC5lID0gZnVuY3Rpb24ocGF0aCkge1xuICB0aGlzLiQuY29uY2F0KCdAJykuc29tZShmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICB2YXIgYXJncyA9IChmaWx0ZXIgPT09ICdAJyA/IHBhcnNlciA6IHNlY29uZFBhcnNlcikobm9ybWFsaXplKHBhdGgpLCBub3JtYWxpemUoZmlsdGVyKSk7XG4gICAgaWYgKHR5cGVvZiBhcmdzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzW1RSSUdHRVJdLmFwcGx5KG51bGwsIFtmaWx0ZXJdLmNvbmNhdChhcmdzKSk7XG4gICAgICByZXR1cm4gcm91dGVGb3VuZCA9IHRydWUgLy8gZXhpdCBmcm9tIGxvb3BcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByb3V0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIGZpbHRlciBmb3IgbWF0Y2hpbmcgdG8gdXJsXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBhY3Rpb24gLSBhY3Rpb24gdG8gcmVnaXN0ZXJcbiAqL1xucHJvdC5yID0gZnVuY3Rpb24oZmlsdGVyLCBhY3Rpb24pIHtcbiAgaWYgKGZpbHRlciAhPT0gJ0AnKSB7XG4gICAgZmlsdGVyID0gJy8nICsgbm9ybWFsaXplKGZpbHRlcik7XG4gICAgdGhpcy4kLnB1c2goZmlsdGVyKTtcbiAgfVxuXG4gIHRoaXMub24oZmlsdGVyLCBhY3Rpb24pO1xufTtcblxudmFyIG1haW5Sb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG52YXIgcm91dGUgPSBtYWluUm91dGVyLm0uYmluZChtYWluUm91dGVyKTtcblxuLy8gYWRkaW5nIGJhc2UgYW5kIGdldFBhdGhGcm9tQmFzZSB0byByb3V0ZSBzbyB3ZSBjYW4gYWNjZXNzIHRoZW0gaW4gcm91dGUudGFnJ3Mgc2NyaXB0XG5yb3V0ZS5fID0geyBiYXNlOiBudWxsLCBnZXRQYXRoRnJvbUJhc2U6IGdldFBhdGhGcm9tQmFzZSB9O1xuXG4vKipcbiAqIENyZWF0ZSBhIHN1YiByb3V0ZXJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gdGhlIG1ldGhvZCBvZiBhIG5ldyBSb3V0ZXIgb2JqZWN0XG4gKi9cbnJvdXRlLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmV3U3ViUm91dGVyID0gbmV3IFJvdXRlcigpO1xuICAvLyBhc3NpZ24gc3ViLXJvdXRlcidzIG1haW4gbWV0aG9kXG4gIHZhciByb3V0ZXIgPSBuZXdTdWJSb3V0ZXIubS5iaW5kKG5ld1N1YlJvdXRlcik7XG4gIC8vIHN0b3Agb25seSB0aGlzIHN1Yi1yb3V0ZXJcbiAgcm91dGVyLnN0b3AgPSBuZXdTdWJSb3V0ZXIucy5iaW5kKG5ld1N1YlJvdXRlcik7XG4gIHJldHVybiByb3V0ZXJcbn07XG5cbi8qKlxuICogU2V0IHRoZSBiYXNlIG9mIHVybFxuICogQHBhcmFtIHsoc3RyfFJlZ0V4cCl9IGFyZyAtIGEgbmV3IGJhc2Ugb3IgJyMnIG9yICcjISdcbiAqL1xucm91dGUuYmFzZSA9IGZ1bmN0aW9uKGFyZykge1xuICByb3V0ZS5fLmJhc2UgPSBhcmcgfHwgJyMnO1xuICBjdXJyZW50ID0gZ2V0UGF0aEZyb21CYXNlKCk7IC8vIHJlY2FsY3VsYXRlIGN1cnJlbnQgcGF0aFxufTtcblxuLyoqIEV4ZWMgcm91dGluZyByaWdodCBub3cgKiovXG5yb3V0ZS5leGVjID0gZnVuY3Rpb24oKSB7XG4gIGVtaXQodHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIGRlZmF1bHQgcm91dGVyIHRvIHlvdXJzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHlvdXIgcGFyc2VyIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbjIgLSB5b3VyIHNlY29uZFBhcnNlciBmdW5jdGlvblxuICovXG5yb3V0ZS5wYXJzZXIgPSBmdW5jdGlvbihmbiwgZm4yKSB7XG4gIGlmICghZm4gJiYgIWZuMikge1xuICAgIC8vIHJlc2V0IHBhcnNlciBmb3IgdGVzdGluZy4uLlxuICAgIHBhcnNlciA9IERFRkFVTFRfUEFSU0VSO1xuICAgIHNlY29uZFBhcnNlciA9IERFRkFVTFRfU0VDT05EX1BBUlNFUjtcbiAgfVxuICBpZiAoZm4pIHsgcGFyc2VyID0gZm47IH1cbiAgaWYgKGZuMikgeyBzZWNvbmRQYXJzZXIgPSBmbjI7IH1cbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB1cmwgcXVlcnkgYXMgYW4gb2JqZWN0XG4gKiBAcmV0dXJucyB7b2JqZWN0fSBwYXJzZWQgcXVlcnlcbiAqL1xucm91dGUucXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHEgPSB7fTtcbiAgdmFyIGhyZWYgPSBsb2MuaHJlZiB8fCBjdXJyZW50O1xuICBocmVmLnJlcGxhY2UoL1s/Jl0oLis/KT0oW14mXSopL2csIGZ1bmN0aW9uKF8sIGssIHYpIHsgcVtrXSA9IHY7IH0pO1xuICByZXR1cm4gcVxufTtcblxuLyoqIFN0b3Agcm91dGluZyAqKi9cbnJvdXRlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChzdGFydGVkKSB7XG4gICAgaWYgKHdpbikge1xuICAgICAgd2luW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0oUE9QU1RBVEUsIGRlYm91bmNlZEVtaXQpO1xuICAgICAgd2luW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0oSEFTSENIQU5HRSwgZGVib3VuY2VkRW1pdCk7XG4gICAgICBkb2NbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXShjbGlja0V2ZW50LCBjbGljayk7XG4gICAgfVxuXG4gICAgY2VudHJhbFtUUklHR0VSXSgnc3RvcCcpO1xuICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydCByb3V0aW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9FeGVjIC0gYXV0b21hdGljYWxseSBleGVjIGFmdGVyIHN0YXJ0aW5nIGlmIHRydWVcbiAqL1xucm91dGUuc3RhcnQgPSBmdW5jdGlvbiAoYXV0b0V4ZWMpIHtcbiAgaWYgKCFzdGFydGVkKSB7XG4gICAgaWYgKHdpbikge1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBzdGFydChhdXRvRXhlYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgICAgIC8vIHRoZSB0aW1lb3V0IGlzIG5lZWRlZCB0byBzb2x2ZVxuICAgICAgICAgICAgLy8gYSB3ZWlyZCBzYWZhcmkgYnVnIGh0dHBzOi8vZ2l0aHViLmNvbS9yaW90L3JvdXRlL2lzc3Vlcy8zM1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgc3RhcnQoYXV0b0V4ZWMpOyB9LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKiBQcmVwYXJlIHRoZSByb3V0ZXIgKiovXG5yb3V0ZS5iYXNlKCk7XG5yb3V0ZS5wYXJzZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGU7XG4iLCJpbXBvcnQgcmlvdCBmcm9tICdyaW90JztcbmltcG9ydCByb3V0ZSBmcm9tICdyaW90LXJvdXRlJztcblxucmlvdC50YWcyKCdyb3V0ZXInLCAnPHlpZWxkPjwveWllbGQ+JywgJycsICcnLCBmdW5jdGlvbihvcHRzKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cblxuICAgIHRoaXMucm91dGUgPSByb3V0ZS5jcmVhdGUoKTtcbiAgICB0aGlzLnNlbGVjdCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIFtdLmNvbmNhdCh0aGlzJDEudGFncy5yb3V0ZSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuc2hvdyA9IChyID09PSB0YXJnZXQpOyB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5vbignbW91bnQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJvdXRlLnN0YXJ0KHRydWUpOyB9LCAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3VubW91bnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEucm91dGUuc3RvcCgpO1xuICAgIH0pO1xufSk7XG5cbnJpb3QudGFnMigncm91dGUnLCAnPHZpcnR1YWwgaWY9XCJ7c2hvd31cIj48eWllbGQ+PC95aWVsZD48L3ZpcnR1YWw+JywgJycsICcnLCBmdW5jdGlvbihvcHRzKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICB2YXIgc2hvd1JvdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cblxuICAgICAgdGhpcyQxLm9uZSgndXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmxhdHRlbih0aGlzJDEudGFncykuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgdGFnLnRyaWdnZXIuYXBwbHkodGFnLCBbICdyb3V0ZScgXS5jb25jYXQoIGFyZ3MgKSk7XG4gICAgICAgICAgdGFnLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcyQxLnBhcmVudC5zZWxlY3QodGhpcyQxKTtcbiAgICAgIHRoaXMkMS5wYXJlbnQudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIHZhciBnZXRQYXRoRnJvbUJhc2UgPSAhIXdpbmRvdyAmJiAhIXdpbmRvdy5yb3V0ZSAmJiAhIXdpbmRvdy5yb3V0ZS5fXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cucm91dGUuXy5nZXRQYXRoRnJvbUJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9O1xuXG4gICAgaWYob3B0cy5wYXRoID09PSBnZXRQYXRoRnJvbUJhc2UoKSl7XG5cbiAgICAgIHNldFRpbWVvdXQoc2hvd1JvdXRlLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudC5yb3V0ZShvcHRzLnBhdGgsIHNob3dSb3V0ZSk7XG5cbiAgICBmdW5jdGlvbiBmbGF0dGVuKHRhZ3MpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0YWdzKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHRhZ3Nba2V5XTsgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWcpIHsgcmV0dXJuIGFjYy5jb25jYXQodGFnKTsgfSwgW10pXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlO1xuIiwiLyogUmlvdCB2My4xMy4yLCBAbGljZW5zZSBNSVQgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKGdsb2JhbC5yaW90ID0ge30pKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFNob3J0ZXIgYW5kIGZhc3Qgd2F5IHRvIHNlbGVjdCBhIHNpbmdsZSBub2RlIGluIHRoZSBET01cbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBzZWxlY3RvciAtIHVuaXF1ZSBkb20gc2VsZWN0b3JcbiAgICogQHBhcmFtICAgeyBPYmplY3QgfSBjdHggLSBET00gbm9kZSB3aGVyZSB0aGUgdGFyZ2V0IG9mIG91ciBzZWFyY2ggd2lsbCBpcyBsb2NhdGVkXG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZG9tIG5vZGUgZm91bmRcbiAgICovXG4gIGZ1bmN0aW9uICQoc2VsZWN0b3IsIGN0eCkge1xuICAgIHJldHVybiAoY3R4IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgdmFyXG4gICAgLy8gYmUgYXdhcmUsIGludGVybmFsIHVzYWdlXG4gICAgLy8gQVRURU5USU9OOiBwcmVmaXggdGhlIGdsb2JhbCBkeW5hbWljIHZhcmlhYmxlcyB3aXRoIGBfX2BcbiAgICAvLyB0YWdzIGluc3RhbmNlcyBjYWNoZVxuICAgIF9fVEFHU19DQUNIRSA9IFtdLFxuICAgIC8vIHRhZ3MgaW1wbGVtZW50YXRpb24gY2FjaGVcbiAgICBfX1RBR19JTVBMID0ge30sXG4gICAgWUlFTERfVEFHID0gJ3lpZWxkJyxcblxuICAgIC8qKlxuICAgICAqIENvbnN0XG4gICAgICovXG4gICAgR0xPQkFMX01JWElOID0gJ19fZ2xvYmFsX21peGluJyxcblxuICAgIC8vIHJpb3Qgc3BlY2lmaWMgcHJlZml4ZXMgb3IgYXR0cmlidXRlc1xuICAgIEFUVFJTX1BSRUZJWCA9ICdyaW90LScsXG5cbiAgICAvLyBSaW90IERpcmVjdGl2ZXNcbiAgICBSRUZfRElSRUNUSVZFUyA9IFsncmVmJywgJ2RhdGEtcmVmJ10sXG4gICAgSVNfRElSRUNUSVZFID0gJ2RhdGEtaXMnLFxuICAgIENPTkRJVElPTkFMX0RJUkVDVElWRSA9ICdpZicsXG4gICAgTE9PUF9ESVJFQ1RJVkUgPSAnZWFjaCcsXG4gICAgTE9PUF9OT19SRU9SREVSX0RJUkVDVElWRSA9ICduby1yZW9yZGVyJyxcbiAgICBTSE9XX0RJUkVDVElWRSA9ICdzaG93JyxcbiAgICBISURFX0RJUkVDVElWRSA9ICdoaWRlJyxcbiAgICBLRVlfRElSRUNUSVZFID0gJ2tleScsXG4gICAgUklPVF9FVkVOVFNfS0VZID0gJ19fcmlvdC1ldmVudHNfXycsXG5cbiAgICAvLyBmb3IgdHlwZW9mID09ICcnIGNvbXBhcmlzb25zXG4gICAgVF9TVFJJTkcgPSAnc3RyaW5nJyxcbiAgICBUX09CSkVDVCA9ICdvYmplY3QnLFxuICAgIFRfVU5ERUYgID0gJ3VuZGVmaW5lZCcsXG4gICAgVF9GVU5DVElPTiA9ICdmdW5jdGlvbicsXG5cbiAgICBYTElOS19OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyxcbiAgICBTVkdfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgIFhMSU5LX1JFR0VYID0gL154bGluazooXFx3KykvLFxuXG4gICAgV0lOID0gdHlwZW9mIHdpbmRvdyA9PT0gVF9VTkRFRiA/IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHVuZGVmaW5lZCA6IHdpbmRvdyxcblxuICAgIC8vIHNwZWNpYWwgbmF0aXZlIHRhZ3MgdGhhdCBjYW5ub3QgYmUgdHJlYXRlZCBsaWtlIHRoZSBvdGhlcnNcbiAgICBSRV9TUEVDSUFMX1RBR1MgPSAvXig/OnQoPzpib2R5fGhlYWR8Zm9vdHxbcmhkXSl8Y2FwdGlvbnxjb2woPzpncm91cCk/fG9wdCg/Omlvbnxncm91cCkpJC8sXG4gICAgUkVfU1BFQ0lBTF9UQUdTX05PX09QVElPTiA9IC9eKD86dCg/OmJvZHl8aGVhZHxmb290fFtyaGRdKXxjYXB0aW9ufGNvbCg/Omdyb3VwKT8pJC8sXG4gICAgUkVfRVZFTlRTX1BSRUZJWCA9IC9eb24vLFxuICAgIFJFX0hUTUxfQVRUUlMgPSAvKFstXFx3XSspID89ID8oPzpcIihbXlwiXSopfCcoW14nXSopfCh7W159XSp9KSkvZyxcbiAgICAvLyBzb21lIERPTSBhdHRyaWJ1dGVzIG11c3QgYmUgbm9ybWFsaXplZFxuICAgIENBU0VfU0VOU0lUSVZFX0FUVFJJQlVURVMgPSB7XG4gICAgICAndmlld2JveCc6ICd2aWV3Qm94JyxcbiAgICAgICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJzogJ3ByZXNlcnZlQXNwZWN0UmF0aW8nXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBNYXRjaGVzIGJvb2xlYW4gSFRNTCBhdHRyaWJ1dGVzIGluIHRoZSByaW90IHRhZyBkZWZpbml0aW9uLlxuICAgICAqIFdpdGggYSBsb25nIGxpc3QgbGlrZSB0aGlzLCBhIHJlZ2V4IGlzIGZhc3RlciB0aGFuIGBbXS5pbmRleE9mYCBpbiBtb3N0IGJyb3dzZXJzLlxuICAgICAqIEBjb25zdCB7UmVnRXhwfVxuICAgICAqIEBzZWUgW2F0dHJpYnV0ZXMubWRdKGh0dHBzOi8vZ2l0aHViLmNvbS9yaW90L2NvbXBpbGVyL2Jsb2IvZGV2L2RvYy9hdHRyaWJ1dGVzLm1kKVxuICAgICAqL1xuICAgIFJFX0JPT0xfQVRUUlMgPSAvXig/OmRpc2FibGVkfGNoZWNrZWR8cmVhZG9ubHl8cmVxdWlyZWR8YWxsb3dmdWxsc2NyZWVufGF1dG8oPzpmb2N1c3xwbGF5KXxjb21wYWN0fGNvbnRyb2xzfGRlZmF1bHR8Zm9ybW5vdmFsaWRhdGV8aGlkZGVufGlzbWFwfGl0ZW1zY29wZXxsb29wfG11bHRpcGxlfG11dGVkfG5vKD86cmVzaXplfHNoYWRlfHZhbGlkYXRlfHdyYXApP3xvcGVufHJldmVyc2VkfHNlYW1sZXNzfHNlbGVjdGVkfHNvcnRhYmxlfHRydWVzcGVlZHx0eXBlbXVzdG1hdGNoKSQvLFxuICAgIC8vIHZlcnNpb24jIGZvciBJRSA4LTExLCAwIGZvciBvdGhlcnNcbiAgICBJRV9WRVJTSU9OID0gKFdJTiAmJiBXSU4uZG9jdW1lbnQgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge30pLmRvY3VtZW50TW9kZSB8IDA7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGdlbmVyaWMgRE9NIG5vZGVcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBuYW1lIC0gbmFtZSBvZiB0aGUgRE9NIG5vZGUgd2Ugd2FudCB0byBjcmVhdGVcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSBET00gbm9kZSBqdXN0IGNyZWF0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIG1ha2VFbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3N2ZycgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05TLCBuYW1lKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYW55IERPTSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtIHsgT2JqZWN0IH0gZG9tIC0gRE9NIG5vZGUgd2Ugd2FudCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSAtIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdlIHdhbnQgdG8gc2V0XG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IHZhbCAtIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSB3ZSB3YW50IHRvIHNldFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlKGRvbSwgbmFtZSwgdmFsKSB7XG4gICAgdmFyIHhsaW5rID0gWExJTktfUkVHRVguZXhlYyhuYW1lKTtcbiAgICBpZiAoeGxpbmsgJiYgeGxpbmtbMV0pXG4gICAgICB7IGRvbS5zZXRBdHRyaWJ1dGVOUyhYTElOS19OUywgeGxpbmtbMV0sIHZhbCk7IH1cbiAgICBlbHNlXG4gICAgICB7IGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsKTsgfVxuICB9XG5cbiAgdmFyIHN0eWxlTm9kZTtcbiAgLy8gQ3JlYXRlIGNhY2hlIGFuZCBzaG9ydGN1dCB0byB0aGUgY29ycmVjdCBwcm9wZXJ0eVxuICB2YXIgY3NzVGV4dFByb3A7XG4gIHZhciBieU5hbWUgPSB7fTtcbiAgdmFyIG5lZWRzSW5qZWN0ID0gZmFsc2U7XG5cbiAgLy8gc2tpcCB0aGUgZm9sbG93aW5nIGNvZGUgb24gdGhlIHNlcnZlclxuICBpZiAoV0lOKSB7XG4gICAgc3R5bGVOb2RlID0gKChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjcmVhdGUgYSBuZXcgc3R5bGUgZWxlbWVudCB3aXRoIHRoZSBjb3JyZWN0IHR5cGVcbiAgICAgIHZhciBuZXdOb2RlID0gbWFrZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAvLyByZXBsYWNlIGFueSB1c2VyIG5vZGUgb3IgaW5zZXJ0IHRoZSBuZXcgb25lIGludG8gdGhlIGhlYWRcbiAgICAgIHZhciB1c2VyTm9kZSA9ICQoJ3N0eWxlW3R5cGU9cmlvdF0nKTtcblxuICAgICAgc2V0QXR0cmlidXRlKG5ld05vZGUsICd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKHVzZXJOb2RlKSB7XG4gICAgICAgIGlmICh1c2VyTm9kZS5pZCkgeyBuZXdOb2RlLmlkID0gdXNlck5vZGUuaWQ7IH1cbiAgICAgICAgdXNlck5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgdXNlck5vZGUpO1xuICAgICAgfSBlbHNlIHsgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdOb2RlKTsgfVxuXG4gICAgICByZXR1cm4gbmV3Tm9kZVxuICAgIH0pKSgpO1xuICAgIGNzc1RleHRQcm9wID0gc3R5bGVOb2RlLnN0eWxlU2hlZXQ7XG4gIH1cblxuICAvKipcbiAgICogT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGluamVjdCBhbmQgbWFuYWdlIHRoZSBjc3Mgb2YgZXZlcnkgdGFnIGluc3RhbmNlXG4gICAqL1xuICB2YXIgc3R5bGVNYW5hZ2VyID0ge1xuICAgIHN0eWxlTm9kZTogc3R5bGVOb2RlLFxuICAgIC8qKlxuICAgICAqIFNhdmUgYSB0YWcgc3R5bGUgdG8gYmUgbGF0ZXIgaW5qZWN0ZWQgaW50byBET01cbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBjc3MgLSBjc3Mgc3RyaW5nXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSAtIGlmIGl0J3MgcGFzc2VkIHdlIHdpbGwgbWFwIHRoZSBjc3MgdG8gYSB0YWduYW1lXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY3NzLCBuYW1lKSB7XG4gICAgICBieU5hbWVbbmFtZV0gPSBjc3M7XG4gICAgICBuZWVkc0luamVjdCA9IHRydWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBJbmplY3QgYWxsIHByZXZpb3VzbHkgc2F2ZWQgdGFnIHN0eWxlcyBpbnRvIERPTVxuICAgICAqIGlubmVySFRNTCBzZWVtcyBzbG93OiBodHRwOi8vanNwZXJmLmNvbS9yaW90LWluc2VydC1zdHlsZVxuICAgICAqL1xuICAgIGluamVjdDogZnVuY3Rpb24gaW5qZWN0KCkge1xuICAgICAgaWYgKCFXSU4gfHwgIW5lZWRzSW5qZWN0KSB7IHJldHVybiB9XG4gICAgICBuZWVkc0luamVjdCA9IGZhbHNlO1xuICAgICAgdmFyIHN0eWxlID0gT2JqZWN0LmtleXMoYnlOYW1lKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBieU5hbWVba107IH0pXG4gICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoY3NzVGV4dFByb3ApIHsgY3NzVGV4dFByb3AuY3NzVGV4dCA9IHN0eWxlOyB9XG4gICAgICBlbHNlIHsgc3R5bGVOb2RlLmlubmVySFRNTCA9IHN0eWxlOyB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHRhZyBzdHlsZSBvZiBpbmplY3RlZCBET00gbGF0ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgYSByZWdpc3RlcmVkIHRhZ25hbWVcbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICBkZWxldGUgYnlOYW1lW25hbWVdO1xuICAgICAgbmVlZHNJbmplY3QgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIHJpb3QgdGVtcGxhdGUgZW5naW5lXG4gICAqIEB2ZXJzaW9uIHYzLjAuOFxuICAgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgc2tpcFJlZ2V4ID0gKGZ1bmN0aW9uICgpIHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICB2YXIgYmVmb3JlUmVDaGFycyA9ICdbeygsOzo/PXwmIV5+PiUqLyc7XG5cbiAgICB2YXIgYmVmb3JlUmVXb3JkcyA9IFtcbiAgICAgICdjYXNlJyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICdkbycsXG4gICAgICAnZWxzZScsXG4gICAgICAnaW4nLFxuICAgICAgJ2luc3RhbmNlb2YnLFxuICAgICAgJ3ByZWZpeCcsXG4gICAgICAncmV0dXJuJyxcbiAgICAgICd0eXBlb2YnLFxuICAgICAgJ3ZvaWQnLFxuICAgICAgJ3lpZWxkJ1xuICAgIF07XG5cbiAgICB2YXIgd29yZHNMYXN0Q2hhciA9IGJlZm9yZVJlV29yZHMucmVkdWNlKGZ1bmN0aW9uIChzLCB3KSB7XG4gICAgICByZXR1cm4gcyArIHcuc2xpY2UoLTEpXG4gICAgfSwgJycpO1xuXG4gICAgdmFyIFJFX1JFR0VYID0gL15cXC8oPz1bXio+L10pW15bL1xcXFxdKig/Oig/OlxcXFwufFxcWyg/OlxcXFwufFteXFxdXFxcXF0qKSpcXF0pW15bXFxcXC9dKikqP1xcL1tnaW11eV0qLztcbiAgICB2YXIgUkVfVk5fQ0hBUiA9IC9bJFxcd10vO1xuXG4gICAgZnVuY3Rpb24gcHJldiAoY29kZSwgcG9zKSB7XG4gICAgICB3aGlsZSAoLS1wb3MgPj0gMCAmJiAvXFxzLy50ZXN0KGNvZGVbcG9zXSkpeyB9XG4gICAgICByZXR1cm4gcG9zXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3NraXBSZWdleCAoY29kZSwgc3RhcnQpIHtcblxuICAgICAgdmFyIHJlID0gLy4qL2c7XG4gICAgICB2YXIgcG9zID0gcmUubGFzdEluZGV4ID0gc3RhcnQrKztcbiAgICAgIHZhciBtYXRjaCA9IHJlLmV4ZWMoY29kZSlbMF0ubWF0Y2goUkVfUkVHRVgpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIG5leHQgPSBwb3MgKyBtYXRjaFswXS5sZW5ndGg7XG5cbiAgICAgICAgcG9zID0gcHJldihjb2RlLCBwb3MpO1xuICAgICAgICB2YXIgYyA9IGNvZGVbcG9zXTtcblxuICAgICAgICBpZiAocG9zIDwgMCB8fCB+YmVmb3JlUmVDaGFycy5pbmRleE9mKGMpKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjID09PSAnLicpIHtcblxuICAgICAgICAgIGlmIChjb2RlW3BvcyAtIDFdID09PSAnLicpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gbmV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChjID09PSAnKycgfHwgYyA9PT0gJy0nKSB7XG5cbiAgICAgICAgICBpZiAoY29kZVstLXBvc10gIT09IGMgfHxcbiAgICAgICAgICAgICAgKHBvcyA9IHByZXYoY29kZSwgcG9zKSkgPCAwIHx8XG4gICAgICAgICAgICAgICFSRV9WTl9DSEFSLnRlc3QoY29kZVtwb3NdKSkge1xuICAgICAgICAgICAgc3RhcnQgPSBuZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKH53b3Jkc0xhc3RDaGFyLmluZGV4T2YoYykpIHtcblxuICAgICAgICAgIHZhciBlbmQgPSBwb3MgKyAxO1xuXG4gICAgICAgICAgd2hpbGUgKC0tcG9zID49IDAgJiYgUkVfVk5fQ0hBUi50ZXN0KGNvZGVbcG9zXSkpeyB9XG4gICAgICAgICAgaWYgKH5iZWZvcmVSZVdvcmRzLmluZGV4T2YoY29kZS5zbGljZShwb3MgKyAxLCBlbmQpKSkge1xuICAgICAgICAgICAgc3RhcnQgPSBuZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhcnRcbiAgICB9XG5cbiAgICByZXR1cm4gX3NraXBSZWdleFxuXG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIHJpb3QudXRpbC5icmFja2V0c1xuICAgKlxuICAgKiAtIGBicmFja2V0cyAgICBgIC0gUmV0dXJucyBhIHN0cmluZyBvciByZWdleCBiYXNlZCBvbiBpdHMgcGFyYW1ldGVyXG4gICAqIC0gYGJyYWNrZXRzLnNldGAgLSBDaGFuZ2UgdGhlIGN1cnJlbnQgcmlvdCBicmFja2V0c1xuICAgKlxuICAgKiBAbW9kdWxlXG4gICAqL1xuXG4gIC8qIGdsb2JhbCByaW90ICovXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgdmFyIGJyYWNrZXRzID0gKGZ1bmN0aW9uIChVTkRFRikge1xuXG4gICAgdmFyXG4gICAgICBSRUdMT0IgPSAnZycsXG5cbiAgICAgIFJfTUxDT01NUyA9IC9cXC9cXCpbXipdKlxcKisoPzpbXipcXC9dW14qXSpcXCorKSpcXC8vZyxcblxuICAgICAgUl9TVFJJTkdTID0gL1wiW15cIlxcXFxdKig/OlxcXFxbXFxTXFxzXVteXCJcXFxcXSopKlwifCdbXidcXFxcXSooPzpcXFxcW1xcU1xcc11bXidcXFxcXSopKid8YFteYFxcXFxdKig/OlxcXFxbXFxTXFxzXVteYFxcXFxdKikqYC9nLFxuXG4gICAgICBTX1FCTE9DS1MgPSBSX1NUUklOR1Muc291cmNlICsgJ3wnICtcbiAgICAgICAgLyg/OlxcYnJldHVyblxccyt8KD86WyRcXHdcXClcXF1dfFxcK1xcK3wtLSlcXHMqKFxcLykoPyFbKlxcL10pKS8uc291cmNlICsgJ3wnICtcbiAgICAgICAgL1xcLyg/PVteKlxcL10pW15bXFwvXFxcXF0qKD86KD86XFxbKD86XFxcXC58W15cXF1cXFxcXSopKlxcXXxcXFxcLilbXltcXC9cXFxcXSopKj8oW148XVxcLylbZ2ltXSovLnNvdXJjZSxcblxuICAgICAgVU5TVVBQT1JURUQgPSBSZWdFeHAoJ1tcXFxcJyArICd4MDAtXFxcXHgxRjw+YS16QS1aMC05XFwnXCIsO1xcXFxcXFxcXScpLFxuXG4gICAgICBORUVEX0VTQ0FQRSA9IC8oPz1bW1xcXSgpKis/Ll4kfF0pL2csXG5cbiAgICAgIFNfUUJMT0NLMiA9IFJfU1RSSU5HUy5zb3VyY2UgKyAnfCcgKyAvKFxcLykoPyFbKlxcL10pLy5zb3VyY2UsXG5cbiAgICAgIEZJTkRCUkFDRVMgPSB7XG4gICAgICAgICcoJzogUmVnRXhwKCcoWygpXSl8JyAgICsgU19RQkxPQ0syLCBSRUdMT0IpLFxuICAgICAgICAnWyc6IFJlZ0V4cCgnKFtbXFxcXF1dKXwnICsgU19RQkxPQ0syLCBSRUdMT0IpLFxuICAgICAgICAneyc6IFJlZ0V4cCgnKFt7fV0pfCcgICArIFNfUUJMT0NLMiwgUkVHTE9CKVxuICAgICAgfSxcblxuICAgICAgREVGQVVMVCA9ICd7IH0nO1xuXG4gICAgdmFyIF9wYWlycyA9IFtcbiAgICAgICd7JywgJ30nLFxuICAgICAgJ3snLCAnfScsXG4gICAgICAve1tefV0qfS8sXG4gICAgICAvXFxcXChbe31dKS9nLFxuICAgICAgL1xcXFwoeyl8ey9nLFxuICAgICAgUmVnRXhwKCdcXFxcXFxcXCh9KXwoW1soe10pfCh9KXwnICsgU19RQkxPQ0syLCBSRUdMT0IpLFxuICAgICAgREVGQVVMVCxcbiAgICAgIC9eXFxzKntcXF4/XFxzKihbJFxcd10rKSg/OlxccyosXFxzKihcXFMrKSk/XFxzK2luXFxzKyhcXFMuKilcXHMqfS8sXG4gICAgICAvKF58W15cXFxcXSl7PVtcXFNcXHNdKj99L1xuICAgIF07XG5cbiAgICB2YXJcbiAgICAgIGNhY2hlZEJyYWNrZXRzID0gVU5ERUYsXG4gICAgICBfcmVnZXgsXG4gICAgICBfY2FjaGUgPSBbXSxcbiAgICAgIF9zZXR0aW5ncztcblxuICAgIGZ1bmN0aW9uIF9sb29wYmFjayAocmUpIHsgcmV0dXJuIHJlIH1cblxuICAgIGZ1bmN0aW9uIF9yZXdyaXRlIChyZSwgYnApIHtcbiAgICAgIGlmICghYnApIHsgYnAgPSBfY2FjaGU7IH1cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICByZS5zb3VyY2UucmVwbGFjZSgvey9nLCBicFsyXSkucmVwbGFjZSgvfS9nLCBicFszXSksIHJlLmdsb2JhbCA/IFJFR0xPQiA6ICcnXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZSAocGFpcikge1xuICAgICAgaWYgKHBhaXIgPT09IERFRkFVTFQpIHsgcmV0dXJuIF9wYWlycyB9XG5cbiAgICAgIHZhciBhcnIgPSBwYWlyLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmIChhcnIubGVuZ3RoICE9PSAyIHx8IFVOU1VQUE9SVEVELnRlc3QocGFpcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBicmFja2V0cyBcIicgKyBwYWlyICsgJ1wiJylcbiAgICAgIH1cbiAgICAgIGFyciA9IGFyci5jb25jYXQocGFpci5yZXBsYWNlKE5FRURfRVNDQVBFLCAnXFxcXCcpLnNwbGl0KCcgJykpO1xuXG4gICAgICBhcnJbNF0gPSBfcmV3cml0ZShhcnJbMV0ubGVuZ3RoID4gMSA/IC97W1xcU1xcc10qP30vIDogX3BhaXJzWzRdLCBhcnIpO1xuICAgICAgYXJyWzVdID0gX3Jld3JpdGUocGFpci5sZW5ndGggPiAzID8gL1xcXFwoe3x9KS9nIDogX3BhaXJzWzVdLCBhcnIpO1xuICAgICAgYXJyWzZdID0gX3Jld3JpdGUoX3BhaXJzWzZdLCBhcnIpO1xuICAgICAgYXJyWzddID0gUmVnRXhwKCdcXFxcXFxcXCgnICsgYXJyWzNdICsgJyl8KFtbKHtdKXwoJyArIGFyclszXSArICcpfCcgKyBTX1FCTE9DSzIsIFJFR0xPQik7XG4gICAgICBhcnJbOF0gPSBwYWlyO1xuICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9icmFja2V0cyAocmVPcklkeCkge1xuICAgICAgcmV0dXJuIHJlT3JJZHggaW5zdGFuY2VvZiBSZWdFeHAgPyBfcmVnZXgocmVPcklkeCkgOiBfY2FjaGVbcmVPcklkeF1cbiAgICB9XG5cbiAgICBfYnJhY2tldHMuc3BsaXQgPSBmdW5jdGlvbiBzcGxpdCAoc3RyLCB0bXBsLCBfYnApIHtcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBfYnAgaXMgZm9yIHRoZSBjb21waWxlclxuICAgICAgaWYgKCFfYnApIHsgX2JwID0gX2NhY2hlOyB9XG5cbiAgICAgIHZhclxuICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgaXNleHByLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgcG9zLFxuICAgICAgICByZSA9IF9icFs2XTtcblxuICAgICAgdmFyIHFibG9ja3MgPSBbXTtcbiAgICAgIHZhciBwcmV2U3RyID0gJyc7XG4gICAgICB2YXIgbWFyaywgbGFzdEluZGV4O1xuXG4gICAgICBpc2V4cHIgPSBzdGFydCA9IHJlLmxhc3RJbmRleCA9IDA7XG5cbiAgICAgIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKHN0cikpKSB7XG5cbiAgICAgICAgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICBwb3MgPSBtYXRjaC5pbmRleDtcblxuICAgICAgICBpZiAoaXNleHByKSB7XG5cbiAgICAgICAgICBpZiAobWF0Y2hbMl0pIHtcblxuICAgICAgICAgICAgdmFyIGNoID0gbWF0Y2hbMl07XG4gICAgICAgICAgICB2YXIgcmVjaCA9IEZJTkRCUkFDRVNbY2hdO1xuICAgICAgICAgICAgdmFyIGl4ID0gMTtcblxuICAgICAgICAgICAgcmVjaC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICB3aGlsZSAoKG1hdGNoID0gcmVjaC5leGVjKHN0cikpKSB7XG4gICAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSA9PT0gY2gpIHsgKytpeDsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEtLWl4KSB7IGJyZWFrIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNoLmxhc3RJbmRleCA9IHB1c2hRQmxvY2sobWF0Y2guaW5kZXgsIHJlY2gubGFzdEluZGV4LCBtYXRjaFsyXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlLmxhc3RJbmRleCA9IGl4ID8gc3RyLmxlbmd0aCA6IHJlY2gubGFzdEluZGV4O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW1hdGNoWzNdKSB7XG4gICAgICAgICAgICByZS5sYXN0SW5kZXggPSBwdXNoUUJsb2NrKHBvcywgbGFzdEluZGV4LCBtYXRjaFs0XSk7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWF0Y2hbMV0pIHtcbiAgICAgICAgICB1bmVzY2FwZVN0cihzdHIuc2xpY2Uoc3RhcnQsIHBvcykpO1xuICAgICAgICAgIHN0YXJ0ID0gcmUubGFzdEluZGV4O1xuICAgICAgICAgIHJlID0gX2JwWzYgKyAoaXNleHByIF49IDEpXTtcbiAgICAgICAgICByZS5sYXN0SW5kZXggPSBzdGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RyICYmIHN0YXJ0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB1bmVzY2FwZVN0cihzdHIuc2xpY2Uoc3RhcnQpKTtcbiAgICAgIH1cblxuICAgICAgcGFydHMucWJsb2NrcyA9IHFibG9ja3M7XG5cbiAgICAgIHJldHVybiBwYXJ0c1xuXG4gICAgICBmdW5jdGlvbiB1bmVzY2FwZVN0ciAocykge1xuICAgICAgICBpZiAocHJldlN0cikge1xuICAgICAgICAgIHMgPSBwcmV2U3RyICsgcztcbiAgICAgICAgICBwcmV2U3RyID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRtcGwgfHwgaXNleHByKSB7XG4gICAgICAgICAgcGFydHMucHVzaChzICYmIHMucmVwbGFjZShfYnBbNV0sICckMScpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJ0cy5wdXNoKHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHB1c2hRQmxvY2soX3BvcywgX2xhc3RJbmRleCwgc2xhc2gpIHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGlmIChzbGFzaCkge1xuICAgICAgICAgIF9sYXN0SW5kZXggPSBza2lwUmVnZXgoc3RyLCBfcG9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0bXBsICYmIF9sYXN0SW5kZXggPiBfcG9zICsgMikge1xuICAgICAgICAgIG1hcmsgPSAnXFx1MjA1NycgKyBxYmxvY2tzLmxlbmd0aCArICd+JztcbiAgICAgICAgICBxYmxvY2tzLnB1c2goc3RyLnNsaWNlKF9wb3MsIF9sYXN0SW5kZXgpKTtcbiAgICAgICAgICBwcmV2U3RyICs9IHN0ci5zbGljZShzdGFydCwgX3BvcykgKyBtYXJrO1xuICAgICAgICAgIHN0YXJ0ID0gX2xhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2xhc3RJbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICBfYnJhY2tldHMuaGFzRXhwciA9IGZ1bmN0aW9uIGhhc0V4cHIgKHN0cikge1xuICAgICAgcmV0dXJuIF9jYWNoZVs0XS50ZXN0KHN0cilcbiAgICB9O1xuXG4gICAgX2JyYWNrZXRzLmxvb3BLZXlzID0gZnVuY3Rpb24gbG9vcEtleXMgKGV4cHIpIHtcbiAgICAgIHZhciBtID0gZXhwci5tYXRjaChfY2FjaGVbOV0pO1xuXG4gICAgICByZXR1cm4gbVxuICAgICAgICA/IHsga2V5OiBtWzFdLCBwb3M6IG1bMl0sIHZhbDogX2NhY2hlWzBdICsgbVszXS50cmltKCkgKyBfY2FjaGVbMV0gfVxuICAgICAgICA6IHsgdmFsOiBleHByLnRyaW0oKSB9XG4gICAgfTtcblxuICAgIF9icmFja2V0cy5hcnJheSA9IGZ1bmN0aW9uIGFycmF5IChwYWlyKSB7XG4gICAgICByZXR1cm4gcGFpciA/IF9jcmVhdGUocGFpcikgOiBfY2FjaGVcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3Jlc2V0IChwYWlyKSB7XG4gICAgICBpZiAoKHBhaXIgfHwgKHBhaXIgPSBERUZBVUxUKSkgIT09IF9jYWNoZVs4XSkge1xuICAgICAgICBfY2FjaGUgPSBfY3JlYXRlKHBhaXIpO1xuICAgICAgICBfcmVnZXggPSBwYWlyID09PSBERUZBVUxUID8gX2xvb3BiYWNrIDogX3Jld3JpdGU7XG4gICAgICAgIF9jYWNoZVs5XSA9IF9yZWdleChfcGFpcnNbOV0pO1xuICAgICAgfVxuICAgICAgY2FjaGVkQnJhY2tldHMgPSBwYWlyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zZXRTZXR0aW5ncyAobykge1xuICAgICAgdmFyIGI7XG5cbiAgICAgIG8gPSBvIHx8IHt9O1xuICAgICAgYiA9IG8uYnJhY2tldHM7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ2JyYWNrZXRzJywge1xuICAgICAgICBzZXQ6IF9yZXNldCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWNoZWRCcmFja2V0cyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIF9zZXR0aW5ncyA9IG87XG4gICAgICBfcmVzZXQoYik7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9icmFja2V0cywgJ3NldHRpbmdzJywge1xuICAgICAgc2V0OiBfc2V0U2V0dGluZ3MsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9zZXR0aW5ncyB9XG4gICAgfSk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogaW4gdGhlIGJyb3dzZXIgcmlvdCBpcyBhbHdheXMgaW4gdGhlIHNjb3BlICovXG4gICAgX2JyYWNrZXRzLnNldHRpbmdzID0gdHlwZW9mIHJpb3QgIT09ICd1bmRlZmluZWQnICYmIHJpb3Quc2V0dGluZ3MgfHwge307XG4gICAgX2JyYWNrZXRzLnNldCA9IF9yZXNldDtcbiAgICBfYnJhY2tldHMuc2tpcFJlZ2V4ID0gc2tpcFJlZ2V4O1xuXG4gICAgX2JyYWNrZXRzLlJfU1RSSU5HUyA9IFJfU1RSSU5HUztcbiAgICBfYnJhY2tldHMuUl9NTENPTU1TID0gUl9NTENPTU1TO1xuICAgIF9icmFja2V0cy5TX1FCTE9DS1MgPSBTX1FCTE9DS1M7XG4gICAgX2JyYWNrZXRzLlNfUUJMT0NLMiA9IFNfUUJMT0NLMjtcblxuICAgIHJldHVybiBfYnJhY2tldHNcblxuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBAbW9kdWxlIHRtcGxcbiAgICpcbiAgICogdG1wbCAgICAgICAgICAtIFJvb3QgZnVuY3Rpb24sIHJldHVybnMgdGhlIHRlbXBsYXRlIHZhbHVlLCByZW5kZXIgd2l0aCBkYXRhXG4gICAqIHRtcGwuaGFzRXhwciAgLSBUZXN0IHRoZSBleGlzdGVuY2Ugb2YgYSBleHByZXNzaW9uIGluc2lkZSBhIHN0cmluZ1xuICAgKiB0bXBsLmxvb3BLZXlzIC0gR2V0IHRoZSBrZXlzIGZvciBhbiAnZWFjaCcgbG9vcCAodXNlZCBieSBgX2VhY2hgKVxuICAgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgdG1wbCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgX2NhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBfdG1wbCAoc3RyLCBkYXRhKSB7XG4gICAgICBpZiAoIXN0cikgeyByZXR1cm4gc3RyIH1cblxuICAgICAgcmV0dXJuIChfY2FjaGVbc3RyXSB8fCAoX2NhY2hlW3N0cl0gPSBfY3JlYXRlKHN0cikpKS5jYWxsKFxuICAgICAgICBkYXRhLCBfbG9nRXJyLmJpbmQoe1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgdG1wbDogc3RyXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuXG4gICAgX3RtcGwuaGFzRXhwciA9IGJyYWNrZXRzLmhhc0V4cHI7XG5cbiAgICBfdG1wbC5sb29wS2V5cyA9IGJyYWNrZXRzLmxvb3BLZXlzO1xuXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICBfdG1wbC5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkgeyBfY2FjaGUgPSB7fTsgfTtcblxuICAgIF90bXBsLmVycm9ySGFuZGxlciA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBfbG9nRXJyIChlcnIsIGN0eCkge1xuXG4gICAgICBlcnIucmlvdERhdGEgPSB7XG4gICAgICAgIHRhZ05hbWU6IGN0eCAmJiBjdHguX18gJiYgY3R4Ll9fLnRhZ05hbWUsXG4gICAgICAgIF9yaW90X2lkOiBjdHggJiYgY3R4Ll9yaW90X2lkICAvL2VzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RtcGwuZXJyb3JIYW5kbGVyKSB7IF90bXBsLmVycm9ySGFuZGxlcihlcnIpOyB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCc8JXM+ICVzJywgZXJyLnJpb3REYXRhLnRhZ05hbWUgfHwgJ1Vua25vd24gdGFnJywgdGhpcy50bXBsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZSAoc3RyKSB7XG4gICAgICB2YXIgZXhwciA9IF9nZXRUbXBsKHN0cik7XG5cbiAgICAgIGlmIChleHByLnNsaWNlKDAsIDExKSAhPT0gJ3RyeXtyZXR1cm4gJykgeyBleHByID0gJ3JldHVybiAnICsgZXhwcjsgfVxuXG4gICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdFJywgZXhwciArICc7JykgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cblxuICAgIHZhciBSRV9EUVVPVEUgPSAvXFx1MjA1Ny9nO1xuICAgIHZhciBSRV9RQk1BUksgPSAvXFx1MjA1NyhcXGQrKX4vZztcblxuICAgIGZ1bmN0aW9uIF9nZXRUbXBsIChzdHIpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGJyYWNrZXRzLnNwbGl0KHN0ci5yZXBsYWNlKFJFX0RRVU9URSwgJ1wiJyksIDEpO1xuICAgICAgdmFyIHFzdHIgPSBwYXJ0cy5xYmxvY2tzO1xuICAgICAgdmFyIGV4cHI7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyIHx8IHBhcnRzWzBdKSB7XG4gICAgICAgIHZhciBpLCBqLCBsaXN0ID0gW107XG5cbiAgICAgICAgZm9yIChpID0gaiA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgZXhwciA9IHBhcnRzW2ldO1xuXG4gICAgICAgICAgaWYgKGV4cHIgJiYgKGV4cHIgPSBpICYgMVxuXG4gICAgICAgICAgICAgID8gX3BhcnNlRXhwcihleHByLCAxLCBxc3RyKVxuXG4gICAgICAgICAgICAgIDogJ1wiJyArIGV4cHJcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxyXFxuP3xcXG4vZywgJ1xcXFxuJylcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgK1xuICAgICAgICAgICAgICAgICdcIidcblxuICAgICAgICAgICAgKSkgeyBsaXN0W2orK10gPSBleHByOyB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGV4cHIgPSBqIDwgMiA/IGxpc3RbMF1cbiAgICAgICAgICAgICA6ICdbJyArIGxpc3Quam9pbignLCcpICsgJ10uam9pbihcIlwiKSc7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgZXhwciA9IF9wYXJzZUV4cHIocGFydHNbMV0sIDAsIHFzdHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocXN0ci5sZW5ndGgpIHtcbiAgICAgICAgZXhwciA9IGV4cHIucmVwbGFjZShSRV9RQk1BUkssIGZ1bmN0aW9uIChfLCBwb3MpIHtcbiAgICAgICAgICByZXR1cm4gcXN0cltwb3NdXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csICdcXFxcbicpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4cHJcbiAgICB9XG5cbiAgICB2YXIgUkVfQ1NOQU1FID0gL14oPzooLT9bX0EtWmEtelxceEEwLVxceEZGXVstXFx3XFx4QTAtXFx4RkZdKil8XFx1MjA1NyhcXGQrKX4pOi87XG4gICAgdmFyXG4gICAgICBSRV9CUkVORCA9IHtcbiAgICAgICAgJygnOiAvWygpXS9nLFxuICAgICAgICAnWyc6IC9bW1xcXV0vZyxcbiAgICAgICAgJ3snOiAvW3t9XS9nXG4gICAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3BhcnNlRXhwciAoZXhwciwgYXNUZXh0LCBxc3RyKSB7XG5cbiAgICAgIGV4cHIgPSBleHByXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9cXCA/KFtbXFwoe30sP1xcLjpdKVxcID8vZywgJyQxJyk7XG5cbiAgICAgIGlmIChleHByKSB7XG4gICAgICAgIHZhclxuICAgICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgICBjbnQgPSAwLFxuICAgICAgICAgIG1hdGNoO1xuXG4gICAgICAgIHdoaWxlIChleHByICYmXG4gICAgICAgICAgICAgIChtYXRjaCA9IGV4cHIubWF0Y2goUkVfQ1NOQU1FKSkgJiZcbiAgICAgICAgICAgICAgIW1hdGNoLmluZGV4XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBqc2IsXG4gICAgICAgICAgICByZSA9IC8sfChbW3soXSl8JC9nO1xuXG4gICAgICAgICAgZXhwciA9IFJlZ0V4cC5yaWdodENvbnRleHQ7XG4gICAgICAgICAga2V5ICA9IG1hdGNoWzJdID8gcXN0clttYXRjaFsyXV0uc2xpY2UoMSwgLTEpLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICcgJykgOiBtYXRjaFsxXTtcblxuICAgICAgICAgIHdoaWxlIChqc2IgPSAobWF0Y2ggPSByZS5leGVjKGV4cHIpKVsxXSkgeyBza2lwQnJhY2VzKGpzYiwgcmUpOyB9XG5cbiAgICAgICAgICBqc2IgID0gZXhwci5zbGljZSgwLCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgZXhwciA9IFJlZ0V4cC5yaWdodENvbnRleHQ7XG5cbiAgICAgICAgICBsaXN0W2NudCsrXSA9IF93cmFwRXhwcihqc2IsIDEsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBleHByID0gIWNudCA/IF93cmFwRXhwcihleHByLCBhc1RleHQpXG4gICAgICAgICAgICAgOiBjbnQgPiAxID8gJ1snICsgbGlzdC5qb2luKCcsJykgKyAnXS5qb2luKFwiIFwiKS50cmltKCknIDogbGlzdFswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHByXG5cbiAgICAgIGZ1bmN0aW9uIHNraXBCcmFjZXMgKGNoLCByZSkge1xuICAgICAgICB2YXJcbiAgICAgICAgICBtbSxcbiAgICAgICAgICBsdiA9IDEsXG4gICAgICAgICAgaXIgPSBSRV9CUkVORFtjaF07XG5cbiAgICAgICAgaXIubGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICB3aGlsZSAobW0gPSBpci5leGVjKGV4cHIpKSB7XG4gICAgICAgICAgaWYgKG1tWzBdID09PSBjaCkgeyArK2x2OyB9XG4gICAgICAgICAgZWxzZSBpZiAoIS0tbHYpIHsgYnJlYWsgfVxuICAgICAgICB9XG4gICAgICAgIHJlLmxhc3RJbmRleCA9IGx2ID8gZXhwci5sZW5ndGggOiBpci5sYXN0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHQ6IG5vdCBib3RoXG4gICAgdmFyIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICBKU19DT05URVhUID0gJ1wiaW4gdGhpcz90aGlzOicgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgPyAnZ2xvYmFsJyA6ICd3aW5kb3cnKSArICcpLicsXG4gICAgICBKU19WQVJOQU1FID0gL1sse11bXFwkXFx3XSsoPz06KXwoXiAqfFteJFxcd1xcLntdKSg/ISg/OnR5cGVvZnx0cnVlfGZhbHNlfG51bGx8dW5kZWZpbmVkfGlufGluc3RhbmNlb2Z8aXMoPzpGaW5pdGV8TmFOKXx2b2lkfE5hTnxuZXd8RGF0ZXxSZWdFeHB8TWF0aCkoPyFbJFxcd10pKShbJF9BLVphLXpdWyRcXHddKikvZyxcbiAgICAgIEpTX05PUFJPUFMgPSAvXig/PShcXC5bJFxcd10rKSlcXDEoPzpbXi5bKF18JCkvO1xuXG4gICAgZnVuY3Rpb24gX3dyYXBFeHByIChleHByLCBhc1RleHQsIGtleSkge1xuICAgICAgdmFyIHRiO1xuXG4gICAgICBleHByID0gZXhwci5yZXBsYWNlKEpTX1ZBUk5BTUUsIGZ1bmN0aW9uIChtYXRjaCwgcCwgbXZhciwgcG9zLCBzKSB7XG4gICAgICAgIGlmIChtdmFyKSB7XG4gICAgICAgICAgcG9zID0gdGIgPyAwIDogcG9zICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKG12YXIgIT09ICd0aGlzJyAmJiBtdmFyICE9PSAnZ2xvYmFsJyAmJiBtdmFyICE9PSAnd2luZG93Jykge1xuICAgICAgICAgICAgbWF0Y2ggPSBwICsgJyhcIicgKyBtdmFyICsgSlNfQ09OVEVYVCArIG12YXI7XG4gICAgICAgICAgICBpZiAocG9zKSB7IHRiID0gKHMgPSBzW3Bvc10pID09PSAnLicgfHwgcyA9PT0gJygnIHx8IHMgPT09ICdbJzsgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocG9zKSB7XG4gICAgICAgICAgICB0YiA9ICFKU19OT1BST1BTLnRlc3Qocy5zbGljZShwb3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRiKSB7XG4gICAgICAgIGV4cHIgPSAndHJ5e3JldHVybiAnICsgZXhwciArICd9Y2F0Y2goZSl7RShlLHRoaXMpfSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkpIHtcblxuICAgICAgICBleHByID0gKHRiXG4gICAgICAgICAgICA/ICdmdW5jdGlvbigpeycgKyBleHByICsgJ30uY2FsbCh0aGlzKScgOiAnKCcgKyBleHByICsgJyknXG4gICAgICAgICAgKSArICc/XCInICsga2V5ICsgJ1wiOlwiXCInO1xuXG4gICAgICB9IGVsc2UgaWYgKGFzVGV4dCkge1xuXG4gICAgICAgIGV4cHIgPSAnZnVuY3Rpb24odil7JyArICh0YlxuICAgICAgICAgICAgPyBleHByLnJlcGxhY2UoJ3JldHVybiAnLCAndj0nKSA6ICd2PSgnICsgZXhwciArICcpJ1xuICAgICAgICAgICkgKyAnO3JldHVybiB2fHx2PT09MD92OlwiXCJ9LmNhbGwodGhpcyknO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwclxuICAgIH1cblxuICAgIF90bXBsLnZlcnNpb24gPSBicmFja2V0cy52ZXJzaW9uID0gJ3YzLjAuOCc7XG5cbiAgICByZXR1cm4gX3RtcGxcblxuICB9KSgpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciBvYnNlcnZhYmxlID0gZnVuY3Rpb24oZWwpIHtcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZCB0aGUgb3JpZ2luYWwgb2JqZWN0IG9yIGNyZWF0ZSBhIG5ldyBlbXB0eSBvbmVcbiAgICAgKiBAdHlwZSB7IE9iamVjdCB9XG4gICAgICovXG5cbiAgICBlbCA9IGVsIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSB2YXJpYWJsZXNcbiAgICAgKi9cbiAgICB2YXIgY2FsbGJhY2tzID0ge30sXG4gICAgICBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8vIGV4dGVuZCB0aGUgZWwgb2JqZWN0IGFkZGluZyB0aGUgb2JzZXJ2YWJsZSBtZXRob2RzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZWwsIHtcbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuIHRvIHRoZSBnaXZlbiBgZXZlbnRgIGFuZHNcbiAgICAgICAqIGV4ZWN1dGUgdGhlIGBjYWxsYmFja2AgZWFjaCB0aW1lIGFuIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAgICAgICAqIEBwYXJhbSAgeyBTdHJpbmcgfSBldmVudCAtIGV2ZW50IGlkXG4gICAgICAgKiBAcGFyYW0gIHsgRnVuY3Rpb24gfSBmbiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAgICAgKi9cbiAgICAgIG9uOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihldmVudCwgZm4pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7IChjYWxsYmFja3NbZXZlbnRdID0gY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSkucHVzaChmbik7IH1cbiAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBgZXZlbnRgIGxpc3RlbmVyc1xuICAgICAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBldmVudCAtIGV2ZW50IGlkXG4gICAgICAgKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICogQHJldHVybnMgeyBPYmplY3QgfSBlbFxuICAgICAgICovXG4gICAgICBvZmY6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGV2ZW50LCBmbikge1xuICAgICAgICAgIGlmIChldmVudCA9PSAnKicgJiYgIWZuKSB7IGNhbGxiYWNrcyA9IHt9OyB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgdmFyIGFyciA9IGNhbGxiYWNrc1tldmVudF07XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBjYjsgY2IgPSBhcnIgJiYgYXJyW2ldOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IgPT0gZm4pIHsgYXJyLnNwbGljZShpLS0sIDEpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IGRlbGV0ZSBjYWxsYmFja3NbZXZlbnRdOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbFxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIExpc3RlbiB0byB0aGUgZ2l2ZW4gYGV2ZW50YCBhbmRcbiAgICAgICAqIGV4ZWN1dGUgdGhlIGBjYWxsYmFja2AgYXQgbW9zdCBvbmNlXG4gICAgICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IGV2ZW50IC0gZXZlbnQgaWRcbiAgICAgICAqIEBwYXJhbSAgIHsgRnVuY3Rpb24gfSBmbiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAgICAgKi9cbiAgICAgIG9uZToge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZXZlbnQsIGZuKSB7XG4gICAgICAgICAgZnVuY3Rpb24gb24oKSB7XG4gICAgICAgICAgICBlbC5vZmYoZXZlbnQsIG9uKTtcbiAgICAgICAgICAgIGZuLmFwcGx5KGVsLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWwub24oZXZlbnQsIG9uKVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV4ZWN1dGUgYWxsIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IGxpc3RlbiB0b1xuICAgICAgICogdGhlIGdpdmVuIGBldmVudGBcbiAgICAgICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gZXZlbnQgLSBldmVudCBpZFxuICAgICAgICogQHJldHVybnMgeyBPYmplY3QgfSBlbFxuICAgICAgICovXG4gICAgICB0cmlnZ2VyOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuXG4gICAgICAgICAgLy8gZ2V0dGluZyB0aGUgYXJndW1lbnRzXG4gICAgICAgICAgdmFyIGFyZ2xlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgYXJncyA9IG5ldyBBcnJheShhcmdsZW4pLFxuICAgICAgICAgICAgZm5zLFxuICAgICAgICAgICAgZm4sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ2xlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzJDFbaSArIDFdOyAvLyBza2lwIGZpcnN0IGFyZ3VtZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm5zID0gc2xpY2UuY2FsbChjYWxsYmFja3NbZXZlbnRdIHx8IFtdLCAwKTtcblxuICAgICAgICAgIGZvciAoaSA9IDA7IGZuID0gZm5zW2ldOyArK2kpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KGVsLCBhcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2tzWycqJ10gJiYgZXZlbnQgIT0gJyonKVxuICAgICAgICAgICAgeyBlbC50cmlnZ2VyLmFwcGx5KGVsLCBbJyonLCBldmVudF0uY29uY2F0KGFyZ3MpKTsgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbFxuXG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3J0IGFsaWFzIGZvciBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQcm9wRGVzY3JpcHRvciAobywgaykge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8sIGspXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc2VkIGFyZ3VtZW50IGlzIHVuZGVmaW5lZFxuICAgKiBAcGFyYW0gICB7ICogfSB2YWx1ZSAtXG4gICAqIEByZXR1cm5zIHsgQm9vbGVhbiB9IC1cbiAgICovXG4gIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gVF9VTkRFRlxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgb2JqZWN0J3MgcHJvcGVydHkgY291bGQgYmUgb3ZlcnJpZGRlblxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9ICBvYmogLSBzb3VyY2Ugb2JqZWN0XG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gIGtleSAtIG9iamVjdCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJucyB7IEJvb2xlYW4gfSB0cnVlIGlmIHdyaXRhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBpc1dyaXRhYmxlKG9iaiwga2V5KSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRQcm9wRGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9ialtrZXldKSB8fCBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3Iud3JpdGFibGVcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbmQgYW55IG9iamVjdCB3aXRoIG90aGVyIHByb3BlcnRpZXNcbiAgICogQHBhcmFtICAgeyBPYmplY3QgfSBzcmMgLSBzb3VyY2Ugb2JqZWN0XG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gdGhlIHJlc3VsdGluZyBleHRlbmRlZCBvYmplY3RcbiAgICpcbiAgICogdmFyIG9iaiA9IHsgZm9vOiAnYmF6JyB9XG4gICAqIGV4dGVuZChvYmosIHtiYXI6ICdiYXInLCBmb286ICdiYXInfSlcbiAgICogY29uc29sZS5sb2cob2JqKSA9PiB7YmFyOiAnYmFyJywgZm9vOiAnYmFyJ31cbiAgICpcbiAgICovXG4gIGZ1bmN0aW9uIGV4dGVuZChzcmMpIHtcbiAgICB2YXIgb2JqO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgbCA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChvYmogPSBhcmdzW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHByb3BlcnR5IG9mIHRoZSBzb3VyY2Ugb2JqZWN0IGNvdWxkIGJlIG92ZXJyaWRkZW5cbiAgICAgICAgICBpZiAoaXNXcml0YWJsZShzcmMsIGtleSkpXG4gICAgICAgICAgICB7IHNyY1trZXldID0gb2JqW2tleV07IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3JjXG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgZm9yIE9iamVjdC5jcmVhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZShzcmMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShzcmMpXG4gIH1cblxuICB2YXIgc2V0dGluZ3MgPSBleHRlbmQoY3JlYXRlKGJyYWNrZXRzLnNldHRpbmdzKSwge1xuICAgIHNraXBBbm9ueW1vdXNUYWdzOiB0cnVlLFxuICAgIC8vIHRoZSBcInZhbHVlXCIgYXR0cmlidXRlcyB3aWxsIGJlIHByZXNlcnZlZFxuICAgIGtlZXBWYWx1ZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgIC8vIGhhbmRsZSB0aGUgYXV0byB1cGRhdGVzIG9uIGFueSBET00gZXZlbnRcbiAgICBhdXRvVXBkYXRlOiB0cnVlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTaG9ydGVyIGFuZCBmYXN0IHdheSB0byBzZWxlY3QgbXVsdGlwbGUgbm9kZXMgaW4gdGhlIERPTVxuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gY3R4IC0gRE9NIG5vZGUgd2hlcmUgdGhlIHRhcmdldHMgb2Ygb3VyIHNlYXJjaCB3aWxsIGlzIGxvY2F0ZWRcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSBkb20gbm9kZXMgZm91bmRcbiAgICovXG4gIGZ1bmN0aW9uICQkKHNlbGVjdG9yLCBjdHgpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCgoY3R4IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkb2N1bWVudCB0ZXh0IG5vZGVcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSBjcmVhdGUgYSB0ZXh0IG5vZGUgdG8gdXNlIGFzIHBsYWNlaG9sZGVyXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVET01QbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIGFueSBET00gbm9kZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9ICBkb20gLSBET00gbm9kZSB3ZSB3YW50IHRvIGhpZGVcbiAgICogQHBhcmFtICAgeyBCb29sZWFuIH0gc2hvdyAtIGRvIHdlIHdhbnQgdG8gc2hvdyBpdD9cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eShkb20sIHNob3cpIHtcbiAgICBkb20uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJztcbiAgICBkb20uaGlkZGVuID0gc2hvdyA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIGFueSBET00gYXR0cmlidXRlIG9uIGEgbm9kZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIHdhbnQgdG8gcGFyc2VcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBuYW1lIC0gbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdhbnQgdG8gZ2V0XG4gICAqIEByZXR1cm5zIHsgU3RyaW5nIHwgdW5kZWZpbmVkIH0gbmFtZSBvZiB0aGUgbm9kZSBhdHRyaWJ1dGUgd2hldGhlciBpdCBleGlzdHNcbiAgICovXG4gIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShkb20sIG5hbWUpIHtcbiAgICByZXR1cm4gZG9tLmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbnkgRE9NIGF0dHJpYnV0ZSBmcm9tIGEgbm9kZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIHdhbnQgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gbmFtZSAtIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdlIHdhbnQgdG8gcmVtb3ZlXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZG9tLCBuYW1lKSB7XG4gICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGlubmVyIGh0bWwgb2YgYW55IERPTSBub2RlIFNWR3MgaW5jbHVkZWRcbiAgICogQHBhcmFtIHsgT2JqZWN0IH0gY29udGFpbmVyIC0gRE9NIG5vZGUgd2hlcmUgd2UnbGwgaW5qZWN0IG5ldyBodG1sXG4gICAqIEBwYXJhbSB7IFN0cmluZyB9IGh0bWwgLSBodG1sIHRvIGluamVjdFxuICAgKiBAcGFyYW0geyBCb29sZWFuIH0gaXNTdmcgLSBzdmcgdGFncyBzaG91bGQgYmUgdHJlYXRlZCBhIGJpdCBkaWZmZXJlbnRseVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gc2V0SW5uZXJIVE1MKGNvbnRhaW5lciwgaHRtbCwgaXNTdmcpIHtcbiAgICAvLyBpbm5lckhUTUwgaXMgbm90IHN1cHBvcnRlZCBvbiBzdmcgdGFncyBzbyB3ZSBuZWV0IHRvIHRyZWF0IHRoZW0gZGlmZmVyZW50bHlcbiAgICBpZiAoaXNTdmcpIHtcbiAgICAgIHZhciBub2RlID0gY29udGFpbmVyLm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgICAgbmV3IERPTVBhcnNlcigpXG4gICAgICAgICAgLnBhcnNlRnJvbVN0cmluZygoXCI8c3ZnIHhtbG5zPVxcXCJcIiArIFNWR19OUyArIFwiXFxcIj5cIiArIGh0bWwgKyBcIjwvc3ZnPlwiKSwgJ2FwcGxpY2F0aW9uL3htbCcpXG4gICAgICAgICAgLmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWluaW1pemUgcmlzazogb25seSB6ZXJvIG9yIG9uZSBfc3BhY2VfIGJldHdlZW4gYXR0ciAmIHZhbHVlXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICBodG1sIC0gaHRtbCBzdHJpbmcgd2Ugd2FudCB0byBwYXJzZVxuICAgKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayBmdW5jdGlvbiB0byBhcHBseSBvbiBhbnkgYXR0cmlidXRlIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiB3YWxrQXR0cmlidXRlcyhodG1sLCBmbikge1xuICAgIGlmICghaHRtbCkgeyByZXR1cm4gfVxuICAgIHZhciBtO1xuICAgIHdoaWxlIChtID0gUkVfSFRNTF9BVFRSUy5leGVjKGh0bWwpKVxuICAgICAgeyBmbihtWzFdLnRvTG93ZXJDYXNlKCksIG1bMl0gfHwgbVszXSB8fCBtWzRdKTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZG9jdW1lbnQgZnJhZ21lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgc2FmZWx5IGEgdGFnIHRvIGZpeCAjMTk2MiAjMTY0OVxuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gcm9vdCAtIGNoaWxkcmVuIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gY3VyciAtIG5vZGUgdG8gaW5zZXJ0XG4gICAqIEBwYXJhbSAgIHsgSFRNTEVsZW1lbnQgfSBuZXh0IC0gbm9kZSB0aGF0IHNob3VsZCBwcmVjZWVkIHRoZSBjdXJyZW50IG5vZGUgaW5zZXJ0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHNhZmVJbnNlcnQocm9vdCwgY3VyciwgbmV4dCkge1xuICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGN1cnIsIG5leHQucGFyZW50Tm9kZSAmJiBuZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgc3R5bGUgb2JqZWN0IHRvIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gc3R5bGUgLSBzdHlsZSBvYmplY3Qgd2UgbmVlZCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7IFN0cmluZyB9IHJlc3VsdGluZyBjc3Mgc3RyaW5nXG4gICAqIEBleGFtcGxlXG4gICAqIHN0eWxlT2JqZWN0VG9TdHJpbmcoeyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzEwcHgnfSkgLy8gPT4gJ2NvbG9yOiByZWQ7IGhlaWdodDogMTBweCdcbiAgICovXG4gIGZ1bmN0aW9uIHN0eWxlT2JqZWN0VG9TdHJpbmcoc3R5bGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wKSB7XG4gICAgICByZXR1cm4gKGFjYyArIFwiIFwiICsgcHJvcCArIFwiOiBcIiArIChzdHlsZVtwcm9wXSkgKyBcIjtcIilcbiAgICB9LCAnJylcbiAgfVxuXG4gIC8qKlxuICAgKiBXYWxrIGRvd24gcmVjdXJzaXZlbHkgYWxsIHRoZSBjaGlsZHJlbiB0YWdzIHN0YXJ0aW5nIGRvbSBub2RlXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gICBkb20gLSBzdGFydGluZyBub2RlIHdoZXJlIHdlIHdpbGwgc3RhcnQgdGhlIHJlY3Vyc2lvblxuICAgKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayB0byB0cmFuc2Zvcm0gdGhlIGNoaWxkIG5vZGUganVzdCBmb3VuZFxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9ICAgY29udGV4dCAtIGZuIGNhbiBvcHRpb25hbGx5IHJldHVybiBhbiBvYmplY3QsIHdoaWNoIGlzIHBhc3NlZCB0byBjaGlsZHJlblxuICAgKi9cbiAgZnVuY3Rpb24gd2Fsa05vZGVzKGRvbSwgZm4sIGNvbnRleHQpIHtcbiAgICBpZiAoZG9tKSB7XG4gICAgICB2YXIgcmVzID0gZm4oZG9tLCBjb250ZXh0KTtcbiAgICAgIHZhciBuZXh0O1xuICAgICAgLy8gc3RvcCB0aGUgcmVjdXJzaW9uXG4gICAgICBpZiAocmVzID09PSBmYWxzZSkgeyByZXR1cm4gfVxuXG4gICAgICBkb20gPSBkb20uZmlyc3RDaGlsZDtcblxuICAgICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBuZXh0ID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICB3YWxrTm9kZXMoZG9tLCBmbiwgcmVzKTtcbiAgICAgICAgZG9tID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgdmFyIGRvbSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICAkJDogJCQsXG4gICAgJDogJCxcbiAgICBjcmVhdGVET01QbGFjZWhvbGRlcjogY3JlYXRlRE9NUGxhY2Vob2xkZXIsXG4gICAgbWtFbDogbWFrZUVsZW1lbnQsXG4gICAgc2V0QXR0cjogc2V0QXR0cmlidXRlLFxuICAgIHRvZ2dsZVZpc2liaWxpdHk6IHRvZ2dsZVZpc2liaWxpdHksXG4gICAgZ2V0QXR0cjogZ2V0QXR0cmlidXRlLFxuICAgIHJlbUF0dHI6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgICBzZXRJbm5lckhUTUw6IHNldElubmVySFRNTCxcbiAgICB3YWxrQXR0cnM6IHdhbGtBdHRyaWJ1dGVzLFxuICAgIGNyZWF0ZUZyYWc6IGNyZWF0ZUZyYWdtZW50LFxuICAgIHNhZmVJbnNlcnQ6IHNhZmVJbnNlcnQsXG4gICAgc3R5bGVPYmplY3RUb1N0cmluZzogc3R5bGVPYmplY3RUb1N0cmluZyxcbiAgICB3YWxrTm9kZXM6IHdhbGtOb2Rlc1xuICB9KTtcblxuICAvKipcbiAgICogQ2hlY2sgYWdhaW5zdCB0aGUgbnVsbCBhbmQgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gICB7ICogfSAgdmFsdWUgLVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLVxuICAgKi9cbiAgZnVuY3Rpb24gaXNOaWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc2VkIGFyZ3VtZW50IGlzIGVtcHR5LiBEaWZmZXJlbnQgZnJvbSBmYWxzeSwgYmVjYXVzZSB3ZSBkb250IGNvbnNpZGVyIDAgb3IgZmFsc2UgdG8gYmUgYmxhbmtcbiAgICogQHBhcmFtIHsgKiB9IHZhbHVlIC1cbiAgICogQHJldHVybnMgeyBCb29sZWFuIH0gLVxuICAgKi9cbiAgZnVuY3Rpb24gaXNCbGFuayh2YWx1ZSkge1xuICAgIHJldHVybiBpc05pbCh2YWx1ZSkgfHwgdmFsdWUgPT09ICcnXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc2VkIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb25cbiAgICogQHBhcmFtICAgeyAqIH0gdmFsdWUgLVxuICAgKiBAcmV0dXJucyB7IEJvb2xlYW4gfSAtXG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gVF9GVU5DVElPTlxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBhc3NlZCBhcmd1bWVudCBpcyBhbiBvYmplY3QsIGV4Y2x1ZGUgbnVsbFxuICAgKiBOT1RFOiB1c2UgaXNPYmplY3QoeCkgJiYgIWlzQXJyYXkoeCkgdG8gZXhjbHVkZXMgYXJyYXlzLlxuICAgKiBAcGFyYW0gICB7ICogfSB2YWx1ZSAtXG4gICAqIEByZXR1cm5zIHsgQm9vbGVhbiB9IC1cbiAgICovXG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gVF9PQkpFQ1QgLy8gdHlwZW9mIG51bGwgaXMgJ29iamVjdCdcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIERPTSBub2RlIGlzIGFuIHN2ZyB0YWcgb3IgcGFydCBvZiBhbiBzdmdcbiAgICogQHBhcmFtICAgeyBIVE1MRWxlbWVudCB9ICBlbCAtIG5vZGUgd2Ugd2FudCB0byB0ZXN0XG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGl0J3MgYW4gc3ZnIG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGlzU3ZnKGVsKSB7XG4gICAgdmFyIG93bmVyID0gZWwub3duZXJTVkdFbGVtZW50O1xuICAgIHJldHVybiAhIW93bmVyIHx8IG93bmVyID09PSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc2VkIGFyZ3VtZW50IGlzIGEga2luZCBvZiBhcnJheVxuICAgKiBAcGFyYW0gICB7ICogfSB2YWx1ZSAtXG4gICAqIEByZXR1cm5zIHsgQm9vbGVhbiB9IC1cbiAgICovXG4gIGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBwYXNzZWQgYXJndW1lbnQgaXMgYSBib29sZWFuIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IHZhbHVlIC1cbiAgICogQHJldHVybnMgeyBCb29sZWFuIH0gLVxuICAgKi9cbiAgZnVuY3Rpb24gaXNCb29sQXR0cih2YWx1ZSkge1xuICAgIHJldHVybiBSRV9CT09MX0FUVFJTLnRlc3QodmFsdWUpXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc2VkIGFyZ3VtZW50IGlzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAgIHsgKiB9IHZhbHVlIC1cbiAgICogQHJldHVybnMgeyBCb29sZWFuIH0gLVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBUX1NUUklOR1xuICB9XG5cblxuXG4gIHZhciBjaGVjayA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBpc0JsYW5rOiBpc0JsYW5rLFxuICAgIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gICAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICAgIGlzU3ZnOiBpc1N2ZyxcbiAgICBpc1dyaXRhYmxlOiBpc1dyaXRhYmxlLFxuICAgIGlzQXJyYXk6IGlzQXJyYXksXG4gICAgaXNCb29sQXR0cjogaXNCb29sQXR0cixcbiAgICBpc05pbDogaXNOaWwsXG4gICAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICAgIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZFxuICB9KTtcblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBhbiBhcnJheSBjb250YWlucyBhbiBpdGVtXG4gICAqIEBwYXJhbSAgIHsgQXJyYXkgfSBhcnJheSAtIHRhcmdldCBhcnJheVxuICAgKiBAcGFyYW0gICB7ICogfSBpdGVtIC0gaXRlbSB0byB0ZXN0XG4gICAqIEByZXR1cm5zIHsgQm9vbGVhbiB9IC1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKGFycmF5LCBpdGVtKSB7XG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSkgIT09IC0xXG4gIH1cblxuICAvKipcbiAgICogU3BlY2lhbGl6ZWQgZnVuY3Rpb24gZm9yIGxvb3BpbmcgYW4gYXJyYXktbGlrZSBjb2xsZWN0aW9uIHdpdGggYGVhY2g9e31gXG4gICAqIEBwYXJhbSAgIHsgQXJyYXkgfSBsaXN0IC0gY29sbGVjdGlvbiBvZiBpdGVtc1xuICAgKiBAcGFyYW0gICB7RnVuY3Rpb259IGZuIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybnMgeyBBcnJheSB9IHRoZSBhcnJheSBsb29wZWRcbiAgICovXG4gIGZ1bmN0aW9uIGVhY2gobGlzdCwgZm4pIHtcbiAgICB2YXIgbGVuID0gbGlzdCA/IGxpc3QubGVuZ3RoIDogMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBsZW47IGkrKykgeyBmbihsaXN0W2ldLCBpKTsgfVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICAvKipcbiAgICogRmFzdGVyIFN0cmluZyBzdGFydHNXaXRoIGFsdGVybmF0aXZlXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gc3RyIC0gc291cmNlIHN0cmluZ1xuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IHZhbHVlIC0gdGVzdCBzdHJpbmdcbiAgICogQHJldHVybnMgeyBCb29sZWFuIH0gLVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0ci5zbGljZSgwLCB2YWx1ZS5sZW5ndGgpID09PSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHJldHVybmluZyBhbHdheXMgYSB1bmlxdWUgaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7IE51bWJlciB9IC0gbnVtYmVyIGZyb20gMC4uLm5cbiAgICovXG4gIHZhciB1aWQgPSAoZnVuY3Rpb24gdWlkKCkge1xuICAgIHZhciBpID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuICsraTsgfVxuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IGFuIGltbXV0YWJsZSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IGVsIC0gb2JqZWN0IHdoZXJlIHRoZSBuZXcgcHJvcGVydHkgd2lsbCBiZSBzZXRcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBrZXkgLSBvYmplY3Qga2V5IHdoZXJlIHRoZSBuZXcgcHJvcGVydHkgd2lsbCBiZSBzdG9yZWRcbiAgICogQHBhcmFtICAgeyAqIH0gdmFsdWUgLSB2YWx1ZSBvZiB0aGUgbmV3IHByb3BlcnR5XG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gb3B0aW9ucyAtIHNldCB0aGUgcHJvcGVyeSBvdmVycmlkaW5nIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSAtIHRoZSBpbml0aWFsIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gZGVmaW5lKGVsLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCBrZXksIGV4dGVuZCh7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpKTtcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgc3RyaW5nIGNvbnRhaW5pbmcgZGFzaGVzIHRvIGNhbWVsIGNhc2VcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBzdHIgLSBpbnB1dCBzdHJpbmdcbiAgICogQHJldHVybnMgeyBTdHJpbmcgfSBteS1zdHJpbmcgLT4gbXlTdHJpbmdcbiAgICovXG4gIGZ1bmN0aW9uIHRvQ2FtZWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFxcdykvZywgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXJuIGEgbWVzc2FnZSB2aWEgY29uc29sZVxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSBtZXNzYWdlIC0gd2FybmluZyBtZXNzYWdlXG4gICAqL1xuICBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHsgY29uc29sZS53YXJuKG1lc3NhZ2UpOyB9XG4gIH1cblxuXG5cbiAgdmFyIG1pc2MgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgY29udGFpbnM6IGNvbnRhaW5zLFxuICAgIGVhY2g6IGVhY2gsXG4gICAgZ2V0UHJvcERlc2NyaXB0b3I6IGdldFByb3BEZXNjcmlwdG9yLFxuICAgIHN0YXJ0c1dpdGg6IHN0YXJ0c1dpdGgsXG4gICAgdWlkOiB1aWQsXG4gICAgZGVmaW5lUHJvcGVydHk6IGRlZmluZSxcbiAgICBvYmplY3RDcmVhdGU6IGNyZWF0ZSxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB0b0NhbWVsOiB0b0NhbWVsLFxuICAgIHdhcm46IHdhcm5cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJvcGVydHkgb2YgYW4gb2JqZWN0IGZvciBhIGdpdmVuIGtleS4gSWYgc29tZXRoaW5nIGFscmVhZHlcbiAgICogZXhpc3RzIHRoZXJlLCB0aGVuIGl0IGJlY29tZXMgYW4gYXJyYXkgY29udGFpbmluZyBib3RoIHRoZSBvbGQgYW5kIG5ldyB2YWx1ZS5cbiAgICogQHBhcmFtIHsgT2JqZWN0IH0gb2JqIC0gb2JqZWN0IG9uIHdoaWNoIHRvIHNldCB0aGUgcHJvcGVydHlcbiAgICogQHBhcmFtIHsgU3RyaW5nIH0ga2V5IC0gcHJvcGVydHkgbmFtZVxuICAgKiBAcGFyYW0geyBPYmplY3QgfSB2YWx1ZSAtIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgdG8gYmUgc2V0XG4gICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBlbnN1cmVBcnJheSAtIGVuc3VyZSB0aGF0IHRoZSBwcm9wZXJ0eSByZW1haW5zIGFuIGFycmF5XG4gICAqIEBwYXJhbSB7IE51bWJlciB9IGluZGV4IC0gYWRkIHRoZSBuZXcgaXRlbSBpbiBhIGNlcnRhaW4gYXJyYXkgcG9zaXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIGFycmF5aXNoQWRkKG9iaiwga2V5LCB2YWx1ZSwgZW5zdXJlQXJyYXksIGluZGV4KSB7XG4gICAgdmFyIGRlc3QgPSBvYmpba2V5XTtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KGRlc3QpO1xuICAgIHZhciBoYXNJbmRleCA9ICFpc1VuZGVmaW5lZChpbmRleCk7XG5cbiAgICBpZiAoZGVzdCAmJiBkZXN0ID09PSB2YWx1ZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gaWYgdGhlIGtleSB3YXMgbmV2ZXIgc2V0LCBzZXQgaXQgb25jZVxuICAgIGlmICghZGVzdCAmJiBlbnN1cmVBcnJheSkgeyBvYmpba2V5XSA9IFt2YWx1ZV07IH1cbiAgICBlbHNlIGlmICghZGVzdCkgeyBvYmpba2V5XSA9IHZhbHVlOyB9XG4gICAgLy8gaWYgaXQgd2FzIGFuIGFycmF5IGFuZCBub3QgeWV0IHNldFxuICAgIGVsc2Uge1xuICAgICAgaWYgKGlzQXJyKSB7XG4gICAgICAgIHZhciBvbGRJbmRleCA9IGRlc3QuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIC8vIHRoaXMgaXRlbSBuZXZlciBjaGFuZ2VkIGl0cyBwb3NpdGlvblxuICAgICAgICBpZiAob2xkSW5kZXggPT09IGluZGV4KSB7IHJldHVybiB9XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBmcm9tIGl0cyBvbGQgcG9zaXRpb25cbiAgICAgICAgaWYgKG9sZEluZGV4ICE9PSAtMSkgeyBkZXN0LnNwbGljZShvbGRJbmRleCwgMSk7IH1cbiAgICAgICAgLy8gbW92ZSBvciBhZGQgdGhlIGl0ZW1cbiAgICAgICAgaWYgKGhhc0luZGV4KSB7XG4gICAgICAgICAgZGVzdC5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXN0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyBvYmpba2V5XSA9IFtkZXN0LCB2YWx1ZV07IH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZWN0IHRoZSB0YWcgaW1wbGVtZW50YXRpb24gYnkgYSBET00gbm9kZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIG5lZWQgdG8gcGFyc2UgdG8gZ2V0IGl0cyB0YWcgaW1wbGVtZW50YXRpb25cbiAgICogQHJldHVybnMgeyBPYmplY3QgfSBpdCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGN1c3RvbSB0YWcgKHRlbXBsYXRlIGFuZCBib290IGZ1bmN0aW9uKVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0KGRvbSkge1xuICAgIHJldHVybiBkb20udGFnTmFtZSAmJiBfX1RBR19JTVBMW2dldEF0dHJpYnV0ZShkb20sIElTX0RJUkVDVElWRSkgfHxcbiAgICAgIGdldEF0dHJpYnV0ZShkb20sIElTX0RJUkVDVElWRSkgfHwgZG9tLnRhZ05hbWUudG9Mb3dlckNhc2UoKV1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRhZyBuYW1lIG9mIGFueSBET00gbm9kZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIHdhbnQgdG8gcGFyc2VcbiAgICogQHBhcmFtICAgeyBCb29sZWFuIH0gc2tpcERhdGFJcyAtIGhhY2sgdG8gaWdub3JlIHRoZSBkYXRhLWlzIGF0dHJpYnV0ZSB3aGVuIGF0dGFjaGluZyB0byBwYXJlbnRcbiAgICogQHJldHVybnMgeyBTdHJpbmcgfSBuYW1lIHRvIGlkZW50aWZ5IHRoaXMgZG9tIG5vZGUgaW4gcmlvdFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0TmFtZShkb20sIHNraXBEYXRhSXMpIHtcbiAgICB2YXIgY2hpbGQgPSBnZXQoZG9tKTtcbiAgICB2YXIgbmFtZWRUYWcgPSAhc2tpcERhdGFJcyAmJiBnZXRBdHRyaWJ1dGUoZG9tLCBJU19ESVJFQ1RJVkUpO1xuICAgIHJldHVybiBuYW1lZFRhZyAmJiAhdG1wbC5oYXNFeHByKG5hbWVkVGFnKSA/XG4gICAgICBuYW1lZFRhZyA6IGNoaWxkID8gY2hpbGQubmFtZSA6IGRvbS50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSB0ZW1wb3JhcnkgY29udGV4dCBjb250YWluaW5nIGFsc28gdGhlIHBhcmVudCBwcm9wZXJ0aWVzXG4gICAqIEB0aGlzIFRhZ1xuICAgKiBAcGFyYW0geyBUYWcgfSAtIHRlbXBvcmFyeSB0YWcgY29udGV4dCBjb250YWluaW5nIGFsbCB0aGUgcGFyZW50IHByb3BlcnRpZXNcbiAgICovXG4gIGZ1bmN0aW9uIGluaGVyaXRQYXJlbnRQcm9wcygpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHsgcmV0dXJuIGV4dGVuZChjcmVhdGUodGhpcyksIHRoaXMucGFyZW50KSB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qXG4gICAgSW5jbHVkZXMgaGFja3MgbmVlZGVkIGZvciB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgdmVyc2lvbiA5IGFuZCBiZWxvd1xuICAgIFNlZTogaHR0cDovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNS8jaWU4XG4gICAgICAgICBodHRwOi8vY29kZXBsYW5ldC5pby9kcm9wcGluZy1pZTgvXG4gICovXG5cbiAgdmFyXG4gICAgcmVIYXNZaWVsZCAgPSAvPHlpZWxkXFxiL2ksXG4gICAgcmVZaWVsZEFsbCAgPSAvPHlpZWxkXFxzKig/OlxcLz58PihbXFxTXFxzXSo/KTxcXC95aWVsZFxccyo+fD4pL2lnLFxuICAgIHJlWWllbGRTcmMgID0gLzx5aWVsZFxccyt0bz1bJ1wiXShbXidcIj5dKilbJ1wiXVxccyo+KFtcXFNcXHNdKj8pPFxcL3lpZWxkXFxzKj4vaWcsXG4gICAgcmVZaWVsZERlc3QgPSAvPHlpZWxkXFxzK2Zyb209WydcIl0/KFstXFx3XSspWydcIl0/XFxzKig/OlxcLz58PihbXFxTXFxzXSo/KTxcXC95aWVsZFxccyo+KS9pZyxcbiAgICByb290RWxzID0geyB0cjogJ3Rib2R5JywgdGg6ICd0cicsIHRkOiAndHInLCBjb2w6ICdjb2xncm91cCcgfSxcbiAgICB0YmxUYWdzID0gSUVfVkVSU0lPTiAmJiBJRV9WRVJTSU9OIDwgMTAgPyBSRV9TUEVDSUFMX1RBR1MgOiBSRV9TUEVDSUFMX1RBR1NfTk9fT1BUSU9OLFxuICAgIEdFTkVSSUMgPSAnZGl2JyxcbiAgICBTVkcgPSAnc3ZnJztcblxuXG4gIC8qXG4gICAgQ3JlYXRlcyB0aGUgcm9vdCBlbGVtZW50IGZvciB0YWJsZSBvciBzZWxlY3QgY2hpbGQgZWxlbWVudHM6XG4gICAgdHIvdGgvdGQvdGhlYWQvdGZvb3QvdGJvZHkvY2FwdGlvbi9jb2wvY29sZ3JvdXAvb3B0aW9uL29wdGdyb3VwXG4gICovXG4gIGZ1bmN0aW9uIHNwZWNpYWxUYWdzKGVsLCB0bXBsLCB0YWdOYW1lKSB7XG5cbiAgICB2YXJcbiAgICAgIHNlbGVjdCA9IHRhZ05hbWVbMF0gPT09ICdvJyxcbiAgICAgIHBhcmVudCA9IHNlbGVjdCA/ICdzZWxlY3Q+JyA6ICd0YWJsZT4nO1xuXG4gICAgLy8gdHJpbSgpIGlzIGltcG9ydGFudCBoZXJlLCB0aGlzIGVuc3VyZXMgd2UgZG9uJ3QgaGF2ZSBhcnRpZmFjdHMsXG4gICAgLy8gc28gd2UgY2FuIGNoZWNrIGlmIHdlIGhhdmUgb25seSBvbmUgZWxlbWVudCBpbnNpZGUgdGhlIHBhcmVudFxuICAgIGVsLmlubmVySFRNTCA9ICc8JyArIHBhcmVudCArIHRtcGwudHJpbSgpICsgJzwvJyArIHBhcmVudDtcbiAgICBwYXJlbnQgPSBlbC5maXJzdENoaWxkO1xuXG4gICAgLy8gcmV0dXJucyB0aGUgaW1tZWRpYXRlIHBhcmVudCBpZiB0ci90aC90ZC9jb2wgaXMgdGhlIG9ubHkgZWxlbWVudCwgaWYgbm90XG4gICAgLy8gcmV0dXJucyB0aGUgd2hvbGUgdHJlZSwgYXMgdGhpcyBjYW4gaW5jbHVkZSBhZGRpdGlvbmFsIGVsZW1lbnRzXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICBwYXJlbnQuc2VsZWN0ZWRJbmRleCA9IC0xOyAgLy8gZm9yIElFOSwgY29tcGF0aWJsZSB3L2N1cnJlbnQgcmlvdCBiZWhhdmlvclxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdm9pZHMgaW5zZXJ0aW9uIG9mIGNvaW50YWluZXIgaW5zaWRlIGNvbnRhaW5lciAoZXg6IHRib2R5IGluc2lkZSB0Ym9keSlcbiAgICAgIHZhciB0bmFtZSA9IHJvb3RFbHNbdGFnTmFtZV07XG4gICAgICBpZiAodG5hbWUgJiYgcGFyZW50LmNoaWxkRWxlbWVudENvdW50ID09PSAxKSB7IHBhcmVudCA9ICQodG5hbWUsIHBhcmVudCk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgLypcbiAgICBSZXBsYWNlIHRoZSB5aWVsZCB0YWcgZnJvbSBhbnkgdGFnIHRlbXBsYXRlIHdpdGggdGhlIGlubmVySFRNTCBvZiB0aGVcbiAgICBvcmlnaW5hbCB0YWcgaW4gdGhlIHBhZ2VcbiAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVlpZWxkKHRtcGwsIGh0bWwpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlmIG5vIHlpZWxkXG4gICAgaWYgKCFyZUhhc1lpZWxkLnRlc3QodG1wbCkpIHsgcmV0dXJuIHRtcGwgfVxuXG4gICAgLy8gYmUgY2FyZWZ1bCB3aXRoICMxMzQzIC0gc3RyaW5nIG9uIHRoZSBzb3VyY2UgaGF2aW5nIGAkMWBcbiAgICB2YXIgc3JjID0ge307XG5cbiAgICBodG1sID0gaHRtbCAmJiBodG1sLnJlcGxhY2UocmVZaWVsZFNyYywgZnVuY3Rpb24gKF8sIHJlZiwgdGV4dCkge1xuICAgICAgc3JjW3JlZl0gPSBzcmNbcmVmXSB8fCB0ZXh0OyAgIC8vIHByZXNlcnZlIGZpcnN0IGRlZmluaXRpb25cbiAgICAgIHJldHVybiAnJ1xuICAgIH0pLnRyaW0oKTtcblxuICAgIHJldHVybiB0bXBsXG4gICAgICAucmVwbGFjZShyZVlpZWxkRGVzdCwgZnVuY3Rpb24gKF8sIHJlZiwgZGVmKSB7ICAvLyB5aWVsZCB3aXRoIGZyb20gLSB0byBhdHRyc1xuICAgICAgICByZXR1cm4gc3JjW3JlZl0gfHwgZGVmIHx8ICcnXG4gICAgICB9KVxuICAgICAgLnJlcGxhY2UocmVZaWVsZEFsbCwgZnVuY3Rpb24gKF8sIGRlZikgeyAgICAgICAgLy8geWllbGQgd2l0aG91dCBhbnkgXCJmcm9tXCJcbiAgICAgICAgcmV0dXJuIGh0bWwgfHwgZGVmIHx8ICcnXG4gICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBET00gZWxlbWVudCB0byB3cmFwIHRoZSBnaXZlbiBjb250ZW50LiBOb3JtYWxseSBhbiBgRElWYCwgYnV0IGNhbiBiZVxuICAgKiBhbHNvIGEgYFRBQkxFYCwgYFNFTEVDVGAsIGBUQk9EWWAsIGBUUmAsIG9yIGBDT0xHUk9VUGAgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSB0bXBsICAtIFRoZSB0ZW1wbGF0ZSBjb21pbmcgZnJvbSB0aGUgY3VzdG9tIHRhZyBkZWZpbml0aW9uXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gaHRtbCAtIEhUTUwgY29udGVudCB0aGF0IGNvbWVzIGZyb20gdGhlIERPTSBlbGVtZW50IHdoZXJlIHlvdVxuICAgKiAgICAgICAgICAgd2lsbCBtb3VudCB0aGUgdGFnLCBtb3N0bHkgdGhlIG9yaWdpbmFsIHRhZyBpbiB0aGUgcGFnZVxuICAgKiBAcGFyYW0gICB7IEJvb2xlYW4gfSBpc1N2ZyAtIHRydWUgaWYgdGhlIHJvb3Qgbm9kZSBpcyBhbiBzdmdcbiAgICogQHJldHVybnMgeyBIVE1MRWxlbWVudCB9IERPTSBlbGVtZW50IHdpdGggX3RtcGxfIG1lcmdlZCB0aHJvdWdoIGBZSUVMRGAgd2l0aCB0aGUgX2h0bWxfLlxuICAgKi9cbiAgZnVuY3Rpb24gbWtkb20odG1wbCwgaHRtbCwgaXNTdmcpIHtcbiAgICB2YXIgbWF0Y2ggICA9IHRtcGwgJiYgdG1wbC5tYXRjaCgvXlxccyo8KFstXFx3XSspLyk7XG4gICAgdmFyICB0YWdOYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgZWwgPSBtYWtlRWxlbWVudChpc1N2ZyA/IFNWRyA6IEdFTkVSSUMpO1xuXG4gICAgLy8gcmVwbGFjZSBhbGwgdGhlIHlpZWxkIHRhZ3Mgd2l0aCB0aGUgdGFnIGlubmVyIGh0bWxcbiAgICB0bXBsID0gcmVwbGFjZVlpZWxkKHRtcGwsIGh0bWwpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGJsVGFncy50ZXN0KHRhZ05hbWUpKVxuICAgICAgeyBlbCA9IHNwZWNpYWxUYWdzKGVsLCB0bXBsLCB0YWdOYW1lKTsgfVxuICAgIGVsc2VcbiAgICAgIHsgc2V0SW5uZXJIVE1MKGVsLCB0bXBsLCBpc1N2Zyk7IH1cblxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgdmFyIEVWRU5UX0FUVFJfUkUgPSAvXm9uLztcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZXZlbnQgYXR0cmlidXRlIHN0YXJ0cyB3aXRoICdvbidcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBhdHRyaWJ1dGUgLSBldmVudCBhdHRyaWJ1dGVcbiAgICogQHJldHVybnMgeyBCb29sZWFuIH1cbiAgICovXG4gIGZ1bmN0aW9uIGlzRXZlbnRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIEVWRU5UX0FUVFJfUkUudGVzdChhdHRyaWJ1dGUpXG4gIH1cblxuICAvKipcbiAgICogTG9vcCBiYWNrd2FyZCBhbGwgdGhlIHBhcmVudHMgdHJlZSB0byBkZXRlY3QgdGhlIGZpcnN0IGN1c3RvbSBwYXJlbnQgdGFnXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gdGFnIC0gYSBUYWcgaW5zdGFuY2VcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZpcnN0IGN1c3RvbSBwYXJlbnQgdGFnIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnQodGFnKSB7XG4gICAgdmFyIHB0YWcgPSB0YWc7XG4gICAgd2hpbGUgKHB0YWcuX18uaXNBbm9ueW1vdXMpIHtcbiAgICAgIGlmICghcHRhZy5wYXJlbnQpIHsgYnJlYWsgfVxuICAgICAgcHRhZyA9IHB0YWcucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcHRhZ1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgRE9NIGV2ZW50c1xuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gZG9tIC0gZG9tIGVsZW1lbnQgdGFyZ2V0IG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gaGFuZGxlciAtIHVzZXIgZnVuY3Rpb25cbiAgICogQHBhcmFtICAgeyBPYmplY3QgfSBlIC0gZXZlbnQgb2JqZWN0XG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVFdmVudChkb20sIGhhbmRsZXIsIGUpIHtcbiAgICB2YXIgcHRhZyA9IHRoaXMuX18ucGFyZW50O1xuICAgIHZhciBpdGVtID0gdGhpcy5fXy5pdGVtO1xuXG4gICAgaWYgKCFpdGVtKVxuICAgICAgeyB3aGlsZSAocHRhZyAmJiAhaXRlbSkge1xuICAgICAgICBpdGVtID0gcHRhZy5fXy5pdGVtO1xuICAgICAgICBwdGFnID0gcHRhZy5fXy5wYXJlbnQ7XG4gICAgICB9IH1cblxuICAgIC8vIG92ZXJyaWRlIHRoZSBldmVudCBwcm9wZXJ0aWVzXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoaXNXcml0YWJsZShlLCAnY3VycmVudFRhcmdldCcpKSB7IGUuY3VycmVudFRhcmdldCA9IGRvbTsgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKGlzV3JpdGFibGUoZSwgJ3RhcmdldCcpKSB7IGUudGFyZ2V0ID0gZS5zcmNFbGVtZW50OyB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoaXNXcml0YWJsZShlLCAnd2hpY2gnKSkgeyBlLndoaWNoID0gZS5jaGFyQ29kZSB8fCBlLmtleUNvZGU7IH1cblxuICAgIGUuaXRlbSA9IGl0ZW07XG5cbiAgICBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG5cbiAgICAvLyBhdm9pZCBhdXRvIHVwZGF0ZXNcbiAgICBpZiAoIXNldHRpbmdzLmF1dG9VcGRhdGUpIHsgcmV0dXJuIH1cblxuICAgIGlmICghZS5wcmV2ZW50VXBkYXRlKSB7XG4gICAgICB2YXIgcCA9IGdldEltbWVkaWF0ZUN1c3RvbVBhcmVudCh0aGlzKTtcbiAgICAgIC8vIGZpeGVzICMyMDgzXG4gICAgICBpZiAocC5pc01vdW50ZWQpIHsgcC51cGRhdGUoKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggYW4gZXZlbnQgdG8gYSBET00gbm9kZVxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIC0gZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGhhbmRsZXIgLSBldmVudCBjYWxsYmFja1xuICAgKiBAcGFyYW0geyBPYmplY3QgfSBkb20gLSBkb20gbm9kZVxuICAgKiBAcGFyYW0geyBUYWcgfSB0YWcgLSB0YWcgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIHNldEV2ZW50SGFuZGxlcihuYW1lLCBoYW5kbGVyLCBkb20sIHRhZykge1xuICAgIHZhciBldmVudE5hbWU7XG4gICAgdmFyIGNiID0gaGFuZGxlRXZlbnQuYmluZCh0YWcsIGRvbSwgaGFuZGxlcik7XG5cbiAgICAvLyBhdm9pZCB0byBiaW5kIHR3aWNlIHRoZSBzYW1lIGV2ZW50XG4gICAgLy8gcG9zc2libGUgZml4IGZvciAjMjMzMlxuICAgIGRvbVtuYW1lXSA9IG51bGw7XG5cbiAgICAvLyBub3JtYWxpemUgZXZlbnQgbmFtZVxuICAgIGV2ZW50TmFtZSA9IG5hbWUucmVwbGFjZShSRV9FVkVOVFNfUFJFRklYLCAnJyk7XG5cbiAgICAvLyBjYWNoZSB0aGUgbGlzdGVuZXIgaW50byB0aGUgbGlzdGVuZXJzIGFycmF5XG4gICAgaWYgKCFjb250YWlucyh0YWcuX18ubGlzdGVuZXJzLCBkb20pKSB7IHRhZy5fXy5saXN0ZW5lcnMucHVzaChkb20pOyB9XG4gICAgaWYgKCFkb21bUklPVF9FVkVOVFNfS0VZXSkgeyBkb21bUklPVF9FVkVOVFNfS0VZXSA9IHt9OyB9XG4gICAgaWYgKGRvbVtSSU9UX0VWRU5UU19LRVldW25hbWVdKSB7IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZG9tW1JJT1RfRVZFTlRTX0tFWV1bbmFtZV0pOyB9XG5cbiAgICBkb21bUklPVF9FVkVOVFNfS0VZXVtuYW1lXSA9IGNiO1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2IsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY2hpbGQgdGFnIGluY2x1ZGluZyBpdCBjb3JyZWN0bHkgaW50byBpdHMgcGFyZW50XG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gY2hpbGQgLSBjaGlsZCB0YWcgaW1wbGVtZW50YXRpb25cbiAgICogQHBhcmFtICAgeyBPYmplY3QgfSBvcHRzIC0gdGFnIG9wdGlvbnMgY29udGFpbmluZyB0aGUgRE9NIG5vZGUgd2hlcmUgdGhlIHRhZyB3aWxsIGJlIG1vdW50ZWRcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBpbm5lckhUTUwgLSBpbm5lciBodG1sIG9mIHRoZSBjaGlsZCBub2RlXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gcGFyZW50IC0gaW5zdGFuY2Ugb2YgdGhlIHBhcmVudCB0YWcgaW5jbHVkaW5nIHRoZSBjaGlsZCBjdXN0b20gdGFnXG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gaW5zdGFuY2Ugb2YgdGhlIG5ldyBjaGlsZCB0YWcganVzdCBjcmVhdGVkXG4gICAqL1xuICBmdW5jdGlvbiBpbml0Q2hpbGQoY2hpbGQsIG9wdHMsIGlubmVySFRNTCwgcGFyZW50KSB7XG4gICAgdmFyIHRhZyA9IGNyZWF0ZVRhZyhjaGlsZCwgb3B0cywgaW5uZXJIVE1MKTtcbiAgICB2YXIgdGFnTmFtZSA9IG9wdHMudGFnTmFtZSB8fCBnZXROYW1lKG9wdHMucm9vdCwgdHJ1ZSk7XG4gICAgdmFyIHB0YWcgPSBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnQocGFyZW50KTtcbiAgICAvLyBmaXggZm9yIHRoZSBwYXJlbnQgYXR0cmlidXRlIGluIHRoZSBsb29wZWQgZWxlbWVudHNcbiAgICBkZWZpbmUodGFnLCAncGFyZW50JywgcHRhZyk7XG4gICAgLy8gc3RvcmUgdGhlIHJlYWwgcGFyZW50IHRhZ1xuICAgIC8vIGluIHNvbWUgY2FzZXMgdGhpcyBjb3VsZCBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgY3VzdG9tIHBhcmVudCB0YWdcbiAgICAvLyBmb3IgZXhhbXBsZSBpbiBuZXN0ZWQgbG9vcHNcbiAgICB0YWcuX18ucGFyZW50ID0gcGFyZW50O1xuXG4gICAgLy8gYWRkIHRoaXMgdGFnIHRvIHRoZSBjdXN0b20gcGFyZW50IHRhZ1xuICAgIGFycmF5aXNoQWRkKHB0YWcudGFncywgdGFnTmFtZSwgdGFnKTtcblxuICAgIC8vIGFuZCBhbHNvIHRvIHRoZSByZWFsIHBhcmVudCB0YWdcbiAgICBpZiAocHRhZyAhPT0gcGFyZW50KVxuICAgICAgeyBhcnJheWlzaEFkZChwYXJlbnQudGFncywgdGFnTmFtZSwgdGFnKTsgfVxuXG4gICAgcmV0dXJuIHRhZ1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIG9iamVjdCBhdCBhIGdpdmVuIGtleS4gSWYgdGhlIGtleSBwb2ludHMgdG8gYW4gYXJyYXksXG4gICAqIHRoZW4gdGhlIGl0ZW0gaXMganVzdCByZW1vdmVkIGZyb20gdGhlIGFycmF5LlxuICAgKiBAcGFyYW0geyBPYmplY3QgfSBvYmogLSBvYmplY3Qgb24gd2hpY2ggdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBwcm9wZXJ0eSBuYW1lXG4gICAqIEBwYXJhbSB7IE9iamVjdCB9IHZhbHVlIC0gdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSB0byBiZSByZW1vdmVkXG4gICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBlbnN1cmVBcnJheSAtIGVuc3VyZSB0aGF0IHRoZSBwcm9wZXJ0eSByZW1haW5zIGFuIGFycmF5XG4gICovXG4gIGZ1bmN0aW9uIGFycmF5aXNoUmVtb3ZlKG9iaiwga2V5LCB2YWx1ZSwgZW5zdXJlQXJyYXkpIHtcbiAgICBpZiAoaXNBcnJheShvYmpba2V5XSkpIHtcbiAgICAgIHZhciBpbmRleCA9IG9ialtrZXldLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkgeyBvYmpba2V5XS5zcGxpY2UoaW5kZXgsIDEpOyB9XG4gICAgICBpZiAoIW9ialtrZXldLmxlbmd0aCkgeyBkZWxldGUgb2JqW2tleV07IH1cbiAgICAgIGVsc2UgaWYgKG9ialtrZXldLmxlbmd0aCA9PT0gMSAmJiAhZW5zdXJlQXJyYXkpIHsgb2JqW2tleV0gPSBvYmpba2V5XVswXTsgfVxuICAgIH0gZWxzZSBpZiAob2JqW2tleV0gPT09IHZhbHVlKVxuICAgICAgeyBkZWxldGUgb2JqW2tleV07IH0gLy8gb3RoZXJ3aXNlIGp1c3QgZGVsZXRlIHRoZSBrZXlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBlbGVtZW50cyBmb3IgYSB2aXJ0dWFsIHRhZ1xuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtIHsgTm9kZSB9IHNyYyAtIHRoZSBub2RlIHRoYXQgd2lsbCBkbyB0aGUgaW5zZXJ0aW5nIG9yIGFwcGVuZGluZ1xuICAgKiBAcGFyYW0geyBUYWcgfSB0YXJnZXQgLSBvbmx5IGlmIGluc2VydGluZywgaW5zZXJ0IGJlZm9yZSB0aGlzIHRhZydzIGZpcnN0IGNoaWxkXG4gICAqL1xuICBmdW5jdGlvbiBtYWtlVmlydHVhbChzcmMsIHRhcmdldCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGhlYWQgPSBjcmVhdGVET01QbGFjZWhvbGRlcigpO1xuICAgIHZhciB0YWlsID0gY3JlYXRlRE9NUGxhY2Vob2xkZXIoKTtcbiAgICB2YXIgZnJhZyA9IGNyZWF0ZUZyYWdtZW50KCk7XG4gICAgdmFyIHNpYjtcbiAgICB2YXIgZWw7XG5cbiAgICB0aGlzLnJvb3QuaW5zZXJ0QmVmb3JlKGhlYWQsIHRoaXMucm9vdC5maXJzdENoaWxkKTtcbiAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGFpbCk7XG5cbiAgICB0aGlzLl9fLmhlYWQgPSBlbCA9IGhlYWQ7XG4gICAgdGhpcy5fXy50YWlsID0gdGFpbDtcblxuICAgIHdoaWxlIChlbCkge1xuICAgICAgc2liID0gZWwubmV4dFNpYmxpbmc7XG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIHRoaXMkMS5fXy52aXJ0cy5wdXNoKGVsKTsgLy8gaG9sZCBmb3IgdW5tb3VudGluZ1xuICAgICAgZWwgPSBzaWI7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldClcbiAgICAgIHsgc3JjLmluc2VydEJlZm9yZShmcmFnLCB0YXJnZXQuX18uaGVhZCk7IH1cbiAgICBlbHNlXG4gICAgICB7IHNyYy5hcHBlbmRDaGlsZChmcmFnKTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIG1ha2VzIGEgdGFnIHZpcnR1YWwgYW5kIHJlcGxhY2VzIGEgcmVmZXJlbmNlIGluIHRoZSBkb21cbiAgICogQHRoaXMgVGFnXG4gICAqIEBwYXJhbSB7IHRhZyB9IHRoZSB0YWcgdG8gbWFrZSB2aXJ0dWFsXG4gICAqIEBwYXJhbSB7IHJlZiB9IHRoZSBkb20gcmVmZXJlbmNlIGxvY2F0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBtYWtlUmVwbGFjZVZpcnR1YWwodGFnLCByZWYpIHtcbiAgICBpZiAoIXJlZi5wYXJlbnROb2RlKSB7IHJldHVybiB9XG4gICAgdmFyIGZyYWcgPSBjcmVhdGVGcmFnbWVudCgpO1xuICAgIG1ha2VWaXJ0dWFsLmNhbGwodGFnLCBmcmFnKTtcbiAgICByZWYucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZnJhZywgcmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZHluYW1pY2FsbHkgY3JlYXRlZCBkYXRhLWlzIHRhZ3Mgd2l0aCBjaGFuZ2luZyBleHByZXNzaW9uc1xuICAgKiBAcGFyYW0geyBPYmplY3QgfSBleHByIC0gZXhwcmVzc2lvbiB0YWcgYW5kIGV4cHJlc3Npb24gaW5mb1xuICAgKiBAcGFyYW0geyBUYWcgfSAgICBwYXJlbnQgLSBwYXJlbnQgZm9yIHRhZyBjcmVhdGlvblxuICAgKiBAcGFyYW0geyBTdHJpbmcgfSB0YWdOYW1lIC0gdGFnIGltcGxlbWVudGF0aW9uIHdlIHdhbnQgdG8gdXNlXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVEYXRhSXMoZXhwciwgcGFyZW50LCB0YWdOYW1lKSB7XG4gICAgdmFyIHRhZyA9IGV4cHIudGFnIHx8IGV4cHIuZG9tLl90YWc7XG4gICAgdmFyIHJlZjtcblxuICAgIHZhciByZWYkMSA9IHRhZyA/IHRhZy5fXyA6IHt9O1xuICAgIHZhciBoZWFkID0gcmVmJDEuaGVhZDtcbiAgICB2YXIgaXNWaXJ0dWFsID0gZXhwci5kb20udGFnTmFtZSA9PT0gJ1ZJUlRVQUwnO1xuXG4gICAgaWYgKHRhZyAmJiBleHByLnRhZ05hbWUgPT09IHRhZ05hbWUpIHtcbiAgICAgIHRhZy51cGRhdGUoKTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHN5bmMgX3BhcmVudCB0byBhY2NvbW1vZGF0ZSBjaGFuZ2luZyB0YWduYW1lc1xuICAgIGlmICh0YWcpIHtcbiAgICAgIC8vIG5lZWQgcGxhY2Vob2xkZXIgYmVmb3JlIHVubW91bnRcbiAgICAgIGlmKGlzVmlydHVhbCkge1xuICAgICAgICByZWYgPSBjcmVhdGVET01QbGFjZWhvbGRlcigpO1xuICAgICAgICBoZWFkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlZiwgaGVhZCk7XG4gICAgICB9XG5cbiAgICAgIHRhZy51bm1vdW50KHRydWUpO1xuICAgIH1cblxuICAgIC8vIHVuYWJsZSB0byBnZXQgdGhlIHRhZyBuYW1lXG4gICAgaWYgKCFpc1N0cmluZyh0YWdOYW1lKSkgeyByZXR1cm4gfVxuXG4gICAgZXhwci5pbXBsID0gX19UQUdfSU1QTFt0YWdOYW1lXTtcblxuICAgIC8vIHVua25vd24gaW1wbGVtZW50YXRpb25cbiAgICBpZiAoIWV4cHIuaW1wbCkgeyByZXR1cm4gfVxuXG4gICAgZXhwci50YWcgPSB0YWcgPSBpbml0Q2hpbGQoXG4gICAgICBleHByLmltcGwsIHtcbiAgICAgICAgcm9vdDogZXhwci5kb20sXG4gICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lXG4gICAgICB9LFxuICAgICAgZXhwci5kb20uaW5uZXJIVE1MLFxuICAgICAgcGFyZW50XG4gICAgKTtcblxuICAgIGVhY2goZXhwci5hdHRycywgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHNldEF0dHJpYnV0ZSh0YWcucm9vdCwgYS5uYW1lLCBhLnZhbHVlKTsgfSk7XG4gICAgZXhwci50YWdOYW1lID0gdGFnTmFtZTtcbiAgICB0YWcubW91bnQoKTtcblxuICAgIC8vIHJvb3QgZXhpc3QgZmlyc3QgdGltZSwgYWZ0ZXIgdXNlIHBsYWNlaG9sZGVyXG4gICAgaWYgKGlzVmlydHVhbCkgeyBtYWtlUmVwbGFjZVZpcnR1YWwodGFnLCByZWYgfHwgdGFnLnJvb3QpOyB9XG5cbiAgICAvLyBwYXJlbnQgaXMgdGhlIHBsYWNlaG9sZGVyIHRhZywgbm90IHRoZSBkeW5hbWljIHRhZyBzbyBjbGVhbiB1cFxuICAgIHBhcmVudC5fXy5vblVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGVsTmFtZSA9IHRhZy5vcHRzLmRhdGFJcztcbiAgICAgIGFycmF5aXNoUmVtb3ZlKHRhZy5wYXJlbnQudGFncywgZGVsTmFtZSwgdGFnKTtcbiAgICAgIGFycmF5aXNoUmVtb3ZlKHRhZy5fXy5wYXJlbnQudGFncywgZGVsTmFtZSwgdGFnKTtcbiAgICAgIHRhZy51bm1vdW50KCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb21hbGl6ZSBhbnkgYXR0cmlidXRlIHJlbW92aW5nIHRoZSBcInJpb3QtXCIgcHJlZml4XG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gYXR0ck5hbWUgLSBvcmlnaW5hbCBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcmV0dXJucyB7IFN0cmluZyB9IHZhbGlkIGh0bWwgYXR0cmlidXRlIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJOYW1lKGF0dHJOYW1lKSB7XG4gICAgaWYgKCFhdHRyTmFtZSkgeyByZXR1cm4gbnVsbCB9XG4gICAgYXR0ck5hbWUgPSBhdHRyTmFtZS5yZXBsYWNlKEFUVFJTX1BSRUZJWCwgJycpO1xuICAgIGlmIChDQVNFX1NFTlNJVElWRV9BVFRSSUJVVEVTW2F0dHJOYW1lXSkgeyBhdHRyTmFtZSA9IENBU0VfU0VOU0lUSVZFX0FUVFJJQlVURVNbYXR0ck5hbWVdOyB9XG4gICAgcmV0dXJuIGF0dHJOYW1lXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIG9uIHNpbmdsZSB0YWcgZXhwcmVzc2lvblxuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXhwciAtIGV4cHJlc3Npb24gbG9naWNcbiAgICogQHJldHVybnMgeyB1bmRlZmluZWQgfVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlRXhwcmVzc2lvbihleHByKSB7XG4gICAgaWYgKHRoaXMucm9vdCAmJiBnZXRBdHRyaWJ1dGUodGhpcy5yb290LCd2aXJ0dWFsaXplZCcpKSB7IHJldHVybiB9XG5cbiAgICB2YXIgZG9tID0gZXhwci5kb207XG4gICAgLy8gcmVtb3ZlIHRoZSByaW90LSBwcmVmaXhcbiAgICB2YXIgYXR0ck5hbWUgPSBub3JtYWxpemVBdHRyTmFtZShleHByLmF0dHIpO1xuICAgIHZhciBpc1RvZ2dsZSA9IGNvbnRhaW5zKFtTSE9XX0RJUkVDVElWRSwgSElERV9ESVJFQ1RJVkVdLCBhdHRyTmFtZSk7XG4gICAgdmFyIGlzVmlydHVhbCA9IGV4cHIucm9vdCAmJiBleHByLnJvb3QudGFnTmFtZSA9PT0gJ1ZJUlRVQUwnO1xuICAgIHZhciByZWYgPSB0aGlzLl9fO1xuICAgIHZhciBpc0Fub255bW91cyA9IHJlZi5pc0Fub255bW91cztcbiAgICB2YXIgcGFyZW50ID0gZG9tICYmIChleHByLnBhcmVudCB8fCBkb20ucGFyZW50Tm9kZSk7XG4gICAgdmFyIGtlZXBWYWx1ZUF0dHJpYnV0ZXMgPSBzZXR0aW5ncy5rZWVwVmFsdWVBdHRyaWJ1dGVzO1xuICAgIC8vIGRldGVjdCB0aGUgc3R5bGUgYXR0cmlidXRlc1xuICAgIHZhciBpc1N0eWxlQXR0ciA9IGF0dHJOYW1lID09PSAnc3R5bGUnO1xuICAgIHZhciBpc0NsYXNzQXR0ciA9IGF0dHJOYW1lID09PSAnY2xhc3MnO1xuICAgIHZhciBpc1ZhbHVlQXR0ciA9IGF0dHJOYW1lID09PSAndmFsdWUnO1xuXG4gICAgdmFyIHZhbHVlO1xuXG4gICAgLy8gaWYgaXQncyBhIHRhZyB3ZSBjb3VsZCB0b3RhbGx5IHNraXAgdGhlIHJlc3RcbiAgICBpZiAoZXhwci5fcmlvdF9pZCkge1xuICAgICAgaWYgKGV4cHIuX18ud2FzQ3JlYXRlZCkge1xuICAgICAgICBleHByLnVwZGF0ZSgpO1xuICAgICAgLy8gaWYgaXQgaGFzbid0IGJlZW4gbW91bnRlZCB5ZXQsIGRvIHRoYXQgbm93LlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwci5tb3VudCgpO1xuICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgICAgbWFrZVJlcGxhY2VWaXJ0dWFsKGV4cHIsIGV4cHIucm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRoaXMgZXhwcmVzc2lvbiBoYXMgdGhlIHVwZGF0ZSBtZXRob2QgaXQgbWVhbnMgaXQgY2FuIGhhbmRsZSB0aGUgRE9NIGNoYW5nZXMgYnkgaXRzZWxmXG4gICAgaWYgKGV4cHIudXBkYXRlKSB7IHJldHVybiBleHByLnVwZGF0ZSgpIH1cblxuICAgIHZhciBjb250ZXh0ID0gaXNUb2dnbGUgJiYgIWlzQW5vbnltb3VzID8gaW5oZXJpdFBhcmVudFByb3BzLmNhbGwodGhpcykgOiB0aGlzO1xuXG4gICAgLy8gLi4uaXQgc2VlbXMgdG8gYmUgYSBzaW1wbGUgZXhwcmVzc2lvbiBzbyB3ZSB0cnkgdG8gY2FsY3VsYXRlIGl0cyB2YWx1ZVxuICAgIHZhbHVlID0gdG1wbChleHByLmV4cHIsIGNvbnRleHQpO1xuXG4gICAgdmFyIGhhc1ZhbHVlID0gIWlzQmxhbmsodmFsdWUpO1xuICAgIHZhciBpc09iaiA9IGlzT2JqZWN0KHZhbHVlKTtcblxuICAgIC8vIGNvbnZlcnQgdGhlIHN0eWxlL2NsYXNzIG9iamVjdHMgdG8gc3RyaW5nc1xuICAgIGlmIChpc09iaikge1xuICAgICAgaWYgKGlzQ2xhc3NBdHRyKSB7XG4gICAgICAgIHZhbHVlID0gdG1wbChKU09OLnN0cmluZ2lmeSh2YWx1ZSksIHRoaXMpO1xuICAgICAgfSBlbHNlIGlmIChpc1N0eWxlQXR0cikge1xuICAgICAgICB2YWx1ZSA9IHN0eWxlT2JqZWN0VG9TdHJpbmcodmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBvcmlnaW5hbCBhdHRyaWJ1dGVcbiAgICBpZiAoZXhwci5hdHRyICYmXG4gICAgICAgIChcbiAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgYXR0cmlidXRlIGNhbiBiZSByZW1vdmVkIG9ubHkgaWYgd2UgYXJlIHBhcnNpbmcgdGhlIG9yaWdpbmFsIGV4cHJlc3Npb25cbiAgICAgICAgICAhZXhwci53YXNQYXJzZWRPbmNlIHx8XG4gICAgICAgICAgLy8gb3IgaXRzIHZhbHVlIGlzIGZhbHNlXG4gICAgICAgICAgdmFsdWUgPT09IGZhbHNlIHx8XG4gICAgICAgICAgLy8gb3IgaWYgaXRzIHZhbHVlIGlzIGN1cnJlbnRseSBmYWxzeS4uLlxuICAgICAgICAgIC8vIFdlIHdpbGwga2VlcCB0aGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZXMgaWYgdGhlIFwia2VlcFZhbHVlQXR0cmlidXRlc1wiXG4gICAgICAgICAgLy8gaXMgZW5hYmxlZCB0aG91Z2hcbiAgICAgICAgICAoIWhhc1ZhbHVlICYmICghaXNWYWx1ZUF0dHIgfHwgaXNWYWx1ZUF0dHIgJiYgIWtlZXBWYWx1ZUF0dHJpYnV0ZXMpKVxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAvLyByZW1vdmUgZWl0aGVyIHJpb3QtKiBhdHRyaWJ1dGVzIG9yIGp1c3QgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICByZW1vdmVBdHRyaWJ1dGUoZG9tLCBnZXRBdHRyaWJ1dGUoZG9tLCBleHByLmF0dHIpID8gZXhwci5hdHRyIDogYXR0ck5hbWUpO1xuICAgIH1cblxuICAgIC8vIGZvciB0aGUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdlIGRvbid0IG5lZWQgdGhlIHZhbHVlXG4gICAgLy8gd2UgY2FuIGNvbnZlcnQgaXQgdG8gY2hlY2tlZD10cnVlIHRvIGNoZWNrZWQ9Y2hlY2tlZFxuICAgIGlmIChleHByLmJvb2wpIHsgdmFsdWUgPSB2YWx1ZSA/IGF0dHJOYW1lIDogZmFsc2U7IH1cbiAgICBpZiAoZXhwci5pc1J0YWcpIHsgcmV0dXJuIHVwZGF0ZURhdGFJcyhleHByLCB0aGlzLCB2YWx1ZSkgfVxuICAgIGlmIChleHByLndhc1BhcnNlZE9uY2UgJiYgZXhwci52YWx1ZSA9PT0gdmFsdWUpIHsgcmV0dXJuIH1cblxuICAgIC8vIHVwZGF0ZSB0aGUgZXhwcmVzc2lvbiB2YWx1ZVxuICAgIGV4cHIudmFsdWUgPSB2YWx1ZTtcbiAgICBleHByLndhc1BhcnNlZE9uY2UgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCAoYW5kIGl0J3Mgbm90IGEgc3R5bGUgb3IgY2xhc3MgYXR0cmlidXRlKSB3ZSBjYW4gbm90IGRvIG11Y2ggbW9yZSB3aXRoIGl0XG4gICAgaWYgKGlzT2JqICYmICFpc0NsYXNzQXR0ciAmJiAhaXNTdHlsZUF0dHIgJiYgIWlzVG9nZ2xlKSB7IHJldHVybiB9XG4gICAgLy8gYXZvaWQgdG8gcmVuZGVyIHVuZGVmaW5lZC9udWxsIHZhbHVlc1xuICAgIGlmICghaGFzVmFsdWUpIHsgdmFsdWUgPSAnJzsgfVxuXG4gICAgLy8gdGV4dGFyZWEgYW5kIHRleHQgbm9kZXMgaGF2ZSBubyBhdHRyaWJ1dGUgbmFtZVxuICAgIGlmICghYXR0ck5hbWUpIHtcbiAgICAgIC8vIGFib3V0ICM4MTUgdy9vIHJlcGxhY2U6IHRoZSBicm93c2VyIGNvbnZlcnRzIHRoZSB2YWx1ZSB0byBhIHN0cmluZyxcbiAgICAgIC8vIHRoZSBjb21wYXJpc29uIGJ5IFwiPT1cIiBkb2VzIHRvbywgYnV0IG5vdCBpbiB0aGUgc2VydmVyXG4gICAgICB2YWx1ZSArPSAnJztcbiAgICAgIC8vIHRlc3QgZm9yIHBhcmVudCBhdm9pZHMgZXJyb3Igd2l0aCBpbnZhbGlkIGFzc2lnbm1lbnQgdG8gbm9kZVZhbHVlXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIGNhY2hlIHRoZSBwYXJlbnQgbm9kZSBiZWNhdXNlIHNvbWVob3cgaXQgd2lsbCBiZWNvbWUgbnVsbCBvbiBJRVxuICAgICAgICAvLyBvbiB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgZXhwci5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgIHBhcmVudC52YWx1ZSA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgLy8gIzExMTNcbiAgICAgICAgICBpZiAoIUlFX1ZFUlNJT04pIHsgZG9tLm5vZGVWYWx1ZSA9IHZhbHVlOyB9ICAvLyAjMTYyNSBJRSB0aHJvd3MgaGVyZSwgbm9kZVZhbHVlXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgYmUgYXZhaWxhYmxlIG9uICd1cGRhdGVkJ1xuICAgICAgICBlbHNlIHsgZG9tLm5vZGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAvLyBoYW5kbGUgZXZlbnRzIGJpbmRpbmdcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgaWYgKGlzRXZlbnRBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgIHNldEV2ZW50SGFuZGxlcihhdHRyTmFtZSwgdmFsdWUsIGRvbSwgdGhpcyk7XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIC8vIHNob3cgLyBoaWRlXG4gICAgY2FzZSBpc1RvZ2dsZTpcbiAgICAgIHRvZ2dsZVZpc2liaWxpdHkoZG9tLCBhdHRyTmFtZSA9PT0gSElERV9ESVJFQ1RJVkUgPyAhdmFsdWUgOiB2YWx1ZSk7XG4gICAgICBicmVha1xuICAgIC8vIGhhbmRsZSBhdHRyaWJ1dGVzXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChleHByLmJvb2wpIHtcbiAgICAgICAgZG9tW2F0dHJOYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNWYWx1ZUF0dHIgJiYgZG9tLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzVmFsdWUgJiYgdmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZShkb20sIGF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGluIGNhc2Ugb2Ygc3R5bGUgY2hhbmdlc1xuICAgICAgLy8gdGhlIGVsZW1lbnQgc3RheXMgaGlkZGVuXG4gICAgICBpZiAoaXNTdHlsZUF0dHIgJiYgZG9tLmhpZGRlbikgeyB0b2dnbGVWaXNpYmlsaXR5KGRvbSwgZmFsc2UpOyB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhbGwgdGhlIGV4cHJlc3Npb25zIGluIGEgVGFnIGluc3RhbmNlXG4gICAqIEB0aGlzIFRhZ1xuICAgKiBAcGFyYW0geyBBcnJheSB9IGV4cHJlc3Npb25zIC0gZXhwcmVzc2lvbiB0aGF0IG11c3QgYmUgcmUgZXZhbHVhdGVkXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGUoZXhwcmVzc2lvbnMpIHtcbiAgICBlYWNoKGV4cHJlc3Npb25zLCB1cGRhdGVFeHByZXNzaW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIG5lZWQgdG8gdXBkYXRlIG9wdHMgZm9yIHRoaXMgdGFnLiBUaGF0IHJlcXVpcmVzIHVwZGF0aW5nIHRoZSBleHByZXNzaW9uc1xuICAgKiBpbiBhbnkgYXR0cmlidXRlcyBvbiB0aGUgdGFnLCBhbmQgdGhlbiBjb3B5aW5nIHRoZSByZXN1bHQgb250byBvcHRzLlxuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtICAge0Jvb2xlYW59IGlzTG9vcCAtIGlzIGl0IGEgbG9vcCB0YWc/XG4gICAqIEBwYXJhbSAgIHsgVGFnIH0gIHBhcmVudCAtIHBhcmVudCB0YWcgbm9kZVxuICAgKiBAcGFyYW0gICB7IEJvb2xlYW4gfSAgaXNBbm9ueW1vdXMgLSBpcyBpdCBhIHRhZyB3aXRob3V0IGFueSBpbXBsPyAoYSB0YWcgbm90IHJlZ2lzdGVyZWQpXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gIG9wdHMgLSB0YWcgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7IEFycmF5IH0gIGluc3RBdHRycyAtIHRhZyBhdHRyaWJ1dGVzIGFycmF5XG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVPcHRzKGlzTG9vcCwgcGFyZW50LCBpc0Fub255bW91cywgb3B0cywgaW5zdEF0dHJzKSB7XG4gICAgLy8gaXNBbm9ueW1vdXMgYGVhY2hgIHRhZ3MgdHJlYXQgYGRvbWAgYW5kIGByb290YCBkaWZmZXJlbnRseS4gSW4gdGhpcyBjYXNlXG4gICAgLy8gKGFuZCBvbmx5IHRoaXMgY2FzZSkgd2UgZG9uJ3QgbmVlZCB0byBkbyB1cGRhdGVPcHRzLCBiZWNhdXNlIHRoZSByZWd1bGFyIHBhcnNlXG4gICAgLy8gd2lsbCB1cGRhdGUgdGhvc2UgYXR0cnMuIFBsdXMsIGlzQW5vbnltb3VzIHRhZ3MgZG9uJ3QgbmVlZCBvcHRzIGFueXdheVxuICAgIGlmIChpc0xvb3AgJiYgaXNBbm9ueW1vdXMpIHsgcmV0dXJuIH1cbiAgICB2YXIgY3R4ID0gaXNMb29wID8gaW5oZXJpdFBhcmVudFByb3BzLmNhbGwodGhpcykgOiBwYXJlbnQgfHwgdGhpcztcblxuICAgIGVhY2goaW5zdEF0dHJzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgaWYgKGF0dHIuZXhwcikgeyB1cGRhdGVFeHByZXNzaW9uLmNhbGwoY3R4LCBhdHRyLmV4cHIpOyB9XG4gICAgICAvLyBub3JtYWxpemUgdGhlIGF0dHJpYnV0ZSBuYW1lc1xuICAgICAgb3B0c1t0b0NhbWVsKGF0dHIubmFtZSkucmVwbGFjZShBVFRSU19QUkVGSVgsICcnKV0gPSBhdHRyLmV4cHIgPyBhdHRyLmV4cHIudmFsdWUgOiBhdHRyLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdGFnIGV4cHJlc3Npb25zIGFuZCBvcHRpb25zXG4gICAqIEBwYXJhbSB7IFRhZyB9IHRhZyAtIHRhZyBvYmplY3RcbiAgICogQHBhcmFtIHsgKiB9IGRhdGEgLSBkYXRhIHdlIHdhbnQgdG8gdXNlIHRvIGV4dGVuZCB0aGUgdGFnIHByb3BlcnRpZXNcbiAgICogQHBhcmFtIHsgQXJyYXkgfSBleHByZXNzaW9ucyAtIGNvbXBvbmVudCBleHByZXNzaW9ucyBhcnJheVxuICAgKiBAcmV0dXJucyB7IFRhZyB9IHRoZSBjdXJyZW50IHRhZyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlKHRhZywgZGF0YSwgZXhwcmVzc2lvbnMpIHtcbiAgICB2YXIgX18gPSB0YWcuX187XG4gICAgdmFyIG5leHRPcHRzID0ge307XG4gICAgdmFyIGNhblRyaWdnZXIgPSB0YWcuaXNNb3VudGVkICYmICFfXy5za2lwQW5vbnltb3VzO1xuXG4gICAgLy8gaW5oZXJpdCBwcm9wZXJ0aWVzIGZyb20gdGhlIHBhcmVudCB0YWdcbiAgICBpZiAoX18uaXNBbm9ueW1vdXMgJiYgX18ucGFyZW50KSB7IGV4dGVuZCh0YWcsIF9fLnBhcmVudCk7IH1cbiAgICBleHRlbmQodGFnLCBkYXRhKTtcblxuICAgIHVwZGF0ZU9wdHMuYXBwbHkodGFnLCBbX18uaXNMb29wLCBfXy5wYXJlbnQsIF9fLmlzQW5vbnltb3VzLCBuZXh0T3B0cywgX18uaW5zdEF0dHJzXSk7XG5cbiAgICBpZiAoXG4gICAgICBjYW5UcmlnZ2VyICYmXG4gICAgICB0YWcuaXNNb3VudGVkICYmXG4gICAgICBpc0Z1bmN0aW9uKHRhZy5zaG91bGRVcGRhdGUpICYmICF0YWcuc2hvdWxkVXBkYXRlKGRhdGEsIG5leHRPcHRzKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRhZ1xuICAgIH1cblxuICAgIGV4dGVuZCh0YWcub3B0cywgbmV4dE9wdHMpO1xuXG4gICAgaWYgKGNhblRyaWdnZXIpIHsgdGFnLnRyaWdnZXIoJ3VwZGF0ZScsIGRhdGEpOyB9XG4gICAgdXBkYXRlLmNhbGwodGFnLCBleHByZXNzaW9ucyk7XG4gICAgaWYgKGNhblRyaWdnZXIpIHsgdGFnLnRyaWdnZXIoJ3VwZGF0ZWQnKTsgfVxuXG4gICAgcmV0dXJuIHRhZ1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RvcnMgZm9yIHRhZ3NcbiAgICogQHBhcmFtICAgeyBBcnJheSB9IHRhZ3MgLSB0YWcgbmFtZXMgdG8gc2VsZWN0XG4gICAqIEByZXR1cm5zIHsgU3RyaW5nIH0gc2VsZWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIHF1ZXJ5KHRhZ3MpIHtcbiAgICAvLyBzZWxlY3QgYWxsIHRhZ3NcbiAgICBpZiAoIXRhZ3MpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoX19UQUdfSU1QTCk7XG4gICAgICByZXR1cm4ga2V5cyArIHF1ZXJ5KGtleXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ3NcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHQpIHsgcmV0dXJuICEvW14tXFx3XS8udGVzdCh0KTsgfSlcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGxpc3QsIHQpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbGlzdCArIFwiLFtcIiArIElTX0RJUkVDVElWRSArIFwiPVxcXCJcIiArIG5hbWUgKyBcIlxcXCJdXCJcbiAgICAgIH0sICcnKVxuICB9XG5cbiAgLyoqXG4gICAqIEFub3RoZXIgd2F5IHRvIGNyZWF0ZSBhIHJpb3QgdGFnIGEgYml0IG1vcmUgZXM2IGZyaWVuZGx5XG4gICAqIEBwYXJhbSB7IEhUTUxFbGVtZW50IH0gZWwgLSB0YWcgRE9NIHNlbGVjdG9yIG9yIERPTSBub2RlL3NcbiAgICogQHBhcmFtIHsgT2JqZWN0IH0gb3B0cyAtIHRhZyBsb2dpY1xuICAgKiBAcmV0dXJucyB7IFRhZyB9IG5ldyByaW90IHRhZyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gVGFnKGVsLCBvcHRzKSB7XG4gICAgLy8gZ2V0IHRoZSB0YWcgcHJvcGVydGllcyBmcm9tIHRoZSBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBuYW1lID0gcmVmLm5hbWU7XG4gICAgdmFyIHRtcGwgPSByZWYudG1wbDtcbiAgICB2YXIgY3NzID0gcmVmLmNzcztcbiAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnM7XG4gICAgdmFyIG9uQ3JlYXRlID0gcmVmLm9uQ3JlYXRlO1xuICAgIC8vIHJlZ2lzdGVyIGEgbmV3IHRhZyBhbmQgY2FjaGUgdGhlIGNsYXNzIHByb3RvdHlwZVxuICAgIGlmICghX19UQUdfSU1QTFtuYW1lXSkge1xuICAgICAgdGFnKG5hbWUsIHRtcGwsIGNzcywgYXR0cnMsIG9uQ3JlYXRlKTtcbiAgICAgIC8vIGNhY2hlIHRoZSBjbGFzcyBjb25zdHJ1Y3RvclxuICAgICAgX19UQUdfSU1QTFtuYW1lXS5jbGFzcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgLy8gbW91bnQgdGhlIHRhZyB1c2luZyB0aGUgY2xhc3MgaW5zdGFuY2VcbiAgICBtb3VudCQxKGVsLCBuYW1lLCBvcHRzLCB0aGlzKTtcbiAgICAvLyBpbmplY3QgdGhlIGNvbXBvbmVudCBjc3NcbiAgICBpZiAoY3NzKSB7IHN0eWxlTWFuYWdlci5pbmplY3QoKTsgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcmlvdCB0YWcgaW1wbGVtZW50YXRpb25cbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIG5hbWUgLSBuYW1lL2lkIG9mIHRoZSBuZXcgcmlvdCB0YWdcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIHRtcGwgLSB0YWcgdGVtcGxhdGVcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIGNzcyAtIGN1c3RvbSB0YWcgY3NzXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICBhdHRycyAtIHJvb3QgdGFnIGF0dHJpYnV0ZXNcbiAgICogQHBhcmFtICAgeyBGdW5jdGlvbiB9IGZuIC0gdXNlciBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7IFN0cmluZyB9IG5hbWUvaWQgb2YgdGhlIHRhZyBqdXN0IGNyZWF0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHRhZyhuYW1lLCB0bXBsLCBjc3MsIGF0dHJzLCBmbikge1xuICAgIGlmIChpc0Z1bmN0aW9uKGF0dHJzKSkge1xuICAgICAgZm4gPSBhdHRycztcblxuICAgICAgaWYgKC9eW1xcdy1dK1xccz89Ly50ZXN0KGNzcykpIHtcbiAgICAgICAgYXR0cnMgPSBjc3M7XG4gICAgICAgIGNzcyA9ICcnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHsgYXR0cnMgPSAnJzsgfVxuICAgIH1cblxuICAgIGlmIChjc3MpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNzcykpXG4gICAgICAgIHsgZm4gPSBjc3M7IH1cbiAgICAgIGVsc2VcbiAgICAgICAgeyBzdHlsZU1hbmFnZXIuYWRkKGNzcywgbmFtZSk7IH1cbiAgICB9XG5cbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIF9fVEFHX0lNUExbbmFtZV0gPSB7IG5hbWU6IG5hbWUsIHRtcGw6IHRtcGwsIGF0dHJzOiBhdHRycywgZm46IGZuIH07XG5cbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyByaW90IHRhZyBpbXBsZW1lbnRhdGlvbiAoZm9yIHVzZSBieSB0aGUgY29tcGlsZXIpXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICBuYW1lIC0gbmFtZS9pZCBvZiB0aGUgbmV3IHJpb3QgdGFnXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICB0bXBsIC0gdGFnIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICBjc3MgLSBjdXN0b20gdGFnIGNzc1xuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9ICAgYXR0cnMgLSByb290IHRhZyBhdHRyaWJ1dGVzXG4gICAqIEBwYXJhbSAgIHsgRnVuY3Rpb24gfSBmbiAtIHVzZXIgZnVuY3Rpb25cbiAgICogQHJldHVybnMgeyBTdHJpbmcgfSBuYW1lL2lkIG9mIHRoZSB0YWcganVzdCBjcmVhdGVkXG4gICAqL1xuICBmdW5jdGlvbiB0YWcyKG5hbWUsIHRtcGwsIGNzcywgYXR0cnMsIGZuKSB7XG4gICAgaWYgKGNzcykgeyBzdHlsZU1hbmFnZXIuYWRkKGNzcywgbmFtZSk7IH1cblxuICAgIF9fVEFHX0lNUExbbmFtZV0gPSB7IG5hbWU6IG5hbWUsIHRtcGw6IHRtcGwsIGF0dHJzOiBhdHRycywgZm46IGZuIH07XG5cbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdW50IGEgdGFnIHVzaW5nIGEgc3BlY2lmaWMgdGFnIGltcGxlbWVudGF0aW9uXG4gICAqIEBwYXJhbSAgIHsgKiB9IHNlbGVjdG9yIC0gdGFnIERPTSBzZWxlY3RvciBvciBET00gbm9kZS9zXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gdGFnTmFtZSAtIHRhZyBpbXBsZW1lbnRhdGlvbiBuYW1lXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gb3B0cyAtIHRhZyBsb2dpY1xuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gbmV3IHRhZ3MgaW5zdGFuY2VzXG4gICAqL1xuICBmdW5jdGlvbiBtb3VudChzZWxlY3RvciwgdGFnTmFtZSwgb3B0cykge1xuICAgIHZhciB0YWdzID0gW107XG4gICAgdmFyIGVsZW0sIGFsbFRhZ3M7XG5cbiAgICBmdW5jdGlvbiBwdXNoVGFnc1RvKHJvb3QpIHtcbiAgICAgIGlmIChyb290LnRhZ05hbWUpIHtcbiAgICAgICAgdmFyIHJpb3RUYWcgPSBnZXRBdHRyaWJ1dGUocm9vdCwgSVNfRElSRUNUSVZFKSwgdGFnO1xuXG4gICAgICAgIC8vIGhhdmUgdGFnTmFtZT8gZm9yY2UgcmlvdC10YWcgdG8gYmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKHRhZ05hbWUgJiYgcmlvdFRhZyAhPT0gdGFnTmFtZSkge1xuICAgICAgICAgIHJpb3RUYWcgPSB0YWdOYW1lO1xuICAgICAgICAgIHNldEF0dHJpYnV0ZShyb290LCBJU19ESVJFQ1RJVkUsIHRhZ05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFnID0gbW91bnQkMShcbiAgICAgICAgICByb290LFxuICAgICAgICAgIHJpb3RUYWcgfHwgcm9vdC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgaXNGdW5jdGlvbihvcHRzKSA/IG9wdHMoKSA6IG9wdHNcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGFnKVxuICAgICAgICAgIHsgdGFncy5wdXNoKHRhZyk7IH1cbiAgICAgIH0gZWxzZSBpZiAocm9vdC5sZW5ndGgpXG4gICAgICAgIHsgZWFjaChyb290LCBwdXNoVGFnc1RvKTsgfSAvLyBhc3N1bWUgbm9kZUxpc3RcbiAgICB9XG5cbiAgICAvLyBpbmplY3Qgc3R5bGVzIGludG8gRE9NXG4gICAgc3R5bGVNYW5hZ2VyLmluamVjdCgpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHRhZ05hbWUpIHx8IGlzRnVuY3Rpb24odGFnTmFtZSkpIHtcbiAgICAgIG9wdHMgPSB0YWdOYW1lO1xuICAgICAgdGFnTmFtZSA9IDA7XG4gICAgfVxuXG4gICAgLy8gY3Jhd2wgdGhlIERPTSB0byBmaW5kIHRoZSB0YWdcbiAgICBpZiAoaXNTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yID09PSAnKicgP1xuICAgICAgICAvLyBzZWxlY3QgYWxsIHJlZ2lzdGVyZWQgdGFnc1xuICAgICAgICAvLyAmIHRhZ3MgZm91bmQgd2l0aCB0aGUgcmlvdC10YWcgYXR0cmlidXRlIHNldFxuICAgICAgICBhbGxUYWdzID0gcXVlcnkoKSA6XG4gICAgICAgIC8vIG9yIGp1c3QgdGhlIG9uZXMgbmFtZWQgbGlrZSB0aGUgc2VsZWN0b3JcbiAgICAgICAgc2VsZWN0b3IgKyBxdWVyeShzZWxlY3Rvci5zcGxpdCgvLCAqLykpO1xuXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gcGFzcyBhbHdheXMgYSBzZWxlY3RvclxuICAgICAgLy8gdG8gdGhlIHF1ZXJ5U2VsZWN0b3JBbGwgZnVuY3Rpb25cbiAgICAgIGVsZW0gPSBzZWxlY3RvciA/ICQkKHNlbGVjdG9yKSA6IFtdO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAvLyBwcm9iYWJseSB5b3UgaGF2ZSBwYXNzZWQgYWxyZWFkeSBhIHRhZyBvciBhIE5vZGVMaXN0XG4gICAgICB7IGVsZW0gPSBzZWxlY3RvcjsgfVxuXG4gICAgLy8gc2VsZWN0IGFsbCB0aGUgcmVnaXN0ZXJlZCBhbmQgbW91bnQgdGhlbSBpbnNpZGUgdGhlaXIgcm9vdCBlbGVtZW50c1xuICAgIGlmICh0YWdOYW1lID09PSAnKicpIHtcbiAgICAgIC8vIGdldCBhbGwgY3VzdG9tIHRhZ3NcbiAgICAgIHRhZ05hbWUgPSBhbGxUYWdzIHx8IHF1ZXJ5KCk7XG4gICAgICAvLyBpZiB0aGUgcm9vdCBlbHMgaXQncyBqdXN0IGEgc2luZ2xlIHRhZ1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSlcbiAgICAgICAgeyBlbGVtID0gJCQodGFnTmFtZSwgZWxlbSk7IH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBzZWxlY3QgYWxsIHRoZSBjaGlsZHJlbiBmb3IgYWxsIHRoZSBkaWZmZXJlbnQgcm9vdCBlbGVtZW50c1xuICAgICAgICB2YXIgbm9kZUxpc3QgPSBbXTtcblxuICAgICAgICBlYWNoKGVsZW0sIGZ1bmN0aW9uIChfZWwpIHsgcmV0dXJuIG5vZGVMaXN0LnB1c2goJCQodGFnTmFtZSwgX2VsKSk7IH0pO1xuXG4gICAgICAgIGVsZW0gPSBub2RlTGlzdDtcbiAgICAgIH1cbiAgICAgIC8vIGdldCByaWQgb2YgdGhlIHRhZ05hbWVcbiAgICAgIHRhZ05hbWUgPSAwO1xuICAgIH1cblxuICAgIHB1c2hUYWdzVG8oZWxlbSk7XG5cbiAgICByZXR1cm4gdGFnc1xuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbWl4aW4gdGhhdCBjb3VsZCBiZSBnbG9iYWxseSBzaGFyZWQgYWNyb3NzIGFsbCB0aGUgdGFnc1xuICB2YXIgbWl4aW5zID0ge307XG4gIHZhciBnbG9iYWxzID0gbWl4aW5zW0dMT0JBTF9NSVhJTl0gPSB7fTtcbiAgdmFyIG1peGluc19pZCA9IDA7XG5cbiAgLyoqXG4gICAqIENyZWF0ZS9SZXR1cm4gYSBtaXhpbiBieSBpdHMgbmFtZVxuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9ICBuYW1lIC0gbWl4aW4gbmFtZSAoZ2xvYmFsIG1peGluIGlmIG9iamVjdClcbiAgICogQHBhcmFtICAgeyBPYmplY3QgfSAgbWl4IC0gbWl4aW4gbG9naWNcbiAgICogQHBhcmFtICAgeyBCb29sZWFuIH0gZyAtIGlzIGdsb2JhbD9cbiAgICogQHJldHVybnMgeyBPYmplY3QgfSAgdGhlIG1peGluIGxvZ2ljXG4gICAqL1xuICBmdW5jdGlvbiBtaXhpbihuYW1lLCBtaXgsIGcpIHtcbiAgICAvLyBVbm5hbWVkIGdsb2JhbFxuICAgIGlmIChpc09iamVjdChuYW1lKSkge1xuICAgICAgbWl4aW4oKFwiX19cIiArIChtaXhpbnNfaWQrKykgKyBcIl9fXCIpLCBuYW1lLCB0cnVlKTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBzdG9yZSA9IGcgPyBnbG9iYWxzIDogbWl4aW5zO1xuXG4gICAgLy8gR2V0dGVyXG4gICAgaWYgKCFtaXgpIHtcbiAgICAgIGlmIChpc1VuZGVmaW5lZChzdG9yZVtuYW1lXSkpXG4gICAgICAgIHsgdGhyb3cgbmV3IEVycm9yKChcIlVucmVnaXN0ZXJlZCBtaXhpbjogXCIgKyBuYW1lKSkgfVxuXG4gICAgICByZXR1cm4gc3RvcmVbbmFtZV1cbiAgICB9XG5cbiAgICAvLyBTZXR0ZXJcbiAgICBzdG9yZVtuYW1lXSA9IGlzRnVuY3Rpb24obWl4KSA/XG4gICAgICBleHRlbmQobWl4LnByb3RvdHlwZSwgc3RvcmVbbmFtZV0gfHwge30pICYmIG1peCA6XG4gICAgICBleHRlbmQoc3RvcmVbbmFtZV0gfHwge30sIG1peCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCB0aGUgdGFncyBpbnN0YW5jZXMgY3JlYXRlZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYWxsIHRoZSB0YWdzIGluc3RhbmNlc1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlJDEoKSB7XG4gICAgcmV0dXJuIGVhY2goX19UQUdTX0NBQ0hFLCBmdW5jdGlvbiAodGFnKSB7IHJldHVybiB0YWcudXBkYXRlKCk7IH0pXG4gIH1cblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyKG5hbWUpIHtcbiAgICBzdHlsZU1hbmFnZXIucmVtb3ZlKG5hbWUpO1xuICAgIHJldHVybiBkZWxldGUgX19UQUdfSU1QTFtuYW1lXVxuICB9XG5cbiAgdmFyIHZlcnNpb24gPSAndjMuMTMuMic7XG5cbiAgdmFyIGNvcmUgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgVGFnOiBUYWcsXG4gICAgdGFnOiB0YWcsXG4gICAgdGFnMjogdGFnMixcbiAgICBtb3VudDogbW91bnQsXG4gICAgbWl4aW46IG1peGluLFxuICAgIHVwZGF0ZTogdXBkYXRlJDEsXG4gICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlcixcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBtaXhpbiB0byB0aGlzIHRhZ1xuICAgKiBAcmV0dXJucyB7IFRhZyB9IHRoZSBjdXJyZW50IHRhZyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcG9uZW50TWl4aW4odGFnJCQxKSB7XG4gICAgdmFyIG1peGlucyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoIGxlbi0tID4gMCApIG1peGluc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgIGVhY2gobWl4aW5zLCBmdW5jdGlvbiAobWl4KSB7XG4gICAgICB2YXIgaW5zdGFuY2U7XG4gICAgICB2YXIgb2JqO1xuICAgICAgdmFyIHByb3BzID0gW107XG5cbiAgICAgIC8vIHByb3BlcnRpZXMgYmxhY2tsaXN0ZWQgYW5kIHdpbGwgbm90IGJlIGJvdW5kIHRvIHRoZSB0YWcgaW5zdGFuY2VcbiAgICAgIHZhciBwcm9wc0JsYWNrbGlzdCA9IFsnaW5pdCcsICdfX3Byb3RvX18nXTtcblxuICAgICAgbWl4ID0gaXNTdHJpbmcobWl4KSA/IG1peGluKG1peCkgOiBtaXg7XG5cbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBtaXhpbiBpcyBhIGZ1bmN0aW9uXG4gICAgICBpZiAoaXNGdW5jdGlvbihtaXgpKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgbmV3IG1peGluIGluc3RhbmNlXG4gICAgICAgIGluc3RhbmNlID0gbmV3IG1peCgpO1xuICAgICAgfSBlbHNlIHsgaW5zdGFuY2UgPSBtaXg7IH1cblxuICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKTtcblxuICAgICAgLy8gYnVpbGQgbXVsdGlsZXZlbCBwcm90b3R5cGUgaW5oZXJpdGFuY2UgY2hhaW4gcHJvcGVydHkgbGlzdFxuICAgICAgZG8geyBwcm9wcyA9IHByb3BzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmogfHwgaW5zdGFuY2UpKTsgfVxuICAgICAgd2hpbGUgKG9iaiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmogfHwgaW5zdGFuY2UpKVxuXG4gICAgICAvLyBsb29wIHRoZSBrZXlzIGluIHRoZSBmdW5jdGlvbiBwcm90b3R5cGUgb3IgdGhlIGFsbCBvYmplY3Qga2V5c1xuICAgICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvLyBiaW5kIG1ldGhvZHMgdG8gdGFnXG4gICAgICAgIC8vIGFsbG93IG1peGlucyB0byBvdmVycmlkZSBvdGhlciBwcm9wZXJ0aWVzL3BhcmVudCBtaXhpbnNcbiAgICAgICAgaWYgKCFjb250YWlucyhwcm9wc0JsYWNrbGlzdCwga2V5KSkge1xuICAgICAgICAgIC8vIGNoZWNrIGZvciBnZXR0ZXJzL3NldHRlcnNcbiAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldFByb3BEZXNjcmlwdG9yKGluc3RhbmNlLCBrZXkpIHx8IGdldFByb3BEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuICAgICAgICAgIHZhciBoYXNHZXR0ZXJTZXR0ZXIgPSBkZXNjcmlwdG9yICYmIChkZXNjcmlwdG9yLmdldCB8fCBkZXNjcmlwdG9yLnNldCk7XG5cbiAgICAgICAgICAvLyBhcHBseSBtZXRob2Qgb25seSBpZiBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0IG9uIHRoZSBpbnN0YW5jZVxuICAgICAgICAgIGlmICghdGFnJCQxLmhhc093blByb3BlcnR5KGtleSkgJiYgaGFzR2V0dGVyU2V0dGVyKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFnJCQxLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWckJDFba2V5XSA9IGlzRnVuY3Rpb24oaW5zdGFuY2Vba2V5XSkgP1xuICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldLmJpbmQodGFnJCQxKSA6XG4gICAgICAgICAgICAgIGluc3RhbmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gaW5pdCBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYXV0b21hdGljYWxseVxuICAgICAgaWYgKGluc3RhbmNlLmluaXQpXG4gICAgICAgIHsgaW5zdGFuY2UuaW5pdC5iaW5kKHRhZyQkMSkodGFnJCQxLm9wdHMpOyB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFnJCQxXG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgcG9zaXRpb24gb2YgYSBjdXN0b20gdGFnIGluIGl0cyBwYXJlbnQgdGFnXG4gICAqIEB0aGlzIFRhZ1xuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IHRhZ05hbWUgLSBrZXkgd2hlcmUgdGhlIHRhZyB3YXMgc3RvcmVkXG4gICAqIEBwYXJhbSAgIHsgTnVtYmVyIH0gbmV3UG9zIC0gaW5kZXggd2hlcmUgdGhlIG5ldyB0YWcgd2lsbCBiZSBzdG9yZWRcbiAgICovXG4gIGZ1bmN0aW9uIG1vdmVDaGlsZCh0YWdOYW1lLCBuZXdQb3MpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgdmFyIHRhZ3M7XG4gICAgLy8gbm8gcGFyZW50IG5vIG1vdmVcbiAgICBpZiAoIXBhcmVudCkgeyByZXR1cm4gfVxuXG4gICAgdGFncyA9IHBhcmVudC50YWdzW3RhZ05hbWVdO1xuXG4gICAgaWYgKGlzQXJyYXkodGFncykpXG4gICAgICB7IHRhZ3Muc3BsaWNlKG5ld1BvcywgMCwgdGFncy5zcGxpY2UodGFncy5pbmRleE9mKHRoaXMpLCAxKVswXSk7IH1cbiAgICBlbHNlIHsgYXJyYXlpc2hBZGQocGFyZW50LnRhZ3MsIHRhZ05hbWUsIHRoaXMpOyB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB2aXJ0dWFsIHRhZyBhbmQgYWxsIGNoaWxkIG5vZGVzXG4gICAqIEB0aGlzIFRhZ1xuICAgKiBAcGFyYW0geyBOb2RlIH0gc3JjICAtIHRoZSBub2RlIHRoYXQgd2lsbCBkbyB0aGUgaW5zZXJ0aW5nXG4gICAqIEBwYXJhbSB7IFRhZyB9IHRhcmdldCAtIGluc2VydCBiZWZvcmUgdGhpcyB0YWcncyBmaXJzdCBjaGlsZFxuICAgKi9cbiAgZnVuY3Rpb24gbW92ZVZpcnR1YWwoc3JjLCB0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBlbCA9IHRoaXMuX18uaGVhZDtcbiAgICB2YXIgc2liO1xuICAgIHZhciBmcmFnID0gY3JlYXRlRnJhZ21lbnQoKTtcblxuICAgIHdoaWxlIChlbCkge1xuICAgICAgc2liID0gZWwubmV4dFNpYmxpbmc7XG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIGVsID0gc2liO1xuICAgICAgaWYgKGVsID09PSB0aGlzJDEuX18udGFpbCkge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgc3JjLmluc2VydEJlZm9yZShmcmFnLCB0YXJnZXQuX18uaGVhZCk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIGl0ZW0gbG9vcGVkIGludG8gYW4gb2JqZWN0IHVzZWQgdG8gZXh0ZW5kIHRoZSBjaGlsZCB0YWcgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IGV4cHIgLSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB1c2VkIHRvIGV4dGVuZCB0aGUgY2hpbGRyZW4gdGFnc1xuICAgKiBAcGFyYW0gICB7ICogfSBrZXkgLSB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIG5ldyBvYmplY3QgcmV0dXJuZWRcbiAgICogQHBhcmFtICAgeyAqIH0gdmFsIC0gdmFsdWUgY29udGFpbmluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gLSBuZXcgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvZiB0aGUgb3JpZ2luYWwgaXRlbVxuICAgKlxuICAgKiBUaGUgdmFyaWFibGVzICdrZXknIGFuZCAndmFsJyBhcmUgYXJiaXRyYXJ5LlxuICAgKiBUaGV5IGRlcGVuZCBvbiB0aGUgY29sbGVjdGlvbiB0eXBlIGxvb3BlZCAoQXJyYXksIE9iamVjdClcbiAgICogYW5kIG9uIHRoZSBleHByZXNzaW9uIHVzZWQgb24gdGhlIGVhY2ggdGFnXG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBta2l0ZW0oZXhwciwga2V5LCB2YWwpIHtcbiAgICB2YXIgaXRlbSA9IHt9O1xuICAgIGl0ZW1bZXhwci5rZXldID0ga2V5O1xuICAgIGlmIChleHByLnBvcykgeyBpdGVtW2V4cHIucG9zXSA9IHZhbDsgfVxuICAgIHJldHVybiBpdGVtXG4gIH1cblxuICAvKipcbiAgICogVW5tb3VudCB0aGUgcmVkdW5kYW50IHRhZ3NcbiAgICogQHBhcmFtICAgeyBBcnJheSB9IGl0ZW1zIC0gYXJyYXkgY29udGFpbmluZyB0aGUgY3VycmVudCBpdGVtcyB0byBsb29wXG4gICAqIEBwYXJhbSAgIHsgQXJyYXkgfSB0YWdzIC0gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNoaWxkcmVuIHRhZ3NcbiAgICovXG4gIGZ1bmN0aW9uIHVubW91bnRSZWR1bmRhbnQoaXRlbXMsIHRhZ3MsIGZpbHRlcmVkSXRlbXNDb3VudCkge1xuICAgIHZhciBpID0gdGFncy5sZW5ndGg7XG4gICAgdmFyIGogPSBpdGVtcy5sZW5ndGggLSBmaWx0ZXJlZEl0ZW1zQ291bnQ7XG5cbiAgICB3aGlsZSAoaSA+IGopIHtcbiAgICAgIGktLTtcbiAgICAgIHJlbW92ZS5hcHBseSh0YWdzW2ldLCBbdGFncywgaV0pO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGNoaWxkIHRhZ1xuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtICAgeyBBcnJheSB9IHRhZ3MgLSB0YWdzIGNvbGxlY3Rpb25cbiAgICogQHBhcmFtICAgeyBOdW1iZXIgfSBpIC0gaW5kZXggb2YgdGhlIHRhZyB0byByZW1vdmVcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZSh0YWdzLCBpKSB7XG4gICAgdGFncy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy51bm1vdW50KCk7XG4gICAgYXJyYXlpc2hSZW1vdmUodGhpcy5wYXJlbnQsIHRoaXMsIHRoaXMuX18udGFnTmFtZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgbmVzdGVkIGN1c3RvbSB0YWdzIGluIG5vbiBjdXN0b20gbG9vcCB0YWdzXG4gICAqIEB0aGlzIFRhZ1xuICAgKiBAcGFyYW0gICB7IE51bWJlciB9IGkgLSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBsb29wIHRhZ1xuICAgKi9cbiAgZnVuY3Rpb24gbW92ZU5lc3RlZFRhZ3MoaSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgZWFjaChPYmplY3Qua2V5cyh0aGlzLnRhZ3MpLCBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgICAgbW92ZUNoaWxkLmFwcGx5KHRoaXMkMS50YWdzW3RhZ05hbWVdLCBbdGFnTmFtZSwgaV0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBjaGlsZCB0YWdcbiAgICogQHRoaXMgVGFnXG4gICAqIEBwYXJhbSAgIHsgSFRNTEVsZW1lbnQgfSByb290IC0gZG9tIG5vZGUgY29udGFpbmluZyBhbGwgdGhlIGxvb3AgY2hpbGRyZW5cbiAgICogQHBhcmFtICAgeyBUYWcgfSBuZXh0VGFnIC0gaW5zdGFuY2Ugb2YgdGhlIG5leHQgdGFnIHByZWNlZGluZyB0aGUgb25lIHdlIHdhbnQgdG8gbW92ZVxuICAgKiBAcGFyYW0gICB7IEJvb2xlYW4gfSBpc1ZpcnR1YWwgLSBpcyBpdCBhIHZpcnR1YWwgdGFnP1xuICAgKi9cbiAgZnVuY3Rpb24gbW92ZShyb290LCBuZXh0VGFnLCBpc1ZpcnR1YWwpIHtcbiAgICBpZiAoaXNWaXJ0dWFsKVxuICAgICAgeyBtb3ZlVmlydHVhbC5hcHBseSh0aGlzLCBbcm9vdCwgbmV4dFRhZ10pOyB9XG4gICAgZWxzZVxuICAgICAgeyBzYWZlSW5zZXJ0KHJvb3QsIHRoaXMucm9vdCwgbmV4dFRhZy5yb290KTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbmQgbW91bnQgYSBjaGlsZCB0YWdcbiAgICogQHRoaXMgVGFnXG4gICAqIEBwYXJhbSAgIHsgSFRNTEVsZW1lbnQgfSByb290IC0gZG9tIG5vZGUgY29udGFpbmluZyBhbGwgdGhlIGxvb3AgY2hpbGRyZW5cbiAgICogQHBhcmFtICAgeyBUYWcgfSBuZXh0VGFnIC0gaW5zdGFuY2Ugb2YgdGhlIG5leHQgdGFnIHByZWNlZGluZyB0aGUgb25lIHdlIHdhbnQgdG8gaW5zZXJ0XG4gICAqIEBwYXJhbSAgIHsgQm9vbGVhbiB9IGlzVmlydHVhbCAtIGlzIGl0IGEgdmlydHVhbCB0YWc/XG4gICAqL1xuICBmdW5jdGlvbiBpbnNlcnQocm9vdCwgbmV4dFRhZywgaXNWaXJ0dWFsKSB7XG4gICAgaWYgKGlzVmlydHVhbClcbiAgICAgIHsgbWFrZVZpcnR1YWwuYXBwbHkodGhpcywgW3Jvb3QsIG5leHRUYWddKTsgfVxuICAgIGVsc2VcbiAgICAgIHsgc2FmZUluc2VydChyb290LCB0aGlzLnJvb3QsIG5leHRUYWcucm9vdCk7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgYSBuZXcgdGFnIGludG8gdGhlIERPTVxuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtICAgeyBIVE1MRWxlbWVudCB9IHJvb3QgLSBkb20gbm9kZSBjb250YWluaW5nIGFsbCB0aGUgbG9vcCBjaGlsZHJlblxuICAgKiBAcGFyYW0gICB7IEJvb2xlYW4gfSBpc1ZpcnR1YWwgLSBpcyBpdCBhIHZpcnR1YWwgdGFnP1xuICAgKi9cbiAgZnVuY3Rpb24gYXBwZW5kKHJvb3QsIGlzVmlydHVhbCkge1xuICAgIGlmIChpc1ZpcnR1YWwpXG4gICAgICB7IG1ha2VWaXJ0dWFsLmNhbGwodGhpcywgcm9vdCk7IH1cbiAgICBlbHNlXG4gICAgICB7IHJvb3QuYXBwZW5kQ2hpbGQodGhpcy5yb290KTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgdmFsdWUgd2Ugd2FudCB0byB1c2UgdG8gbG9va3VwIHRoZSBwb3N0aW9uIG9mIG91ciBpdGVtcyBpbiB0aGUgY29sbGVjdGlvblxuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9ICBrZXlBdHRyICAgICAgICAgLSBsb29rdXAgc3RyaW5nIG9yIGV4cHJlc3Npb25cbiAgICogQHBhcmFtICAgeyAqIH0gICAgICAgb3JpZ2luYWxJdGVtICAgIC0gb3JpZ2luYWwgaXRlbSBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gIGtleWVkSXRlbSAgICAgICAtIG9iamVjdCBjcmVhdGVkIGJ5IHJpb3QgdmlhIHsgaXRlbSwgaSBpbiBjb2xsZWN0aW9uIH1cbiAgICogQHBhcmFtICAgeyBCb29sZWFuIH0gaGFzS2V5QXR0ckV4cHIgIC0gZmxhZyB0byBjaGVjayB3aGV0aGVyIHRoZSBrZXkgaXMgYW4gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7ICogfSB2YWx1ZSB0aGF0IHdlIHdpbGwgdXNlIHRvIGZpZ3VyZSBvdXQgdGhlIGl0ZW0gcG9zaXRpb24gdmlhIGNvbGxlY3Rpb24uaW5kZXhPZlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlbUlkKGtleUF0dHIsIG9yaWdpbmFsSXRlbSwga2V5ZWRJdGVtLCBoYXNLZXlBdHRyRXhwcikge1xuICAgIGlmIChrZXlBdHRyKSB7XG4gICAgICByZXR1cm4gaGFzS2V5QXR0ckV4cHIgPyAgdG1wbChrZXlBdHRyLCBrZXllZEl0ZW0pIDogIG9yaWdpbmFsSXRlbVtrZXlBdHRyXVxuICAgIH1cblxuICAgIHJldHVybiBvcmlnaW5hbEl0ZW1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2UgdGFncyBoYXZpbmcgdGhlICdlYWNoJ1xuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gZG9tIC0gRE9NIG5vZGUgd2UgbmVlZCB0byBsb29wXG4gICAqIEBwYXJhbSAgIHsgVGFnIH0gcGFyZW50IC0gcGFyZW50IHRhZyBpbnN0YW5jZSB3aGVyZSB0aGUgZG9tIG5vZGUgaXMgY29udGFpbmVkXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gZXhwciAtIHN0cmluZyBjb250YWluZWQgaW4gdGhlICdlYWNoJyBhdHRyaWJ1dGVcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSBleHByZXNzaW9uIG9iamVjdCBmb3IgdGhpcyBlYWNoIGxvb3BcbiAgICovXG4gIGZ1bmN0aW9uIF9lYWNoKGRvbSwgcGFyZW50LCBleHByKSB7XG4gICAgdmFyIG11c3RSZW9yZGVyID0gdHlwZW9mIGdldEF0dHJpYnV0ZShkb20sIExPT1BfTk9fUkVPUkRFUl9ESVJFQ1RJVkUpICE9PSBUX1NUUklORyB8fCByZW1vdmVBdHRyaWJ1dGUoZG9tLCBMT09QX05PX1JFT1JERVJfRElSRUNUSVZFKTtcbiAgICB2YXIga2V5QXR0ciA9IGdldEF0dHJpYnV0ZShkb20sIEtFWV9ESVJFQ1RJVkUpO1xuICAgIHZhciBoYXNLZXlBdHRyRXhwciA9IGtleUF0dHIgPyB0bXBsLmhhc0V4cHIoa2V5QXR0cikgOiBmYWxzZTtcbiAgICB2YXIgdGFnTmFtZSA9IGdldE5hbWUoZG9tKTtcbiAgICB2YXIgaW1wbCA9IF9fVEFHX0lNUExbdGFnTmFtZV07XG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb20ucGFyZW50Tm9kZTtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBjcmVhdGVET01QbGFjZWhvbGRlcigpO1xuICAgIHZhciBjaGlsZCA9IGdldChkb20pO1xuICAgIHZhciBpZkV4cHIgPSBnZXRBdHRyaWJ1dGUoZG9tLCBDT05ESVRJT05BTF9ESVJFQ1RJVkUpO1xuICAgIHZhciB0YWdzID0gW107XG4gICAgdmFyIGlzTG9vcCA9IHRydWU7XG4gICAgdmFyIGlubmVySFRNTCA9IGRvbS5pbm5lckhUTUw7XG4gICAgdmFyIGlzQW5vbnltb3VzID0gIV9fVEFHX0lNUExbdGFnTmFtZV07XG4gICAgdmFyIGlzVmlydHVhbCA9IGRvbS50YWdOYW1lID09PSAnVklSVFVBTCc7XG4gICAgdmFyIG9sZEl0ZW1zID0gW107XG5cbiAgICAvLyByZW1vdmUgdGhlIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgb3JpZ2luYWwgdGFnXG4gICAgcmVtb3ZlQXR0cmlidXRlKGRvbSwgTE9PUF9ESVJFQ1RJVkUpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShkb20sIEtFWV9ESVJFQ1RJVkUpO1xuXG4gICAgLy8gcGFyc2UgdGhlIGVhY2ggZXhwcmVzc2lvblxuICAgIGV4cHIgPSB0bXBsLmxvb3BLZXlzKGV4cHIpO1xuICAgIGV4cHIuaXNMb29wID0gdHJ1ZTtcblxuICAgIGlmIChpZkV4cHIpIHsgcmVtb3ZlQXR0cmlidXRlKGRvbSwgQ09ORElUSU9OQUxfRElSRUNUSVZFKTsgfVxuXG4gICAgLy8gaW5zZXJ0IGEgbWFya2VkIHdoZXJlIHRoZSBsb29wIHRhZ3Mgd2lsbCBiZSBpbmplY3RlZFxuICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBkb20pO1xuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tKTtcblxuICAgIGV4cHIudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlRWFjaCgpIHtcbiAgICAgIC8vIGdldCB0aGUgbmV3IGl0ZW1zIGNvbGxlY3Rpb25cbiAgICAgIGV4cHIudmFsdWUgPSB0bXBsKGV4cHIudmFsLCBwYXJlbnQpO1xuXG4gICAgICB2YXIgaXRlbXMgPSBleHByLnZhbHVlO1xuICAgICAgdmFyIGZyYWcgPSBjcmVhdGVGcmFnbWVudCgpO1xuICAgICAgdmFyIGlzT2JqZWN0ID0gIWlzQXJyYXkoaXRlbXMpICYmICFpc1N0cmluZyhpdGVtcyk7XG4gICAgICB2YXIgcm9vdCA9IHBsYWNlaG9sZGVyLnBhcmVudE5vZGU7XG4gICAgICB2YXIgdG1wSXRlbXMgPSBbXTtcbiAgICAgIHZhciBoYXNLZXlzID0gaXNPYmplY3QgJiYgISFpdGVtcztcblxuICAgICAgLy8gaWYgdGhpcyBET00gd2FzIHJlbW92ZWQgdGhlIHVwZGF0ZSBoZXJlIGlzIHVzZWxlc3NcbiAgICAgIC8vIHRoaXMgY29uZGl0aW9uIGZpeGVzIGFsc28gYSB3ZWlyZCBhc3luYyBpc3N1ZSBvbiBJRSBpbiBvdXIgdW5pdCB0ZXN0XG4gICAgICBpZiAoIXJvb3QpIHsgcmV0dXJuIH1cblxuICAgICAgLy8gb2JqZWN0IGxvb3AuIGFueSBjaGFuZ2VzIGNhdXNlIGZ1bGwgcmVkcmF3XG4gICAgICBpZiAoaXNPYmplY3QpIHtcbiAgICAgICAgaXRlbXMgPSBpdGVtcyA/IE9iamVjdC5rZXlzKGl0ZW1zKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gbWtpdGVtKGV4cHIsIGl0ZW1zW2tleV0sIGtleSk7IH0pIDogW107XG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIHRoZSBhbW91bnQgb2YgZmlsdGVyZWQgaXRlbXNcbiAgICAgIHZhciBmaWx0ZXJlZEl0ZW1zQ291bnQgPSAwO1xuXG4gICAgICAvLyBsb29wIGFsbCB0aGUgbmV3IGl0ZW1zXG4gICAgICBlYWNoKGl0ZW1zLCBmdW5jdGlvbiAoX2l0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBpID0gaW5kZXggLSBmaWx0ZXJlZEl0ZW1zQ291bnQ7XG4gICAgICAgIHZhciBpdGVtID0gIWhhc0tleXMgJiYgZXhwci5rZXkgPyBta2l0ZW0oZXhwciwgX2l0ZW0sIGluZGV4KSA6IF9pdGVtO1xuXG4gICAgICAgIC8vIHNraXAgdGhpcyBpdGVtIGJlY2F1c2UgaXQgbXVzdCBiZSBmaWx0ZXJlZFxuICAgICAgICBpZiAoaWZFeHByICYmICF0bXBsKGlmRXhwciwgZXh0ZW5kKGNyZWF0ZShwYXJlbnQpLCBpdGVtKSkpIHtcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zQ291bnQgKys7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlbUlkID0gZ2V0SXRlbUlkKGtleUF0dHIsIF9pdGVtLCBpdGVtLCBoYXNLZXlBdHRyRXhwcik7XG4gICAgICAgIC8vIHJlb3JkZXIgb25seSBpZiB0aGUgaXRlbXMgYXJlIG5vdCBvYmplY3RzXG4gICAgICAgIC8vIG9yIGEga2V5IGF0dHJpYnV0ZSBoYXMgYmVlbiBwcm92aWRlZFxuICAgICAgICB2YXIgZG9SZW9yZGVyID0gIWlzT2JqZWN0ICYmIG11c3RSZW9yZGVyICYmIHR5cGVvZiBfaXRlbSA9PT0gVF9PQkpFQ1QgfHwga2V5QXR0cjtcbiAgICAgICAgdmFyIG9sZFBvcyA9IG9sZEl0ZW1zLmluZGV4T2YoaXRlbUlkKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gb2xkUG9zID09PSAtMTtcbiAgICAgICAgdmFyIHBvcyA9ICFpc05ldyAmJiBkb1Jlb3JkZXIgPyBvbGRQb3MgOiBpO1xuICAgICAgICAvLyBkb2VzIGEgdGFnIGV4aXN0IGluIHRoaXMgcG9zaXRpb24/XG4gICAgICAgIHZhciB0YWcgPSB0YWdzW3Bvc107XG4gICAgICAgIHZhciBtdXN0QXBwZW5kID0gaSA+PSBvbGRJdGVtcy5sZW5ndGg7XG4gICAgICAgIHZhciBtdXN0Q3JlYXRlID0gZG9SZW9yZGVyICYmIGlzTmV3IHx8ICFkb1Jlb3JkZXIgJiYgIXRhZyB8fCAhdGFnc1tpXTtcblxuICAgICAgICAvLyBuZXcgdGFnXG4gICAgICAgIGlmIChtdXN0Q3JlYXRlKSB7XG4gICAgICAgICAgdGFnID0gY3JlYXRlVGFnKGltcGwsIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgaXNMb29wOiBpc0xvb3AsXG4gICAgICAgICAgICBpc0Fub255bW91czogaXNBbm9ueW1vdXMsXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgcm9vdDogZG9tLmNsb25lTm9kZShpc0Fub255bW91cyksXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgfSwgaW5uZXJIVE1MKTtcblxuICAgICAgICAgIC8vIG1vdW50IHRoZSB0YWdcbiAgICAgICAgICB0YWcubW91bnQoKTtcblxuICAgICAgICAgIGlmIChtdXN0QXBwZW5kKVxuICAgICAgICAgICAgeyBhcHBlbmQuYXBwbHkodGFnLCBbZnJhZyB8fCByb290LCBpc1ZpcnR1YWxdKTsgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHsgaW5zZXJ0LmFwcGx5KHRhZywgW3Jvb3QsIHRhZ3NbaV0sIGlzVmlydHVhbF0pOyB9XG5cbiAgICAgICAgICBpZiAoIW11c3RBcHBlbmQpIHsgb2xkSXRlbXMuc3BsaWNlKGksIDAsIGl0ZW0pOyB9XG4gICAgICAgICAgdGFncy5zcGxpY2UoaSwgMCwgdGFnKTtcbiAgICAgICAgICBpZiAoY2hpbGQpIHsgYXJyYXlpc2hBZGQocGFyZW50LnRhZ3MsIHRhZ05hbWUsIHRhZywgdHJ1ZSk7IH1cbiAgICAgICAgfSBlbHNlIGlmIChwb3MgIT09IGkgJiYgZG9SZW9yZGVyKSB7XG4gICAgICAgICAgLy8gbW92ZVxuICAgICAgICAgIGlmIChrZXlBdHRyIHx8IGNvbnRhaW5zKGl0ZW1zLCBvbGRJdGVtc1twb3NdKSkge1xuICAgICAgICAgICAgbW92ZS5hcHBseSh0YWcsIFtyb290LCB0YWdzW2ldLCBpc1ZpcnR1YWxdKTtcbiAgICAgICAgICAgIC8vIG1vdmUgdGhlIG9sZCB0YWcgaW5zdGFuY2VcbiAgICAgICAgICAgIHRhZ3Muc3BsaWNlKGksIDAsIHRhZ3Muc3BsaWNlKHBvcywgMSlbMF0pO1xuICAgICAgICAgICAgLy8gbW92ZSB0aGUgb2xkIGl0ZW1cbiAgICAgICAgICAgIG9sZEl0ZW1zLnNwbGljZShpLCAwLCBvbGRJdGVtcy5zcGxpY2UocG9zLCAxKVswXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdXBkYXRlIHRoZSBwb3NpdGlvbiBhdHRyaWJ1dGUgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgaWYgKGV4cHIucG9zKSB7IHRhZ1tleHByLnBvc10gPSBpOyB9XG5cbiAgICAgICAgICAvLyBpZiB0aGUgbG9vcCB0YWdzIGFyZSBub3QgY3VzdG9tXG4gICAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIGFsbCB0aGVpciBjdXN0b20gdGFncyBpbnRvIHRoZSByaWdodCBwb3NpdGlvblxuICAgICAgICAgIGlmICghY2hpbGQgJiYgdGFnLnRhZ3MpIHsgbW92ZU5lc3RlZFRhZ3MuY2FsbCh0YWcsIGkpOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWNoZSB0aGUgb3JpZ2luYWwgaXRlbSB0byB1c2UgaXQgaW4gdGhlIGV2ZW50cyBib3VuZCB0byB0aGlzIG5vZGVcbiAgICAgICAgLy8gYW5kIGl0cyBjaGlsZHJlblxuICAgICAgICBleHRlbmQodGFnLl9fLCB7XG4gICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgICB9KTtcblxuICAgICAgICB0bXBJdGVtc1tpXSA9IGl0ZW1JZDtcblxuICAgICAgICBpZiAoIW11c3RDcmVhdGUpIHsgdGFnLnVwZGF0ZShpdGVtKTsgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgcmVkdW5kYW50IHRhZ3NcbiAgICAgIHVubW91bnRSZWR1bmRhbnQoaXRlbXMsIHRhZ3MsIGZpbHRlcmVkSXRlbXNDb3VudCk7XG5cbiAgICAgIC8vIGNsb25lIHRoZSBpdGVtcyBhcnJheVxuICAgICAgb2xkSXRlbXMgPSB0bXBJdGVtcy5zbGljZSgpO1xuXG4gICAgICByb290Lmluc2VydEJlZm9yZShmcmFnLCBwbGFjZWhvbGRlcik7XG4gICAgfTtcblxuICAgIGV4cHIudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVhY2godGFncywgZnVuY3Rpb24gKHQpIHsgdC51bm1vdW50KCk7IH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZXhwclxuICB9XG5cbiAgdmFyIFJlZkV4cHIgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChkb20sIHBhcmVudCwgYXR0ck5hbWUsIGF0dHJWYWx1ZSkge1xuICAgICAgdGhpcy5kb20gPSBkb207XG4gICAgICB0aGlzLmF0dHIgPSBhdHRyTmFtZTtcbiAgICAgIHRoaXMucmF3VmFsdWUgPSBhdHRyVmFsdWU7XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgIHRoaXMuaGFzRXhwID0gdG1wbC5oYXNFeHByKGF0dHJWYWx1ZSk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgb2xkID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciBjdXN0b21QYXJlbnQgPSB0aGlzLnBhcmVudCAmJiBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnQodGhpcy5wYXJlbnQpO1xuICAgICAgLy8gaWYgdGhlIHJlZmVyZW5jZWQgZWxlbWVudCBpcyBhIGN1c3RvbSB0YWcsIHRoZW4gd2Ugc2V0IHRoZSB0YWcgaXRzZWxmLCByYXRoZXIgdGhhbiBET01cbiAgICAgIHZhciB0YWdPckRvbSA9IHRoaXMuZG9tLl9fcmVmIHx8IHRoaXMudGFnIHx8IHRoaXMuZG9tO1xuXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5oYXNFeHAgPyB0bXBsKHRoaXMucmF3VmFsdWUsIHRoaXMucGFyZW50KSA6IHRoaXMucmF3VmFsdWU7XG5cbiAgICAgIC8vIHRoZSBuYW1lIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gcmVtb3ZlIGl0IGZyb20gdGhlIG9sZCBrZXkgKGlmIHByZXNlbnQpXG4gICAgICBpZiAoIWlzQmxhbmsob2xkKSAmJiBjdXN0b21QYXJlbnQpIHsgYXJyYXlpc2hSZW1vdmUoY3VzdG9tUGFyZW50LnJlZnMsIG9sZCwgdGFnT3JEb20pOyB9XG4gICAgICBpZiAoIWlzQmxhbmsodGhpcy52YWx1ZSkgJiYgaXNTdHJpbmcodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgLy8gYWRkIGl0IHRvIHRoZSByZWZzIG9mIHBhcmVudCB0YWcgKHRoaXMgYmVoYXZpb3Igd2FzIGNoYW5nZWQgPj0zLjApXG4gICAgICAgIGlmIChjdXN0b21QYXJlbnQpIHsgYXJyYXlpc2hBZGQoXG4gICAgICAgICAgY3VzdG9tUGFyZW50LnJlZnMsXG4gICAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgICB0YWdPckRvbSxcbiAgICAgICAgICAvLyB1c2UgYW4gYXJyYXkgaWYgaXQncyBhIGxvb3BlZCBub2RlIGFuZCB0aGUgcmVmIGlzIG5vdCBhbiBleHByZXNzaW9uXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLnBhcmVudC5fXy5pbmRleFxuICAgICAgICApOyB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG9sZCkge1xuICAgICAgICAgIHNldEF0dHJpYnV0ZSh0aGlzLmRvbSwgdGhpcy5hdHRyLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHRoaXMuZG9tLCB0aGlzLmF0dHIpO1xuICAgICAgfVxuXG4gICAgICAvLyBjYWNoZSB0aGUgcmVmIGJvdW5kIHRvIHRoaXMgZG9tIG5vZGVcbiAgICAgIC8vIHRvIHJldXNlIGl0IGluIGZ1dHVyZSAoc2VlIGFsc28gIzIzMjkpXG4gICAgICBpZiAoIXRoaXMuZG9tLl9fcmVmKSB7IHRoaXMuZG9tLl9fcmVmID0gdGFnT3JEb207IH1cbiAgICB9LFxuICAgIHVubW91bnQ6IGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgICB2YXIgdGFnT3JEb20gPSB0aGlzLnRhZyB8fCB0aGlzLmRvbTtcbiAgICAgIHZhciBjdXN0b21QYXJlbnQgPSB0aGlzLnBhcmVudCAmJiBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnQodGhpcy5wYXJlbnQpO1xuICAgICAgaWYgKCFpc0JsYW5rKHRoaXMudmFsdWUpICYmIGN1c3RvbVBhcmVudClcbiAgICAgICAgeyBhcnJheWlzaFJlbW92ZShjdXN0b21QYXJlbnQucmVmcywgdGhpcy52YWx1ZSwgdGFnT3JEb20pOyB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcmVmIGRpcmVjdGl2ZVxuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gZG9tIC0gZG9tIG5vZGUgaGF2aW5nIHRoZSByZWYgYXR0cmlidXRlXG4gICAqIEBwYXJhbSAgIHsgVGFnIH0gY29udGV4dCAtIHRhZyBpbnN0YW5jZSB3aGVyZSB0aGUgRE9NIG5vZGUgaXMgbG9jYXRlZFxuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IGF0dHJOYW1lIC0gZWl0aGVyICdyZWYnIG9yICdkYXRhLXJlZidcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBhdHRyVmFsdWUgLSB2YWx1ZSBvZiB0aGUgcmVmIGF0dHJpYnV0ZVxuICAgKiBAcmV0dXJucyB7IFJlZkV4cHIgfSBhIG5ldyBSZWZFeHByIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlUmVmRGlyZWN0aXZlKGRvbSwgdGFnLCBhdHRyTmFtZSwgYXR0clZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShSZWZFeHByKS5pbml0KGRvbSwgdGFnLCBhdHRyTmFtZSwgYXR0clZhbHVlKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIHVubW91bnQgbWV0aG9kIG9uIGFsbCB0aGUgZXhwcmVzc2lvbnNcbiAgICogQHBhcmFtICAgeyBBcnJheSB9IGV4cHJlc3Npb25zIC0gRE9NIGV4cHJlc3Npb25zXG4gICAqL1xuICBmdW5jdGlvbiB1bm1vdW50QWxsKGV4cHJlc3Npb25zKSB7XG4gICAgZWFjaChleHByZXNzaW9ucywgZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgIGlmIChleHByLnVubW91bnQpIHsgZXhwci51bm1vdW50KHRydWUpOyB9XG4gICAgICBlbHNlIGlmIChleHByLnRhZ05hbWUpIHsgZXhwci50YWcudW5tb3VudCh0cnVlKTsgfVxuICAgICAgZWxzZSBpZiAoZXhwci51bm1vdW50KSB7IGV4cHIudW5tb3VudCgpOyB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgSWZFeHByID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoZG9tLCB0YWcsIGV4cHIpIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShkb20sIENPTkRJVElPTkFMX0RJUkVDVElWRSk7XG4gICAgICBleHRlbmQodGhpcywgeyB0YWc6IHRhZywgZXhwcjogZXhwciwgc3R1YjogY3JlYXRlRE9NUGxhY2Vob2xkZXIoKSwgcHJpc3RpbmU6IGRvbSB9KTtcbiAgICAgIHZhciBwID0gZG9tLnBhcmVudE5vZGU7XG4gICAgICBwLmluc2VydEJlZm9yZSh0aGlzLnN0dWIsIGRvbSk7XG4gICAgICBwLnJlbW92ZUNoaWxkKGRvbSk7XG5cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0bXBsKHRoaXMuZXhwciwgdGhpcy50YWcpO1xuXG4gICAgICBpZiAoIXRoaXMuc3R1Yi5wYXJlbnROb2RlKSB7IHJldHVybiB9XG5cbiAgICAgIGlmICh0aGlzLnZhbHVlICYmICF0aGlzLmN1cnJlbnQpIHsgLy8gaW5zZXJ0XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJpc3RpbmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLnN0dWIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJyZW50LCB0aGlzLnN0dWIpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gcGFyc2VFeHByZXNzaW9ucy5hcHBseSh0aGlzLnRhZywgW3RoaXMuY3VycmVudCwgdHJ1ZV0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy52YWx1ZSAmJiB0aGlzLmN1cnJlbnQpIHsgLy8gcmVtb3ZlXG4gICAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7IHVwZGF0ZS5jYWxsKHRoaXMudGFnLCB0aGlzLmV4cHJlc3Npb25zKTsgfVxuICAgIH0sXG4gICAgdW5tb3VudDogZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudC5fdGFnKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Ll90YWcudW5tb3VudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1bm1vdW50QWxsKHRoaXMuZXhwcmVzc2lvbnMgfHwgW10pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGlmIGRpcmVjdGl2ZVxuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gZG9tIC0gaWYgcm9vdCBkb20gbm9kZVxuICAgKiBAcGFyYW0gICB7IFRhZyB9IGNvbnRleHQgLSB0YWcgaW5zdGFuY2Ugd2hlcmUgdGhlIERPTSBub2RlIGlzIGxvY2F0ZWRcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBhdHRyIC0gaWYgZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7IElGRXhwciB9IGEgbmV3IElmRXhwciBvYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUlmRGlyZWN0aXZlKGRvbSwgdGFnLCBhdHRyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShJZkV4cHIpLmluaXQoZG9tLCB0YWcsIGF0dHIpXG4gIH1cblxuICAvKipcbiAgICogV2FsayB0aGUgdGFnIERPTSB0byBkZXRlY3QgdGhlIGV4cHJlc3Npb25zIHRvIGV2YWx1YXRlXG4gICAqIEB0aGlzIFRhZ1xuICAgKiBAcGFyYW0gICB7IEhUTUxFbGVtZW50IH0gcm9vdCAtIHJvb3QgdGFnIHdoZXJlIHdlIHdpbGwgc3RhcnQgZGlnZ2luZyB0aGUgZXhwcmVzc2lvbnNcbiAgICogQHBhcmFtICAgeyBCb29sZWFuIH0gbXVzdEluY2x1ZGVSb290IC0gZmxhZyB0byBkZWNpZGUgd2hldGhlciB0aGUgcm9vdCBtdXN0IGJlIHBhcnNlZCBhcyB3ZWxsXG4gICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhbGwgdGhlIGV4cHJlc3Npb25zIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25zKHJvb3QsIG11c3RJbmNsdWRlUm9vdCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGV4cHJlc3Npb25zID0gW107XG5cbiAgICB3YWxrTm9kZXMocm9vdCwgZnVuY3Rpb24gKGRvbSkge1xuICAgICAgdmFyIHR5cGUgPSBkb20ubm9kZVR5cGU7XG4gICAgICB2YXIgYXR0cjtcbiAgICAgIHZhciB0YWdJbXBsO1xuXG4gICAgICBpZiAoIW11c3RJbmNsdWRlUm9vdCAmJiBkb20gPT09IHJvb3QpIHsgcmV0dXJuIH1cblxuICAgICAgLy8gdGV4dCBub2RlXG4gICAgICBpZiAodHlwZSA9PT0gMyAmJiBkb20ucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnU1RZTEUnICYmIHRtcGwuaGFzRXhwcihkb20ubm9kZVZhbHVlKSlcbiAgICAgICAgeyBleHByZXNzaW9ucy5wdXNoKHtkb206IGRvbSwgZXhwcjogZG9tLm5vZGVWYWx1ZX0pOyB9XG5cbiAgICAgIGlmICh0eXBlICE9PSAxKSB7IHJldHVybiB9XG5cbiAgICAgIHZhciBpc1ZpcnR1YWwgPSBkb20udGFnTmFtZSA9PT0gJ1ZJUlRVQUwnO1xuXG4gICAgICAvLyBsb29wLiBlYWNoIGRvZXMgaXQncyBvd24gdGhpbmcgKGZvciBub3cpXG4gICAgICBpZiAoYXR0ciA9IGdldEF0dHJpYnV0ZShkb20sIExPT1BfRElSRUNUSVZFKSkge1xuICAgICAgICBpZihpc1ZpcnR1YWwpIHsgc2V0QXR0cmlidXRlKGRvbSwgJ2xvb3BWaXJ0dWFsJywgdHJ1ZSk7IH0gLy8gaWdub3JlIGhlcmUsIGhhbmRsZWQgaW4gX2VhY2hcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChfZWFjaChkb20sIHRoaXMkMSwgYXR0cikpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gaWYtYXR0cnMgYmVjb21lIHRoZSBuZXcgcGFyZW50LiBBbnkgZm9sbG93aW5nIGV4cHJlc3Npb25zIChlaXRoZXIgb24gdGhlIGN1cnJlbnRcbiAgICAgIC8vIGVsZW1lbnQsIG9yIGJlbG93IGl0KSBiZWNvbWUgY2hpbGRyZW4gb2YgdGhpcyBleHByZXNzaW9uLlxuICAgICAgaWYgKGF0dHIgPSBnZXRBdHRyaWJ1dGUoZG9tLCBDT05ESVRJT05BTF9ESVJFQ1RJVkUpKSB7XG4gICAgICAgIGV4cHJlc3Npb25zLnB1c2goY3JlYXRlSWZEaXJlY3RpdmUoZG9tLCB0aGlzJDEsIGF0dHIpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyID0gZ2V0QXR0cmlidXRlKGRvbSwgSVNfRElSRUNUSVZFKSkge1xuICAgICAgICBpZiAodG1wbC5oYXNFeHByKGF0dHIpKSB7XG4gICAgICAgICAgZXhwcmVzc2lvbnMucHVzaCh7XG4gICAgICAgICAgICBpc1J0YWc6IHRydWUsXG4gICAgICAgICAgICBleHByOiBhdHRyLFxuICAgICAgICAgICAgZG9tOiBkb20sXG4gICAgICAgICAgICBhdHRyczogW10uc2xpY2UuY2FsbChkb20uYXR0cmlidXRlcylcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoaXMgaXMgYSB0YWcsIHN0b3AgdHJhdmVyc2luZyBoZXJlLlxuICAgICAgLy8gd2UgaWdub3JlIHRoZSByb290LCBzaW5jZSBwYXJzZUV4cHJlc3Npb25zIGlzIGNhbGxlZCB3aGlsZSB3ZSdyZSBtb3VudGluZyB0aGF0IHJvb3RcbiAgICAgIHRhZ0ltcGwgPSBnZXQoZG9tKTtcblxuICAgICAgaWYoaXNWaXJ0dWFsKSB7XG4gICAgICAgIGlmKGdldEF0dHJpYnV0ZShkb20sICd2aXJ0dWFsaXplZCcpKSB7ZG9tLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tKTsgfSAvLyB0YWcgY3JlYXRlZCwgcmVtb3ZlIGZyb20gZG9tXG4gICAgICAgIGlmKCF0YWdJbXBsICYmICFnZXRBdHRyaWJ1dGUoZG9tLCAndmlydHVhbGl6ZWQnKSAmJiAhZ2V0QXR0cmlidXRlKGRvbSwgJ2xvb3BWaXJ0dWFsJykpICAvLyBvayB0byBjcmVhdGUgdmlydHVhbCB0YWdcbiAgICAgICAgICB7IHRhZ0ltcGwgPSB7IHRtcGw6IGRvbS5vdXRlckhUTUwgfTsgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGFnSW1wbCAmJiAoZG9tICE9PSByb290IHx8IG11c3RJbmNsdWRlUm9vdCkpIHtcbiAgICAgICAgdmFyIGhhc0lzRGlyZWN0aXZlID0gZ2V0QXR0cmlidXRlKGRvbSwgSVNfRElSRUNUSVZFKTtcbiAgICAgICAgaWYoaXNWaXJ0dWFsICYmICFoYXNJc0RpcmVjdGl2ZSkgeyAvLyBoYW5kbGVkIGluIHVwZGF0ZVxuICAgICAgICAgIC8vIGNhbiBub3QgcmVtb3ZlIGF0dHJpYnV0ZSBsaWtlIGRpcmVjdGl2ZXNcbiAgICAgICAgICAvLyBzbyBmbGFnIGZvciByZW1vdmFsIGFmdGVyIGNyZWF0aW9uIHRvIHByZXZlbnQgbWF4aW11bSBzdGFjayBlcnJvclxuICAgICAgICAgIHNldEF0dHJpYnV0ZShkb20sICd2aXJ0dWFsaXplZCcsIHRydWUpO1xuICAgICAgICAgIHZhciB0YWcgPSBjcmVhdGVUYWcoXG4gICAgICAgICAgICB7dG1wbDogZG9tLm91dGVySFRNTH0sXG4gICAgICAgICAgICB7cm9vdDogZG9tLCBwYXJlbnQ6IHRoaXMkMX0sXG4gICAgICAgICAgICBkb20uaW5uZXJIVE1MXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGV4cHJlc3Npb25zLnB1c2godGFnKTsgLy8gbm8gcmV0dXJuLCBhbm9ueW1vdXMgdGFnLCBrZWVwIHBhcnNpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaGFzSXNEaXJlY3RpdmUgJiYgaXNWaXJ0dWFsKVxuICAgICAgICAgICAgeyB3YXJuKChcIlZpcnR1YWwgdGFncyBzaG91bGRuJ3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIHRoZSBcXFwiXCIgKyBJU19ESVJFQ1RJVkUgKyBcIlxcXCIgYXR0cmlidXRlIC0gaHR0cHM6Ly9naXRodWIuY29tL3Jpb3QvcmlvdC9pc3N1ZXMvMjUxMVwiKSk7IH1cblxuICAgICAgICAgIGV4cHJlc3Npb25zLnB1c2goXG4gICAgICAgICAgICBpbml0Q2hpbGQoXG4gICAgICAgICAgICAgIHRhZ0ltcGwsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb290OiBkb20sXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzJDFcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgdGhpcyQxXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhdHRyaWJ1dGUgZXhwcmVzc2lvbnNcbiAgICAgIHBhcnNlQXR0cmlidXRlcy5hcHBseSh0aGlzJDEsIFtkb20sIGRvbS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYXR0ciwgZXhwcikge1xuICAgICAgICBpZiAoIWV4cHIpIHsgcmV0dXJuIH1cbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChleHByKTtcbiAgICAgIH1dKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uc1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIGBmbmAgZm9yIGV2ZXJ5IGF0dHJpYnV0ZSBvbiBhbiBlbGVtZW50LiBJZiB0aGF0IGF0dHIgaGFzIGFuIGV4cHJlc3Npb24sXG4gICAqIGl0IGlzIGFsc28gcGFzc2VkIHRvIGZuLlxuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtICAgeyBIVE1MRWxlbWVudCB9IGRvbSAtIGRvbSBub2RlIHRvIHBhcnNlXG4gICAqIEBwYXJhbSAgIHsgQXJyYXkgfSBhdHRycyAtIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICogQHBhcmFtICAgeyBGdW5jdGlvbiB9IGZuIC0gY2FsbGJhY2sgdG8gZXhlYyBvbiBhbnkgaXRlcmF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZXMoZG9tLCBhdHRycywgZm4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGVhY2goYXR0cnMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICBpZiAoIWF0dHIpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgICAgdmFyIG5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICB2YXIgYm9vbCA9IGlzQm9vbEF0dHIobmFtZSk7XG4gICAgICB2YXIgZXhwcjtcblxuICAgICAgaWYgKGNvbnRhaW5zKFJFRl9ESVJFQ1RJVkVTLCBuYW1lKSAmJiBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBZSUVMRF9UQUcpIHtcbiAgICAgICAgZXhwciA9ICBjcmVhdGVSZWZEaXJlY3RpdmUoZG9tLCB0aGlzJDEsIG5hbWUsIGF0dHIudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0bXBsLmhhc0V4cHIoYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgZXhwciA9IHtkb206IGRvbSwgZXhwcjogYXR0ci52YWx1ZSwgYXR0cjogbmFtZSwgYm9vbDogYm9vbH07XG4gICAgICB9XG5cbiAgICAgIGZuKGF0dHIsIGV4cHIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSB0aGUgbW91bnQgc3RhdGUgb2YgYSB0YWcgdHJpZ2dlcmluZyBhbHNvIHRoZSBvYnNlcnZhYmxlIGV2ZW50c1xuICAgKiBAdGhpcyBUYWdcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IHZhbHVlIC0gLi5vZiB0aGUgaXNNb3VudGVkIGZsYWdcbiAgICovXG4gIGZ1bmN0aW9uIHNldE1vdW50U3RhdGUodmFsdWUpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5fXztcbiAgICB2YXIgaXNBbm9ueW1vdXMgPSByZWYuaXNBbm9ueW1vdXM7XG4gICAgdmFyIHNraXBBbm9ueW1vdXMgPSByZWYuc2tpcEFub255bW91cztcblxuICAgIGRlZmluZSh0aGlzLCAnaXNNb3VudGVkJywgdmFsdWUpO1xuXG4gICAgaWYgKCFpc0Fub255bW91cyB8fCAhc2tpcEFub255bW91cykge1xuICAgICAgaWYgKHZhbHVlKSB7IHRoaXMudHJpZ2dlcignbW91bnQnKTsgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcigndW5tb3VudCcpO1xuICAgICAgICB0aGlzLm9mZignKicpO1xuICAgICAgICB0aGlzLl9fLndhc0NyZWF0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW91bnQgdGhlIGN1cnJlbnQgdGFnIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIHsgVGFnIH0gdGhlIGN1cnJlbnQgdGFnIGluc3RhbmNlXG4gICAqL1xuICBmdW5jdGlvbiBjb21wb25lbnRNb3VudCh0YWckJDEsIGRvbSwgZXhwcmVzc2lvbnMsIG9wdHMpIHtcbiAgICB2YXIgX18gPSB0YWckJDEuX187XG4gICAgdmFyIHJvb3QgPSBfXy5yb290O1xuICAgIHJvb3QuX3RhZyA9IHRhZyQkMTsgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgdGFnIGp1c3QgY3JlYXRlZFxuXG4gICAgLy8gUmVhZCBhbGwgdGhlIGF0dHJzIG9uIHRoaXMgaW5zdGFuY2UuIFRoaXMgZ2l2ZSB1cyB0aGUgaW5mbyB3ZSBuZWVkIGZvciB1cGRhdGVPcHRzXG4gICAgcGFyc2VBdHRyaWJ1dGVzLmFwcGx5KF9fLnBhcmVudCwgW3Jvb3QsIHJvb3QuYXR0cmlidXRlcywgZnVuY3Rpb24gKGF0dHIsIGV4cHIpIHtcbiAgICAgIGlmICghX18uaXNBbm9ueW1vdXMgJiYgUmVmRXhwci5pc1Byb3RvdHlwZU9mKGV4cHIpKSB7IGV4cHIudGFnID0gdGFnJCQxOyB9XG4gICAgICBhdHRyLmV4cHIgPSBleHByO1xuICAgICAgX18uaW5zdEF0dHJzLnB1c2goYXR0cik7XG4gICAgfV0pO1xuXG4gICAgLy8gdXBkYXRlIHRoZSByb290IGFkZGluZyBjdXN0b20gYXR0cmlidXRlcyBjb21pbmcgZnJvbSB0aGUgY29tcGlsZXJcbiAgICB3YWxrQXR0cmlidXRlcyhfXy5pbXBsLmF0dHJzLCBmdW5jdGlvbiAoaywgdikgeyBfXy5pbXBsQXR0cnMucHVzaCh7bmFtZTogaywgdmFsdWU6IHZ9KTsgfSk7XG4gICAgcGFyc2VBdHRyaWJ1dGVzLmFwcGx5KHRhZyQkMSwgW3Jvb3QsIF9fLmltcGxBdHRycywgZnVuY3Rpb24gKGF0dHIsIGV4cHIpIHtcbiAgICAgIGlmIChleHByKSB7IGV4cHJlc3Npb25zLnB1c2goZXhwcik7IH1cbiAgICAgIGVsc2UgeyBzZXRBdHRyaWJ1dGUocm9vdCwgYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTsgfVxuICAgIH1dKTtcblxuICAgIC8vIGluaXRpYWxpYXRpb25cbiAgICB1cGRhdGVPcHRzLmFwcGx5KHRhZyQkMSwgW19fLmlzTG9vcCwgX18ucGFyZW50LCBfXy5pc0Fub255bW91cywgb3B0cywgX18uaW5zdEF0dHJzXSk7XG5cbiAgICAvLyBhZGQgZ2xvYmFsIG1peGluc1xuICAgIHZhciBnbG9iYWxNaXhpbiA9IG1peGluKEdMT0JBTF9NSVhJTik7XG5cbiAgICBpZiAoZ2xvYmFsTWl4aW4gJiYgIV9fLnNraXBBbm9ueW1vdXMpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gZ2xvYmFsTWl4aW4pIHtcbiAgICAgICAgaWYgKGdsb2JhbE1peGluLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGFnJCQxLm1peGluKGdsb2JhbE1peGluW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfXy5pbXBsLmZuKSB7IF9fLmltcGwuZm4uY2FsbCh0YWckJDEsIG9wdHMpOyB9XG5cbiAgICBpZiAoIV9fLnNraXBBbm9ueW1vdXMpIHsgdGFnJCQxLnRyaWdnZXIoJ2JlZm9yZS1tb3VudCcpOyB9XG5cbiAgICAvLyBwYXJzZSBsYXlvdXQgYWZ0ZXIgaW5pdC4gZm4gbWF5IGNhbGN1bGF0ZSBhcmdzIGZvciBuZXN0ZWQgY3VzdG9tIHRhZ3NcbiAgICBlYWNoKHBhcnNlRXhwcmVzc2lvbnMuYXBwbHkodGFnJCQxLCBbZG9tLCBfXy5pc0Fub255bW91c10pLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZXhwcmVzc2lvbnMucHVzaChlKTsgfSk7XG5cbiAgICB0YWckJDEudXBkYXRlKF9fLml0ZW0pO1xuXG4gICAgaWYgKCFfXy5pc0Fub255bW91cyAmJiAhX18uaXNJbmxpbmUpIHtcbiAgICAgIHdoaWxlIChkb20uZmlyc3RDaGlsZCkgeyByb290LmFwcGVuZENoaWxkKGRvbS5maXJzdENoaWxkKTsgfVxuICAgIH1cblxuICAgIGRlZmluZSh0YWckJDEsICdyb290Jywgcm9vdCk7XG5cbiAgICAvLyBpZiB3ZSBuZWVkIHRvIHdhaXQgdGhhdCB0aGUgcGFyZW50IFwibW91bnRcIiBvciBcInVwZGF0ZWRcIiBldmVudCBnZXRzIHRyaWdnZXJlZFxuICAgIGlmICghX18uc2tpcEFub255bW91cyAmJiB0YWckJDEucGFyZW50KSB7XG4gICAgICB2YXIgcCA9IGdldEltbWVkaWF0ZUN1c3RvbVBhcmVudCh0YWckJDEucGFyZW50KTtcbiAgICAgIHAub25lKCFwLmlzTW91bnRlZCA/ICdtb3VudCcgOiAndXBkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TW91bnRTdGF0ZS5jYWxsKHRhZyQkMSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGl0J3Mgbm90IGEgY2hpbGQgdGFnIHdlIGNhbiB0cmlnZ2VyIGl0cyBtb3VudCBldmVudFxuICAgICAgc2V0TW91bnRTdGF0ZS5jYWxsKHRhZyQkMSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGFnJCQxLl9fLndhc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRhZyQkMVxuICB9XG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGhlIHRhZyBpbnN0YW5jZVxuICAgKiBAcGFyYW0geyBCb29sZWFuIH0gbXVzdEtlZXBSb290IC0gaWYgaXQncyB0cnVlIHRoZSByb290IG5vZGUgd2lsbCBub3QgYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJucyB7IFRhZyB9IHRoZSBjdXJyZW50IHRhZyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gdGFnVW5tb3VudCh0YWcsIG11c3RLZWVwUm9vdCwgZXhwcmVzc2lvbnMpIHtcbiAgICB2YXIgX18gPSB0YWcuX187XG4gICAgdmFyIHJvb3QgPSBfXy5yb290O1xuICAgIHZhciB0YWdJbmRleCA9IF9fVEFHU19DQUNIRS5pbmRleE9mKHRhZyk7XG4gICAgdmFyIHAgPSByb290LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIV9fLnNraXBBbm9ueW1vdXMpIHsgdGFnLnRyaWdnZXIoJ2JlZm9yZS11bm1vdW50Jyk7IH1cblxuICAgIC8vIGNsZWFyIGFsbCBhdHRyaWJ1dGVzIGNvbWluZyBmcm9tIHRoZSBtb3VudGVkIHRhZ1xuICAgIHdhbGtBdHRyaWJ1dGVzKF9fLmltcGwuYXR0cnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAoc3RhcnRzV2l0aChuYW1lLCBBVFRSU19QUkVGSVgpKVxuICAgICAgICB7IG5hbWUgPSBuYW1lLnNsaWNlKEFUVFJTX1BSRUZJWC5sZW5ndGgpOyB9XG5cbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShyb290LCBuYW1lKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBhbGwgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRhZy5fXy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZG9tKSB7XG4gICAgICBPYmplY3Qua2V5cyhkb21bUklPVF9FVkVOVFNfS0VZXSkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZG9tW1JJT1RfRVZFTlRTX0tFWV1bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSB0YWcgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIHRhZ3MgY2FjaGUgY29sbGVjdGlvblxuICAgIGlmICh0YWdJbmRleCAhPT0gLTEpIHsgX19UQUdTX0NBQ0hFLnNwbGljZSh0YWdJbmRleCwgMSk7IH1cblxuICAgIC8vIGNsZWFuIHVwIHRoZSBwYXJlbnQgdGFncyBvYmplY3RcbiAgICBpZiAoX18ucGFyZW50ICYmICFfXy5pc0Fub255bW91cykge1xuICAgICAgdmFyIHB0YWcgPSBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnQoX18ucGFyZW50KTtcblxuICAgICAgaWYgKF9fLmlzVmlydHVhbCkge1xuICAgICAgICBPYmplY3RcbiAgICAgICAgICAua2V5cyh0YWcudGFncylcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAodGFnTmFtZSkgeyByZXR1cm4gYXJyYXlpc2hSZW1vdmUocHRhZy50YWdzLCB0YWdOYW1lLCB0YWcudGFnc1t0YWdOYW1lXSk7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlpc2hSZW1vdmUocHRhZy50YWdzLCBfXy50YWdOYW1lLCB0YWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVubW91bnQgYWxsIHRoZSB2aXJ0dWFsIGRpcmVjdGl2ZXNcbiAgICBpZiAodGFnLl9fLnZpcnRzKSB7XG4gICAgICBlYWNoKHRhZy5fXy52aXJ0cywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYucGFyZW50Tm9kZSkgeyB2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodik7IH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGV4cHJlc3Npb25zIHRvIHVubW91bnQgdGhlbXNlbHZlc1xuICAgIHVubW91bnRBbGwoZXhwcmVzc2lvbnMpO1xuICAgIGVhY2goX18uaW5zdEF0dHJzLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5leHByICYmIGEuZXhwci51bm1vdW50ICYmIGEuZXhwci51bm1vdW50KCk7IH0pO1xuXG4gICAgLy8gY2xlYXIgdGhlIHRhZyBodG1sIGlmIGl0J3MgbmVjZXNzYXJ5XG4gICAgaWYgKG11c3RLZWVwUm9vdCkgeyBzZXRJbm5lckhUTUwocm9vdCwgJycpOyB9XG4gICAgLy8gb3RoZXJ3aXNlIGRldGFjaCB0aGUgcm9vdCB0YWcgZnJvbSB0aGUgRE9NXG4gICAgZWxzZSBpZiAocCkgeyBwLnJlbW92ZUNoaWxkKHJvb3QpOyB9XG5cbiAgICAvLyBjdXN0b20gaW50ZXJuYWwgdW5tb3VudCBmdW5jdGlvbiB0byBhdm9pZCByZWx5aW5nIG9uIHRoZSBvYnNlcnZhYmxlXG4gICAgaWYgKF9fLm9uVW5tb3VudCkgeyBfXy5vblVubW91bnQoKTsgfVxuXG4gICAgLy8gd2VpcmQgZml4IGZvciBhIHdlaXJkIGVkZ2UgY2FzZSAjMjQwOSBhbmQgIzI0MzZcbiAgICAvLyBzb21lIHVzZXJzIG1pZ2h0IHVzZSB5b3VyIHNvZnR3YXJlIG5vdCBhcyB5b3UndmUgZXhwZWN0ZWRcbiAgICAvLyBzbyBJIG5lZWQgdG8gYWRkIHRoZXNlIGRpcnR5IGhhY2tzIHRvIG1pdGlnYXRlIHVuZXhwZWN0ZWQgaXNzdWVzXG4gICAgaWYgKCF0YWcuaXNNb3VudGVkKSB7IHNldE1vdW50U3RhdGUuY2FsbCh0YWcsIHRydWUpOyB9XG5cbiAgICBzZXRNb3VudFN0YXRlLmNhbGwodGFnLCBmYWxzZSk7XG5cbiAgICBkZWxldGUgcm9vdC5fdGFnO1xuXG4gICAgcmV0dXJuIHRhZ1xuICB9XG5cbiAgLyoqXG4gICAqIFRhZyBjcmVhdGlvbiBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0geyBPYmplY3QgfSBpbXBsIC0gaXQgY29udGFpbnMgdGhlIHRhZyB0ZW1wbGF0ZSwgYW5kIGxvZ2ljXG4gICAqIEBwYXJhbSB7IE9iamVjdCB9IGNvbmYgLSB0YWcgb3B0aW9uc1xuICAgKiBAcGFyYW0geyBTdHJpbmcgfSBpbm5lckhUTUwgLSBodG1sIHRoYXQgZXZlbnR1YWxseSB3ZSBuZWVkIHRvIGluamVjdCBpbiB0aGUgdGFnXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVUYWcoaW1wbCwgY29uZiwgaW5uZXJIVE1MKSB7XG4gICAgaWYgKCBpbXBsID09PSB2b2lkIDAgKSBpbXBsID0ge307XG4gICAgaWYgKCBjb25mID09PSB2b2lkIDAgKSBjb25mID0ge307XG5cbiAgICB2YXIgdGFnID0gY29uZi5jb250ZXh0IHx8IHt9O1xuICAgIHZhciBvcHRzID0gY29uZi5vcHRzIHx8IHt9O1xuICAgIHZhciBwYXJlbnQgPSBjb25mLnBhcmVudDtcbiAgICB2YXIgaXNMb29wID0gY29uZi5pc0xvb3A7XG4gICAgdmFyIGlzQW5vbnltb3VzID0gISFjb25mLmlzQW5vbnltb3VzO1xuICAgIHZhciBza2lwQW5vbnltb3VzID0gc2V0dGluZ3Muc2tpcEFub255bW91c1RhZ3MgJiYgaXNBbm9ueW1vdXM7XG4gICAgdmFyIGl0ZW0gPSBjb25mLml0ZW07XG4gICAgLy8gYXZhaWxhYmxlIG9ubHkgZm9yIHRoZSBsb29wZWQgbm9kZXNcbiAgICB2YXIgaW5kZXggPSBjb25mLmluZGV4O1xuICAgIC8vIEFsbCBhdHRyaWJ1dGVzIG9uIHRoZSBUYWcgd2hlbiBpdCdzIGZpcnN0IHBhcnNlZFxuICAgIHZhciBpbnN0QXR0cnMgPSBbXTtcbiAgICAvLyBleHByZXNzaW9ucyBvbiB0aGlzIHR5cGUgb2YgVGFnXG4gICAgdmFyIGltcGxBdHRycyA9IFtdO1xuICAgIHZhciB0bXBsID0gaW1wbC50bXBsO1xuICAgIHZhciBleHByZXNzaW9ucyA9IFtdO1xuICAgIHZhciByb290ID0gY29uZi5yb290O1xuICAgIHZhciB0YWdOYW1lID0gY29uZi50YWdOYW1lIHx8IGdldE5hbWUocm9vdCk7XG4gICAgdmFyIGlzVmlydHVhbCA9IHRhZ05hbWUgPT09ICd2aXJ0dWFsJztcbiAgICB2YXIgaXNJbmxpbmUgPSAhaXNWaXJ0dWFsICYmICF0bXBsO1xuICAgIHZhciBkb207XG5cbiAgICBpZiAoaXNJbmxpbmUgfHwgaXNMb29wICYmIGlzQW5vbnltb3VzKSB7XG4gICAgICBkb20gPSByb290O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzVmlydHVhbCkgeyByb290LmlubmVySFRNTCA9ICcnOyB9XG4gICAgICBkb20gPSBta2RvbSh0bXBsLCBpbm5lckhUTUwsIGlzU3ZnKHJvb3QpKTtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHRoaXMgdGFnIG9ic2VydmFibGVcbiAgICBpZiAoIXNraXBBbm9ueW1vdXMpIHsgb2JzZXJ2YWJsZSh0YWcpOyB9XG5cbiAgICAvLyBvbmx5IGNhbGwgdW5tb3VudCBpZiB3ZSBoYXZlIGEgdmFsaWQgX19UQUdfSU1QTCAoaGFzIG5hbWUgcHJvcGVydHkpXG4gICAgaWYgKGltcGwubmFtZSAmJiByb290Ll90YWcpIHsgcm9vdC5fdGFnLnVubW91bnQodHJ1ZSk7IH1cblxuICAgIGRlZmluZSh0YWcsICdfXycsIHtcbiAgICAgIGltcGw6IGltcGwsXG4gICAgICByb290OiByb290LFxuICAgICAgc2tpcEFub255bW91czogc2tpcEFub255bW91cyxcbiAgICAgIGltcGxBdHRyczogaW1wbEF0dHJzLFxuICAgICAgaXNBbm9ueW1vdXM6IGlzQW5vbnltb3VzLFxuICAgICAgaW5zdEF0dHJzOiBpbnN0QXR0cnMsXG4gICAgICBpbm5lckhUTUw6IGlubmVySFRNTCxcbiAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBpc0xvb3A6IGlzTG9vcCxcbiAgICAgIGlzSW5saW5lOiBpc0lubGluZSxcbiAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIC8vIHRhZ3MgaGF2aW5nIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgLy8gaXQgd291bGQgYmUgYmV0dGVyIHRvIHVzZSB3ZWFrIG1hcHMgaGVyZSBidXQgd2UgY2FuIG5vdCBpbnRyb2R1Y2UgYnJlYWtpbmcgY2hhbmdlcyBub3dcbiAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAvLyB0aGVzZSB2YXJzIHdpbGwgYmUgbmVlZGVkIG9ubHkgZm9yIHRoZSB2aXJ0dWFsIHRhZ3NcbiAgICAgIHZpcnRzOiBbXSxcbiAgICAgIHdhc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgdGFpbDogbnVsbCxcbiAgICAgIGhlYWQ6IG51bGxcbiAgICB9KTtcblxuICAgIC8vIHRhZyBwcm90ZWN0ZWQgcHJvcGVydGllc1xuICAgIHJldHVybiBbXG4gICAgICBbJ2lzTW91bnRlZCcsIGZhbHNlXSxcbiAgICAgIC8vIGNyZWF0ZSBhIHVuaXF1ZSBpZCB0byB0aGlzIHRhZ1xuICAgICAgLy8gaXQgY291bGQgYmUgaGFuZHkgdG8gdXNlIGl0IGFsc28gdG8gaW1wcm92ZSB0aGUgdmlydHVhbCBkb20gcmVuZGVyaW5nIHNwZWVkXG4gICAgICBbJ19yaW90X2lkJywgdWlkKCldLFxuICAgICAgWydyb290Jywgcm9vdF0sXG4gICAgICBbJ29wdHMnLCBvcHRzLCB7IHdyaXRhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlIH1dLFxuICAgICAgWydwYXJlbnQnLCBwYXJlbnQgfHwgbnVsbF0sXG4gICAgICAvLyBwcm90ZWN0IHRoZSBcInRhZ3NcIiBhbmQgXCJyZWZzXCIgcHJvcGVydHkgZnJvbSBiZWluZyBvdmVycmlkZGVuXG4gICAgICBbJ3RhZ3MnLCB7fV0sXG4gICAgICBbJ3JlZnMnLCB7fV0sXG4gICAgICBbJ3VwZGF0ZScsIGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBjb21wb25lbnRVcGRhdGUodGFnLCBkYXRhLCBleHByZXNzaW9ucyk7IH1dLFxuICAgICAgWydtaXhpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1peGlucyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgbWl4aW5zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1peGluLmFwcGx5KHZvaWQgMCwgWyB0YWcgXS5jb25jYXQoIG1peGlucyApKTtcbiAgICB9XSxcbiAgICAgIFsnbW91bnQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb25lbnRNb3VudCh0YWcsIGRvbSwgZXhwcmVzc2lvbnMsIG9wdHMpOyB9XSxcbiAgICAgIFsndW5tb3VudCcsIGZ1bmN0aW9uIChtdXN0S2VlcFJvb3QpIHsgcmV0dXJuIHRhZ1VubW91bnQodGFnLCBtdXN0S2VlcFJvb3QsIGV4cHJlc3Npb25zKTsgfV1cbiAgICBdLnJlZHVjZShmdW5jdGlvbiAoYWNjLCByZWYpIHtcbiAgICAgIHZhciBrZXkgPSByZWZbMF07XG4gICAgICB2YXIgdmFsdWUgPSByZWZbMV07XG4gICAgICB2YXIgb3B0cyA9IHJlZlsyXTtcblxuICAgICAgZGVmaW5lKHRhZywga2V5LCB2YWx1ZSwgb3B0cyk7XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgZXh0ZW5kKHRhZywgaXRlbSkpXG4gIH1cblxuICAvKipcbiAgICogTW91bnQgYSB0YWcgY3JlYXRpbmcgbmV3IFRhZyBpbnN0YW5jZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IHJvb3QgLSBkb20gbm9kZSB3aGVyZSB0aGUgdGFnIHdpbGwgYmUgbW91bnRlZFxuICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IHRhZ05hbWUgLSBuYW1lIG9mIHRoZSByaW90IHRhZyB3ZSB3YW50IHRvIG1vdW50XG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gb3B0cyAtIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgVGFnIGluc3RhbmNlXG4gICAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gY3R4IC0gb3B0aW9uYWwgY29udGV4dCB0aGF0IHdpbGwgYmUgdXNlZCB0byBleHRlbmQgYW4gZXhpc3RpbmcgY2xhc3MgKCB1c2VkIGluIHJpb3QuVGFnIClcbiAgICogQHJldHVybnMgeyBUYWcgfSBhIG5ldyBUYWcgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIG1vdW50JDEocm9vdCwgdGFnTmFtZSwgb3B0cywgY3R4KSB7XG4gICAgdmFyIGltcGwgPSBfX1RBR19JTVBMW3RhZ05hbWVdO1xuICAgIHZhciBpbXBsQ2xhc3MgPSBfX1RBR19JTVBMW3RhZ05hbWVdLmNsYXNzO1xuICAgIHZhciBjb250ZXh0ID0gY3R4IHx8IChpbXBsQ2xhc3MgPyBjcmVhdGUoaW1wbENsYXNzLnByb3RvdHlwZSkgOiB7fSk7XG4gICAgLy8gY2FjaGUgdGhlIGlubmVyIEhUTUwgdG8gZml4ICM4NTVcbiAgICB2YXIgaW5uZXJIVE1MID0gcm9vdC5faW5uZXJIVE1MID0gcm9vdC5faW5uZXJIVE1MIHx8IHJvb3QuaW5uZXJIVE1MO1xuICAgIHZhciBjb25mID0gZXh0ZW5kKHsgcm9vdDogcm9vdCwgb3B0czogb3B0cywgY29udGV4dDogY29udGV4dCB9LCB7IHBhcmVudDogb3B0cyA/IG9wdHMucGFyZW50IDogbnVsbCB9KTtcbiAgICB2YXIgdGFnO1xuXG4gICAgaWYgKGltcGwgJiYgcm9vdCkgeyB0YWcgPSBjcmVhdGVUYWcoaW1wbCwgY29uZiwgaW5uZXJIVE1MKTsgfVxuXG4gICAgaWYgKHRhZyAmJiB0YWcubW91bnQpIHtcbiAgICAgIHRhZy5tb3VudCh0cnVlKTtcbiAgICAgIC8vIGFkZCB0aGlzIHRhZyB0byB0aGUgdmlydHVhbERvbSB2YXJpYWJsZVxuICAgICAgaWYgKCFjb250YWlucyhfX1RBR1NfQ0FDSEUsIHRhZykpIHsgX19UQUdTX0NBQ0hFLnB1c2godGFnKTsgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWdcbiAgfVxuXG5cblxuICB2YXIgdGFncyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBhcnJheWlzaEFkZDogYXJyYXlpc2hBZGQsXG4gICAgZ2V0VGFnTmFtZTogZ2V0TmFtZSxcbiAgICBpbmhlcml0UGFyZW50UHJvcHM6IGluaGVyaXRQYXJlbnRQcm9wcyxcbiAgICBtb3VudFRvOiBtb3VudCQxLFxuICAgIHNlbGVjdFRhZ3M6IHF1ZXJ5LFxuICAgIGFycmF5aXNoUmVtb3ZlOiBhcnJheWlzaFJlbW92ZSxcbiAgICBnZXRUYWc6IGdldCxcbiAgICBpbml0Q2hpbGRUYWc6IGluaXRDaGlsZCxcbiAgICBtb3ZlQ2hpbGRUYWc6IG1vdmVDaGlsZCxcbiAgICBtYWtlUmVwbGFjZVZpcnR1YWw6IG1ha2VSZXBsYWNlVmlydHVhbCxcbiAgICBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnRUYWc6IGdldEltbWVkaWF0ZUN1c3RvbVBhcmVudCxcbiAgICBtYWtlVmlydHVhbDogbWFrZVZpcnR1YWwsXG4gICAgbW92ZVZpcnR1YWw6IG1vdmVWaXJ0dWFsLFxuICAgIHVubW91bnRBbGw6IHVubW91bnRBbGwsXG4gICAgY3JlYXRlSWZEaXJlY3RpdmU6IGNyZWF0ZUlmRGlyZWN0aXZlLFxuICAgIGNyZWF0ZVJlZkRpcmVjdGl2ZTogY3JlYXRlUmVmRGlyZWN0aXZlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSaW90IHB1YmxpYyBhcGlcbiAgICovXG4gIHZhciBzZXR0aW5ncyQxID0gc2V0dGluZ3M7XG4gIHZhciB1dGlsID0ge1xuICAgIHRtcGw6IHRtcGwsXG4gICAgYnJhY2tldHM6IGJyYWNrZXRzLFxuICAgIHN0eWxlTWFuYWdlcjogc3R5bGVNYW5hZ2VyLFxuICAgIHZkb206IF9fVEFHU19DQUNIRSxcbiAgICBzdHlsZU5vZGU6IHN0eWxlTWFuYWdlci5zdHlsZU5vZGUsXG4gICAgLy8gZXhwb3J0IHRoZSByaW90IGludGVybmFsIHV0aWxzIGFzIHdlbGxcbiAgICBkb206IGRvbSxcbiAgICBjaGVjazogY2hlY2ssXG4gICAgbWlzYzogbWlzYyxcbiAgICB0YWdzOiB0YWdzXG4gIH07XG5cbiAgLy8gZXhwb3J0IHRoZSBjb3JlIHByb3BzL21ldGhvZHNcbiAgdmFyIFRhZyQxID0gVGFnO1xuICB2YXIgdGFnJDEgPSB0YWc7XG4gIHZhciB0YWcyJDEgPSB0YWcyO1xuICB2YXIgbW91bnQkMiA9IG1vdW50O1xuICB2YXIgbWl4aW4kMSA9IG1peGluO1xuICB2YXIgdXBkYXRlJDIgPSB1cGRhdGUkMTtcbiAgdmFyIHVucmVnaXN0ZXIkMSA9IHVucmVnaXN0ZXI7XG4gIHZhciB2ZXJzaW9uJDEgPSB2ZXJzaW9uO1xuICB2YXIgb2JzZXJ2YWJsZSQxID0gb2JzZXJ2YWJsZTtcblxuICB2YXIgcmlvdCQxID0gZXh0ZW5kKHt9LCBjb3JlLCB7XG4gICAgb2JzZXJ2YWJsZTogb2JzZXJ2YWJsZSxcbiAgICBzZXR0aW5nczogc2V0dGluZ3MkMSxcbiAgICB1dGlsOiB1dGlsLFxuICB9KTtcblxuICBleHBvcnRzLnNldHRpbmdzID0gc2V0dGluZ3MkMTtcbiAgZXhwb3J0cy51dGlsID0gdXRpbDtcbiAgZXhwb3J0cy5UYWcgPSBUYWckMTtcbiAgZXhwb3J0cy50YWcgPSB0YWckMTtcbiAgZXhwb3J0cy50YWcyID0gdGFnMiQxO1xuICBleHBvcnRzLm1vdW50ID0gbW91bnQkMjtcbiAgZXhwb3J0cy5taXhpbiA9IG1peGluJDE7XG4gIGV4cG9ydHMudXBkYXRlID0gdXBkYXRlJDI7XG4gIGV4cG9ydHMudW5yZWdpc3RlciA9IHVucmVnaXN0ZXIkMTtcbiAgZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbiQxO1xuICBleHBvcnRzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlJDE7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHJpb3QkMTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwiPGFib3V0IGNsYXNzPVwicHVyZS1nXCI+XG4gIDxkaXYgY2xhc3M9XCJhYm91dC1pbWcgcHVyZS11LXNtLTEtNCBwdXJlLXUtMS0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImZhY2Utd3JhcHBlciBwdXJlLXUtMS0yXCI+XG4gICAgICA8aW1nIHNyYz1cInJlc291cmNlcy9pY29uLXB2Y3Jlc2luLnN2Z1wiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHVyZS11LXNtLTEtMjQgcHVyZS11LTEtMVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWJvdXQtdGV4dCBwdXJlLXUtc20tMTctMjQgcHVyZS11LTEtMVwiPlxuICAgIFdlYiBGcm9udGVuZOOAgOOBjOWlveOBjeOBquOCqOODs+OCuOODi+OCouOAgjxiciAvPlxuICAgIOWtpueUn+aZguS7o+OBr+OCpOODs+OCv+ODqeOCr+OCt+ODp+ODs++8iEhDSe+8ieOCkuWwguaUu+OBl+OAgeS4u+OBq+ODouODkOOCpOODqyAvXG4gICAg44Km44Kn44Ki44Op44OW44Or44OH44OQ44Kk44K544Gr6Zai44GZ44KL56CU56m244KS6KGM44GG44CCPGJyIC8+XG4gICAg5Lq644Go5oSP6KaL44KS5Lqk5o+b44GX44CB6K2w6KuW44GX44Gq44GM44KJ44Oi44OO5L2c44KK44GM44GX44Gf44GE44CCPGJyIC8+XG4gICAg5paw44GX44GE44KC44Gu44GM5aW944GN44Gq44Gu44Gn44CB6LKq5qyy44Gr5a2m44KT44Gn44GE44GP44CCXG4gICAgPHVsPlxuICAgICAgPGxpIGNsYXNzPVwicHVyZS1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIHB1cmUtdS0xLTEyIHB1cmUtdS1sZy0xLTI0XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iaXJ0aGRheS1jYWtlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0IHB1cmUtdS0xMS0xMlwiPntiaXJ0aGRheX0gKEFnZToge2FnZX0pPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwicHVyZS1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIHB1cmUtdS0xLTEyIHB1cmUtdS1sZy0xLTI0XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lbnZlbG9wZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodCBwdXJlLXUtMTEtMTJcIj5wdmNyZXNpbjA3MzBAZ21haWwuY29tPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwicHVyZS1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIHB1cmUtdS0xLTEyIHB1cmUtdS1sZy0xLTI0XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyLWFsdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodCBwdXJlLXUtMTEtMTJcIj5PbW90ZXNhbmRvLCBUb2t5bzwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cInB1cmUtZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiBwdXJlLXUtMS0xMiBwdXJlLXUtbGctMS0yNFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3VpdGNhc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQgcHVyZS11LTExLTEyXCI+XG4gICAgICAgICAgPHNwYW4+RnJvbnRlbmQgRW5naW5lZXJ7JyAnfTwvc3Bhbj5cbiAgICAgICAgICA8YSBjbGFzcz1cImNvbXBhbnlcIiBocmVmPVwiaHR0cHM6Ly9qcC5jb3JwLXNhbnNhbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QCBTYW5zYW48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8c3R5bGUgdHlwZT1cInNjc3NcIj5cbiAgICA6c2NvcGUge1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgID4gLmFib3V0LWltZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC5mYWNlLXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IC5hYm91dC10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZTlhZGI7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmNvbXBhbnkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPHNjcmlwdD5cbiAgICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG4gICAgaW1wb3J0IHdlYnAgZnJvbSAnLi93ZWJwJ1xuXG4gICAgdGhpcy5iaXJ0aGRheSA9ICcxOTk0LTA3LTMwJ1xuICAgIHRoaXMuYWdlID0gZGF5anMoKS5kaWZmKHRoaXMuYmlydGhkYXksICd5ZWFycycpXG4gIDwvc2NyaXB0PlxuPC9hYm91dD5cbiIsIjxhd2FyZHM+XG5cdDxsaXN0IGl0ZW1zPVwie2F3YXJkc31cIj48L2xpc3Q+XG5cblx0PHNjcmlwdD5cblx0XHRpbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnXG5cblx0XHR0aGlzLmF3YXJkcyA9IFtcblx0XHRcdHtcblx0XHRcdFx0ZGF0ZTogJzIwMTUtMDUnLFxuXHRcdFx0XHR0aXRsZTogJ0Nsb3VkIG4g44Ki44OX44Oq44Kx44O844K344On44Oz44Kz44Oz44OG44K544OIJyxcblx0XHRcdFx0dGV4dHM6IFtcblx0XHRcdFx0XHQnV2ViUlRD6LOeIOWPl+iznicsXG5cdFx0XHRcdFx0J+ODgeODvOODoO+8muaEj+itmOS4reOBj+OCieOBhOOBqOOBl+OBpuWPguWKoCcsXG5cdFx0XHRcdFx0J+ODl+ODreOCuOOCp+OCr+ODiDogSWNoaW1vbml0dG8nLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cDovL3d3dy5jbG91ZG4tc2VydmljZS5jb20vY2FtMDQtZGV2ZW4vZGVjb24vdG9oeW8vJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGU6ICcyMDE3LTEyJyxcblx0XHRcdFx0dGl0bGU6ICfkv6Hlt57mnKrmnaXjgqLjg5fjg6rjgrPjg7Pjg4bjgrnjg4gwJyxcblx0XHRcdFx0dGV4dHM6IFtcblx0XHRcdFx0XHQn5L+h6LaK5oOF5aCx6YCa5L+h5oeH6KuH5Lya5Lya6ZW36LOeIOWPl+iznicsXG5cdFx0XHRcdFx0J+ODgeODvOODoO+8muaEj+itmOS4reOBj+OCieOBhOOBqOOBl+OBpuWPguWKoCcsXG5cdFx0XHRcdFx0J+ODl+ODreOCuOOCp+OCr+ODiDogTWlkZGxlRHJpdmUnLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9zaGluc2h1LWZ1dHVyZWFwcC5uZXQvaW5mb3JtYXRpb24vY29udGVzdC8nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0ZTogJzIwMTAtMDMnLFxuXHRcdFx0XHR0aXRsZTogJ+esrDE4MuWbniBIQ0nnoJTnqbbkvJonLFxuXHRcdFx0XHR0ZXh0czogW1xuXHRcdFx0XHRcdCflrabnlJ/lpajlirHos54g5Y+X6LOeJyxcblx0XHRcdFx0XHQn44K544Oe44O844OI44Km44Kp44OD44OB5ZCR44GR44Gu44K944OV44OI44Km44Kn44Ki44Kt44O844Oc44O844OJ44Gr6Zai44GZ44KL56CU56m277yI5L+u5aOr6KuW5paH77yJJyxcblx0XHRcdFx0XHQn44OX44Ot44K444Kn44Kv44OIOiBJbnZpc2libGVGbGljaycsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxpbms6ICdodHRwOi8vd3d3LnNpZ2hjaS5qcC9jb250ZW50cy9wYWdlL25ld3MnLFxuXHRcdFx0fSxcblx0XHRdXG5cdDwvc2NyaXB0PlxuPC9hd2FyZHM+XG4iLCI8Y2x1YnM+XG5cdDxsaXN0IGl0ZW1zPVwie2NsdWJzfVwiPjwvbGlzdD5cblxuXHQ8c2NyaXB0PlxuXHRcdGltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCdcblxuXHRcdHRoaXMuY2x1YnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGU6ICcyMDEzLTA0IC0gMjAxNy0wMycsXG5cdFx0XHRcdHRpdGxlOiAn57eP5ZCI44Kz44Oz44OG44Oz44OE5Yi25L2c44K144O844Kv44OrJyxcblx0XHRcdFx0dGV4dHM6IFtcblx0XHRcdFx0XHQn44OH44K444K/44Or44Kz44Oz44OG44Oz44OE5Yi25L2c77yI6Z+z5qW944O75YuV55S744O744Ky44O844Og44O744Kk44Op44K544OI44O75paH6Iq477yJ44KS6KGM44GG5aSn5a2m5YaF44Gu44K144O844Kv44OrJyxcblx0XHRcdFx0XHQn5ZCM5Lq644Kk44OZ44Oz44OI44Gn44Gu6aCS5biD77yI44Kz44Of44OD44Kv44Oe44O844Kx44OD44OI44O7TTPvvIknLFxuXHRcdFx0XHRcdCfoqK3nq4vjg6Hjg7Pjg5Djg7zvvIblubnkuovplbcnLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9zb2tvbi5qcC8nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0ZTogJzIwMTYtMDQgLSAyMDE3LTA2Jyxcblx0XHRcdFx0dGl0bGU6ICdOYWthbm8gQ29tcHV0ZXIgQ2x1YicsXG5cdFx0XHRcdHRleHRzOiBbXG5cdFx0XHRcdFx0J+ODl+ODreOCsOODqeODn+ODs+OCsOOBq+mWouOBmeOCi+aDheWgseWFseacieOChOWLieW8t+S8muOBruWun+aWveOCkuihjOOBhuWkp+WtpuWGheOBruOCteODvOOCr+ODqycsXG5cdFx0XHRcdFx0J+WQjOS6uuOCpOODmeODs+ODiOOBp+OBrumgkuW4g++8iOOCs+ODn+ODg+OCr+ODnuODvOOCseODg+ODiOODu+aKgOihk+abuOWFuO+8iScsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxpbms6ICdodHRwczovL21laWppLW5jYy50ZWNoLycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRlOiAnMjAxNy0wNCAtIDIwMTktMDMnLFxuXHRcdFx0XHR0aXRsZTogJ2Z1bWJsZSB3YWFscycsXG5cdFx0XHRcdHRleHRzOiBbXG5cdFx0XHRcdFx0J+OCquODquOCuOODiuODq+ODnOODvOODieOCsuODvOODoOOBruWItuS9nOOCkuihjOOBhuacieW/l+OBq+OCiOOCi+OCteODvOOCr+ODqycsXG5cdFx0XHRcdFx0J+WQjOS6uuOCpOODmeODs+ODiOOBp+OBrumgkuW4g++8iOOCs+ODn+ODg+OCr+ODnuODvOOCseODg+ODiOODu+OCsuODvOODoOODnuODvOOCseODg+ODiO+8iScsXG5cdFx0XHRcdFx0J+S8geeUu+OBi+OCieWItuS9nOOAgeiyqeWjsuOBvuOBp+ihjOOBhuOBjOOAgeS4u+OBq+ODh+OCtuOCpOODs+OCkuaLheW9kycsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxpbms6ICdodHRwOi8vZnVtYmxld2FhbHMuY29tLycsXG5cdFx0XHR9LFxuXHRcdF1cblx0PC9zY3JpcHQ+XG48L2NsdWJzPlxuIiwiPGVkdWNhdGlvbj5cblx0PGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkVkdWNhdGlvbjwvaDI+XG5cdDxsaXN0IGl0ZW1zPVwie3NjaG9vbHN9XCI+PC9saXN0PlxuXG5cdDxzY3JpcHQ+XG5cdFx0aW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0J1xuXG5cdFx0dGhpcy5zY2hvb2xzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRkYXRlOiAnMjAxMC0wNCAtIDIwMTMtMDMnLFxuXHRcdFx0XHR0aXRsZTogJ+acrOmDt+mrmOetieWtpuagoScsXG5cdFx0XHRcdHRleHRzOiBbJ+adseS6rOODu+W3o+m0qOOBq+OBguOCi+engeeri+OBruS4remrmOS4gOiyq+agoScsICfnlJ/lvpLkvJrjg7vmlpnnkIbnoJTnqbbkvJrjg7vnvo7ooZPpg6jjgavmiYDlsZ4nXSxcblx0XHRcdFx0bGluazogJ2h0dHA6Ly93d3cuaG9uZ28uZWQuanAvJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGU6ICcyMDEzLTA0IC0gMjAxNy0wMycsXG5cdFx0XHRcdHRpdGxlOiAn5piO5rK75aSn5a2mJyxcblx0XHRcdFx0dGV4dHM6IFtcblx0XHRcdFx0XHQn57eP5ZCI5pWw55CG5a2m6YOoIOWFiOerr+ODoeODh+OCo+OCouOCteOCpOOCqOODs+OCueWtpuenkSAx5pyf55SfJyxcblx0XHRcdFx0XHQnUEPjgafjgrPjg7Pjg4bjg7Pjg4TliLbkvZzjgpLjgZnjgovjgrXjg7zjgq/jg6vjgpLnq4vjgaHkuIrjgZLjgIHlubnkuovplbfjgpLli5njgoHjgosnLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cDovL3d3dy5tZWlqaS5hYy5qcC9pbXMvc3ViamVjdC9mbXMvJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGU6ICcyMDE3LTA0IC0gMjAxOS0wMycsXG5cdFx0XHRcdHRpdGxlOiAn5piO5rK75aSn5a2m5aSn5a2m6ZmiJyxcblx0XHRcdFx0dGV4dHM6IFtcblx0XHRcdFx0XHQn5YWI56uv5pWw55CG56eR5a2m56CU56m256eRIOWFiOerr+ODoeODh+OCo+OCouOCteOCpOOCqOODs+OCueWwguaUuyDkv67lo6vvvIjlt6XlrabvvIknLFxuXHRcdFx0XHRcdCfjg6Ljg5DjgqTjg6sgLyDjgqbjgqfjgqLjg6njg5bjg6vjg4fjg5DjgqTjgrnjgavplqLjgZnjgovjgqTjg7Pjgr/jg6njgq/jgrfjg6fjg7Pjga7noJTnqbYnLFxuXHRcdFx0XHRcdCfjgqLjg6vjg5DjgqTjg4jjgafjg5Xjg63jg7Pjg4jjgqjjg7Pjg4njgqjjg7Pjgrjjg4vjgqLjgajjgZfjgablg43jgY8nLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cDovL3d3dy5tZWlqaS5hYy5qcC9hbXMvcHJvZmVzc29yL0ZNUy5odG1sJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQ8L3NjcmlwdD5cbjwvZWR1Y2F0aW9uPlxuIiwiPGZpcnN0PlxuXHQ8bmF2PjwvbmF2PlxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGgxPlJhaWthIFRvcml5YW1hPC9oMT5cblx0XHQ8cD5XZWIgLyBBbmRyb2lkIERldmVsb3BlcjwvcD5cblx0XHQ8c29jaWFsPjwvc29jaWFsPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJhcnJvd1wiPlxuXHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duIGZhLTN4XCI+PC9pPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0YmFja2dyb3VuZDogIzFhMTgxOTtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdD4gbmF2IHtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTIwMHB4ICogMC44KTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDNyZW07XG5cdFx0XHRcdD4gdWwge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdFx0PiBsaSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+IC5jb250YWluZXIge1xuXHRcdFx0XHQ+IGgxIHtcblx0XHRcdFx0XHRmb250LXNpemU6IGNhbGMoMXJlbSArIDI1MCUpO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQ+IHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBzZXJpZjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hcnJvdyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdD4gaDEge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdD4gcCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMC41cmVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHQ8L3N0eWxlPlxuXG5cdDxzY3JpcHQ+XG5cdFx0aW1wb3J0IHNvY2lhbCBmcm9tICcuL3NvY2lhbCdcblx0PC9zY3JpcHQ+XG48L2ZpcnN0PlxuIiwiPGZvb3Rlcj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdDxzb2NpYWw+PC9zb2NpYWw+XG5cdFx0PHA+wqkge3llYXJ9IHB2Y3Jlc2luPC9wPlxuXHQ8L2Rpdj5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjMGYwZjBmO1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0PiAuY29udGFpbmVyIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRwYWRkaW5nOiAxcmVtIDA7XG5cdFx0XHRcdD4gcCB7XG5cdFx0XHRcdFx0Y29sb3I6ICM1MjUyNTI7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDFyZW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdDwvc3R5bGU+XG5cblx0PHNjcmlwdD5cblx0XHRpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cdFx0aW1wb3J0IHNvY2lhbCBmcm9tICcuL3NvY2lhbCdcblxuXHRcdHRoaXMueWVhciA9IGRheWpzKCkuZm9ybWF0KCdZWVlZJylcblx0PC9zY3JpcHQ+XG48L2Zvb3Rlcj5cbiIsIjxsaWtlPlxuXHQ8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+TGlrZTwvaDI+XG5cdDxkaXYgY2xhc3M9XCJwdXJlLWdcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibGlrZS1ib3ggcHVyZS11LTEtMSBwdXJlLXUtc20tMS0yIHB1cmUtdS1tZC0xLTNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJsaWtlXCI+XG5cdFx0XHRcdDxoMz5EbzwvaDM+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpIGVhY2g9XCJ7dCwgaSBpbiBkb31cIj5cblx0XHRcdFx0XHRcdHtsfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpY29uXCI+e2l9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3R9PC9zcGFuPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibGlrZS1ib3ggcHVyZS11LTEtMSBwdXJlLXUtc20tMS0yIHB1cmUtdS1tZC0xLTNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJsaWtlXCI+XG5cdFx0XHRcdDxoMz5XYXRjaDwvaDM+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpIGVhY2g9XCJ7dCwgaSBpbiB3YXRjaH1cIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaWNvblwiPntpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dFwiPnt0fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImxpa2UtYm94IHB1cmUtdS0xLTEgcHVyZS11LXNtLTEtMiBwdXJlLXUtbWQtMS0zXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGlrZVwiPlxuXHRcdFx0XHQ8aDM+RWF0PC9oMz5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGkgZWFjaD1cInt0LCBpIGluIGVhdH1cIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaWNvblwiPntpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dFwiPnt0fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxzdHlsZSB0eXBlPVwic2Nzc1wiPlxuXHRcdDpzY29wZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdD4gZGl2IHtcblx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcblx0XHRcdFx0Lmxpa2UtYm94IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xuXHRcdFx0XHRcdC5saWtlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM0MTQxNDE7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjZyZW0gMXJlbTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcblx0XHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhyIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwLjVyZW0gMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxLjVweCBzb2xpZDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBncmF5O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dWwgbGkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMnJlbTtcblx0XHRcdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAycmVtO1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC50ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0PC9zdHlsZT5cblxuXHQ8c2NyaXB0PlxuXHRcdHRoaXMuZG8gPSB7XG5cdFx0XHQn8J+Suyc6ICfjg5fjg63jgrDjg6njg5/jg7PjgrAnLFxuXHRcdFx0J/CfkZ8nOiAn5pWj5q2pJyxcblx0XHRcdCfwn46kJzogJ+S4gOS6uuOCq+ODqeOCquOCsScsXG5cdFx0XHQn8J+alyc6ICfjg5/jg4vjg4Hjg6XjgqLpm4bjgoEnLFxuXHRcdH1cblxuXHRcdHRoaXMud2F0Y2ggPSB7XG5cdFx0XHQn8J+OrCc6ICfmmKDnlLsnLFxuXHRcdFx0J/CfmIYnOiAn44GK56yR44GE44ON44K/Jyxcblx0XHRcdCfwn5GWJzogJ+acjScsXG5cdFx0XHQn8J+Tuic6ICfjg6Hjg4fjgqPjgqLjgqLjg7zjg4gnLFxuXHRcdH1cblxuXHRcdHRoaXMuZWF0ID0ge1xuXHRcdFx0J/CfjaMnOiAn5a+/5Y+4Jyxcblx0XHRcdCfwn42VJzogJ+ODlOOCticsXG5cdFx0XHQn8J+NnCc6ICfjg6njg7zjg6Hjg7MnLFxuXHRcdFx0J/CfjbAnOiAn44Kx44O844KtJyxcblx0XHR9XG5cdDwvc2NyaXB0PlxuPC9saWtlPlxuIiwiPGxpc3QgY2xhc3M9XCJwdXJlLWcgcHVyZS11LTEtMVwiPlxuXHQ8dWw+XG5cdFx0PGxpIGVhY2g9XCJ7aXRlbSBpbiBvcHRzLml0ZW1zfVwiPlxuXHRcdFx0PGgzPlxuXHRcdFx0XHQ8YSBocmVmPVwie2l0ZW0ubGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj57aXRlbS50aXRsZX08L2E+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlXCIgaWY9XCJ7aXRlbS5kYXRlLmxlbmd0aCAmbHQ7PSA3fVwiPntpdGVtLmRhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXJtXCIgaWY9XCJ7aXRlbS5kYXRlLmxlbmd0aCAmZ3Q7IDd9XCI+e2l0ZW0uZGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvaDM+XG5cdFx0XHQ8cCBjbGFzcz1cInN1YlwiIGVhY2g9XCJ7dCBpbiBpdGVtLnRleHRzfVwiPnt0fTwvcD5cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuXG5cdDxzdHlsZSB0eXBlPVwic2Nzc1wiPlxuXHRcdDpzY29wZSB7XG5cdFx0XHQ+IHVsIHtcblx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM0ZTlhZGI7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNzVyZW07XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQucmlnaHQge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRociB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMS41cHggc29saWQgZ3JheTtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxcmVtO1xuXHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMXJlbTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBncmF5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNzVyZW07XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNTU1O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMC4xcmVtIDAuM3JlbTtcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0XHRcdCYuZGF0ZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogNHJlbTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCYudGVybSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogOHJlbTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN1YiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2JkYmRiZDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMC43NXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0PC9zdHlsZT5cbjwvbGlzdD5cbiIsIjxtb3JlPlxuXHQ8YSBocmVmPVwie29wdHMubGlua31cIiB0aXRsZT1cIntvcHRzLnRpdGxlfVwiPlxuXHRcdDxzcGFuIGNsYXNzPVwibW9yZS1idXR0b25cIj57dGV4dH08L3NwYW4+XG5cdDwvYT5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0cGFkZGluZzogMCAxLjVyZW0gMS41cmVtIDEuNXJlbTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdD4gYSA+IHNwYW4ge1xuXHRcdFx0XHRwYWRkaW5nOiAwLjVyZW07XG5cdFx0XHRcdGJhY2tncm91bmQ6IGdyZXk7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3JlbTtcblx0XHRcdFx0bWluLXdpZHRoOiAxMHJlbTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2EzYTNhMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0PC9zdHlsZT5cblx0PHNjcmlwdD5cblx0XHR0aGlzLnRleHQgPSB0aGlzLm9wdHMudGV4dCAhPT0gdW5kZWZpbmVkID8gdGhpcy5vcHRzLnRleHQgOiAnbW9yZSdcblx0PC9zY3JpcHQ+XG48L21vcmU+XG4iLCI8cHJvamVjdHM+XG5cdDxkaXYgY2xhc3M9XCJwdXJlLXUtc20tMS0yIHB1cmUtdS1tZC0xLTMgcHVyZS11LTEtMVwiIGVhY2g9XCJ7dywgaSBpbiBwcm9qZWN0c31cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHRcdFx0PGEgaHJlZj1cIiNwcm9qZWN0cy97dy5uYW1lLnJlcGxhY2UoLyAvZywgYF9gKX1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cblx0XHRcdFx0XHQ8d2VicCBjbGFzcz1cInRodW1ibmFpbFwiIHNyYz1cInt3LmltZ31cIj48L3dlYnA+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxoND57dy5uYW1lfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e3cuc3VifTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxzdHlsZSB0eXBlPVwic2Nzc1wiPlxuXHRcdDpzY29wZSB7XG5cdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdD4gZGl2IHtcblx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcblx0XHRcdFx0PiAuY2FyZCB7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpLCAwIDAgMCAxcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDEwcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpLFxuXHRcdFx0XHRcdFx0XHQwIDAgNnB4IDRweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD4gYSB7XG5cdFx0XHRcdFx0XHQ+IC53cmFwcGVyIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1Ni4yNSU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbSAwIDA7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2RkZDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PiAuY29udGVudCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xuXHRcdFx0XHRcdFx0XHQmIGg0IHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjNyZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JiBwIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0PC9zdHlsZT5cblxuXHQ8c2NyaXB0PlxuXHRcdGltcG9ydCBwcm9qZWN0c0FycmF5IGZyb20gJy4uL2RhdGEnXG5cdFx0aW1wb3J0IHdlYnAgZnJvbSAnLi93ZWJwJ1xuXG5cdFx0dGhpcy5jYXRlZ29yeSA9ICdBbGwnXG5cdFx0dGhpcy5wcm9qZWN0cyA9XG5cdFx0XHR0aGlzLm9wdHMubGltaXQgPT09IHVuZGVmaW5lZCA/IHByb2plY3RzQXJyYXkgOiBwcm9qZWN0c0FycmF5LnNsaWNlKDAsIHRoaXMub3B0cy5saW1pdClcblxuXHRcdHRoaXMub24oJ3VwZGF0ZWQnLCAoKSA9PiB7XG5cdFx0XHQvLy0gY29uc29sZS5sb2codGhpcy5wcm9qZWN0cywgdGhpcy5vcHRzLmNhdGVnb3J5KVxuXG5cdFx0XHRpZiAodGhpcy5vcHRzLmNhdGVnb3J5ICYmIHRoaXMub3B0cy5jYXRlZ29yeSAhPT0gdGhpcy5jYXRlZ29yeSkge1xuXHRcdFx0XHR0aGlzLnVwZGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnk6IHRoaXMub3B0cy5jYXRlZ29yeSxcblx0XHRcdFx0XHRwcm9qZWN0czpcblx0XHRcdFx0XHRcdHRoaXMub3B0cy5jYXRlZ29yeSA9PT0gJ0FsbCdcblx0XHRcdFx0XHRcdFx0PyBwcm9qZWN0c0FycmF5XG5cdFx0XHRcdFx0XHRcdDogcHJvamVjdHNBcnJheS5maWx0ZXIoKHApID0+IHAuY2F0ZWdvcnkgPT09IHRoaXMub3B0cy5jYXRlZ29yeSksXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0PC9zY3JpcHQ+XG48L3Byb2plY3RzPlxuIiwiPHB1YmxpY2F0aW9ucz5cblx0PGxpc3QgaXRlbXM9XCJ7cHVibGljYXRpb25zfVwiPjwvbGlzdD5cblxuXHQ8c2NyaXB0PlxuXHRcdGltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCdcblxuXHRcdHRoaXMucHVibGljYXRpb25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRkYXRlOiAnMjAxNS0xMicsXG5cdFx0XHRcdHRpdGxlOiAnU2Vuc29yUGlwZScsXG5cdFx0XHRcdHRleHRzOiBbXG5cdFx0XHRcdFx0J+mzpeWxsSDjgonjgYTjgYssIOWuruS4iyDoirPmmI4uIFNlbnNvclBpcGU6IOOCueODnuODvOODiOODleOCqeODs+WBtOOBruODl+ODreOCsOODqeODn+ODs+OCsOOCkuS4gOWIh+ihjOOCj+OBquOBhOOCueODnuODvOODiOODleOCqeODs+mAo+aQuuODl+ODreOCsOODqeODn+ODs+OCsCwg56ysMjPlm57jgqTjg7Pjgr/jg6njgq/jg4bjgqPjg5bjgrfjgrnjg4bjg6Djgajjgr3jg5Xjg4jjgqbjgqfjgqLjgavplqLjgZnjgovjg6/jg7zjgq/jgrfjg6fjg4Pjg5foq5bmlofpm4YgKFdJU1MgMjAxNSksIDIwMTUuJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vcmVzZWFyY2gubWl5YXNoaXRhLmNvbS8yMDE1L0QxNjAvJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGU6ICcyMDE4LTAzJyxcblx0XHRcdFx0dGl0bGU6ICfjgqTjg7Pjgr/jg6njgq/jg4bjgqPjg5bjg5Hjg4PjgrHjg7zjgrgnLFxuXHRcdFx0XHR0ZXh0czogW1xuXHRcdFx0XHRcdCfliqDol6Tpgqbmi5MsIOiWhOe+veWkp+aouSwg6bOl5bGx44KJ44GE44GLLCDnq7nlhoXjgb7jgoYsIOmHjuW0jueOsumCoywg57Sw6LC3576O5pyILCDlrq7kuIvoirPmmI4uIOOCv+ODg+ODgeODkeODjeODq+OCkuaLoeW8teOBmeOCi+e0meijveOCpOODs+OCv+ODleOCp+ODvOOCueOCkuaQrei8ieOBl+OBn+OCpOODs+OCv+ODqeOCr+ODhuOCo+ODluODkeODg+OCseODvOOCuOOBrumWi+eZuiwg44Kk44Oz44K/44Op44Kv44K344On44OzMjAxOOirluaWh+mbhiwgcHAuODg5LTg5NCwgMjAxOC4nLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9yZXNlYXJjaC5taXlhc2hpdGEuY29tLzIwMTgvRDE5My8nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0ZTogJzIwMTgtMDknLFxuXHRcdFx0XHR0aXRsZTogJ+mAj+aYjuOCreODvOODnOODvOODiScsXG5cdFx0XHRcdHRleHRzOiBbXG5cdFx0XHRcdFx0J+mzpeWxseOCieOBhOOBiywg5a6u5LiL6Iqz5piOLiDjgrnjg57jg7zjg4jjgqbjgqnjg4Pjg4HlkJHjgZHjga7jgq3jg7zjg4jjg4Pjg5fjgYzpgI/mmI7jgarml6XmnKzoqp7jgYvjgarlhaXlipvjgqTjg7Pjgr/jg5Xjgqfjg7zjgrksIOesrDI25Zue44Kk44Oz44K/44Op44Kv44OG44Kj44OW44K344K544OG44Og44Go44K944OV44OI44Km44Kn44Ki44Gr6Zai44GZ44KL44Ov44O844Kv44K344On44OD44OX6KuW5paH6ZuGIChXSVNTIDIwMTgpLCAyMDE4LicsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxpbms6ICdodHRwczovL3Jlc2VhcmNoLm1peWFzaGl0YS5jb20vcGFwZXJzL0QyMDInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0ZTogJzIwMTktMDMnLFxuXHRcdFx0XHR0aXRsZTogJ0ludmlzaWJsZUZsaWNrJyxcblx0XHRcdFx0dGV4dHM6IFtcblx0XHRcdFx0XHQn6bOl5bGx44KJ44GE44GLLCDlrq7kuIvoirPmmI4uIEludmlzaWJsZUZsaWNrOiDlsI/lnovjgr/jg4Pjg4Hjgrnjgq/jg6rjg7zjg7Pnq6/mnKvjgavjgYrjgZHjgovjgq3jg7zjg4jjg4Pjg5fjgYzpgI/mmI7jgarml6XmnKzoqp7lhaXlipvjgq3jg7zjg5zjg7zjg4ksIOeglOeptuWgseWRiuODkuODpeODvOODnuODs+OCs+ODs+ODlOODpeODvOOCv+OCpOODs+OCv+ODqeOCr+OCt+ODp+ODsyhIQ0kpLCBWb2wuMjAxOS1IQ0ktMTgyLCBJc3N1ZS4yNywgcHAuIDEtOCwgMjAxOS4nLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9yZXNlYXJjaC5taXlhc2hpdGEuY29tL3BhcGVycy9EMjE4Jyxcblx0XHRcdH0sXG5cdFx0XVxuXHQ8L3NjcmlwdD5cbjwvcHVibGljYXRpb25zPlxuIiwiPHNraWxscz5cblx0PGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlNraWxsczwvaDI+XG5cdDxkaXYgY2xhc3M9XCJwdXJlLWdcIj5cblx0XHQ8dWwgY2xhc3M9XCJza2lsbC1ib3ggcHVyZS11LXNtLTEtMiBwdXJlLXUtbWQtMS0zIHB1cmUtdS0xLTFcIj5cblx0XHRcdDxsaSBlYWNoPVwieyBzIGluIHNraWxscyB9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJza2lsbC1pbmZvXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJuYW1lXCI+e3MubmFtZX08L3NwYW4+PHNwYW4gY2xhc3M9XCJzdWJcIj57cy5zdWJ9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXZlbFwiIHN0eWxlPVwid2lkdGg6e3MubGV2ZWx9O1wiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbGk+XG5cdFx0PC91bD5cblx0XHQ8dWwgY2xhc3M9XCJza2lsbC1ib3ggcHVyZS11LXNtLTEtMiBwdXJlLXUtbWQtMS0zIHB1cmUtdS0xLTFcIj5cblx0XHRcdDxsaSBlYWNoPVwieyBzIGluIHNraWxsczEgfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2tpbGwtaW5mb1wiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibmFtZVwiPntzLm5hbWV9PC9zcGFuPjxzcGFuIGNsYXNzPVwic3ViXCI+e3Muc3VifTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGV2ZWxcIiBzdHlsZT1cIndpZHRoOntzLmxldmVsfTtcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+XG5cdFx0PHVsIGNsYXNzPVwic2tpbGwtYm94IHB1cmUtdS1zbS0xLTIgcHVyZS11LW1kLTEtMyBwdXJlLXUtMS0xXCI+XG5cdFx0XHQ8bGkgZWFjaD1cInsgcyBpbiBza2lsbHMyIH1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNraWxsLWluZm9cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm5hbWVcIj57cy5uYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cInN1YlwiPntzLnN1Yn08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxldmVsXCIgc3R5bGU9XCJ3aWR0aDp7cy5sZXZlbH07XCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0PiBkaXYge1xuXHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xuXHRcdFx0XHQuc2tpbGwtYm94IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xuXHRcdFx0XHRcdD4gbGkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0LnNraWxsLWluZm8ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5uYW1lIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjNlbTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuc3ViIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjg1cmVtO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2JkYmRiZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5iYXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNGI0YjRiO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxcmVtO1xuXHRcdFx0XHRcdFx0XHQubGV2ZWwge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMC43cmVtO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFyZW07XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2VhZWFlYTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0PC9zdHlsZT5cblxuXHQ8c2NyaXB0PlxuXHRcdHRoaXMuc2tpbGxzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQW5kcm9pZCcsXG5cdFx0XHRcdHN1YjogJ1J4IE9raHR0cCBSZXRyb2ZpdCcsXG5cdFx0XHRcdGxldmVsOiAnNzAlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdLb3RsaW4nLFxuXHRcdFx0XHRzdWI6ICdBbmtvIEt0b3InLFxuXHRcdFx0XHRsZXZlbDogJzgwJScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnSmF2YScsXG5cdFx0XHRcdHN1YjogJycsXG5cdFx0XHRcdGxldmVsOiAnODUlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdQcm9jZXNzaW5nJyxcblx0XHRcdFx0c3ViOiAnJyxcblx0XHRcdFx0bGV2ZWw6ICc5MCUnLFxuXHRcdFx0fSxcblx0XHRdXG5cblx0XHR0aGlzLnNraWxsczEgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdIVE1MJyxcblx0XHRcdFx0c3ViOiAnUHVnIE1hcmtkb3duJyxcblx0XHRcdFx0bGV2ZWw6ICc5MCUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ0NTUycsXG5cdFx0XHRcdHN1YjogJ1Nhc3MgUG9zdENTUyBDU1MtTW9kdWxlcycsXG5cdFx0XHRcdGxldmVsOiAnODUlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdKYXZhU2NyaXB0Jyxcblx0XHRcdFx0c3ViOiAnUmVhY3QgVnVlIE5vZGUnLFxuXHRcdFx0XHRsZXZlbDogJzkwJScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnUEhQJyxcblx0XHRcdFx0c3ViOiAnJyxcblx0XHRcdFx0bGV2ZWw6ICc0MCUnLFxuXHRcdFx0fSxcblx0XHRdXG5cblx0XHR0aGlzLnNraWxsczIgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdHaXQnLFxuXHRcdFx0XHRzdWI6ICcnLFxuXHRcdFx0XHRsZXZlbDogJzYwJScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnSWxsdXN0cmF0b3InLFxuXHRcdFx0XHRzdWI6ICcnLFxuXHRcdFx0XHRsZXZlbDogJzgwJScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQ2Fjb28nLFxuXHRcdFx0XHRzdWI6ICcnLFxuXHRcdFx0XHRsZXZlbDogJzQwJScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnUHJvdHQnLFxuXHRcdFx0XHRzdWI6ICcnLFxuXHRcdFx0XHRsZXZlbDogJzMwJScsXG5cdFx0XHR9LFxuXHRcdF1cblx0PC9zY3JpcHQ+XG48L3NraWxscz5cbiIsIjxzb2NpYWwgaWQ9XCJzb2NpYWxcIj5cblx0PHVsPlxuXHRcdDxsaT5cblx0XHRcdDxhXG5cdFx0XHRcdGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcmFpa2EudG9yaXlhbWFcIlxuXHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHR0aXRsZT1cIkZhY2Vib29rXCJcblx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLWYgZmEtMnhcIj48L2k+XG5cdFx0XHQ8L2E+XG5cdFx0PC9saT5cblx0XHQ8bGk+XG5cdFx0XHQ8YVxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9wdmNyZXNpbi9cIlxuXHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHR0aXRsZT1cIlR3aXR0ZXJcIlxuXHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdD5cblx0XHRcdFx0PGkgY2xhc3M9XCJmYWIgZmEtdHdpdHRlciBmYS0yeFwiPjwvaT5cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXHRcdDxsaT5cblx0XHRcdDxhXG5cdFx0XHRcdGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHZjcmVzaW4vXCJcblx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0dGl0bGU9XCJHaXRIdWJcIlxuXHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdD5cblx0XHRcdFx0PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPlxuXHRcdFx0PC9hPlxuXHRcdDwvbGk+XG5cdFx0PGxpPlxuXHRcdFx0PGFcblx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHZjcmVzaW4vXCJcblx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0dGl0bGU9XCJJbnN0YWdyYW1cIlxuXHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdD5cblx0XHRcdFx0PGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtIGZhLTJ4XCI+PC9pPlxuXHRcdFx0PC9hPlxuXHRcdDwvbGk+XG5cdFx0PGxpPlxuXHRcdFx0PGFcblx0XHRcdFx0aHJlZj1cImh0dHBzOi8vcHZjcmVzaW4uaGF0ZW5hYmxvZy5jb20vXCJcblx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0dGl0bGU9XCJIYXRlbmEgQmxvZ1wiXG5cdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaWNvbi1ib3ggaGF0ZW5hXCI+PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9saT5cblx0XHQ8bGk+XG5cdFx0XHQ8YVxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cud2FudGVkbHkuY29tL3VzZXJzLzE4MjIwNjE5XCJcblx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0dGl0bGU9XCJXYW50ZWRseVwiXG5cdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaWNvbi1ib3ggd2FudGVkbHlcIj48L2Rpdj5cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuXG5cdDxzdHlsZSB0eXBlPVwic2Nzc1wiPlxuXHRcdDpzY29wZSB7XG5cdFx0XHQ+IHVsIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6IDFyZW0gMDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNTI1MjUyO1xuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHN1Yjtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiAzcmVtO1xuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pY29uLWJveCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDJyZW07XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMnJlbTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzUyNTI1Mjtcblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ji5oYXRlbmEge1xuXHRcdFx0XHRcdFx0XHRcdG1hc2staW1hZ2U6IHVybCguL3Jlc291cmNlcy9pY29uLWhhdGVuYS5zdmcpO1xuXHRcdFx0XHRcdFx0XHRcdC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4vcmVzb3VyY2VzL2ljb24taGF0ZW5hLnN2Zyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ji53YW50ZWRseSB7XG5cdFx0XHRcdFx0XHRcdFx0bWFzay1pbWFnZTogdXJsKC4vcmVzb3VyY2VzL2ljb24td2FudGVkbHkuc3ZnKTtcblx0XHRcdFx0XHRcdFx0XHQtd2Via2l0LW1hc2staW1hZ2U6IHVybCguL3Jlc291cmNlcy9pY29uLXdhbnRlZGx5LnN2Zyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdDwvc3R5bGU+XG48L3NvY2lhbD5cbiIsIjx0YWdzPlxuXHQ8c3BhbiBlYWNoPVwie3QgaW4gb3B0cy50YWdzfVwiPnt0fTwvc3Bhbj5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdG1hcmdpbjogMXJlbSAwO1xuXHRcdFx0bWFyZ2luOiAwLjc1cmVtIDA7XG5cdFx0XHQ+IHNwYW4ge1xuXHRcdFx0XHRtYXJnaW46IDAgMC41cmVtIDAuNXJlbSAwO1xuXHRcdFx0XHRwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwLjJyZW07XG5cdFx0XHRcdGJhY2tncm91bmQ6ICM1NTU7XG5cdFx0XHRcdGNvbG9yOiAjZWVlO1xuXHRcdFx0fVxuXHRcdH1cblx0PC9zdHlsZT5cbjwvdGFncz5cbiIsIjx3ZWJwPlxuXHQ8cGljdHVyZT5cblx0XHQ8c291cmNlIHNyY3NldD1cInJlc291cmNlcy97b3B0cy5zcmN8fG9wdHMucmlvdFNyY30ud2VicFwiIHR5cGU9XCJpbWFnZS93ZWJwXCIgLz5cblx0XHQ8c291cmNlIHNyY3NldD1cInJlc291cmNlcy97b3B0cy5zcmN8fG9wdHMucmlvdFNyY30ucG5nXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XG5cdFx0PGltZyBzcmM9XCJyZXNvdXJjZXMve29wdHMuc3JjfHxvcHRzLnJpb3RTcmN9LndlYnBcIiAvPlxuXHQ8L3BpY3R1cmU+XG5cblx0PHN0eWxlIHR5cGU9XCJzY3NzXCI+XG5cdFx0OnNjb3BlIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0PiBwaWN0dXJlIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0PiBpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHQ8L3N0eWxlPlxuXG5cdDxzY3JpcHQ+XG5cdFx0dGhpcy5vbignbW91bnRlZCcsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMub3B0cylcblx0XHR9KVxuXHQ8L3NjcmlwdD5cbjwvd2VicD5cbiIsImNvbnN0IHByb2plY3RzQXJyYXkgPSBbXG4gIHtcbiAgICBuYW1lOiAnU2Vuc29yUGlwZScsXG4gICAgc3ViOiAnUEPjgajjgrnjg57jg5vjgpLpgKPmkLrjgZXjgZvjgovjg5fjg63jgrDjg6njg5/jg7PjgrDjgpLmlK/mj7TjgZnjgovjgrnjg57jg5vjgqLjg5fjg6onLFxuICAgIGltZzogJ3Byb2plY3QtU2Vuc29yUGlwZS0xNi05JyxcbiAgICBjYXRlZ29yeTogJ0FuZHJvaWQnLFxuICAgIHZpZGVvOiAnZ3dLeVBxdDJrZDgnLFxuICAgIHRleHQ6XG4gICAgICAn44K544Oe44O844OI44OV44Kp44Oz44Gu44K744Oz44K15oOF5aCx44GoUEPjgpLpgKPmkLrjgZXjgZvjgZ/jg5fjg63jgrDjg6njg5/jg7PjgrDjgpLlrp/nj77jgZnjgovjgavjga/lj4zmlrnjgafjga7jgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PplovnmbrjgYzlv4XopoHjgajjgarjgorjgIHoo73kvZzmmYLplpPjgYzjgYvjgYvjgovkuIrjgavjg4/jg7zjg4njg6vjgYzpq5jjgYTjgoLjga7jgafjgYLjgaPjgZ/jgILjgZPjgozjgpLop6PmsbrjgZnjgovjgZ/jgoHjgIHjgrnjg57jg7zjg4jjg5Xjgqnjg7Pjga7lkITnqK7jgrvjg7PjgrXmg4XloLHjgpJQQ+OBq+mAgeS/oeOBl+e2muOBkeOAgVBD5YG044GL44KJ44KC44K544Oe44O844OI44OV44Kp44Oz44Gr44OQ44Kk44OW44Os44O844K344On44Oz44KE44Km44Kn44OW44K144Kk44OI6KGo56S644Gq44Gp44Gu5omA5a6a44Gu5YuV5L2c44KS44GV44Gb44KL5LqL44GM44Gn44GN44KL44Ki44OX44Oq44Kx44O844K344On44Oz44KS6ZaL55m644GX44Gf44CC44GT44KM44Gr44KI44KK44CB44OX44Ot44Kw44Op44Oe44Gv44K544Oe44O844OI44OV44Kp44Oz5YG044Gu44OX44Ot44Kw44Op44Of44Oz44Kw44KS5LiA5YiH6KGM44KP44Ga44Gr44CBUEPjgafjga7jgrvjg7PjgrXmg4XloLHjgpLnlKjjgYTjgZ/jg5fjg63jgrDjg6njg5/jg7PjgrDjgpLooYzjgYbjgZPjgajjgYzjgafjgY3jgovjgIJXSVNTMjAxNeOBp+eZuuihqOOAgicsXG4gICAgaW1wbGVtZW50OlxuICAgICAgJ0FuZHJvaWTjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PjgajjgZfjgablrp/oo4XjgIJQQ+OBqOOCueODnuODvOODiOODleOCqeODs+OCkuWQjOOBmFdpLUZp44Gr5o6l57aa5b6M44CBVURQ6YCa5L+h44KS56K656uL44GZ44KL44GT44Go44Gr44KI44Gj44Gm44OH44O844K/44Gu6YCB5Y+X5L+h44KS6KGM44GG44CC44Ki44OX44Oq44Kx44O844K344On44Oz44Gv44OQ44OD44Kv44Kw44Op44Km44Oz44OJ44Gn5YuV5L2c44GZ44KL44CCUEPlgbTjgafliKnnlKjjgZnjgovjgajjgY3jga/lr77lv5zjgZnjgotQcm9jZXNzaW5n55So44Gu44Op44Kk44OW44Op44Oq44KS5Yip55So5Y+v6IO944CCJyxcbiAgICBrZXl3b3JkczogWydBbmRyb2lkJywgJ1Byb2dyYW1taW5nIEV4cGVyaWVuY2UoUFgpJywgJ1VEUCcsICdjb29wZXJhdGlvbiBwcm9ncmFtbWluZycsICdzZW5zb3InXSxcbiAgICBsaW5rczoge1xuICAgICAg44OX44Ot44K444Kn44Kv44OI44Oa44O844K4OiAnaHR0cHM6Ly9yZXNlYXJjaC5taXlhc2hpdGEuY29tLzIwMTUvRDE2MC8nLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWlkZGxlRHJpdmUnLFxuICAgIHN1YjogJ0JsdWV0b290aOmAmuS/oeOBq+OCiOOCi+OCouODieODm+ODg+OCr+Wei+ODieOCreODpeODoeODs+ODiOWFseWQjOe3qOmbhuOCouODl+ODqicsXG4gICAgaW1nOiAncHJvamVjdC1NaWRkbGVEcml2ZS0xNi05JyxcbiAgICBjYXRlZ29yeTogJ1dlYicsXG4gICAgdmlkZW86ICd2UEFYcmxLR2VDOCcsXG4gICAgdGV4dDpcbiAgICAgICfkvJrorbDjgpLooYzjgYbpmpvjgavjgZ3jga7lhoXlrrnjgpLopIfmlbDkurrjgafjgqbjgqfjg5bkuIrjga7jg4njgq3jg6Xjg6Hjg7Pjg4jjgavmm7jjgY3lh7rjgZnjgZPjgajjgafoqJjpjLLjgpLjgajjgaPjgZ/jgorjgIHorbDpoYzjga7mlbTnkIbjgpLjgZfjgZ/jgorjgZnjgovjgZPjgajjgYzlpJrjgY/jgYLjgovjgILjgZfjgYvjgZfjgIFXaS1GaeOBrumbu+azouOBjOOBquOBhOWgtOaJgOOBp+OBr+OBk+OCjOOCieOBruOCiOOBhuOBquOCpuOCp+ODluOCouODl+ODquOCseODvOOCt+ODp+ODs+OBr+WIqeeUqOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBquOBhOOAguOBneOBk+OBp+OAgVdpLUZp44Gq44Gp44Gu44ON44OD44OI44Ov44O844Kv55Kw5aKD44GM5Yip55So44Gn44GN44Gq44GE54q25rOB44Gn44KC44CB44Oq44Ki44Or44K/44Kk44Og44Gr5YWx5ZCM57eo6ZuG44KS6KGM44GG44GT44Go44GM44Gn44GN44KL44Ki44OX44Oq44Kx44O844K344On44Oz44KS6ZaL55m644GX44Gf44CC44Ov44Kk44Ok44Os44K544Ki44OJ44Ob44OD44Kv44ON44OD44OI44Ov44O844Kv44KS5qeL56+J44GX44CB44ON44OD44OI44Ov44O844Kv5YaF44GuUEPjgajjg4njgq3jg6Xjg6Hjg7Pjg4jjga7lhbHlkIznt6jpm4bjgpLooYzjgYbjgZPjgajjgYzlh7rmnaXjgovjgIInLFxuICAgIGltcGxlbWVudDpcbiAgICAgICfjg4Hjg7zjg6DjgafliLbkvZzjgILjg5Xjg63jg7Pjg4jjgqjjg7Pjg4njgahXZWLjgrXjg7zjg5DjgpLmi4XlvZPjgZfjgZ/jgILli5XkvZzjg5fjg6njg4Pjg4jjg5Xjgqnjg7zjg6Djga9XaW5kb3dzUEPjgIJCbHVldG9vdGjjgavjgojjgaPjgaZQQ+WQjOWjq+OCkuODmuOCouODquODs+OCsOOBl+OAgeWPjOaWueWQkeOBruODh+ODvOOCv+mAmuS/oeOCkuihjOOBhuOAguWQhFBD5YaF44GnV2Vi44K144O844OQ44GM6LW35YuV44GX44Gm44GE44KL44Gf44KB44CB6YCa5bi444Gu44Km44Kn44OW44Ki44OX44Oq44Kx44O844K344On44Oz44Go5ZCM44GY44KI44GG44Gr44OW44Op44Km44K244Gn44Ki44Kv44K744K544GZ44KL44GT44Go44GM5Ye65p2l44KL44CCQmx1ZXRvb3Ro6YCa5L+h44GvQyPjgad3aW4gQVBJ44KS5Yip55So44GZ44KL44GT44Go44Gn5a6f54++44GX44CBV2Vi44K144O844OQ44GvTm9kZS5qc+OCkueUqOOBhOOBpuWun+ijheOBl+OBpuOBhOOCi+OAgicsXG4gICAga2V5d29yZHM6IFsnd2luZG93cycsICdCbHVldG9vdGgnLCAnY28tYXV0aG9yaW5nJywgJ0NTQ1cnLCAnd2luIEFQSScsICdBZC1ob2MgbmV0d29yayddLFxuICAgIGxpbmtzOiB7XG4gICAgICDlj5fos57jg5rjg7zjgrg6ICdodHRwczovL3d3dy5wcmVmLm5hZ2Fuby5sZy5qcC9qb2hvL2FwcC1jb250ZXN0L2FwcC1jb250ZXN0MCcsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbnZpc2libGVGbGljaycsXG4gICAgc3ViOiAn5bCP5Z6L44K/44OD44OB44K544Kv44Oq44O844Oz56uv5pyr44Gr44GK44GR44KL44Kt44O844OI44OD44OX44GM6YCP5piO44Gq5pel5pys6Kqe5YWl5Yqb44Kt44O844Oc44O844OJJyxcbiAgICBpbWc6ICdwcm9qZWN0LUludmlzaWJsZUZsaWNrLTE2LTknLFxuICAgIGNhdGVnb3J5OiAnQW5kcm9pZCcsXG4gICAgdGV4dDpcbiAgICAgICfjgrnjg57jg7zjg4jjgqbjgqnjg4Pjg4Hjga7jgojjgYbjgarlsI/lnovjgr/jg4Pjg4Hjgrnjgq/jg6rjg7zjg7Pnq6/mnKvlkJHjgZHjga7ml6XmnKzoqp7lhaXlipvjgq3jg7zjg5zjg7zjg4njga/jgIHjgq3jg7zjgoTjg4bjgq3jgrnjg4jjgqjjg6rjgqLjgYzni63jgYTjgZ/jgoHjgIHjg5/jgrnjgr/jg4Pjg5fjga7poLvnmbrjgavjgojjgovmloflrZflhaXlipvpgJ/luqbjga7kvY7kuIvjgpLmi5vjgYTjgabjgYTjgovjgILjgZ3jgZPjgafjgIHjg4bjg7Pjgq3jg7zpg6jliIbjga7jgq3jg7zjg4jjg4Pjg5fjgpLpgI/mmI7jgavjgZfjgIHog4zmma/jgavjg4bjgq3jgrnjg4jjgqjjg6rjgqLjgpLooajnpLrjgZnjgovmiYvms5XjgpLmj5DmoYjjgILjg5Xjg6rjg4Pjgq/jgq3jg7zjg5zjg7zjg4njgajjg4bjgq3jgrnjg4jjgqjjg6rjgqLjga4y5bGk44Gu44Os44Kk44Ok44O85qeL6YCg44Gu5bCO5YWl44Gr44KI44KK44CB44Kt44O844Go44OG44Kt44K544OI44Ko44Oq44Ki44KS5ZCM5pmC44Gr5ouh5aSn44GZ44KL44GT44Go44GM44Gn44GN44KL44CC5pei5a2Y5omL5rOV44Go44Gu5q+U6LyD44GX44Gm44CB5paH5a2X5YWl5Yqb6YCf5bqm44O744Ko44Op44O8546H44Go44KC44Gr5YSq44KM44Gm44GE44KL44GT44Go44GM56S644GV44KM44Gf44CC56ysMTgy5ZueSENJ56CU56m25Lya44Gn55m66KGo44GX44CB5a2m55Sf5aWo5Yqx6LOe44KS5Y+X6LOe44CC5L+u5aOr6KuW5paH44CCJyxcbiAgICBpbXBsZW1lbnQ6XG4gICAgICAn5a6f6aiT55So44K344K544OG44Og44Go44GX44Gm44CBQW5kcm9pZOOCouODl+ODquOCseODvOOCt+ODp+ODs+OCkuWun+ijheOAgkdvb2dsZeaXpeacrOiqnuWFpeWKm0FQSeOCkuS9v+eUqOOBl+OBpuOAgea8ouWtl+OBquOBqeOBruaWh+Wtl+WkieaPm+OCkuihjOOBo+OBpuOBhOOCi+OAgicsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdBbmRyb2lkJyxcbiAgICAgICdIdW1hbiBDb21wdXRlciBJbnRlcmFjdGlvbicsXG4gICAgICAnc21hcnR3YXRjaCcsXG4gICAgICAndGV4dCBpbnB1dCcsXG4gICAgICAnZmxpY2sta2V5Ym9hcmQnLFxuICAgIF0sXG4gICAgbGlua3M6IHtcbiAgICAgIOODl+ODreOCuOOCp+OCr+ODiOODmuODvOOCuDogJ2h0dHBzOi8vcmVzZWFyY2gubWl5YXNoaXRhLmNvbS9wYXBlcnMvRDIxOCcsXG4gICAgICDlj5fos57jg5rjg7zjgrg6ICdodHRwOi8vd3d3LnNpZ2hjaS5qcC9jb250ZW50cy9wYWdlL25ld3MnLFxuICAgICAgR29vZ2xl5pel5pys6Kqe5YWl5YqbQVBJOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmpwL2ltZS9jZ2lhcGkuaHRtbCcsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJY2hpbW9uaXR0bycsXG4gICAgc3ViOiAn44OT44OH44Kq44OB44Oj44OD44OI44KS44GX44Gq44GM44KJ44Kv44Kk44K655Wq57WE5b2i5byP44Gn5Zue562U44GZ44KL5LiA5ZWP5LiA562U5a2m57+S5pSv5o+044K144O844OT44K5JyxcbiAgICBpbWc6ICdwcm9qZWN0LUljaGltb25pdHRvLTE2LTknLFxuICAgIGNhdGVnb3J5OiAnV2ViJyxcbiAgICB0ZXh0OlxuICAgICAgJ+iLseWNmOiqnuOCkuefpeOBo+OBpuOBhOOBpuOCguOAgeato+eiuuOBqueZuumfs+OBjOOBp+OBjeOBquOBkeOCjOOBsOebuOaJi+OBq+OBr+S8neOCj+OCieOBquOBhOOAguOBneOBk+OBp+OAgVdlYlJUQ+OCkuWIqeeUqOOBl+OBn+S4gOWVj+S4gOetlOW9ouW8j+OBruWtpue/kuaUr+aPtOOCteODvOODk+OCueOCkuWItuS9nOOBl+OBn+OAguOCq+ODoeODqeaYoOWDj+OBqOODnOOCpOOCueODgeODo+ODg+ODiOOBq+OCiOOBo+OBpumbouOCjOOBn+WgtOaJgOOBp+OCguS4gOe3kuOBq+WtpuOBtuOBk+OBqOOBjOWHuuadpeOCi+OAgueUu+mdouOBq+ihqOekuuOBleOCjOOBn+WNmOiqnuOBruiLseiqnuOCkuOBhOOBoeaXqeOBj+OAgeOBi+OBpOato+eiuuOBq+eZuumfs+OBp+OBjeOBn+OCguOBruOBjOODneOCpOODs+ODiOOCkueNsuW+l+OBmeOCi+OAgkNsb3VkIG4g44Ki44OX44Oq44Kx44O844K344On44Oz44Kz44Oz44OG44K544OI44GnV2ViUlRD6LOe44KS5Y+X6LOe44CCJyxcbiAgICBpbXBsZW1lbnQ6XG4gICAgICAn44OB44O844Og44Gn5Yi25L2c44CC44OV44Ot44Oz44OI44Ko44Oz44OJ44KS5ouF5b2T44CCR29vZ2xlIFNwZWVjaCBBUEnjgpLkvb/jgYbjgZPjgajjgafjgIHjgZfjgaPjgYvjgorjgajoqo3orZjjgZXjgozjgovjgojjgYbjgarmraPnorrjgarnmbrpn7Pjgafjga7lm57nrZTjga7jgb/mraPop6PjgajjgZnjgovngrnjgYzjg53jgqTjg7Pjg4jjgILnj77lnKjmjqXntprjgZfjgabjgYTjgovjg6bjg7zjgrbjgarjganjga7nrqHnkIbjgatTa3l3YXnjga5BUEnjgpLliKnnlKjjgIInLFxuICAgIGtleXdvcmRzOiBbJ1dlYiBSVEMnLCAncXVpeicsICd2aWRlbyBjaGF0JywgJ0dvb2dsZSBTcGVlY2ggQVBJJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIOWPl+iznuODmuODvOOCuDogJ2h0dHA6Ly93d3cuY2xvdWRuLXNlcnZpY2UuY29tL2NhbTA0LWRldmVuL2RlY29uL3RvaHlvLycsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHZW9NZWxvZHknLFxuICAgIHN1YjogJ+eSsOWig+mfs+OCkumMsumfs+OBl+OBpuODjeODg+ODiOS4iuOBq+mbhue0hOOBmeOCi+OCteOCpuODs+ODieOCueOCseODvOODl1NOUycsXG4gICAgaW1nOiAncHJvamVjdC1HZW9NZWxvZHktMTYtOScsXG4gICAgY2F0ZWdvcnk6ICdBbmRyb2lkJyxcbiAgICB0ZXh0OlxuICAgICAgJ+S9jee9ruaDheWgseOBqOeSsOWig+mfs+OCkue1hOOBv+WQiOOCj+OBm+OBpueZu+mMsuOBmeOCi+OCteODvOODk+OCueOAgumiqOaZr+OBq+OBr+mfs+OBjOasoOOBi+OBm+OBquOBhOOBqOOBhOOBhuiAg+OBiOaWueOAgeOCteOCpuODs+ODieOCueOCseODvOODl+OCkuOCteODvOODk+OCueOBqOOBl+OBpue1hOOBv+i+vOOCk+OBoOS9nOWTgeOAguODpuODvOOCtuOBjOOCueODnuODvOODiOODleOCqeODs+OBp+eSsOWig+mfs+OCkumMsumfs+OBmeOCi+OBqOOAgemfs+WjsOOCkkdQU+OChOaXpeS7mOOBruaDheWgseOBqOWFseOBq+OCteODvOODkOOBq+OCouODg+ODl+ODreODvOODieOBl+OAgeODnuODg+ODl+S4iuOBp+mWsuimp+OBmeOCi+OBk+OBqOOBjOWHuuadpeOCi+OAgk9wZW4gSGFjayBVIDIwMTTnmbrooajkvZzlk4HjgIInLFxuICAgIGltcGxlbWVudDpcbiAgICAgICfjg4Hjg7zjg6DjgafliLbkvZzjgILjgqLjg5fjg6rjga7lpKfpg6jliIbjgpLmi4XlvZPjgZfjgZ/jgIJBbmRyb2lk44Ki44OX44Oq44Kx44O844K344On44Oz44Go44GX44Gm5a6f6KOF44CCWWFob28gTWFwIEFQSeOCkuS9v+eUqOOBl+OBpuOAgemMsumfs+OBleOCjOOBn+mfs+WjsOOBruODnuODg+ODlOODs+OCsOOCkuihjOOBo+OBpuOBhOOCi+OAgicsXG4gICAga2V5d29yZHM6IFsnQW5kcm9pZCcsICdzb3VuZHNjYXBlJywgJ21hcCcsICdyZWNvcmQnLCAnbWljcm9waG9uZScsICdHUFMnXSxcbiAgICAvLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9QWVhzZXRHSTdHOD9yZWw9MCZhbXA7c3RhcnQ9MzIxN1xuICAgIC8vIGh0dHBzOi8vaGFja3UueWFob28uY28uanAvb3BlbjIwMTQvXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV3Jpc3RTbGlkZScsXG4gICAgc3ViOiAn44Kk44Oh44O844K444K744Oz44K144KS55So44GE44Gf5omL6aaW44KS5ruR44KJ44Gb44KL44K544Oe44O844OI44Km44Kp44OD44OB44Gu54mH5omL5pON5L2cJyxcbiAgICBpbWc6ICdwcm9qZWN0LVdyaXN0U2xpZGUtMTYtOScsXG4gICAgY2F0ZWdvcnk6ICdBbmRyb2lkJyxcbiAgICB2aWRlbzogJ3c5ZUhES2J5OHJvJyxcbiAgICB0ZXh0OlxuICAgICAgJ+OCueODnuODvOODiOOCpuOCqeODg+ODgeOBq+OBiuOBhOOBpuOAgeOCueODr+OCpOODl+OBruOCiOOBhuOBqumAo+e2mueahOOBquWFpeWKm+OCkuihjOOBhuOBq+OBr+OAgeijheedgOOBl+OBpuOBhOOCi+aJi+OBqOWPjeWvvuOBruaJi+OBp+aTjeS9nOOBmeOCi+W/heimgeOBjOOBguOCi+OAguOBneOBk+OBp+OAgeaJi+mmluOCkuacuuOChOWjgeOAgeiHqui6q+OBrui6q+S9k+OBquOBqeOBruS4iuOBp+a7keOCieOBm+OCi+OBk+OBqOOBq+OCiOOBo+OBpuOAgeOCueODnuODvOODiOOCpuOCqeODg+ODgeOCkueJh+aJi+OBp+aTjeS9nOOBmeOCi+aJi+azleOCkuaPkOahiOOAguODkOODs+ODieS4i+mDqOOBq+Wfi+OCgei+vOOBvuOCjOOBn+OCpOODoeODvOOCuOOCu+ODs+OCteOBq+OCiOOBo+OBpuOAgeeJqeS9k+OBq+aOpeWcsOOBl+OBn+eKtuaFi+OBp+OBruaJi+mmluOBruenu+WLlemHj+OCkuWPluW+l+OBl+OAgeeJh+aJi+OBp+OBrjLmrKHlhYPmlrnlkJHjga7lhaXlipvjgpLlj6/og73jgavjgZfjgZ/jgIInLFxuICAgIGltcGxlbWVudDpcbiAgICAgICdBbmRyb2lk44CBV2VhciBPU+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBqOOBl+OBpuWun+ijheOAguOCueODnuODvOODiOODleOCqeODs+OBqOi2heWwj+Wei+ODr+OCpOODpOODrOOCueODnuOCpuOCueOCkuODmuOCouODquODs+OCsOOBl+OAgeiHquerr+acq+OBq0FEQuOCs+ODnuODs+ODieOCkueZuuihjOOBmeOCi+OBk+OBqOOBq+OCiOOBo+OBpuODnuOCpuOCueOCpOODmeODs+ODiOOCkuebo+imluOAguOCueODnuODvOODiOODleOCqeODs+OBqOODmuOCouODquODs+OCsOOBleOCjOOBn+OCueODnuODvOODiOOCpuOCqeODg+ODgeOBq+enu+WLlemHj+OCkumAgeS/oeOBl+OBpuOCouODl+ODquOCseODvOOCt+ODp+ODs+OCkuaTjeS9nOOBmeOCi+OAgicsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICdBbmRyb2lkJyxcbiAgICAgICdXZWFyIE9TJyxcbiAgICAgICdBbmRyb2lkIERlYnVnIEJyaWRnZScsXG4gICAgICAnSHVtYW4gQ29tcHV0ZXIgSW50ZXJhY3Rpb24nLFxuICAgICAgJ3NtYXJ0d2F0Y2gnLFxuICAgICAgJ2ltYWdlIHNlbnNvcicsXG4gICAgICAnbW91c2UnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU291bXVTU01MJyxcbiAgICBzdWI6ICfoppbopprpmpzlrrPogIXjga7jgZ/jgoHjga7mlrDjgZfjgYTpm7vlrZDmm7jnsY3lvaLlvI/jgavlr77lv5zjgZfjgZ/jgq/jg6njgqbjg4nnt6jpm4bjgrfjgrnjg4bjg6AnLFxuICAgIGltZzogJ3Byb2plY3QtU291bXVTU01MLTE2LTknLFxuICAgIGNhdGVnb3J5OiAnV2ViJyxcbiAgICB0ZXh0OlxuICAgICAgJ+mbu+WtkOabuOexjeOCkuiqreOCgOmam+OBquOBqeOBq+eUqOOBhOOCieOCjOOCi+OAgU9T57WE44G/6L6844G/44Gu6Kqt44G/5LiK44GS5qmf6IO944Gr44Gv44Kk44Oz44OI44ON44O844K344On44Oz44Gu6ZaT6YGV44GE44GM5pyq44Gg44Gr5aSa44GP5q6L44Gj44Gm44GE44KL44CC44Gd44Gu44Gf44KB54++5Zyo44Gv44CB6Z+z5aOw5ZCI5oiQ44Oe44O844Kv44Ki44OD44OX6KiA6KqeU1NNTOOCkueUqOOBhOOBpuOCpOODs+ODiOODjeODvOOCt+ODp+ODs+OCkuWHuueJiOekvuOBruS6uumWk+OBjOe3qOmbhuOBl+OAgeWQiOaIkOOBleOCjOOBn+mfs+WjsOOCkumbu+WtkOabuOexjeOBq+WQjOWwgeOBmeOCi+OBqOOBhOOBhuOChOOCiuaWueOBjOS4gOiIrOeahOOBp+OBguOCi+OAguOBneOBk+OBp+OAgembu+WtkOabuOexjeOBq+mfs+WjsOODleOCoeOCpOODq+OBp+OBr+OBquOBj+OCpOODs+ODiOODjeODvOOCt+ODp+ODs+OCkuiomOOBl+OBn+ODh+ODvOOCv+OCkuWQjOWwgeOBmeOCi+aWsOOBl+OBhOmbu+WtkOabuOexjeODleOCqeODvOODnuODg+ODiOOBruaPkOahiOOCkuihjOOBo+OBn+OAguWQjOaZguOBq+OAgeWHuueJiOekvuOBruS6uumWk+OBjOOCpOODs+ODiOODjeODvOOCt+ODp+ODs+OCkue3qOmbhuOBl+OAgemfs+WjsOOCkuOBneOBrumDveW6pueiuuiqjeOBl+OBquOBjOOCieOCr+ODqeOCpuODieS4iuOBp+e3qOmbhuOBmeOCi+OCt+OCueODhuODoOOCkuani+evieOBl+OBn+OAguWun+iovOWun+mok+OBq+OCiOOCiuWKueaenOeahOOBquODhOODvOODq+OBqOiqjeOCgeOCieOCjOOAgVczQ+OBq+OCiOOBo+OBpumbu+WtkOabuOexjeOBruW9ouW8j0VQVULjga7mrKHmnJ/ku5Xmp5jjgavnm5vjgorovrzjgb7jgozjgZ/jgILnt4/li5nnnIHjgajjgqLjg6vjg5DjgqTjg4jlhYjjga7mg7PpmobnpL7jgajjga7lhbHlkIzjg5fjg63jgrjjgqfjgq/jg4jjgIInLFxuICAgIGltcGxlbWVudDpcbiAgICAgICfjg4Hjg7zjg6DjgafliLbkvZzjgILjg5Xjg63jg7Pjg4jjgqjjg7Pjg4njgpLmi4XlvZPjgZfjgZ/jgILjgrXjg7zjg5Djga9QSFDjgaflrp/oo4XjgILkuLvjgarmqZ/og73jga/ku6XkuIvjga7pgJrjgorjgILpm7vlrZDmm7jnsY3jga7jgqLjg4Pjg5fjg63jg7zjg4njgajliJ3mnJ/jga7nmbrpn7PoqJjlj7fjga7oh6rli5XnlJ/miJDjgIHnt6jpm4bjgZfjgZ/nmbrpn7PoqJjlj7fvvIjjgqTjg7Pjg4jjg43jg7zjgrfjg6fjg7PjgpLooajjgZnvvInjga7jg5Djg7zjgrjjg6fjg7PnrqHnkIbjgahEaWZm6KGo56S644CB57eo6ZuG44GX44Gf6Z+z5aOw44KS44Gd44Gu5aC044Gn5YaN55Sf44CB5pu457GN5YaF44Gu5paH5a2X5qSc57Si44CB57eo6ZuG6ICF44Gu57eo6ZuG5qip6ZmQ5aSJ5pu044CB44Ky44Op77yI5qCh5q2j55So44Gu5Y2w5Yi377yJ44Gu5Y2w5Yi35qmf6IO944Go44Kz44Oh44Oz44OI44GuUERG44Ki44OD44OX44Ot44O844OJ44CB5pu457GN5YaF44Gu55S75YOP6KGo56S644CCJyxcbiAgICBrZXl3b3JkczogWydFLWJvb2snLCAnRVBVQicsICdTU01MJywgJ1czQycsICdjby1hdXRob3JpbmcnLCAndmVyc2lvbiBjb250cm9sJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIOWun+iovOWun+mok+WgseWRiuabuDogJ2h0dHA6Ly93d3cuc291bXUuZ28uanAvbWFpbl9jb250ZW50LzAwMDQ5OTcxMS5wZGYnLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQnVkZGFCZWF1dGlmeScsXG4gICAgc3ViOiAn5bex44Gu57K+56We44KS56Oo44GP44GT44Go44Gn6KaL44Gf55uu44KC576O44GX44GP44Gq44KM44KL44Oh44OH44Kj44Ki44Ki44O844OI5L2c5ZOBJyxcbiAgICBpbWc6ICdwcm9qZWN0LUJ1ZGRhQmVhdXRpZnktMTYtOScsXG4gICAgY2F0ZWdvcnk6ICdEZXNrdG9wJyxcbiAgICB2aWRlbzogJ1gwU3JhalloNzgwJyxcbiAgICB0ZXh0OlxuICAgICAgJ05hbSBKdW5lIFBhaWvjgavjgojjgotUVi1CdWRkaGHjgavjgqTjg7Pjgrnjg5HjgqTjgqLjgpLlj5fjgZHjgIHlt7Hjga7nsr7npZ7jgpLno6jjgY/jgZPjgajjgajnlLvlg4/lh6bnkIbjgavjgojjgovnvo7poZTljJbjgpLntYTjgb/lkIjjgo/jgZvjgZ/kvZzlk4HjgILjgqvjg6Hjg6njgajjg5fjg63jgrjjgqfjgq/jgr/jgavjgojjgaPjgabkvZzjgonjgozjgZ/mk6zkvLznmoTjgarpj6Hjga7liY3jgafjgIHjg6bjg7zjgrbjga/luqfnpoXjgpLooYzjgYbjgILouqvkvZPjga7jg5bjg6zjgYzlsJHjgarjgYTmmYLjga/lv4Pjga7kubHjgozjgoLlsJHjgarjgYTjgajliKTmlq3jgZfjgIHpj6Hjga7oh6rliIbjga7poZTjgavlvpDjgIXjgavnvo7poZTljJblh6bnkIbjgpLooYzjgaPjgabjgYTjgY/jgILkvZPpqJPmmYLplpPjga8x5YiG56iL5bqm44CCJyxcbiAgICBpbXBsZW1lbnQ6XG4gICAgICAn44OB44O844Og44Gn5Yi25L2c44CCUHJvY2Vzc2luZ+OBp+Wun+ijheOAgui6q+S9k+OBq+ODluODrOOBruW6puWQiOOBhOOBr+WLleS9k+mok+efpeOBq+OCiOOBo+OBpuaVsOWApOWMluOBmeOCi+OAguWLleS9k+aknOefpeOBruWun+ijheOCkuaLheW9k+OAgumhlOOBrue+jumhlOWMluWHpueQhuOBq+OBr+OAgemWouW3neOCiVsxXeOBruOCouODq+OCtOODquOCuuODoOOCkuWIqeeUqOOAgicsXG4gICAga2V5d29yZHM6IFsnbWVkaWEgYXJ0JywgJ21vdGlvbiBkZXRlY3Rpb24nLCAnaW1hZ2UgcHJvY2Vzc2luZyddLFxuICAgIGxpbmtzOiB7XG4gICAgICAnzrUt44OV44Kj44Or44K/44KS55So44GE44Gf44Oq44Ki44Or44K/44Kk44Og6aGU55S75YOP576O6Kaz5YyW44K344K544OG44OgJzpcbiAgICAgICAgJ2h0dHBzOi8vd3d3LmllaWNlLm9yZy9pc3MvanBuL1B1YmxpY2F0aW9ucy9pc3Nwb3N0ZXJfMjAxNS9kYXRhL3BkZi9JU1MtUC03OC5wZGYnLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWFrZSBpZicsXG4gICAgc3ViOiAn44Kr44O844OJ44KS5Lim44G544GmaWbmlofjgpLjgaTjgY/jgovjg5fjg63jgrDjg6njg5/jg7PjgrDmlZnogrLjgqvjg7zjg4njgrLjg7zjg6AnLFxuICAgIGltZzogJ3Byb2plY3QtTWFrZWlmLTE2LTknLFxuICAgIGNhdGVnb3J5OiAnRGVzaWduJyxcbiAgICB0ZXh0OlxuICAgICAgJ+ODl+ODreOCsOODqeODn+ODs+OCsOOCkuOBmeOCi+aZguOBq+W/heOBmuS9v+OBhuOAjGlm5paH44CN44KS44Kr44O844OJ44Gn6YGK44Gz44Gq44GM44KJ5a2m44G544KL44Ky44O844Og44CC44OG44Kt44K544OI44Ko44OH44Kj44K/44KS5qih44GX44Gf44OX44Os44Kk44Oe44OD44OI44Gu5LiK44Gr6aCG55Wq44Gr44Kr44O844OJ44KS572u44GE44Gm44GE44GN44CBaWbmlofjgYzlrozmiJDjgZnjgovjgajmnaHku7bliIblspDjgavjgojjgaPjgabjgqvjg7zjg4njgpLlvJXjgYvjgarjgY/jgabjga/jgarjgonjgarjgYTjgILml6njgY/miYvmnK3jgpLkvb/jgYTliIfjgaPjgZ/kurrjgYzli53liKnjgILjg5fjg63jgrDjg6njg5/jg7PjgrDmnKrntYzpqJPogIXjgafjgoLpgYrjgbbjgZPjgajjgYzlj6/og73jgIIyMDE35bm044Gr44Ky44O844Og44Oe44O844Kx44OD44OI44CB5Y+K44Gz44Kz44Of44OD44Kv44Oe44O844Kx44OD44OI44Gr44Gm6aCS5biD44CCJyxcbiAgICBpbXBsZW1lbnQ6XG4gICAgICAn44Ki44OK44Ot44Kw44Ky44O844Og44K144O844Kv44OrZnVtYmxld2FhbHPvvIjjg5XjgqHjg7Pjg5bjg6vjg6/jg7zjg6vjgrnvvInjgafliLbkvZzjgILkuLvjgavjg4fjgrbjgqTjg7PjgpLmi4XlvZPjgIJBZG9iZSBJbGx1c3RyYXRvcuOCkuS9v+eUqOOAgicsXG4gICAga2V5d29yZHM6IFsncHJvZ3JhbW1pbmcnLCAnY2FyZCBnYW1lJywgJ2FuYWxvZyBnYW1lJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIOWVhuWTgeips+e0sOODmuODvOOCuDogJ2h0dHA6Ly9mdW1ibGV3YWFscy5jb20vcG9ydGZvbGlvL21ha2UtaWYvJyxcbiAgICAgIGZ1bWJsZXdhYWxzOiAnaHR0cDovL2Z1bWJsZXdhYWxzLmNvbScsXG4gICAgfSxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHNBcnJheVxuIiwiPGFwcD5cblx0PHJvdXRlcj5cblx0XHQ8cm91dGUgcGF0aD1cIlwiPlxuXHRcdFx0PHRvcD48L3RvcD5cblx0XHQ8L3JvdXRlPlxuXHRcdDxyb3V0ZSBwYXRoPVwicHJvZmlsZS4uXCI+XG5cdFx0XHQ8cHJvZmlsZT48L3Byb2ZpbGU+XG5cdFx0PC9yb3V0ZT5cblx0XHQ8cm91dGUgcGF0aD1cInByb2plY3RzLypcIj5cblx0XHRcdDxwcm9qZWN0RGV0YWlsPjwvcHJvamVjdERldGFpbD5cblx0XHQ8L3JvdXRlPlxuXHRcdDxyb3V0ZSBwYXRoPVwicHJvamVjdHMuLlwiPlxuXHRcdFx0PHByb2plY3RBbGw+PC9wcm9qZWN0QWxsPlxuXHRcdDwvcm91dGU+XG5cdFx0PHJvdXRlIHBhdGg9XCIuLlwiPlxuXHRcdFx0PG90aGVyPjwvb3RoZXI+XG5cdFx0PC9yb3V0ZT5cblx0PC9yb3V0ZXI+XG5cblx0PHNjcmlwdD5cblx0XHRpbXBvcnQgcm91dGUgZnJvbSAncmlvdC1yb3V0ZS9saWIvdGFnJ1xuXHRcdGltcG9ydCB0b3AgZnJvbSAnLi90b3AnXG5cdFx0aW1wb3J0IHByb2ZpbGUgZnJvbSAnLi9wcm9maWxlJ1xuXHRcdGltcG9ydCBwcm9qZWN0QWxsIGZyb20gJy4vcHJvamVjdEFsbCdcblx0XHRpbXBvcnQgcHJvamVjdERldGFpbCBmcm9tICcuL3Byb2plY3REZXRhaWwnXG5cdFx0aW1wb3J0IG90aGVyIGZyb20gJy4vb3RoZXInXG5cdDwvc2NyaXB0PlxuPC9hcHA+XG4iLCI8b3RoZXI+XG5cdDxzZWN0aW9uPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxoMT5QYWdlIE5vdCBGb3VuZDwvaDE+XG5cdFx0PC9kaXY+XG5cdDwvc2VjdGlvbj5cblx0PGZvb3Rlcj48L2Zvb3Rlcj5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWluLWhlaWdodDogMTAwdmg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdGJhY2tncm91bmQ6ICMyYjJiMmI7XG5cdFx0XHRjb2xvcjogI2VmZWZlZjtcblx0XHRcdHNlY3Rpb24ge1xuXHRcdFx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHQ8L3N0eWxlPlxuXG5cdDxzY3JpcHQ+XG5cdFx0aW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcidcblx0PC9zY3JpcHQ+XG48L290aGVyPlxuIiwiPHByb2ZpbGU+XG5cdDxzZWN0aW9uPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5Qcm9maWxlPC9oMj5cblx0XHRcdDxhYm91dD48L2Fib3V0PlxuXHRcdFx0PGxpa2U+PC9saWtlPlxuXHRcdFx0PHNraWxscz48L3NraWxscz5cblx0XHRcdDxlZHVjYXRpb24+PC9lZHVjYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvc2VjdGlvbj5cblx0PGZvb3Rlcj48L2Zvb3Rlcj5cblxuXHQ8c3R5bGUgdHlwZT1cInNjc3NcIj5cblx0XHQ6c2NvcGUge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuXHRcdFx0Y29sb3I6ICNlZmVmZWY7XG5cdFx0fVxuXHQ8L3N0eWxlPlxuXG5cdDxzY3JpcHQ+XG5cdFx0aW1wb3J0IHNjcm9sbCBmcm9tICcuLi9qcy9zY3JvbGwnXG5cdFx0aW1wb3J0IGFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQnXG5cdFx0aW1wb3J0IGVkdWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2VkdWNhdGlvbidcblx0XHRpbXBvcnQgc2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvc2tpbGxzJ1xuXHRcdGltcG9ydCBsaWtlIGZyb20gJy4uL2NvbXBvbmVudHMvbGlrZSdcblx0XHRpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5cdFx0dGhpcy5vbigncm91dGUnLCAoKSA9PiB7XG5cdFx0XHRzY3JvbGwubW92ZSgpXG5cdFx0fSlcblx0PC9zY3JpcHQ+XG48L3Byb2ZpbGU+XG4iLCI8cHJvamVjdEFsbD5cblx0PHNlY3Rpb24+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlByb2plY3RzPC9oMj5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGEgZWFjaD1cIntwIGluIGNhdGVnb3JpZXN9XCIgb25jbGljaz1cIntjbGljay5iaW5kKHRoaXMsIHApfVwiPlxuXHRcdFx0XHRcdDxsaSBpZj1cIntzZWxlY3RlZENhdGVnb3J5ICE9PSBwfVwiPntwfTwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwic2VsZWN0ZWRcIiBpZj1cIntzZWxlY3RlZENhdGVnb3J5ID09PSBwfVwiPntwfTwvbGk+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvdWw+XG5cdFx0XHQ8cHJvamVjdHMgY2F0ZWdvcnk9XCJ7c2VsZWN0ZWRDYXRlZ29yeX1cIj48L3Byb2plY3RzPlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG5cdDxmb290ZXI+PC9mb290ZXI+XG5cblx0PHN0eWxlIHR5cGU9XCJzY3NzXCI+XG5cdFx0OnNjb3BlIHtcblx0XHRcdD4gc2VjdGlvbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNlZWVlZWU7XG5cdFx0XHRcdGNvbG9yOiAjMjIyMjIyO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0dWwge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMXJlbSBhdXRvIDAgYXV0bztcblx0XHRcdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJyZW07XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0Ji5zZWxlY3RlZCB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBncmF5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHQ8L3N0eWxlPlxuXG5cdDxzY3JpcHQ+XG5cdFx0aW1wb3J0IHJvdXRlIGZyb20gJ3Jpb3Qtcm91dGUvbGliL3RhZydcblx0XHRpbXBvcnQgc2Nyb2xsIGZyb20gJy4uL2pzL3Njcm9sbCdcblx0XHRpbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0cydcblx0XHRpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5cdFx0dGhpcy5jYXRlZ29yaWVzID0gWydBbGwnLCAnQW5kcm9pZCcsICdXZWInLCAnRGVza3RvcCcsICdEZXNpZ24nXVxuXHRcdHRoaXMuc2VsZWN0ZWRDYXRlZ29yeVxuXG5cdFx0dGhpcy5vbigncm91dGUnLCAoKSA9PiB7XG5cdFx0XHRpZiAocm91dGUucXVlcnkoKS5jYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMudXBkYXRlKHsgc2VsZWN0ZWRDYXRlZ29yeTogcm91dGUucXVlcnkoKS5jYXRlZ29yeSB9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy51cGRhdGUoeyBzZWxlY3RlZENhdGVnb3J5OiB0aGlzLmNhdGVnb3JpZXNbMF0gfSlcblx0XHRcdH1cblxuXHRcdFx0c2Nyb2xsLm1vdmUoKVxuXHRcdH0pXG5cblx0XHRjbGljayhwKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZSh7IHNlbGVjdGVkQ2F0ZWdvcnk6IHAgfSlcblx0XHR9XG5cdDwvc2NyaXB0PlxuPC9wcm9qZWN0QWxsPlxuIiwiPHByb2plY3REZXRhaWw+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHQ8c2VjdGlvbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2aWRlby1mcmFtZVwiIGlmPVwie3Byb2plY3QudmlkZW8gIT09IHVuZGVmaW5lZH1cIj5cblx0XHRcdFx0PGlmcmFtZVxuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3twcm9qZWN0LnZpZGVvfT9yZWw9MFwiXG5cdFx0XHRcdFx0ZnJhbWVib3JkZXI9XCIwXCJcblx0XHRcdFx0XHRhbGxvdz1cImVuY3J5cHRlZC1tZWRpYVwiXG5cdFx0XHRcdFx0YWxsb3dmdWxsc2NyZWVuPVwiYWxsb3dmdWxsc2NyZWVuXCJcblx0XHRcdFx0PjwvaWZyYW1lPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW1nLWZyYW1lXCIgaWY9XCJ7cHJvamVjdC52aWRlbyA9PT0gdW5kZWZpbmVkfVwiPlxuXHRcdFx0XHQ8d2VicCBzcmM9XCJ7cHJvamVjdC5pbWd9XCI+PC93ZWJwPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aDE+XG5cdFx0XHRcdDxwPntwcm9qZWN0Lm5hbWUgKyAnOiAnfTwvcD5cblx0XHRcdFx0PHNwYW4+e3Byb2plY3Quc3VifTwvc3Bhbj5cblx0XHRcdDwvaDE+XG5cdFx0XHQ8dGFncyB0YWdzPVwie3Byb2plY3Qua2V5d29yZHN9XCI+PC90YWdzPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNoYXB0ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNoYXB0ZXItdGl0bGVcIj5cblx0XHRcdFx0XHQ8aDI+QWJzdHJhY3Q8L2gyPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHA+e3Byb2plY3QudGV4dH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjaGFwdGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjaGFwdGVyLXRpdGxlXCI+XG5cdFx0XHRcdFx0PGgyPkltcGxlbWVudGF0aW9uPC9oMj5cblx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwPntwcm9qZWN0LmltcGxlbWVudH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjaGFwdGVyXCIgaWY9XCJ7cHJvamVjdC5saW5rcyAhPT0gdW5kZWZpbmVkfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2hhcHRlci10aXRsZVwiPlxuXHRcdFx0XHRcdDxoMj5MaW5rczwvaDI+XG5cdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8b2w+XG5cdFx0XHRcdFx0PGxpIGVhY2g9XCJ7dmFsdWUsIGtleSBpbiBwcm9qZWN0LmxpbmtzfVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+e2tleSArICc6ICd9PC9zcGFuPjxzcGFuPjxhIGhyZWY9XCJ7dmFsdWV9XCI+e3ZhbHVlfTwvYT48L3NwYW4+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0PC9kaXY+XG5cdDxmb290ZXI+PC9mb290ZXI+XG5cblx0PHN0eWxlIHR5cGU9XCJzY3NzXCI+XG5cdFx0OnNjb3BlIHtcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuXHRcdFx0Y29sb3I6ICNlZmVmZWY7XG5cdFx0XHQ+IGRpdiA+IHNlY3Rpb24ge1xuXHRcdFx0XHRwYWRkaW5nOiAxLjVyZW07XG5cdFx0XHRcdC52aWRlby1mcmFtZSB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1Ni4yNSU7XG5cdFx0XHRcdFx0PiBpZnJhbWUge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQuaW1nLWZyYW1lIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHQ+IGltZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRoMSB7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdG1hcmdpbjogMXJlbSAwO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNoYXB0ZXIge1xuXHRcdFx0XHRcdC5jaGFwdGVyLXRpdGxlIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAxLjVyZW0gMCAxcmVtIDA7XG5cdFx0XHRcdFx0XHQ+IGgyIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMC41cmVtO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+IGhyIHtcblx0XHRcdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDEuNXB4IHNvbGlkIGdyYXk7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFyZW07XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMXJlbTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JheTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAuNnJlbSAwO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b2wge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAycmVtO1xuXHRcdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjhyZW07XG5cdFx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNGU5YWRiO1xuXHRcdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdFx0aDEge1xuXHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHRcdH1cblx0XHRcdGgyIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cdFx0XHR9XG5cdFx0fVxuXHQ8L3N0eWxlPlxuXG5cdDxzY3JpcHQ+XG5cdFx0aW1wb3J0IHByb2plY3RzQXJyYXkgZnJvbSAnLi4vZGF0YSdcblx0XHRpbXBvcnQgc2Nyb2xsIGZyb20gJy4uL2pzL3Njcm9sbCdcblx0XHRpbXBvcnQgdGFncyBmcm9tICcuLi9jb21wb25lbnRzL3RhZ3MnXG5cdFx0aW1wb3J0IHdlYnAgZnJvbSAnLi4vY29tcG9uZW50cy93ZWJwJ1xuXHRcdGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cblx0XHR0aGlzLnByb2plY3QgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHN1YjogJycsXG5cdFx0XHRpbWc6ICcnLFxuXHRcdFx0dmlkZW86ICcnLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRpbXBsZW1lbnQ6ICcnLFxuXHRcdFx0a2V5d29yZHM6IFtdLFxuXHRcdH1cblxuXHRcdHRoaXMub24oJ3JvdXRlJywgKHByb2plY3ROYW1lKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSh7XG5cdFx0XHRcdHByb2plY3Q6IHByb2plY3RzQXJyYXkuZmlsdGVyKChkKSA9PiBkLm5hbWUgPT09IHByb2plY3ROYW1lLnJlcGxhY2UoL18vZywgJyAnKSlbMF0sXG5cdFx0XHR9KVxuXG5cdFx0XHRzY3JvbGwubW92ZSgpXG5cdFx0fSlcblx0PC9zY3JpcHQ+XG48L3Byb2plY3REZXRhaWw+XG4iLCI8dG9wPlxuXHQ8Zmlyc3Q+PC9maXJzdD5cblx0PHNlY3Rpb24+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkFib3V0IE1lPC9oMj5cblx0XHRcdDxhYm91dD48L2Fib3V0PlxuXHRcdFx0PG1vcmUgdGV4dD1cImRldGFpbFwiIHRpdGxlPVwiVmlldyBkZXRhaWxlZCBwcm9maWxlXCIgbGluaz1cIiNwcm9maWxlXCI+PC9tb3JlPlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG5cdDxzZWN0aW9uPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5Qcm9qZWN0czwvaDI+XG5cdFx0XHQ8cHJvamVjdHMgbGltaXQ9XCIzXCI+PC9wcm9qZWN0cz5cblx0XHRcdDxtb3JlIHRpdGxlPVwiVmlldyBhbGwgcHJvamVjdHNcIiBsaW5rPVwiI3Byb2plY3RzXCI+PC9tb3JlPlxuXHRcdDwvZGl2PlxuXHQ8L3NlY3Rpb24+XG5cdDxzZWN0aW9uPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5Bd2FyZHM8L2gyPlxuXHRcdFx0PGF3YXJkcz48L2F3YXJkcz5cblx0XHRcdDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5QdWJsaWNhdGlvbnM8L2gyPlxuXHRcdFx0PHB1YmxpY2F0aW9ucz48L3B1YmxpY2F0aW9ucz5cblx0XHRcdDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5DbHViczwvaDI+XG5cdFx0XHQ8Y2x1YnM+PC9jbHVicz5cblx0XHQ8L2Rpdj5cblx0PC9zZWN0aW9uPlxuXHQ8Zm9vdGVyPjwvZm9vdGVyPlxuXG5cdDxzdHlsZSB0eXBlPVwic2Nzc1wiPlxuXHRcdDpzY29wZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRcdFx0PiBzZWN0aW9uIHtcblx0XHRcdFx0JjpudGgtY2hpbGQoMm4pIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuXHRcdFx0XHRcdGNvbG9yOiAjZWZlZmVmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6bnRoLWNoaWxkKDJuICsgMSkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlZWVlZWU7XG5cdFx0XHRcdFx0Y29sb3I6ICMyMjIyMjI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdDwvc3R5bGU+XG5cblx0PHNjcmlwdD5cblx0XHRpbXBvcnQgZmlyc3QgZnJvbSAnLi4vY29tcG9uZW50cy9maXJzdCdcblx0XHRpbXBvcnQgYWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dCdcblx0XHRpbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0cydcblx0XHRpbXBvcnQgYXdhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvYXdhcmRzJ1xuXHRcdGltcG9ydCBwdWJsaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9wdWJsaWNhdGlvbnMnXG5cdFx0aW1wb3J0IGNsdWJzIGZyb20gJy4uL2NvbXBvbmVudHMvY2x1YnMnXG5cdFx0aW1wb3J0IG1vcmUgZnJvbSAnLi4vY29tcG9uZW50cy9tb3JlJ1xuXHRcdGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cblx0XHR0aGlzLm9uKCdyb3V0ZScsICgpID0+IHtcblx0XHRcdGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24uaGFzaFxuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxzW2Ake3BhdGh9YF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsKDAsIDApXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5zY3JvbGxzW2Ake3BhdGh9YF0pXG5cdFx0XHR9XG5cdFx0fSlcblx0PC9zY3JpcHQ+XG48L3RvcD5cbiIsImltcG9ydCByaW90IGZyb20gJ3Jpb3QnXG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vc2Nyb2xsJ1xuaW1wb3J0IGFwcCBmcm9tICcuLi9wYWdlcy9hcHAnXG5cbnJpb3QubW91bnQoJy5yb290JywgJ2FwcCcpXG5cbnNjcm9sbC5pbml0KClcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCB7XG5cdHN0YXRpYyBpbml0KCkge1xuXHRcdHdpbmRvdy5zY3JvbGxzID0gW11cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBwb3NZID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cdFx0XHRjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhhc2hcblx0XHRcdHdpbmRvdy5zY3JvbGxzW2Ake3BhdGh9YF0gPSBwb3NZXG5cdFx0fSlcblx0fVxuXHRzdGF0aWMgbW92ZSgpIHtcblx0XHRjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhhc2hcblxuXHRcdGlmICh3aW5kb3cuc2Nyb2xsc1tgJHtwYXRofWBdKSB3aW5kb3cuc2Nyb2xsKDAsIDApXG5cdFx0ZWxzZSB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5zY3JvbGxzW2Ake3BhdGh9YF0pXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=