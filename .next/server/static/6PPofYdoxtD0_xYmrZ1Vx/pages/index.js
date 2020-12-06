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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9E4/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AMx9":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cross-deco-light-f221ba0af80ece57bdff670ee508d79f.png";

/***/ }),

/***/ "AeAN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification_Notification; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "@material-ui/core/SnackbarContent"
var SnackbarContent_ = __webpack_require__("n1EF");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/Notification/notification-style.js

const notificationStyles = Object(styles_["makeStyles"])(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.secondary.dark,
      background: theme.palette.secondary.light,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));
/* harmony default export */ var notification_style = (notificationStyles);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./components/Notification/Notification.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function TransitionUp(props) {
  return __jsx(Slide_default.a, _extends({}, props, {
    direction: "up"
  }));
}

function Notification(props) {
  const {
    t
  } = props;
  const classes = notification_style();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(true);

  const handleClose = () => {
    setOpen(false);
  };

  return __jsx(Snackbar_default.a, {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose
  }, __jsx(SnackbarContent_default.a, {
    message: __jsx(Typography_default.a, {
      id: "message-id"
    }, brand_default.a.architect.notifMsg),
    classes: {
      action: classes.action
    },
    action: __jsx(Button_default.a, {
      key: "undo",
      variant: "contained",
      color: "secondary",
      className: classes.button,
      onClick: handleClose
    }, t('common:accept'))
  }));
}

/* harmony default export */ var Notification_Notification = (Object(i18n["withTranslation"])(['common'])(Notification));
// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "D+hd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "DRbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "DbTw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useTextAlign */
/* unused harmony export useFloat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useText; });
/* unused harmony export useHidden */
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useTextAlign = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
const useFloat = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
});
const useText = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
}));
const useHidden = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ }),

/***/ "Ek77":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Footer_Footer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanel"
var ExpansionPanel_ = __webpack_require__("DRgV");
var ExpansionPanel_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanel_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelSummary"
var ExpansionPanelSummary_ = __webpack_require__("Hd3h");
var ExpansionPanelSummary_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelSummary_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelDetails"
var ExpansionPanelDetails_ = __webpack_require__("h1YJ");
var ExpansionPanelDetails_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelDetails_);

// EXTERNAL MODULE: external "@material-ui/icons/Language"
var Language_ = __webpack_require__("D+hd");
var Language_default = /*#__PURE__*/__webpack_require__.n(Language_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/OutlinedInput"
var OutlinedInput_ = __webpack_require__("ZVla");
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./public/images/navi-archi-logo.svg
var navi_archi_logo = __webpack_require__("zFT3");
var navi_archi_logo_default = /*#__PURE__*/__webpack_require__.n(navi_archi_logo);

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./components/Footer/footer-style.js

const footerStyles = Object(styles_["makeStyles"])(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  footer: {
    position: 'relative',
    marginTop: theme.spacing(20),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: theme.spacing(10)
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& $accordionRoot': {
      margin: '0 auto',
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 48,
      marginRight: theme.spacing()
    },
    '& h6': {
      color: theme.palette.text.disabled
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.primary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      },
      '&:hover': {
        background: theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
    '& svg': {
      fill: theme.palette.secondary.main
    },
    '& $icon': {
      top: 22,
      position: 'relative',
      '& + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)'
      }
    },
    '& fieldset': {
      border: `1px solid ${theme.palette.secondary.main} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.secondary.main} !important`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    textAlign: 'left'
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  }
}));
/* harmony default export */ var footer_style = (footerStyles);
// CONCATENATED MODULE: ./components/Footer/Footer.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function Copyright() {
  return __jsx(Typography_default.a, {
    variant: "body2",
    display: "block",
    color: "textSecondary"
  }, "\xA9\xA0", brand_default.a.architect.footerText);
}

const footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations'],
  link: ['#team', '#history', '#contact-us', '#locations']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  link: ['#resource', '#resource-name', '#another-resource', '#final-resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use'],
  link: ['#privacy-policy', '#terms-of-use']
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(external_react_["useState"])(null);
  const classes = footer_style();
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    0: values,
    1: setValues
  } = Object(external_react_["useState"])({
    lang: 'en'
  });
  Object(external_react_["useEffect"])(() => {
    setValues({
      lang: i18n["i18n"].language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ar') {
      i18n["i18n"].changeLanguage('ar');
      props.toggleDir('rtl');
    } else {
      i18n["i18n"].changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return __jsx(Container_default.a, {
    maxWidth: "lg",
    component: "footer",
    className: classes.footer
  }, __jsx(Grid_default.a, {
    container: true,
    spacing: 4
  }, __jsx(Grid_default.a, {
    item: true,
    xs: 12,
    md: 3
  }, __jsx("div", {
    className: classes.logo
  }, __jsx("img", {
    src: navi_archi_logo_default.a,
    alt: "logo"
  }), __jsx(Typography_default.a, {
    variant: "h6",
    color: "textPrimary"
  }, brand_default.a.architect.projectName)), __jsx(Typography_default.a, {
    color: "textPrimary",
    className: classes.footerDesc,
    gutterBottom: true
  }, "Nam posuere accumsan porta. Integer sed ante tincidunt tincidunt sit amet sed libero."), __jsx(Copyright, null)), __jsx(Grid_default.a, {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(Grid_default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly"
  }, footers.map(footer => __jsx(Grid_default.a, {
    item: true,
    xs: 12,
    md: 3,
    key: footer.title,
    className: classes.siteMapItem
  }, isDesktop && __jsx("div", null, __jsx(Typography_default.a, {
    variant: "h6",
    className: classes.title,
    color: "textPrimary",
    gutterBottom: true
  }, footer.title), __jsx("ul", null, footer.description.map((item, index) => __jsx("li", {
    key: item
  }, __jsx(Link_default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary"
  }, item))))), isMobile && __jsx(ExpansionPanel_default.a, {
    square: true,
    classes: {
      root: classes.accordionRoot
    }
  }, __jsx(ExpansionPanelSummary_default.a, {
    expandIcon: __jsx(ExpandMore_default.a, {
      className: classes.accordionIcon
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    classes: {
      content: classes.accordionContent
    }
  }, __jsx("strong", null, footer.title)), __jsx(ExpansionPanelDetails_default.a, null, __jsx("ul", null, footer.description.map((item, index) => __jsx("li", {
    key: item
  }, __jsx(Link_default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary"
  }, item)))))))))), __jsx(Grid_default.a, {
    item: true,
    xs: 12,
    md: 3
  }, __jsx("div", {
    className: classes.socmed
  }, __jsx(IconButton_default.a, {
    "aria-label": "FB",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-social-twitter"
  })), __jsx(IconButton_default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-social-facebook"
  })), __jsx(IconButton_default.a, {
    "aria-label": "IG",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-social-instagram"
  })), __jsx(IconButton_default.a, {
    "aria-label": "LI",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-social-linkedin"
  }))), __jsx(Select_default.a, {
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: __jsx(InputAdornment_default.a, {
      className: classes.icon,
      position: "start"
    }, __jsx(Language_default.a, null)),
    className: classes.selectLang,
    input: __jsx(OutlinedInput_default.a, {
      labelWidth: 200,
      name: "lang",
      id: "outlined-lang-simple"
    })
  }, __jsx(MenuItem_default.a, {
    value: "en"
  }, "English"), __jsx(MenuItem_default.a, {
    value: "de"
  }, "Deutsch"), __jsx(MenuItem_default.a, {
    value: "ar"
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"), __jsx(MenuItem_default.a, {
    value: "id"
  }, "Bahasa Indonesia"), __jsx(MenuItem_default.a, {
    value: "pt"
  }, "Portugu\xEAs"), __jsx(MenuItem_default.a, {
    value: "zh"
  }, "\u7B80\u4F53\u4E2D\u6587")))));
}

Footer.defaultProps = {
  toggleDir: () => {}
};
/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/Footer/index.js


/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GPWk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MUTATION_CREATE_SUPPORT; });
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__);

const MUTATION_CREATE_SUPPORT = _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation createSupportMutation($input: createSupportInput!){
        createSupport(input: $input)
    }
