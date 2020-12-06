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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "6Av6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "ALdH":
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

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/icons/Send"
var Send_ = __webpack_require__("6Av6");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__("OL+V");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalPhone"
var LocalPhone_ = __webpack_require__("H8f9");
var LocalPhone_default = /*#__PURE__*/__webpack_require__.n(LocalPhone_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "react-material-ui-form-validator"
var external_react_material_ui_form_validator_ = __webpack_require__("i+P/");

// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__("yOsI");

// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__("DbTw");

// EXTERNAL MODULE: ./public/images/architect-logo.svg
var architect_logo = __webpack_require__("l7Ki");
var architect_logo_default = /*#__PURE__*/__webpack_require__.n(architect_logo);

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// CONCATENATED MODULE: ./components/Forms/form-style.js


const contactStyles = Object(styles_["makeStyles"])(theme => ({
  title: {},
  bgDeco: {
    position: 'absolute',
    top: -80,
    right: 0,
    width: '60%',
    height: 700,
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    transform: 'skew(0, 10deg)'
  },
  parallax: {
    position: 'absolute',
    right: -100,
    top: 300
  },
  pageWrap: {
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(10, 5),
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 1)
    },
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      }
    }
  },
  innerWrap: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  fullFromWrap: {
    padding: theme.spacing(1, 0, 9)
  },
  formBox: {
    position: 'relative',
    zIndex: 100,
    [theme.breakpoints.up('md')]: {
      backdropFilter: 'saturate(90%) blur(10px)',
      background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.9)
    },
    [theme.breakpoints.down('md')]: {
      boxShadow: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none',
      background: 'none'
    }
  },
  wrapDeco: {
    position: 'relative'
  },
  frmDeco: {
    width: 250,
    height: 250,
    position: 'absolute',
    background: theme.palette.secondary.main,
    bottom: -32,
    opacity: 0.5,
    left: -30
  },
  desc: {
    fontSize: 20,
    color: theme.palette.text.secondary
  },
  input: {
    width: '100%'
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2)
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  btnArea: {
    marginTop: theme.spacing(5),
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      '& button': {
        marginTop: theme.spacing(4),
        width: '100%'
      }
    },
    '& button': {
      marginTop: theme.spacing(2),
      minHeight: 48,
      fontSize: 18
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  },
  checkArea: {
    marginTop: theme.spacing(5),
    color: theme.palette.text.primary
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1
      }
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  flex: {},
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
      textAlign: 'center'
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  signArrow: {},
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8)
    }
  },
  map: {
    height: 640,
    top: 120,
    position: 'relative',
    zIndex: 20,
    marginLeft: theme.spacing(-6),
    boxShadow: '0 0 20px 1px rgba(0, 0, 0, 0.4)'
  },
  bubelWrap: {
    position: 'relative'
  },
  buble: {
    borderRadius: 10,
    padding: theme.spacing(2),
    width: 450,
    left: -250,
    top: -300,
    '& p': {
      fontSize: 13
    }
  },
  icon: {
    color: '#607D8B',
    marginRight: theme.spacing(),
    marginTop: theme.spacing(2),
    top: 4,
    position: 'relative',
    fontSize: 16
  }
}));
/* harmony default export */ var form_style = (contactStyles);
// EXTERNAL MODULE: ./components/Parallax/Cross.js
var Cross = __webpack_require__("c4qM");

// EXTERNAL MODULE: ./components/Title/index.js + 2 modules
var Title = __webpack_require__("PiLd");

// EXTERNAL MODULE: ./controller/support/Support.js
var Support = __webpack_require__("GPWk");

// CONCATENATED MODULE: ./controller/support/CreateSupportController.js



const CreateSupportController = ({
  children
}) => {
  const client = Object(react_hooks_["useApolloClient"])();
  const [createSupport, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(Support["a" /* MUTATION_CREATE_SUPPORT */], {});
  if (loading) return null;
  if (error) console.log("error: ", error.message);
  return children({
    createSupport,
    loading
  });
};

/* harmony default export */ var support_CreateSupportController = (CreateSupportController);
// CONCATENATED MODULE: ./components/Forms/Contact.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































function BubleMark() {
  const classes = form_style();
  return __jsx("div", {
    className: classes.bubelWrap
  }, __jsx("div", {
    className: classes.buble
  }, __jsx(Typography_default.a, {
    variant: "h6",
    gutterBottom: true
  }, "Head Quarter"), __jsx(Grid_default.a, {
    container: true
  }, __jsx(Grid_default.a, {
    item: true,
    sm: 6,
    xs: 12
  }, __jsx(Typography_default.a, null, __jsx(LocalPhone_default.a, {
    className: classes.icon
  }), "+98 765 432 10")), __jsx(Grid_default.a, {
    item: true,
    sm: 6,
    xs: 12
  }, __jsx(Typography_default.a, null, __jsx(Email_default.a, {
    className: classes.icon
  }), "hello@luxi.com")), __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(Typography_default.a, null, __jsx(LocationOn_default.a, {
    className: classes.icon
  }), "Lorem ipsum street Block C - Vestibullum Building")))));
}

