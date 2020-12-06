module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__("q1C7");

// EXTERNAL MODULE: external "next-page-transitions"
var external_next_page_transitions_ = __webpack_require__("57kg");

// EXTERNAL MODULE: external "jss-rtl"
var external_jss_rtl_ = __webpack_require__("7an5");
var external_jss_rtl_default = /*#__PURE__*/__webpack_require__.n(external_jss_rtl_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "react-top-loading-bar"
var external_react_top_loading_bar_ = __webpack_require__("4dwz");
var external_react_top_loading_bar_default = /*#__PURE__*/__webpack_require__.n(external_react_top_loading_bar_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./theme/palette.js
var palette = __webpack_require__("PB8t");
var palette_default = /*#__PURE__*/__webpack_require__.n(palette);

// CONCATENATED MODULE: ./theme/appTheme.js


const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: palette_default.a[color].palette.primary,
    secondary: palette_default.a[color].palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900
  },
  shade: {
    light: '0 0 13px -1px rgba(0, 0, 0, 0.22)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
      },
      elevation4: {
        boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
      },
      rounded: {
        borderRadius: 0
      }
    },
    MuiButton: {
      containedSecondary: {
        color: '#FFFFFF'
      },
      containedPrimary: {
        color: '#FFFFFF'
      },
      contained: {
        boxShadow: 'none'
      },
      root: {
        borderRadius: 0,
        fontWeight: 600,
        padding: '8px 24px'
      },
      sizeSmall: {
        padding: '7px 12px'
      },
      sizeLarge: {
        padding: '7px 36px'
      }
    },
    MuiTypography: {
      button: {
        fontWeight: 600
      }
    },
    MuiIconButton: {
      root: {
        '&$disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)'
        }
      }
    }
  }
});

/* harmony default export */ var theme_appTheme = (appTheme);
// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__("d+3G");

// EXTERNAL MODULE: ./vendors/top-loading-bar.css
var top_loading_bar = __webpack_require__("BG6D");

// EXTERNAL MODULE: ./vendors/animate-extends.css
var animate_extends = __webpack_require__("IYW3");

// EXTERNAL MODULE: ./vendors/page-transition.css
var page_transition = __webpack_require__("o7B1");

// EXTERNAL MODULE: ./vendors/slick/slick.css
var slick = __webpack_require__("7hoa");

// EXTERNAL MODULE: ./vendors/slick/slick-theme.css
var slick_theme = __webpack_require__("SJHS");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__("Oyez");
var external_apollo_client_default = /*#__PURE__*/__webpack_require__.n(external_apollo_client_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: external "apollo-link"
var external_apollo_link_ = __webpack_require__("vuC2");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// CONCATENATED MODULE: ./lib/apollo.js




const token = false;
const cache = new external_apollo_cache_inmemory_["InMemoryCache"]();
const url = process.env.REACT_APP_SERVER_URL || "http://localhost:4000/";
const client = new external_apollo_client_default.a({
  // Provide required constructor fields
  cache,
  link: new external_apollo_link_http_["createHttpLink"]({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    },
    uri: url
  }),
  // Provide some optional constructor fields
  name: "lapadi-app-client",
  version: "1.0.1",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'all'
    }
  }
});
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* import css vendors */









let themeType = 'light';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(0);
  const {
    0: theme,
    1: setTheme
  } = Object(external_react_["useState"])(_objectSpread(_objectSpread({}, theme_appTheme('greenLeaf', themeType)), {}, {
    direction: i18n["i18n"].language === 'ar' ? 'rtl' : 'ltr'
  }));
  Object(external_react_["useEffect"])(() => {
    // Set layout direction
    document.dir = i18n["i18n"].language === 'ar' ? 'rtl' : 'ltr'; // Remove preloader

    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      preloader.remove();
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000); // Refresh JSS in SSR

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, theme_appTheme('greenLeaf', newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = Object(styles_["createMuiTheme"])(theme);
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const jss = Object(external_jss_["create"])({
    plugins: [...Object(styles_["jssPreset"])().plugins, external_jss_rtl_default()()]
  });
  return __jsx("div", null, __jsx(react_hooks_["ApolloProvider"], {
    client: client
  }, __jsx(styles_["StylesProvider"], {
    jss: jss
  }, __jsx(styles_["ThemeProvider"], {
    theme: muiTheme
  }, __jsx(CssBaseline_default.a, null), __jsx(external_react_top_loading_bar_default.a, {
    height: 0,
    color: theme.palette.primary.light,
    progress: loading,
    className: "top-loading-bar"
  }), __jsx("div", {
    id: "main-wrap"
  }, __jsx(external_next_page_transitions_["PageTransition"], {
    timeout: 300,
    classNames: "page-fade-transition"
  }, __jsx(Component, _extends({}, pageProps, {
    onToggleDark: toggleDarkTheme,
    onToggleDir: toggleDirection,
    key: router.route
  }))))))));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (Object(i18n["appWithTranslation"])(MyApp));

/***/ }),