`;

/***/ }),

/***/ "H6h4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const link = {
  architect: {
    home: '/',
    contact: '/contact'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (link);

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "Is15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_decoration_cross_deco_light_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wL+U");
/* harmony import */ var _public_images_decoration_cross_deco_light_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_images_decoration_cross_deco_light_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_decoration_cross_deco_dark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aBSv");
/* harmony import */ var _public_images_decoration_cross_deco_dark_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_decoration_cross_deco_dark_png__WEBPACK_IMPORTED_MODULE_2__);



const parallaxStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      top: 0
    }
  },
  dotsWrap: {
    top: -200,
    left: -200
  },
  crossWrap: {
    zIndex: 10,
    top: -100,
    right: -120,
    left: 'auto'
  },
  parallaxDot: {
    fill: theme.palette.text.hint,
    width: 1015,
    height: 1099,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute'
  },
  parallaxCross: {
    background: `url(${theme.palette.type === 'dark' ? _public_images_decoration_cross_deco_dark_png__WEBPACK_IMPORTED_MODULE_2___default.a : _public_images_decoration_cross_deco_light_png__WEBPACK_IMPORTED_MODULE_1___default.a}) repeat 0px -30px`,
    width: 445,
    height: 1099,
    top: 90,
    right: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute'
  },
  parallaxBox: {
    width: '100%',
    height: 350,
    top: -2400,
    right: 0,
    position: 'absolute'
  },
  bigBox: {
    width: 300,
    height: 250,
    background: theme.palette.secondary.main,
    opacity: 0.5,
    top: 2420,
    left: -80,
    position: 'absolute'
  },
  smallBox: {
    width: 150,
    height: 180,
    background: theme.palette.primary.main,
    opacity: 0.5,
    top: 2550,
    right: -50,
    position: 'absolute'
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (parallaxStyles);

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "K0LP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Header_Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "@material-ui/core/Popover"
var Popover_ = __webpack_require__("fA+V");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__("XnMA");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__("XfbO");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__("ubCc");
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__("lOiU");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// EXTERNAL MODULE: ./public/images/flag-logo.png
var flag_logo = __webpack_require__("VnM+");
var flag_logo_default = /*#__PURE__*/__webpack_require__.n(flag_logo);

// CONCATENATED MODULE: ./components/Header/header-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag_logo_default.a}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = Object(styles_["makeStyles"])(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  invert: {
    color: theme.palette.text.primary,
    '& $mobileMenu': {
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.text.primary
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    position: 'fixed',
    padding: theme.spacing(2, 0),
    color: theme.palette.common.white,
    transition: 'padding 0.3s ease',
    background: 'none',
    boxShadow: 'none',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      background: Object(colorManipulator_["fade"])(theme.palette.secondary.dark, 0.6),
      backdropFilter: 'saturate(90%) blur(10px)',
      padding: theme.spacing(1, 0),
      '& $logo': {
        '& a': {
          color: 'transparent',
          fontSize: 0
        },
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0
        }
      },
      '& nav': {
        '& $button': {
          padding: theme.spacing(0.5, 2)
        },
        '& li a': {
          padding: '0 6px',
          color: theme.palette.common.white
        }
      },
      '& $setting': {
        '& $icon': {
          '& svg': {
            fill: theme.palette.common.white
          }
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          }
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none'
    },
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary
        }
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.text.primary
          }
        }
      },
      '& $setting': {
        '& $icon': {
          '& svg': {
            fill: theme.palette.text.primary
          }
        }
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end'
    },
    '& nav': {
      alignItems: 'center',
      display: 'flex',
      marginTop: theme.spacing()
    }
  },
  logo: {
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3)
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    },
    '& a': {
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      height: 70,
      margin: '0 auto',
      marginBottom: theme.spacing(),
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 3)
      }
    },
    '& a': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1)
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 2),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'uppercase',
          minWidth: 0,
          padding: '6px',
          margin: '0 4px',
          background: 'none !important',
          transition: 'all 0.3s ease-out',
          '&:after': {
            content: '""',
            display: 'none',
            borderTop: `10px solid ${theme.palette.primary.light}`,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            position: 'absolute',
            top: -28,
            left: 'calc(50% - 15px)'
          },
          '&:hover': {
            color: theme.palette.primary.light
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.primary.light,
            '&:after': {
              display: 'block'
            }
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    background: Object(colorManipulator_["fade"])(theme.palette.secondary.dark, 0.6),
    backdropFilter: 'saturate(90%) blur(10px)',
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      }
    },
    '&[class*="is-active"]': {
      '& $bar': {
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  }
}));
/* harmony default export */ var header_style = (headerStyles);
// CONCATENATED MODULE: ./components/Header/Settings.js
var __jsx = external_react_default.a.createElement;


















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(external_react_["useState"])(null);
  const classes = header_style();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const {
    0: isDark,
    1: setDark
  } = Object(external_react_["useState"])(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ar') {
      i18n["i18n"].changeLanguage('ar');
      props.toggleDir('rtl');
    } else {
      i18n["i18n"].changeLanguage(lang);
      props.toggleDir('ltr');
    }

    setAnchorEl(null);
  }

  Object(external_react_["useEffect"])(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert,
    t
  } = props;
  return __jsx("div", {
    className: classes.setting
  }, __jsx(IconButton_default.a, {
    "aria-describedby": id,
    "aria-label": "Settings",
    onClick: handleClick,
    className: external_clsx_default()(classes.icon, open && classes.active, invert && classes.invert)
  }, __jsx(Settings_default.a, {
    fontSize: "inherit"
  })), __jsx(Popover_default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    container: ctn,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, __jsx(List_default.a, {
    component: "nav",
    className: classes.modeMenu,
    "aria-label": "Mode-menu",
    subheader: __jsx(ListSubheader_default.a, {
      component: "div"
    }, t('common:architect-landing.header_theme'))
  }, __jsx(ListItem_default.a, null, __jsx(Typography_default.a, {
    component: "div"
  }, __jsx(Grid_default.a, {
    component: "label",
    container: true,
    alignItems: "center",
    spacing: 1
  }, __jsx(Grid_default.a, {
    item: true
  }, t('common:architect-landing.header_light')), __jsx(Grid_default.a, {
    item: true
  }, __jsx(Switch_default.a, {
    checked: isDark,
    onChange: handleChangeMode,
    value: isDark,
    inputProps: {
      'aria-label': 'checkbox'
    }
  })), __jsx(Grid_default.a, {
    item: true
  }, t('common:architect-landing.header_dark')))))), __jsx(Divider_default.a, null), __jsx(List_default.a, {
    component: "nav",
    className: classes.langMenu,
    "aria-label": "Language-menu",
    subheader: __jsx(ListSubheader_default.a, {
      component: "div"
    }, t('common:architect-landing.header_language'))
  }, i18n["i18n"].options.allLanguages && i18n["i18n"].options.allLanguages.map(val => __jsx(ListItem_default.a, {
    key: val,
    role: undefined,
    dense: true,
    button: true,
    onClick: () => handleChangeLang(val)
  }, __jsx(ListItemIcon_default.a, null, __jsx("i", {
    className: val
  })), __jsx(ListItemText_default.a, {
    primary: t('common:' + val)
  }), i18n["i18n"].language === val && __jsx(ListItemSecondaryAction_default.a, null, __jsx(Check_default.a, {
    color: "primary"
  })))))));
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ var Header_Settings = (Object(i18n["withTranslation"])(['common', 'architect-landing'])(Settings));
// EXTERNAL MODULE: external "@material-ui/core/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__("pN9Q");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__("dlhf");

// CONCATENATED MODULE: ./components/Header/MobileMenu.js
var MobileMenu_jsx = external_react_default.a.createElement;











function MobileMenu(props) {
  const classes = header_style();
  const {
    toggleDrawer,
    open,
    t
  } = props;

  const SideList = () => MobileMenu_jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer
  }, MobileMenu_jsx("div", {
    className: external_clsx_default()(classes.menu, open && classes.menuOpen)
  }, MobileMenu_jsx(List_default.a, {
    component: "nav"
  }, menu["a" /* default */].map((item, index) => MobileMenu_jsx(ListItem_default.a, {
    button: true,
    component: "a",
    href: `#${item}`,
    key: index.toString(),
    style: {
      animationDuration: index * 0.15 + 's'
    }
  }, MobileMenu_jsx(ListItemText_default.a, {
    primary: t('common:architect-landing.header_' + item),
    className: classes.menuList
  })))), MobileMenu_jsx(ListItem_default.a, {
    button: true,
    component: "a",
    href: text_link["a" /* default */].architect.contact,
    style: {
      animationDuration: menu["a" /* default */].length * 0.15 + 's'
    }
  }, MobileMenu_jsx(ListItemText_default.a, {
    primary: t('common:architect-landing.header_contact'),
    className: classes.menuList
  }))));

  return MobileMenu_jsx(SwipeableDrawer_default.a, {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    }
  }, MobileMenu_jsx(SideList, null));
}

/* harmony default export */ var Header_MobileMenu = (Object(i18n["withTranslation"])(['architect-landing'])(MobileMenu));
// EXTERNAL MODULE: ./public/images/navi-archi-logo.svg
var navi_archi_logo = __webpack_require__("zFT3");
var navi_archi_logo_default = /*#__PURE__*/__webpack_require__.n(navi_archi_logo);

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// EXTERNAL MODULE: ./vendors/hamburger-menu.css
var hamburger_menu = __webpack_require__("qTeW");