function MapContainer(props) {
  const {
    0: activeMarker,
    1: setActive
  } = Object(external_react_["useState"])({});
  const {
    0: showingInfoWindow,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const {
    google
  } = props;

  const onMarkerClick = marker => {
    setActive(marker);
    setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return __jsx(external_google_maps_react_["Map"], {
    google: google,
    onClick: onMapClicked,
    style: {
      width: '100%',
      height: '700px',
      position: 'relative'
    },
    initialCenter: {
      lat: 37.759703,
      lng: -122.428093
    },
    zoom: 14
  }, __jsx(external_google_maps_react_["Marker"], {
    onClick: onMarkerClick,
    position: {
      lat: 37.759703,
      lng: -122.428093
    }
  }), __jsx(external_google_maps_react_["InfoWindow"], {
    marker: activeMarker,
    visible: showingInfoWindow
  }, __jsx("div", null, __jsx(BubleMark, null))));
}

const MapWithAMarker = Object(external_google_maps_react_["GoogleApiWrapper"])({
  apiKey: null
})(MapContainer);
const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
};

function Contact(props) {
  const classes = form_style();
  const text = Object(common["a" /* useText */])();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    0: values,
    1: setValues
  } = Object(external_react_["useState"])(initialState);
  const {
    0: openNotif,
    1: setNotif
  } = Object(external_react_["useState"])(false);
  const {
    0: check,
    1: setCheck
  } = Object(external_react_["useState"])(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {};

  const handleClose = () => {
    setNotif(false);
  };

  return __jsx("div", {
    className: classes.pageWrap
  }, __jsx(Hidden_default.a, {
    mdDown: true
  }, __jsx("div", {
    className: classes.bgDeco
  })), __jsx("div", {
    className: classes.parallax
  }, __jsx(Cross["a" /* default */], null)), __jsx(Snackbar_default.a, {
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
    message: __jsx("span", {
      id: "message-id"
    }, "Message Sent")
  }), __jsx(Hidden_default.a, {
    mdUp: true
  }, __jsx("div", {
    className: external_clsx_default()(classes.logo, classes.logoHeader)
  }, __jsx("a", {
    href: text_link["a" /* default */].architect.home
  }, __jsx("img", {
    src: architect_logo_default.a,
    alt: "logo"
  }), __jsx(Typography_default.a, {
    component: "span"
  }, brand_default.a.architect.projectName)))), __jsx(Container_default.a, {
    maxWidth: "lg",
    className: classes.innerWrap
  }, __jsx(IconButton_default.a, {
    href: text_link["a" /* default */].architect.home,
    className: classes.backtohome
  }, __jsx("i", {
    className: "ion-ios-home-outline"
  }), __jsx("i", {
    className: "ion-ios-arrow-thin-left"
  })), __jsx(Grid_default.a, {
    container: true
  }, __jsx(Grid_default.a, {
    item: true,
    lg: 1,
    xs: 12
  }), __jsx(Grid_default.a, {
    item: true,
    lg: 5,
    xs: 12,
    className: classes.wrapDeco
  }, __jsx(Hidden_default.a, {
    mdDown: true
  }, __jsx("div", {
    className: classes.frmDeco
  })), __jsx(Paper_default.a, {
    className: external_clsx_default()(classes.formBox, 'fragment-fadeUp')
  }, __jsx("div", {
    className: classes.fullFromWrap
  }, __jsx(support_CreateSupportController, null, data => {
    const {
      createSupport,
      loading
    } = data;
    return __jsx("div", {
      className: classes.form
    }, __jsx(Title["a" /* default */], {
      head: "Contact Us",
      desc: t('common:contact_subtitle')
    }), __jsx(external_react_material_ui_form_validator_["ValidatorForm"], {
      onSubmit: () => {
        createSupport({
          variables: {
            input: {
              name: values.name,
              email: values.email,
              phone: values.phone,
              message: values.message,
              appId: "3e005e83-7aea-4ca0-8c03-d3d3daaf8227"
            }
          }
        }).then(res => {
          setNotif(true);
          setValues(initialState);
        }).catch(error => console.log("error: ", error));
      },
      onError: errors => console.log(errors)
    }, __jsx(Grid_default.a, {
      container: true,
      spacing: 6
    }, __jsx(Grid_default.a, {
      item: true,
      xs: 12
    }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
      className: classes.input,
      label: t('common:form_name'),
      onChange: handleChange('name'),
      name: "Name",
      value: values.name,
      validators: ['required'],
      errorMessages: ['this field is required']
    })), __jsx(Grid_default.a, {
      item: true,
      xs: 12
    }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
      className: classes.input,
      label: t('common:form_email'),
      onChange: handleChange('email'),
      name: "Email",
      value: values.email,
      validators: ['required', 'isEmail'],
      errorMessages: ['this field is required', 'email is not valid']
    })), __jsx(Grid_default.a, {
      item: true,
      xs: 12
    }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
      className: classes.input,
      label: t('common:form_phone'),
      onChange: handleChange('phone'),
      name: "Phone",
      value: values.phone
    })), __jsx(Grid_default.a, {
      item: true,
      xs: 12
    }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
      multiline: true,
      rows: "6",
      className: classes.input,
      label: t('common:form_message'),
      onChange: handleChange('message'),
      name: "Message",
      value: values.message
    }))), __jsx(FormControlLabel_default.a, {
      className: classes.checkArea,
      control: __jsx(Checkbox_default.a, {
        checked: check,
        onChange: e => handleCheck(e),
        color: "primary",
        value: "check"
      }),
      label: __jsx("span", {
        className: text.paragraph
      }, t('common:form_terms'), __jsx("br", null), __jsx("a", {
        href: "#"
      }, t('common:form_privacy')))
    }), __jsx("div", {
      className: classes.btnArea
    }, __jsx(Button_default.a, {
      disabled: !check || !values.name || !values.email,
      variant: "contained",
      fullWidth: isMobile,
      type: "submit",
      color: "primary",
      size: "large"
    }, t('common:form_send'), __jsx(Send_default.a, {
      className: classes.rightIcon
    })))));
  })))), __jsx(Grid_default.a, {
    item: true,
    lg: 6,
    xs: 12
  }, __jsx(Hidden_default.a, {
    mdDown: true
  }, __jsx(Paper_default.a, {
    className: classes.map,
    elevation: 10
  }, __jsx(MapWithAMarker, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: __jsx("div", {
      style: {
        height: '100%'
      }
    }),
    containerElement: __jsx("div", {
      style: {
        height: '700px'
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: '100%'
      }
    })
  })))))));
}