/***/ "4dwz":
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "57kg":
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7an5":
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "7hoa":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "BG6D":
/***/ (function(module, exports) {



/***/ }),

/***/ "IYW3":
/***/ (function(module, exports) {



/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "PB8t":
/***/ (function(module, exports) {

module.exports = {
  oceanBlue: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  greenLeaf: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#1B5E20'
      },
      secondary: {
        light: '#CFD8DC',
        main: '#607D8B',
        dark: '#37474F'
      }
    }
  },
  money: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      }
    }
  },
  grayscale: {
    palette: {
      primary: {
        light: '#CFD8DC',
        main: '#546E7A',
        dark: '#263238'
      },
      secondary: {
        light: '#D7CCC8',
        main: '#6D4C41',
        dark: '#3E2723'
      }
    }
  },
  cloud: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      }
    }
  },
  joker: {
    palette: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  violet: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#EC407A',
        dark: '#880E4F'
      },
      secondary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      }
    }
  },
  violeta: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#558B2F'
      }
    }
  },
  roseGold: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FFF8E1',
        main: '#FFA000',
        dark: '#FF6F00',
        contrastText: '#fff'
      }
    }
  },
  deepBlue: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E1F5FE',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff'
      }
    }
  },
  ubuntu: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff'
      }
    }
  },
  geenNature: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#009688',
        dark: '#00695C',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      }
    }
  },
  vampire: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#f44336',
        dark: '#E53935',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff'
      }
    }
  },
  mint: {
    palette: {
      primary: {
        light: '#bbdefb',
        main: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#b3e5fc',
        main: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
      }
    }
  },
  oceanSky: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F2F1',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff'
      }
    }
  },
  gold: {
    palette: {
      primary: {
        light: '#FFF9C4',
        main: '#FF9100',
        dark: '#FF6D00',
        contrastText: '#fff'
      },
      secondary: {
        light: '#EFEBE9',
        main: '#8D6E63',
        dark: '#4E342E',
        contrastText: '#fff'
      }
    }
  },
  botani: {
    palette: {
      primary: {
        light: '#DCEDC8',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  littleQueen: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  purple: {
    palette: {
      primary: {
        light: '#f3e5f5',
        main: '#9c27b0',
        dark: '#6a1b9a',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ea80fc',
        main: '#aa00ff',
        dark: '#4a148c',
        contrastText: '#fff'
      }
    }
  },
  black: {
    palette: {
      primary: {
        light: '#9e9e9e',
        main: '#212121',
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  brown: {
    palette: {
      primary: {
        light: '#d7ccc8',
        main: '#795548',
        dark: '#4e342e',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ccb0b0',
        main: '#794848',
        dark: '#3e2723',
        contrastText: '#fff'
      }
    }
  }
};

/***/ }),

/***/ "SJHS":
/***/ (function(module, exports) {



/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d+3G":
/***/ (function(module, exports) {



/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr', 'de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  localePath: 'public/locales',
  localeSubpaths: {
    en: 'en',
    fr: 'fr',
    ar: 'ar',
    de: 'de',
    id: 'id',
    pt: 'pt',
    zh: 'zh'
  }
});

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "o7B1":
/***/ (function(module, exports) {



/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "q1C7":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ })

/******/ });