// CONCATENATED MODULE: ./components/Header/Header.js
var Header_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const Header_LinkBtn = external_react_default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return Header_jsx(external_react_anchor_link_smooth_scroll_default.a, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = Object(external_react_["useState"])(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 100;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = header_style();
  const theme = Object(styles_["useTheme"])();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery_default()(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    0: menuList
  } = Object(external_react_["useState"])([createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3])]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = Object(external_react_["useState"])(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return Header_jsx(external_react_["Fragment"], null, isMobile && Header_jsx(Header_MobileMenu, {
    open: openDrawer,
    toggleDrawer: handleOpenDrawer
  }), Header_jsx(AppBar_default.a, {
    component: "div",
    position: "relative",
    id: "header",
    className: external_clsx_default()(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer)
  }, Header_jsx(Container_default.a, {
    fixed: !isMobile
  }, Header_jsx(Grid_default.a, {
    container: true
  }, Header_jsx(Grid_default.a, {
    item: true,
    sm: 2,
    xs: 7
  }, Header_jsx("div", {
    className: classes.logo
  }, isMobile && Header_jsx(IconButton_default.a, {
    onClick: handleOpenDrawer,
    className: external_clsx_default()('hamburger hamburger--spring', classes.mobileMenu, openDrawer && 'is-active')
  }, Header_jsx("span", {
    className: "hamburger-box"
  }, Header_jsx("span", {
    className: external_clsx_default()(classes.bar, 'hamburger-inner')
  }))), invert ? Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("a", null, Header_jsx("img", {
    src: navi_archi_logo_default.a,
    alt: "logo"
  }), isDesktop && brand_default.a.architect.projectName)) : Header_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#home"
  }, Header_jsx("img", {
    src: navi_archi_logo_default.a,
    alt: "logo"
  }), isDesktop && brand_default.a.architect.projectName))), Header_jsx(Grid_default.a, {
    item: true,
    sm: isTablet ? 10 : 9,
    xs: 5
  }, Header_jsx("div", {
    className: classes.headerContent
  }, Header_jsx("nav", {
    className: external_clsx_default()(classes.navMenu, invert && classes.invert)
  }, isDesktop && Header_jsx(external_react_scrollspy_default.a, {
    items: menu["a" /* default */],
    currentClassName: "active"
  }, menuList.map(item => Header_jsx("li", {
    key: item.id.toString()
  }, invert ? // eslint-disable-next-line
  Header_jsx(Button_default.a, {
    offset: item.offset || 0,
    href: '/' + item.url
  }, t('common:architect-landing.header_' + item.name)) : // eslint-disable-next-line
  Header_jsx(Button_default.a, {
    component: external_react_anchor_link_smooth_scroll_default.a,
    offset: item.offset || 0,
    href: item.url
  }, t('common:architect-landing.header_' + item.name)))), Header_jsx("li", null, Header_jsx(Button_default.a, {
    href: text_link["a" /* default */].architect.contact
  }, t('common:architect-landing.header_contact'))))), Header_jsx("nav", {
    className: classes.navMenu
  }, Header_jsx(Header_Settings, {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert
  }))))))));
}

Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ var Header_Header = (Object(i18n["withTranslation"])(['architect-landing'])(Header));
// CONCATENATED MODULE: ./components/Header/index.js


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ou+t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipPrevious");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');

  if (path) {
    path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

    if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  }

  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

/***/ }),

/***/ "PiLd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Title; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__("DbTw");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/Title/title-style.js