/* harmony default export */ var Forms_Contact = (Object(i18n["withTranslation"])(['common'])(Contact));
// CONCATENATED MODULE: ./pages/contact.js
var contact_jsx = external_react_default.a.createElement;





const useStyles = Object(styles_["makeStyles"])(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  }
}));

function contact_Contact() {
  const classes = useStyles();
  return contact_jsx(external_react_["Fragment"], null, contact_jsx(head_default.a, null, contact_jsx("title", null, brand_default.a.architect.name, "\xA0 - Contact")), contact_jsx("div", {
    className: classes.mainWrap
  }, contact_jsx(Forms_Contact, null)));
}

contact_Contact.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_Contact);

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

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

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

/***/ "H8f9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalPhone");

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

/***/ "OL+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

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

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "aBSv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cross-deco-dark-0ed234bc1c7b29ffc81d8d2781f2c531.png";

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

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "i+P/":
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

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

/***/ "l7Ki":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRDQUY1MDt9Cgkuc3Qxe2ZpbGw6IzJFN0QzMjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNTA1LjEsMTc4LjcgMjU1LjksMzM4LjEgNi45LDE3OS4yIDI1Ni40LDE5LjcgCQkiLz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNTYsNDQyLjggNi42LDI2My45IDYuOSwxNzkuMyAyNTYsMzM5LjUgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNi45LDIyOC44IDI1NiwzMzkuNyAyNTYsNDkyLjMgNi45LDMzMi4xIAkJCSIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1MDUuNCwyMjguOCAyNTYsNDA3LjcgMjU2LjMsNDkyLjMgNTA1LjQsMzMyLjEgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjU2LjMsNDQyLjggNTA1LjQsMzMyIDUwNS40LDE3OS4zIDI1Ni4zLDMzOS41IAkJCSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDMuNCwzNTJWMTU2LjRoMjQuM3YxNzMuOWg5MC45VjM1MkgxMDMuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjY5LjksMjg5Ljl2LTk5LjFoMjMuMnY5Ny43YzAsMjguNywxNi4xLDQ2LjksNDYsNDYuOWMyOS45LDAsNDYuMy0xOC4yLDQ2LjMtNDYuOXYtOTcuN2gyMy4ydjk5LjEKCQkJYzAsMzkuOS0yMy41LDY1LjctNjkuNSw2NS43QzI5My4xLDM1NS42LDI2OS45LDMyOS41LDI2OS45LDI4OS45eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "wL+U":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cross-deco-light-a426a39e2fb298f5acd15e70325e101b.png";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yOsI":
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

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