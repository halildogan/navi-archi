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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y0NT");


/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

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

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

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

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

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

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

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

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: ./public/images/decoration/cross-deco-light.png
var cross_deco_light = __webpack_require__("wL+U");
var cross_deco_light_default = /*#__PURE__*/__webpack_require__.n(cross_deco_light);

// CONCATENATED MODULE: ./components/Error/error-style.js


const useStyles = Object(styles_["makeStyles"])(theme => ({
  errorWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: 720,
      marginBottom: theme.spacing(-30)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(20)
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    width: 200,
    height: 200,
    left: theme.spacing(-4),
    top: theme.spacing(8),
    '& h3': {
      color: theme.palette.common.white,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(11),
      position: 'relative',
      zIndex: 1
    },
    '&:before': {
      content: '""',
      width: 200,
      height: 200,
      position: 'absolute',
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
      top: theme.spacing(-8),
      left: theme.spacing(10)
    },
    '&:after': {
      content: '""',
      width: 200,
      height: 200,
      position: 'absolute',
      background: `url(${cross_deco_light_default.a}) repeat 0px -30px`,
      backgroundSize: '100%',
      top: theme.spacing(-12),
      left: theme.spacing(5)
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      margin: theme.spacing(15, 0, 0)
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));
/* harmony default export */ var error_style = (useStyles);
// CONCATENATED MODULE: ./components/Error/Error.js
var __jsx = external_react_default.a.createElement;








function Error(props) {
  const classes = error_style();
  const {
    errCode,
    text
  } = props;
  return __jsx("div", {
    className: classes.errorWrap
  }, __jsx(Container_default.a, {
    maxWidth: "lg"
  }, __jsx(Grid_default.a, {
    container: true
  }, __jsx(Grid_default.a, {
    item: true,
    sm: 5,
    xs: 12
  }, __jsx("div", {
    className: classes.flex
  }, __jsx("div", {
    className: classes.deco
  }, __jsx(Typography_default.a, {
    variant: "h3"
  }, errCode)))), __jsx(Grid_default.a, {
    item: true,
    sm: 7,
    xs: 12
  }, __jsx("div", {
    className: classes.text
  }, __jsx(Typography_default.a, {
    variant: "h4"
  }, text), __jsx(Typography_default.a, null, "You can either stay and chill here, or go back to the beginning."), __jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    href: text_link["a" /* default */].architect.home,
    className: classes.button
  }, "BACK TO HOME"))))));
}

Error.defaultProps = {
  errCode: '404',
  text: ''
};
/* harmony default export */ var Error_Error = (Error);
// CONCATENATED MODULE: ./components/Error/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 2 modules
var Footer = __webpack_require__("Fl18");

// EXTERNAL MODULE: ./components/Header/index.js + 4 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./pages/_error.js
var _error_jsx = external_react_default.a.createElement;









const styles = theme => ({
  dedicatedPage: {
    background: theme.palette.background.paper
  }
});

class _error_ErrorPage extends external_react_default.a.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    };
  }

  render() {
    const {
      onToggleDark,
      onToggleDir
    } = this.props;
    const {
      errorCode,
      stars,
      classes,
      t
    } = this.props;

    if (errorCode) {
      return _error_jsx(external_react_["Fragment"], null, _error_jsx(head_default.a, null, _error_jsx("title", null, brand_default.a.architect.name, "\xA0 -\xA0", errorCode)), _error_jsx("div", {
        className: classes.dedicatedPage
      }, _error_jsx(Header["a" /* default */], {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir,
        invert: true
      }), _error_jsx(Error_Error, {
        errorCode: errorCode,
        text: t('common:404')
      }), _error_jsx(Footer["a" /* default */], null)));
    }

    return _error_jsx("div", {
      className: classes.dedicatedPage
    }, t('description'), "Next stars:\xA0", stars);
  }

}

_error_ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0
};
/* harmony default export */ var _error = __webpack_exports__["default"] = (Object(i18n["withTranslation"])(['common'])(Object(styles_["withStyles"])(styles)(_error_ErrorPage)));

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

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

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

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

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

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

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