const titleStyles = Object(styles_["makeStyles"])(theme => ({
  dark: {},
  desc: {},
  title: {
    display: 'inline-block',
    padding: theme.spacing(0, 2, 0, 4),
    borderLeft: `12px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing()
    },
    '&$dark': {
      borderLeftColor: theme.palette.common.white,
      '& h4': {
        color: theme.palette.common.white
      },
      '& $desc': {
        color: theme.palette.common.white
      }
    },
    '& $desc': {
      color: theme.palette.text.secondary
    }
  }
}));
/* harmony default export */ var title_style = (titleStyles);
// CONCATENATED MODULE: ./components/Title/Title.js
var __jsx = external_react_default.a.createElement;





function Title(props) {
  const classes = title_style();
  const text = Object(common["a" /* useText */])();
  const {
    head,
    desc,
    dark
  } = props;
  return __jsx("div", {
    className: external_clsx_default()(classes.title, dark && classes.dark)
  }, __jsx(Typography_default.a, {
    variant: "h4",
    className: text.title2
  }, head), __jsx(Typography_default.a, {
    className: external_clsx_default()(classes.desc, text.subtitle2)
  }, desc));
}
Title.defaultProps = {
  dark: false,
  desc: ''
};
// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: ./components/Header/index.js + 4 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/icons/PlayArrow"
var PlayArrow_ = __webpack_require__("ela+");
var PlayArrow_default = /*#__PURE__*/__webpack_require__.n(PlayArrow_);

// EXTERNAL MODULE: external "@material-ui/icons/Pause"
var Pause_ = __webpack_require__("dGmP");
var Pause_default = /*#__PURE__*/__webpack_require__.n(Pause_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__("oLQh");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./public/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  architect: ['/images/projects/im-1.jpg', '/images/projects/im-6.jpg', '/images/projects/im-3.jpg', '/images/projects/im-7.jpg', '/images/projects/im-5.jpg', '/images/projects/im-8.jpg', 'https://via.placeholder.com/700x463/8e8e8e/FFFFFF', 'https://via.placeholder.com/700x463/52596b/FFFFFF', '/images/architect/home3d_cvsxd8.png', '/images/architect/architect_team.png', '/images/architect/architect_team.png', '/images/architect/architect_team.png', '/images/architect/architect_team.png', '/images/architect/architect_team.png', '/images/architect/architect_team.png', '/images/architect/parallax-bg_jxla8s.jpg']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__("DbTw");

// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__("o507");
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);

// EXTERNAL MODULE: ./components/Parallax/Cross.js
var Cross = __webpack_require__("c4qM");

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// CONCATENATED MODULE: ./components/VideoBanner/banner-style.js


const bannerStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    '&:hover': {
      '& $btnPlay': {
        opacity: 1
      }
    },
    [theme.breakpoints.up('md')]: {
      '&:after': {
        content: '""',
        position: 'absolute',
        right: 0,
        width: '75%',
        height: 160,
        background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
        transform: theme.direction === 'rtl' ? 'skew(0, -10deg)' : 'skew(0, 10deg)',
        bottom: -55,
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
      }
    }
  },
  bannerWrap: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  parallax: {
    right: 0
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.57)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  video: {
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden',
    height: 500,
    width: '100%',
    '& iframe': {
      width: '100%',
      marginTop: -30
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '-12%',
      height: 650
    },
    [theme.breakpoints.up('1400')]: {
      marginLeft: '-16%'
    },
    background: theme.palette.common.black,
    '& img': {
      minHeight: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%'
      }
    }
  },
  block: {
    position: 'absolute',
    width: '100%',
    left: 0,
    zIndex: 10,
    top: 200,
    [theme.breakpoints.up('sm')]: {
      top: 'auto',
      bottom: theme.spacing(15),
      padding: theme.spacing(0, 8)
    },
    [theme.breakpoints.down('xs')]: {
      top: 140
    }
  },
  paperWrap: {
    [theme.breakpoints.up('sm')]: {
      backdropFilter: 'saturate(90%) blur(5px)'
    },
    [theme.breakpoints.up('md')]: {
      borderLeft: `80px solid ${Object(colorManipulator_["fade"])(theme.palette.secondary.dark, 0.3)}`
    }
  },
  paper: {
    position: 'relative',
    maxHeight: 300,
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.85),
      backdropFilter: 'saturate(90%) blur(5px)',
      padding: theme.spacing(6)
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      background: 'none'
    },
    '& h4': {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        color: theme.palette.common.white
      }
    }
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      opacity: 0.87,
      color: theme.palette.common.white
    }
  },
  button: {
    width: 190,
    bottom: -20,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  btnPlay: {
    position: 'absolute',
    zIndex: 20,
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    borderRadius: 0,
    background: Object(colorManipulator_["fade"])(theme.palette.secondary.main, 0.5),
    backdropFilter: 'saturate(90%) blur(5px)',
    left: 0,
    top: 'calc(100% - 80px)',
    '& svg': {
      width: 60,
      height: 60,
      fill: theme.palette.common.white
    }
  }
}));
/* harmony default export */ var banner_style = (bannerStyles);
// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.js
var __jsx = external_react_default.a.createElement;





















function Banner(props) {
  const classes = banner_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    0: play,
    1: setPlayed
  } = Object(external_react_["useState"])(false);
  const {
    0: playCtrl,
    1: setPlayedCtrl
  } = Object(external_react_["useState"])(true);
  const {
    0: player,
    1: setPlayer
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();

    if (curTime > 0) {
      setPlayed(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);

    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '720',
    width: '1080',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3006'
    }
  };
  return __jsx("div", {
    className: classes.root
  }, __jsx(Hidden_default.a, {
    mdDown: true
  }, play && __jsx(IconButton_default.a, {
    className: classes.btnPlay,
    onClick: _onTogglePause
  }, playCtrl ? __jsx(Pause_default.a, null) : __jsx(PlayArrow_default.a, null))), __jsx(Container_default.a, {
    fixed: !isMobile,
    className: classes.bannerWrap
  }, __jsx("div", {
    className: classes.video
  }, __jsx("div", {
    className: classes.overlay
  }), !play || isMobile ? __jsx("img", {
    src: images_imgAPI.architect[0],
    alt: "cover"
  }) : null, youtube_default.a.use && __jsx(external_react_youtube_default.a, {
    videoId: "TA04Qau-UnA",
    opts: opts,
    onReady: _onReady,
    onEnd: _onEnd,
    onPlay: _onPlay
  })), __jsx("div", {
    className: classes.parallax
  }, __jsx(Cross["a" /* default */], null)), __jsx("div", {
    className: classes.block
  }, __jsx(Grid_default.a, {
    container: true,
    justify: "flex-end"
  }, __jsx(Grid_default.a, {
    item: true,
    md: 9,
    xs: 12
  }, __jsx("div", {
    className: classes.paperWrap
  }, __jsx(Paper_default.a, {
    className: classes.paper
  }, __jsx(Typography_default.a, {
    variant: "h4",
    className: text.title2
  }, t('common:architect-landing.banner_title')), __jsx(Typography_default.a, {
    className: external_clsx_default()(classes.subtitle, text.subtitle2)
  }, t('common:architect-landing.banner_desc')), __jsx(Button_default.a, {
    color: "primary",
    size: "large",
    variant: "contained",
    className: classes.button
  }, t('common:architect-landing.banner_btn')))))))));
}

/* harmony default export */ var VideoBanner = (Object(i18n["withTranslation"])(['architect-landing'])(Banner));
// CONCATENATED MODULE: ./components/VideoBanner/index.js

// EXTERNAL MODULE: ./components/Title/index.js + 2 modules
var Title = __webpack_require__("PiLd");

// CONCATENATED MODULE: ./components/Services/services-style.js

const featureStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& img': {
      width: '100%',
      height: '100%'
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        fontSize: '1.2rem'
      }
    },
    '& p': {
      color: theme.palette.text.secondary
    }
  },
  figure: {
    width: 180,
    height: 180,
    margin: '0 auto',
    position: 'relative',
    transform: 'scale(0.8)',
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(0.5)',
      margin: '-36px auto -24px'
    },
    '& svg': {
      width: 180,
      height: 180
    }
  },
  outline: {
    stroke: theme.palette.secondary.main
  },
  fill: {
    fill: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    left: 0
  },
  grid: {
    textAlign: 'center'
  }
}));
/* harmony default export */ var services_style = (featureStyles);
// CONCATENATED MODULE: ./components/Services/Services.js
var Services_jsx = external_react_default.a.createElement;









function Services(props) {
  const classes = services_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  return Services_jsx("div", {
    className: classes.root
  }, Services_jsx(Container_default.a, null, Services_jsx(Title["a" /* default */], {
    head: t('common:architect-landing.services_title'),
    desc: t('common:architect-landing.services_desc')
  })), Services_jsx(Container_default.a, {
    fixed: true
  }, Services_jsx(Grid_default.a, {
    container: true,
    spacing: 8,
    className: classes.grid
  }, Services_jsx(Grid_default.a, {
    item: true,
    md: 4
  }, Services_jsx("div", {
    className: classes.figure
  }, Services_jsx("svg", {
    className: classes.fill
  }, Services_jsx("use", {
    xlinkHref: "/images/architect/services-fill-1.svg#main"
  })), Services_jsx("svg", {
    className: classes.outline
  }, Services_jsx("use", {
    xlinkHref: "/images/architect/services-outline-1.svg#main"
  }))), Services_jsx(Typography_default.a, {
    variant: "h5",
    className: text.subtitle2
  }, t('common:architect-landing.services_item1')), Services_jsx(Typography_default.a, {
    component: "p",
    className: text.paragraph
  }, t('common:architect-landing.services_itemdesc1'))), Services_jsx(Grid_default.a, {
    item: true,
    md: 4
  }, Services_jsx("div", {
    className: classes.figure
  }, Services_jsx("svg", {
    className: classes.fill
  }, Services_jsx("use", {
    xlinkHref: "/images/architect/services-fill-2.svg#main"
  })), Services_jsx("svg", {
    className: classes.outline
  }, Services_jsx("use", {
    xlinkHref: "/images/architect/services-outline-2.svg#main"
  }))), Services_jsx(Typography_default.a, {
    variant: "h5",
    className: text.subtitle2
  }, t('common:architect-landing.services_item2')), Services_jsx(Typography_default.a, {
    component: "p",
    className: text.paragraph
  }, t('common:architect-landing.services_itemdesc2'))), Services_jsx(Grid_default.a, {
    item: true,
    md: 4
  }, Services_jsx("div", {
    className: classes.figure
  }, Services_jsx("svg", {
    className: classes.fill
  }, Services_jsx("use", {
    xlinkHref: "/images/architect/services-fill-3.svg#main"
  })), Services_jsx("svg", {
    className: classes.outline
  }, Services_jsx("use", {
    xlinkHref: "/images/architect/services-outline-3.svg#main"
  }))), Services_jsx(Typography_default.a, {
    variant: "h5",
    className: text.subtitle2
  }, t('common:architect-landing.services_item3')), Services_jsx(Typography_default.a, {
    component: "p",
    className: text.paragraph
  }, t('common:architect-landing.services_itemdesc3'))))));
}

/* harmony default export */ var Services_Services = (Object(i18n["withTranslation"])(['architect-landing'])(Services));
// CONCATENATED MODULE: ./components/Services/index.js

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__("K0LP");

// EXTERNAL MODULE: ./components/Parallax/parallax-style.js
var parallax_style = __webpack_require__("Is15");

// CONCATENATED MODULE: ./components/Parallax/Dots.js
var Dots_jsx = external_react_default.a.createElement;




function ParallaxDots() {
  const classes = Object(parallax_style["a" /* default */])();
  return Dots_jsx("div", {
    className: external_clsx_default()(classes.parallaxWrap, classes.dotsWrap)
  }, Dots_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Dots_jsx("div", {
    className: classes.innerParallax
  }, Dots_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [-50, 50],
    tagOuter: "figure"
  }, Dots_jsx("svg", {
    fill: "#cccccc",
    width: 902,
    height: 1042,
    className: classes.parallaxDot
  }, Dots_jsx("use", {
    xlinkHref: "/images/decoration/dot-deco.svg#dot"
  }))))));
}
// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__("QzC/");
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: ./public/images/architect/cross-deco-light.png
var cross_deco_light = __webpack_require__("AMx9");
var cross_deco_light_default = /*#__PURE__*/__webpack_require__.n(cross_deco_light);

// CONCATENATED MODULE: ./components/Cards/cards-style.js



const cardsStyles = Object(styles_["makeStyles"])(theme => ({
  generalCard: {
    position: 'relative',
    width: 270,
    height: 345,
    '& figure': {
      margin: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  desc: {
    width: 235,
    position: 'absolute',
    bottom: theme.spacing(-3),
    left: 20,
    padding: theme.spacing(2.5),
    backdropFilter: 'saturate(90%) blur(10px)',
    background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.7),
    shadow: theme.shadows[8],
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold
    }
  },
  button: {
    bottom: -36,
    margin: '0 auto',
    width: 120,
    display: 'inherit'
  },
  profileCard: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    margin: `0 auto ${theme.spacing(5)}px`,
    [theme.breakpoints.up('sm')]: {
      width: 275,
      marginBottom: theme.spacing(10)
    },
    '& h5': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary
    }
  },
  paper: {
    background: `url(${theme.palette.type === 'dark' ? '/images/architect/bg-team-dark.jpg' : '/images/architect/bg-team.jpg'}) repeat`,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    height: 270,
    [theme.breakpoints.up('sm')]: {
      width: 215
    },
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
      height: 180
    },
    '& img': {
      position: 'relative',
      zIndex: 10,
      [theme.breakpoints.up('sm')]: {
        height: 315,
        marginLeft: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        height: '100%',
        margin: '0 auto',
        top: theme.spacing()
      }
    },
    '&:after': {
      content: '""',
      width: 190,
      height: 215,
      background: `url(${cross_deco_light_default.a}) repeat transparent 15px -15px`,
      position: 'absolute',
      bottom: 0,
      right: theme.spacing(-10),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  }
}));
/* harmony default export */ var cards_style = (cardsStyles);
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__("s051");

// EXTERNAL MODULE: external "@material-ui/icons/SkipPrevious"
var SkipPrevious_ = __webpack_require__("Ou+t");

// EXTERNAL MODULE: external "@material-ui/icons/SkipNext"
var SkipNext_ = __webpack_require__("cXR6");

// CONCATENATED MODULE: ./components/Cards/Project.js
var Project_jsx = external_react_default.a.createElement;










const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
function ProjectCard() {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  return Project_jsx(Card_default.a, {
    className: classes.root
  }, Project_jsx("div", {
    className: classes.details
  }, Project_jsx(CardContent_default.a, {
    className: classes.content
  }, Project_jsx(Typography_default.a, {
    component: "h5",
    variant: "h5"
  }, "Fa fa"), Project_jsx(Typography_default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, "Project name"))));
}
// CONCATENATED MODULE: ./components/Cards/General.js
var General_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return General_jsx(Typography_default.a, _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `action-tabpanel-${index}`,
    "aria-labelledby": `action-tab-${index}`
  }, other), value === index && General_jsx(Box_default.a, {
    p: 3
  }, children));
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`
  };
}

function General(props) {
  const classes = cards_style();
  const theme = Object(styles_["useTheme"])();
  const text = Object(common["a" /* useText */])();
  const {
    img,
    title,
    desc
  } = props;
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const [state, setState] = external_react_default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const [value, setValue] = external_react_default.a.useState(0);

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      [anchor]: open
    }));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const renderContext = () => {
    return General_jsx("div", {
      style: {
        width: "600px",
        overflow: "hidden"
      }
    }, General_jsx("header", null, General_jsx("div", {
      className: "MuiTabs-root jss841"
    }, General_jsx("div", {
      className: "MuiTabs-scroller MuiTabs-fixed",
      style: {
        overflow: "hidden"
      }
    }, General_jsx(Tabs_default.a, {
      value: value,
      onChange: handleChange,
      indicatorColor: "primary",
      textColor: "primary",
      variant: "fullWidth",
      "aria-label": "action tabs example"
    }, General_jsx(Tab_default.a, _extends({
      label: "Detail"
    }, a11yProps(0))), General_jsx(Tab_default.a, _extends({
      label: "Information"
    }, a11yProps(1))))))), General_jsx(external_react_swipeable_views_default.a, {
      axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
      index: value,
      onChangeIndex: handleChangeIndex
    }, General_jsx(TabPanel, {
      value: value,
      index: 0,
      dir: theme.direction
    }, General_jsx(ProjectCard, null)), General_jsx(TabPanel, {
      value: value,
      index: 1,
      dir: theme.direction
    }, "Item Two")));
  };

  return General_jsx(Paper_default.a, {
    className: classes.generalCard
  }, General_jsx("figure", null, General_jsx("img", {
    src: img,
    alt: title
  })), General_jsx(Paper_default.a, {
    className: classes.desc
  }, General_jsx(Typography_default.a, {
    variant: "h6",
    gutterBottom: true
  }, title), General_jsx(Typography_default.a, {
    className: text.paragraph
  }, desc), General_jsx(Button_default.a, {
    onClick: toggleDrawer("right", true),
    className: classes.button,
    color: "secondary",
    size: "small",
    variant: "contained"
  }, "See Detail")), General_jsx("div", {
    style: {
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'saturate(180%) blur(20px)'
    }
  }, General_jsx(Drawer_default.a, {
    anchor: "right",
    open: state["right"],
    onClose: toggleDrawer("right", false)
  }, renderContext())));
}
// CONCATENATED MODULE: ./components/Project/project-style.js


const blogStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    '&:before': {
      content: '""',
      borderBottom: `700px solid ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}`,
      borderLeft: '1480px solid transparent',
      position: 'absolute',
      bottom: -500,
      right: 0,
      opacity: 0.5,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    [theme.breakpoints.down('xs')]: {
      '&:before': {
        bottom: -250
      }
    }
  },
  parallaxWrap: {
    position: 'absolute',
    left: 200,
    top: 200,
    width: 500
  },
  props: {
    '& > div': {
      width: 440,
      height: 2
    },
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(10),
      top: theme.spacing(15),
      width: 360
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2)
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(5),
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      margin: '0 auto'
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    marginTop: -45,
    width: 36,
    zIndex: 3,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.9),
    border: 'none',
    boxShadow: 'none',
    transform: theme.direction === 'rtl' ? 'scale(-2.5)' : 'scale(2.5)',
    '&:hover': {
      background: theme.palette.background.paper
    },
    '& i': {
      color: theme.palette.text.primary
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  prev: {
    left: 6
  },
  next: {
    right: 6
  }
}));
/* harmony default export */ var project_style = (blogStyles);
// CONCATENATED MODULE: ./components/Project/Project.js
var Project_Project_jsx = external_react_default.a.createElement;

function Project_extends() { Project_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Project_extends.apply(this, arguments); }














const projectData = [{
  img: images_imgAPI.architect[0],
  title: 'Vivamus sit amet',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.architect[1],
  title: 'Vivamus sit amet',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.architect[2],
  title: 'Vivamus sit amet',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.architect[3],
  title: 'Vivamus sit amet',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.architect[4],
  title: 'Vivamus sit amet',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}, {
  img: images_imgAPI.architect[5],
  title: 'Vivamus sit amet',
  desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
}];

function Project(props) {
  const slider = Object(external_react_["useRef"])(null);
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const classes = project_style();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  Object(external_react_["useEffect"])(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(projectData.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);
  return Project_Project_jsx("div", {
    className: classes.root
  }, Project_Project_jsx("div", {
    className: classes.parallaxWrap
  }, Project_Project_jsx(ParallaxDots, null)), Project_Project_jsx(Container_default.a, null, Project_Project_jsx("div", {
    className: classes.floatingTitle
  }, Project_Project_jsx(Title["a" /* default */], {
    head: t('common:architect-landing.project_title'),
    desc: t('common:architect-landing.project_desc')
  }))), Project_Project_jsx("div", {
    className: classes.sliderWrap
  }, Project_Project_jsx("div", {
    className: classes.carousel
  }, Project_Project_jsx(external_react_slick_default.a, Project_extends({
    ref: slider
  }, settings), isDesktop && Project_Project_jsx("div", {
    className: external_clsx_default()(classes.props, classes.itemPropsFirst)
  }, Project_Project_jsx("div", null)), projectData.map((item, index) => Project_Project_jsx("div", {
    key: index.toString(),
    className: classes.item
  }, Project_Project_jsx(General, {
    img: item.img,
    title: item.title
  }))), isDesktop && Project_Project_jsx("div", {
    className: external_clsx_default()(classes.props, classes.itemPropsLast)
  }, Project_Project_jsx("div", null)))), Project_Project_jsx(IconButton_default.a, {
    className: external_clsx_default()(classes.nav, classes.prev),
    onClick: () => slider.current.slickPrev()
  }, Project_Project_jsx("i", {
    className: "ion-ios-arrow-left"
  })), Project_Project_jsx(IconButton_default.a, {
    className: external_clsx_default()(classes.nav, classes.next),
    onClick: () => slider.current.slickNext()
  }, Project_Project_jsx("i", {
    className: "ion-ios-arrow-forward"
  }))));
}

/* harmony default export */ var Project_Project = (Object(i18n["withTranslation"])(['architect-landing'])(Project));
// CONCATENATED MODULE: ./components/Project/index.js

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/Zoom"
var Zoom_ = __webpack_require__("9E4/");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// CONCATENATED MODULE: ./components/Featured/featured-style.js


const featuredStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  videoCarousel: {
    boxShadow: theme.shadows[15],
    background: theme.palette.text.primary,
    height: 420,
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.down('sm')]: {
      height: 360
    },
    [theme.breakpoints.down('xs')]: {
      height: 220
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        visibility: 'hidden'
      },
      '& li': {
        width: 15,
        height: 15,
        background: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        borderRadius: 15,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          width: 40
        },
        '&:hover': {
          opacity: 0.5
        }
      },
      '& li button:before': {
        display: 'none'
      }
    },
    '& div[class*="slick-active"]': {
      '& $item': {
        opacity: 1,
        transitionDelay: '0.3s',
        '& $playBtn': {
          display: 'block',
          zIndex: 100
        }
      }
    }
  },
  item: {
    overflow: 'hidden',
    background: theme.palette.common.black,
    opacity: 0,
    transition: 'opacity 0.7s ease-out',
    height: 420,
    [theme.breakpoints.down('sm')]: {
      height: 360
    },
    [theme.breakpoints.down('xs')]: {
      height: 220
    },
    '& img': {
      opacity: 0.5,
      width: '100%',
      minHeight: '100%',
      display: 'block'
    }
  },
  playBtn: {
    borderRadius: 0,
    background: Object(colorManipulator_["fade"])(theme.palette.secondary.main, 0.5),
    backdropFilter: 'saturate(90%) blur(5px)',
    position: 'absolute',
    width: 80,
    height: 80,
    left: 'calc(50% - 40px)',
    top: 'calc(50% - 40px)',
    padding: 0,
    display: 'none',
    '& svg': {
      fill: theme.palette.common.white,
      width: 80,
      height: 80
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  }
}));
/* harmony default export */ var featured_style = (featuredStyles);
// CONCATENATED MODULE: ./components/Featured/Featured.js
var Featured_jsx = external_react_default.a.createElement;

function Featured_extends() { Featured_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Featured_extends.apply(this, arguments); }






















const Featured_Transition = external_react_default.a.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return Featured_jsx(Zoom_default.a, Featured_extends({
    ref: ref
  }, props));
});

function Featured(props) {
  const classes = featured_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 750,
    fade: true,
    arrows: false
  };
  const {
    0: player,
    1: setPlayer
  } = Object(external_react_["useState"])([]);
  const {
    0: videoId,
    1: setVideoId
  } = Object(external_react_["useState"])('ZGn8kSV9gAA');
  const {
    0: openPopup,
    1: setOpenPopup
  } = Object(external_react_["useState"])(false);

  const handleClickOpen = id => {
    if (youtube_default.a.use) {
      setVideoId(id);
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };
  return Featured_jsx("div", {
    className: classes.root
  }, Featured_jsx(Dialog_default.a, {
    open: openPopup,
    TransitionComponent: Featured_Transition,
    keepMounted: true,
    classes: {
      paper: classes.videoPopup
    },
    onClose: handleClose
  }, Featured_jsx(DialogTitle_default.a, {
    id: "alert-dialog-slide-title"
  }, t('common:architect-landing.featured_video'), Featured_jsx(IconButton_default.a, {
    onClick: handleClose,
    className: classes.closeBtn
  }, Featured_jsx(Close_default.a, {
    className: classes.icon
  }))), Featured_jsx(DialogContent_default.a, null, youtube_default.a.use && Featured_jsx(external_react_youtube_default.a, {
    videoId: videoId,
    onReady: _onReady,
    opts: opts
  }))), Featured_jsx(Container_default.a, {
    fixed: true
  }, Featured_jsx(Grid_default.a, {
    container: true,
    spacing: 6
  }, Featured_jsx(Grid_default.a, {
    item: true,
    lg: 7,
    md: 10,
    xs: 12
  }, Featured_jsx("div", {
    className: classes.videoCarousel
  }, Featured_jsx(external_react_slick_default.a, settings, Featured_jsx(Paper_default.a, {
    className: classes.item
  }, Featured_jsx("img", {
    src: images_imgAPI.architect[0],
    alt: "cover"
  }), Featured_jsx(IconButton_default.a, {
    className: classes.playBtn,
    onClick: () => handleClickOpen('rxXxWAIpq8o')
  }, Featured_jsx(PlayArrow_default.a, null))), Featured_jsx(Paper_default.a, {
    className: classes.item
  }, Featured_jsx("img", {
    src: "/images/projects/parking-lot.png",
    alt: "Parking lot design"
  }), Featured_jsx(IconButton_default.a, {
    className: classes.playBtn,
    onClick: () => handleClickOpen('Z1AeetkGn2o')
  }, Featured_jsx(PlayArrow_default.a, null))), Featured_jsx(Paper_default.a, {
    className: classes.item
  }, Featured_jsx("img", {
    src: images_imgAPI.architect[6],
    alt: "cover"
  }), Featured_jsx(IconButton_default.a, {
    className: classes.playBtn,
    onClick: () => handleClickOpen('ZGn8kSV9gAA')
  }, Featured_jsx(PlayArrow_default.a, null))), Featured_jsx(Paper_default.a, {
    className: classes.item
  }, Featured_jsx("img", {
    src: images_imgAPI.architect[7],
    alt: "cover"
  }), Featured_jsx(IconButton_default.a, {
    className: classes.playBtn,
    onClick: () => handleClickOpen('85V_u_R0zxM')
  }, Featured_jsx(PlayArrow_default.a, null)))))), Featured_jsx(Grid_default.a, {
    item: true,
    lg: 5,
    md: 10,
    xs: 12
  }, Featured_jsx(external_react_wow_default.a, {
    animation: "fadeInLeftShort",
    offset: -200,
    delay: "0.3s",
    duration: "0.6s"
  }, Featured_jsx("div", null, Featured_jsx(Title["a" /* default */], {
    head: t('common:architect-landing.featured_title'),
    desc: t('common:architect-landing.featured_subtitle')
  }), Featured_jsx(Typography_default.a, {
    display: "block",
    className: text.paragraph
  }, t('common:architect-landing.featured_desc1')), Featured_jsx("br", null), Featured_jsx(Typography_default.a, {
    display: "block",
    className: text.paragraph
  }, t('common:architect-landing.featured_desc2'))))))));
}

/* harmony default export */ var Featured_Featured = (Object(i18n["withTranslation"])(['architect-landing'])(Featured));
// CONCATENATED MODULE: ./components/Featured/index.js

// CONCATENATED MODULE: ./components/About/about-style.js

const aboutStyles = Object(styles_["makeStyles"])(theme => ({
  illustration: {},
  root: {
    position: 'relative',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '-90deg' : '90deg'}, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 70%, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 70%)`,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.secondary.main
    },
    '& $illustration': {
      zIndex: 10,
      height: 415,
      position: 'absolute',
      top: -20,
      right: 0,
      [theme.breakpoints.down('md')]: {
        height: '100%'
      }
    }
  },
  bgDeco: {
    position: 'absolute',
    top: 20,
    right: -100,
    width: 600,
    height: 700,
    '& img': {
      transform: 'scale(1.8)',
      opacity: 0.1,
      [theme.breakpoints.down('md')]: {
        transform: 'scale(1.2)'
      }
    }
  },
  illusWrap: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
/* harmony default export */ var about_style = (aboutStyles);
// CONCATENATED MODULE: ./components/About/About.js
var About_jsx = external_react_default.a.createElement;











function About(props) {
  const classes = about_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  return About_jsx("div", {
    className: classes.root
  }, About_jsx("div", {
    className: classes.bgDeco
  }, About_jsx("img", {
    src: images_imgAPI.architect[8],
    alt: "3d home model"
  })), About_jsx(Container_default.a, {
    fixed: true
  }, About_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    spacing: 6
  }, About_jsx(Grid_default.a, {
    item: true,
    md: 7,
    xs: 12
  }, About_jsx(Title["a" /* default */], {
    head: t('common:architect-landing.about_title'),
    dark: true
  }), About_jsx(Typography_default.a, {
    className: text.paragraph
  }, t('common:architect-landing.about_desc'))), About_jsx(Grid_default.a, {
    item: true,
    md: 5,
    xs: 12,
    className: classes.illusWrap
  }, About_jsx(Hidden_default.a, {
    smDown: true
  }, About_jsx("div", null, About_jsx("img", {
    src: images_imgAPI.architect[8],
    alt: "3d home model",
    className: classes.illustration
  })))))));
}

/* harmony default export */ var About_About = (Object(i18n["withTranslation"])(['architect-landing'])(About));
// CONCATENATED MODULE: ./components/About/index.js

// CONCATENATED MODULE: ./components/Cards/Profile.js
var Profile_jsx = external_react_default.a.createElement;





function Profile(props) {
  const classes = cards_style();
  const text = Object(common["a" /* useText */])();
  const {
    photo,
    name,
    title
  } = props;
  return Profile_jsx("div", {
    className: classes.profileCard
  }, Profile_jsx(Paper_default.a, {
    className: classes.paper
  }, Profile_jsx("img", {
    src: photo,
    alt: name
  })), Profile_jsx(Typography_default.a, {
    variant: "h5",
    className: text.subtitle
  }, name), Profile_jsx(Typography_default.a, {
    className: text.caption
  }, title));
}
// CONCATENATED MODULE: ./components/Team/team-style.js

const teamStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    '& > *': {
      position: 'relative'
    }
  },
  deco: {
    position: 'absolute',
    top: theme.spacing(-10),
    left: 0,
    height: 560,
    background: `linear-gradient(${theme.direction === 'rtl' ? '-160deg' : '160deg'}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light} 50%, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 50%)`,
    width: '70%',
    [theme.breakpoints.down('md')]: {
      height: 720
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  teamWrap: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  }
}));
/* harmony default export */ var team_style = (teamStyles);
// CONCATENATED MODULE: ./components/Team/Team.js
var Team_jsx = external_react_default.a.createElement;











const team = [{
  photo: images_imgAPI.architect[9],
  name: 'John Doe',
  title: 'chairman'
}, {
  photo: images_imgAPI.architect[10],
  name: 'jane Doe',
  title: 'Chief Executive Officer'
}, {
  photo: images_imgAPI.architect[11],
  name: 'James Doe',
  title: 'Chief Marketing Officer'
}, {
  photo: images_imgAPI.architect[12],
  name: 'Jihan Doe',
  title: 'Chief Operation Officer'
}, {
  photo: images_imgAPI.architect[13],
  name: 'Johan Doe',
  title: 'Senior Architect'
}, {
  photo: images_imgAPI.architect[14],
  name: 'Jena Doe',
  title: 'Senior Architect'
}];

function Team_Featured(props) {
  const classes = team_style();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('xs'));
  return Team_jsx("div", {
    className: classes.root
  }, Team_jsx("div", {
    className: classes.deco
  }), Team_jsx(Container_default.a, {
    fixed: isDesktop
  }, Team_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -300,
    delay: "0.2s",
    duration: "0.6s"
  }, Team_jsx(Title["a" /* default */], {
    head: t('common:architect-landing.team_title'),
    desc: t('common:architect-landing.team_desc')
  })), Team_jsx("div", {
    className: classes.teamWrap
  }, Team_jsx(Grid_default.a, {
    container: true,
    spacing: isMobile ? 2 : 6
  }, team.map((item, index) => Team_jsx(Grid_default.a, {
    item: true,
    md: 4,
    xs: 6,
    key: index.toString()
  }, Team_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -50,
    delay: `${0.2 + 0.1 * index}s`,
    duration: "0.3s"
  }, Team_jsx("div", null, Team_jsx(Profile, {
    photo: item.photo,
    name: item.name,
    title: item.title
  })))))))));
}

/* harmony default export */ var Team = (Object(i18n["withTranslation"])(['architect-landing'])(Team_Featured));
// CONCATENATED MODULE: ./components/Team/index.js

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// CONCATENATED MODULE: ./components/Parallax/Box.js
var Box_jsx = external_react_default.a.createElement;




function Box_ParallaxDots() {
  const classes = Object(parallax_style["a" /* default */])();
  return Box_jsx("div", {
    className: external_clsx_default()(classes.parallaxWrap, classes.parallaxBox)
  }, Box_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Box_jsx("div", {
    className: classes.innerParallax
  }, Box_jsx(external_react_scroll_parallax_["Parallax"], {
    tagOuter: "figure",
    y: [-10, -10]
  }, Box_jsx("div", {
    className: classes.bigBox
  })), Box_jsx(external_react_scroll_parallax_["Parallax"], {
    tagOuter: "figure",
    y: [-10, -10]
  }, Box_jsx("div", {
    className: classes.smallBox
  })))));
}
// CONCATENATED MODULE: ./components/Counter/counter-style.js


const counterStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    padding: theme.spacing(10, 0, 5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: 20
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0
    }
  },
  counterWrap: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      '&:before': {
        content: '""',
        width: 300,
        height: 250,
        position: 'absolute',
        left: -30,
        top: -30,
        background: theme.palette.secondary.main,
        opacity: 0.5
      },
      '&:after': {
        content: '""',
        width: 150,
        height: 180,
        position: 'absolute',
        right: -120,
        top: 170,
        background: theme.palette.primary.main,
        opacity: 0.5
      }
    }
  },
  paper: {
    background: Object(colorManipulator_["fade"])(theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.background.paper, 0.7),
    backdropFilter: 'saturate(90%) blur(20px)',
    position: 'relative',
    zIndex: 20,
    padding: theme.spacing(15, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 3)
    }
  },
  text: {},
  counterItem: {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    },
    '& i': {
      color: theme.palette.primary.main,
      fontSize: 55,
      marginRight: theme.spacing(2),
      [theme.breakpoints.only('sm')]: {
        marginRight: 0
      }
    }
  }
}));
/* harmony default export */ var counter_style = (counterStyles);
// CONCATENATED MODULE: ./components/Counter/Counter.js
var Counter_jsx = external_react_default.a.createElement;












function Counter(props) {
  const classes = counter_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  const {
    0: play,
    1: setPlay
  } = Object(external_react_["useState"])(false);

  const countup = (val, isPlay) => Counter_jsx("span", null, isPlay ? Counter_jsx(external_react_countup_default.a, {
    end: val
  }) : 0);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 500);
  };

  return Counter_jsx("div", {
    className: classes.root
  }, Counter_jsx(Container_default.a, {
    maxWidth: "md"
  }, Counter_jsx("div", {
    className: classes.counterWrap
  }, Counter_jsx(Box_ParallaxDots, null), Counter_jsx(Paper_default.a, {
    className: classes.paper
  }, Counter_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    alignItems: "center",
    spacing: 6
  }, Counter_jsx(Grid_default.a, {
    sm: 4,
    xs: 12,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("i", {
    className: "ion-ios-people-outline"
  }), Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h4",
    className: text.title
  }, countup(20, play)), Counter_jsx(Typography_default.a, {
    variant: "h6",
    className: text.subtitle2
  }, t('common:architect-landing.counter_expert'))))), Counter_jsx(Grid_default.a, {
    sm: 4,
    xs: 12,
    item: true
  }, Counter_jsx(external_react_wow_default.a, {
    animation: "fadeIn",
    offset: 300,
    callback: handlePlay
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("i", {
    className: "ion-ios-briefcase-outline"
  }), Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h4",
    className: text.title
  }, countup(123, play)), Counter_jsx(Typography_default.a, {
    variant: "h6",
    className: text.subtitle2
  }, t('common:architect-landing.counter_completed')))))), Counter_jsx(Grid_default.a, {
    sm: 4,
    xs: 12,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("i", {
    className: "ion-ios-heart-outline"
  }), Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h4",
    className: text.title
  }, countup(89, play)), Counter_jsx(Typography_default.a, {
    variant: "h6",
    className: text.subtitle2
  }, t('common:architect-landing.counter_happy'))))))))));
}

/* harmony default export */ var Counter_Counter = (Object(i18n["withTranslation"])(['architect-landing'])(Counter));
// CONCATENATED MODULE: ./components/Counter/index.js

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__("DRbO");
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// CONCATENATED MODULE: ./components/Blog/blog-style.js

const blog_style_blogStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-15)
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& h3': {
      marginBottom: theme.spacing(3)
    },
    '& h5': {
      marginBottom: theme.spacing(2)
    },
    '& nav': {
      width: 80,
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-5),
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row-reverse'
      },
      '& button': {
        display: 'block',
        width: 40,
        height: 40,
        borderRadius: 0,
        padding: 0,
        background: theme.palette.secondary.dark,
        '& svg': {
          width: 40,
          height: 40,
          verticalAlign: 'middle',
          fill: theme.palette.common.white
        },
        '&:hover': {
          background: theme.palette.secondary.main
        }
      }
    }
  },
  next: {
    position: 'relative',
    marginLeft: theme.spacing(5)
  },
  readMore: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-1)
    }
  }
}));
/* harmony default export */ var blog_style = (blog_style_blogStyles);
// CONCATENATED MODULE: ./components/Blog/Blog.js
var Blog_jsx = external_react_default.a.createElement;













const blogContent = [{
  title: 'Sed imperdiet enim ligula eget suscipit orc',
  desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.'
}, {
  title: 'Donec commodo convallis ligula eget suscipit orc',
  desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.'
}, {
  title: 'Vivamus sit amet interdum elit',
  desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.'
}, {
  title: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',
  desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.'
}, {
  title: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.'
}];

function Blog() {
  const {
    0: current,
    1: setCur
  } = Object(external_react_["useState"])(2);
  const classes = blog_style();
  const text = Object(common["a" /* useText */])();
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));

  const next = () => {
    setCur(current + 1);
  };

  const prev = () => {
    setCur(current - 1);
  };

  return Blog_jsx("div", {
    className: classes.root
  }, Blog_jsx(Container_default.a, {
    fixed: true
  }, Blog_jsx(Grid_default.a, {
    container: true,
    spacing: 10,
    direction: isDesktop ? 'row' : 'column-reverse'
  }, Blog_jsx(Grid_default.a, {
    item: true,
    md: 3,
    xs: 12
  }, Blog_jsx(Hidden_default.a, {
    smDown: true
  }, current > 1 && Blog_jsx(external_react_["Fragment"], null, Blog_jsx(Typography_default.a, {
    variant: "h5",
    className: text.title2
  }, current < 10 && 0, current - 1), Blog_jsx(Typography_default.a, {
    className: text.paragraph
  }, blogContent[current - 2].title))), Blog_jsx("nav", null, Blog_jsx(IconButton_default.a, {
    className: classes.next,
    onClick: next,
    disabled: current >= blogContent.length
  }, Blog_jsx(KeyboardArrowRight_default.a, null)), Blog_jsx(IconButton_default.a, {
    className: classes.back,
    onClick: prev,
    disabled: current <= 1
  }, Blog_jsx(KeyboardArrowLeft_default.a, null)))), Blog_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Blog_jsx("article", null, Blog_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title2
  }, blogContent[current - 1].title), Blog_jsx(Typography_default.a, {
    className: text.paragraph
  }, blogContent[current - 1].desc)), Blog_jsx(Button_default.a, {
    className: classes.readMore
  }, "Read More")), Blog_jsx(Grid_default.a, {
    item: true,
    md: 3,
    xs: 12
  }, Blog_jsx(Hidden_default.a, {
    smDown: true
  }, current < blogContent.length && Blog_jsx(external_react_["Fragment"], null, Blog_jsx(Typography_default.a, {
    variant: "h5",
    className: text.title2
  }, current < 10 && 0, current + 1), Blog_jsx(Typography_default.a, {
    className: text.paragraph
  }, blogContent[current].title)))))));
}

/* harmony default export */ var Blog_Blog = (Blog);
// CONCATENATED MODULE: ./components/Blog/index.js

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "react-parallax"
var external_react_parallax_ = __webpack_require__("qr8A");

// CONCATENATED MODULE: ./components/SubscribeForm/subscribe-style.js


const subscribeStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center'
  },
  parallaxWrap: {
    height: 570,
    width: '100%'
  },
  form: {
    backdropFilter: 'saturate(90%) blur(10px)',
    background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.8),
    maxWidth: 700,
    margin: '0 auto',
    marginTop: theme.spacing(-45),
    width: '100%',
    display: 'block',
    borderBottom: `7px solid ${theme.palette.primary.main}`,
    color: theme.palette.text.secondary,
    position: 'relative',
    bottom: theme.spacing(-10),
    padding: theme.spacing(5, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 10)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5)
    },
    '& h4': {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(3)
    }
  },
  field: {
    margin: theme.spacing(3, 0, 4)
  },
  button: {
    margin: '0 auto',
    minWidth: 185
  }
}));
/* harmony default export */ var subscribe_style = (subscribeStyles);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./controller/support/Support.js
var Support = __webpack_require__("GPWk");

// CONCATENATED MODULE: ./controller/support/SubscriptionController.js



const SubscriptionController = ({
  children
}) => {
  const [createSupport, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(Support["a" /* MUTATION_CREATE_SUPPORT */]);
  if (loading) return null;
  if (error) console.log("error: ", error);
  if (!createSupport) return null;
  return children({
    createSupport,
    loading
  });
};

/* harmony default export */ var support_SubscriptionController = (SubscriptionController);
// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.js
var SubscribeForm_jsx = external_react_default.a.createElement;














function SubscribeForm(props) {
  const classes = subscribe_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])('');
  const {
    0: openNotif,
    1: setNotif
  } = Object(external_react_["useState"])(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const handleClose = () => {
    setNotif(false);
  };

  return SubscribeForm_jsx("div", {
    className: classes.root
  }, SubscribeForm_jsx(external_react_parallax_["Parallax"], {
    blur: 0,
    bgImage: images_imgAPI.architect[15],
    bgImageAlt: "benefit",
    strength: 300
  }, SubscribeForm_jsx("div", {
    className: classes.parallaxWrap
  })), SubscribeForm_jsx(Snackbar_default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    key: "top right",
    open: openNotif,
    autoHideDuration: 4000,
    onClose: handleClose,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: SubscribeForm_jsx("span", {
      id: "message-id"
    }, "Thank you! You subscribed.")
  }), SubscribeForm_jsx(Container_default.a, {
    fixed: true
  }, SubscribeForm_jsx(Paper_default.a, {
    className: classes.form
  }, SubscribeForm_jsx(Typography_default.a, {
    variant: "h4",
    className: text.title2
  }, t('common:architect-landing.subscribe_title')), SubscribeForm_jsx(Typography_default.a, {
    className: text.subtitle2
  }, t('common:architect-landing.subscribe_subtitle')), SubscribeForm_jsx(support_SubscriptionController, null, data => {
    const {
      createSupport,
      loading
    } = data;
    return SubscribeForm_jsx("form", null, SubscribeForm_jsx(TextField_default.a, {
      className: classes.field,
      fullWidth: true,
      label: t('common:architect-landing.subscribe_input'),
      placeholder: t('common:architect-landing.subscribe_input'),
      onChange: e => handleChange(e),
      value: value
    }), SubscribeForm_jsx(Button_default.a, {
      onClick: () => {
        createSupport({
          variables: {
            input: {
              email: value,
              appId: "3e005e83-7aea-4ca0-8c03-d3d3daaf8227"
            }
          }
        }).then(res => {
          setNotif(true);
          setValue("");
        }).catch(error => console.log(error));
      },
      disabled: !value,
      variant: "contained",
      size: "large",
      color: "secondary",
      className: classes.button
    }, t('common:architect-landing.subscribe_subscribe')));
  }))));
}

/* harmony default export */ var SubscribeForm_SubscribeForm = (Object(i18n["withTranslation"])(['architect-landing'])(SubscribeForm));
// CONCATENATED MODULE: ./components/SubscribeForm/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 2 modules
var Footer = __webpack_require__("Fl18");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__("ZVwq");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowUpward"
var ArrowUpward_ = __webpack_require__("Ek77");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__("dlhf");

// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = Object(styles_["makeStyles"])(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    borderRadius: 0,
    background: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.common.white,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.secondary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.secondary.main}`,
        display: 'block',
        transition: 'all 0.4s ease',
        transform: 'rotate(45deg)'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.dark}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14,
    borderRadius: 0
  }
}));
/* harmony default export */ var pagenav_style = (pagenav);
// CONCATENATED MODULE: ./components/PageNav/PageNav.js
var PageNav_jsx = external_react_default.a.createElement;

function PageNav_extends() { PageNav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PageNav_extends.apply(this, arguments); }












function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const PageNav_LinkBtn = external_react_default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return PageNav_jsx(external_react_anchor_link_smooth_scroll_default.a, PageNav_extends({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav(props) {
  const {
    t
  } = props;
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = pagenav_style();
  const {
    0: menuList
  } = Object(external_react_["useState"])([createData(1, menu["a" /* default */][0], '#' + menu["a" /* default */][0].replace(/ /g, '_')), createData(2, menu["a" /* default */][1], '#' + menu["a" /* default */][1].replace(/ /g, '_')), createData(3, menu["a" /* default */][2], '#' + menu["a" /* default */][2].replace(/ /g, '_')), createData(4, menu["a" /* default */][3], '#' + menu["a" /* default */][3].replace(/ /g, '_'))]);
  return PageNav_jsx("div", {
    className: external_clsx_default()(classes.pageNav, show && classes.show)
  }, PageNav_jsx("nav", {
    className: classes.sectionNav
  }, PageNav_jsx(external_react_scrollspy_default.a, {
    items: menu["a" /* default */],
    currentClassName: "active"
  }, menuList.map(item => PageNav_jsx("li", {
    key: item.id.toString(),
    style: {
      top: 30 * (menu["a" /* default */].length - item.id)
    },
    "data-id": item.id
  }, PageNav_jsx(Tooltip_default.a, {
    title: t('common:architect-landing.header_' + item.name),
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, PageNav_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: item.url
  })))))), PageNav_jsx(Tooltip_default.a, {
    title: "To Top",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, PageNav_jsx(Fab_default.a, {
    color: "secondary",
    "aria-label": "To top",
    component: PageNav_LinkBtn,
    href: "#home",
    className: classes.fab
  }, PageNav_jsx(ArrowUpward_default.a, null))));
}

/* harmony default export */ var PageNav_PageNav = (Object(i18n["withTranslation"])(['architect-landing'])(PageNav));
// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 2 modules
var Notification = __webpack_require__("AeAN");

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;





















const sectionMargin = margin => margin * 20;

const pages_useStyles = Object(styles_["makeStyles"])(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  },
  spaceBottom: {
    paddingBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      paddingBottom: sectionMargin(6)
    }
  },
  spaceBottomShort: {
    paddingBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      paddingTop: sectionMargin(6)
    }
  },
  spaceTopShort: {
    paddingTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = pages_useStyles();
  const theme = Object(styles_["useTheme"])();
  const isTablet = useMediaQuery_default()(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('xs'));
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, brand_default.a.architect.name, "\xA0 - Home Page")), pages_jsx(CssBaseline_default.a, null), pages_jsx("div", {
    className: classes.mainWrap
  }, pages_jsx(Header["a" /* default */], {
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir
  }), pages_jsx("main", {
    className: classes.containerWrap
  }, pages_jsx("section", {
    id: "home"
  }, pages_jsx(VideoBanner, null)), pages_jsx("section", {
    id: "services",
    className: classes.spaceTopShort
  }, pages_jsx(Services_Services, null)), pages_jsx("section", {
    id: "project",
    className: isMobile ? classes.spaceTopShort : classes.spaceTop
  }, pages_jsx(Project_Project, null)), pages_jsx("section", {
    id: "featured",
    className: isMobile ? classes.spaceTopShort : classes.spaceTop
  }, pages_jsx(Featured_Featured, null)), pages_jsx("section", {
    id: "about"
  }, pages_jsx("div", {
    className: isTablet ? classes.spaceTopShort : classes.spaceTop
  }, pages_jsx(About_About, null)), pages_jsx("div", null, pages_jsx(Counter_Counter, null))), pages_jsx("section", {
    id: "subscribe",
    className: classes.spaceTopShort
  }, pages_jsx(SubscribeForm_SubscribeForm, null)), pages_jsx(Footer["a" /* default */], {
    toggleDir: onToggleDir
  })), pages_jsx(Hidden_default.a, {
    mdDown: true
  }, pages_jsx(PageNav_PageNav, null)), pages_jsx(Notification["a" /* default */], null)));
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'architect-landing']
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "VnM+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XfbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "XnMA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "aBSv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cross-deco-dark-0ed234bc1c7b29ffc81d8d2781f2c531.png";

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "c4qM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxCross; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K0LP");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Is15");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ParallaxCross() {
  const classes = Object(_parallax_style__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.parallaxWrap, classes.crossWrap)
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], null, __jsx("div", {
    className: classes.innerParallax
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [0, 0],
    tagOuter: "figure"
  }, __jsx("div", {
    className: classes.parallaxCross
  })))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (true) {
      const rewriteUrlForNextExport = __webpack_require__("ddid").rewriteUrlForNextExport;

      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = rewriteUrlForNextExport(props.href);
      }
    }

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cXR6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipNext");

/***/ }),

/***/ "dGmP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pause");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ddid":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/rewrite-url-for-export.js");

/***/ }),

/***/ "dlhf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menu = ['home', 'services', 'project', 'about'];
/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),

/***/ "ela+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrow");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (true) {
      const rewriteUrlForNextExport = __webpack_require__("P5f7").rewriteUrlForNextExport;

      return rewriteUrlForNextExport(url);
    } else {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (true) {
        const rewriteUrlForNextExport = __webpack_require__("P5f7").rewriteUrlForNextExport; // @ts-ignore this is temporarily global (attached to window)


        if (__NEXT_DATA__.nextExport) {
          as = rewriteUrlForNextExport(as);
        }
      }

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fA+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "n1EF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nd8x":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "o507":
/***/ (function(module, exports) {

module.exports = {
  use: true
};

/***/ }),

/***/ "oLQh":
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "pN9Q":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "qTeW":
/***/ (function(module, exports) {



/***/ }),

/***/ "qr8A":
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "wL+U":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cross-deco-light-a426a39e2fb298f5acd15e70325e101b.png";

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zFT3":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDc0cHgiIHZpZXdCb3g9IjAgMCA1MDAgNDc0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmRvd25sb2FkPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJkb3dubG9hZCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjNENBRjUwIiBwb2ludHM9IjQ5OS4xIDE1OS43IDI0OS45IDMxOS4xIDAuOSAxNjAuMiAyNTAuNCAwLjciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNjAuMDAwMDAwKSIgZmlsbD0iIzJFN0QzMiIgaWQ9IlBhdGgiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjUwIDI2My44IDAuNiA4NC45IDAuOSAwLjMgMjUwIDE2MC41Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIwLjkgNDkuOCAyNTAgMTYwLjcgMjUwIDMxMy4zIDAuOSAxNTMuMSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwLjAwMDAwMCwgMTYwLjAwMDAwMCkiIGZpbGw9IiM0Q0FGNTAiIGlkPSJQYXRoIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjI0OS40IDQ5LjggMCAyMjguNyAwLjMgMzEzLjMgMjQ5LjQgMTUzLjEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjAuMyAyNjMuOCAyNDkuNCAxNTMgMjQ5LjQgMC4zIDAuMyAxNjAuNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9Ik11a3RhLUJvbGQsIE11a3RhIiBmb250LXNpemU9IjMwMCIgZm9udC13ZWlnaHQ9ImJvbGQiPgogICAgICAgICAgICAgICAgPHRleHQgaWQ9Ik5hIj4KICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0iNzMuNiIgeT0iMzM5Ij5OYTwvdHNwYW4+CiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "zwGQ":
/***/ (function(module, exports) {

module.exports = {
  architect: {
    name: 'Navi Architect',
    desc: 'Navi Architect - React Single Landing Page Template',
    prefix: 'navi',
    footerText: 'Navi Architect 2020',
    logoText: 'Navi Architect',
    projectName: 'Architect',
    url: 'luxireact.ux-maestro.com/architect',
    img: '/static/images/navi-archi-logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ })

/******/ });