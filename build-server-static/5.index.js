exports.ids = [5];
exports.modules = {

/***/ "./src/modules/leftMenu/leftMenu.component.js":
/*!****************************************************!*\
  !*** ./src/modules/leftMenu/leftMenu.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftMenu; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_RssFeed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/RssFeed */ "./node_modules/@material-ui/icons/RssFeed.js");
/* harmony import */ var _material_ui_icons_RssFeed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RssFeed__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_functions_icon_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/functions/icon.service */ "./src/modules/utils/functions/icon.service.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_components_lazyLoad_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/components/lazyLoad.component */ "./src/modules/utils/components/lazyLoad.component.js");
/* harmony import */ var _utils_components_dialogLoading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/components/dialogLoading.component */ "./src/modules/utils/components/dialogLoading.component.js");
/* harmony import */ var _utils_components_lazyLoadError_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/components/lazyLoadError.component */ "./src/modules/utils/components/lazyLoadError.component.js");
/* harmony import */ var _utils_functions_feedsCache_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/functions/feedsCache.provider */ "./src/modules/utils/functions/feedsCache.provider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils_functions_analytics_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/functions/analytics.service */ "./src/modules/utils/functions/analytics.service.js");





var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\leftMenu\\leftMenu.component.js";

















var LeftMenuSettings = react__WEBPACK_IMPORTED_MODULE_5___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./leftMenuSettings.component */ "./src/modules/leftMenu/leftMenuSettings.component.js"));
});
var styles = {
  feedsTitle: {
    marginTop: 15,
    marginLeft: 25
  },
  feedsIcon: {
    marginRight: 10,
    marginTop: 7,
    display: 'inline-block'
  },
  settingsIcon: {
    float: 'right',
    marginRight: 15,
    marginLeft: 15
  },
  link: {
    textDecoration: 'none'
  },
  facebookLike: {
    margin: '7px 23px'
  }
};

var LeftMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LeftMenu, _React$Component);

  function LeftMenu(props) {
    var _this;

    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeftMenu);

    _this = Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LeftMenu).call(this, props));
    _this.state = {
      settingsOpen: false
    };
    return _this;
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftMenu, [{
    key: "onSelectFeedSource",
    value: function onSelectFeedSource(f) {
      this.props.onSelectFeedSource();
      _utils_functions_analytics_service__WEBPACK_IMPORTED_MODULE_21__["default"].triggerSwitchFeed(f.tag);
    }
  }, {
    key: "getFeedOptions",
    value: function getFeedOptions() {
      var _this2 = this;

      return _utils_functions_feedsCache_provider__WEBPACK_IMPORTED_MODULE_19__["default"].getEnabledFeeds().map(function (feed) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"], {
          to: "/f/".concat(feed.tag),
          key: feed.name,
          style: styles.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
          button: true,
          onClick: function onClick() {
            return _this2.onSelectFeedSource(feed);
          },
          className: "leftMenu_feedSource",
          id: 'leftMenu_changeSourceLink_' + feed.tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: styles.feedIcon,
          className: "leftMenu_selectSource",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, Object(_utils_functions_icon_service__WEBPACK_IMPORTED_MODULE_13__["provideIcon"])(feed.icon))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
          color: "primary",
          primary: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, feed.name),
          className: "leftMenu_selectSource",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        })));
      });
    }
  }, {
    key: "toggleSettings",
    value: function toggleSettings() {
      if (this.state.settingsOpen) this.setState({
        settingsOpen: false
      });else this.setState({
        settingsOpen: true
      });
    }
  }, {
    key: "renderSettings",
    value: function renderSettings() {
      var _this3 = this;

      if (this.state.settingsOpen) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utils_components_lazyLoad_component__WEBPACK_IMPORTED_MODULE_16__["default"], {
        loadingFallback: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utils_components_dialogLoading_component__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }),
        errorFallback: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utils_components_lazyLoadError_component__WEBPACK_IMPORTED_MODULE_18__["default"], {
          message: "Offline... cannot open settings...",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LeftMenuSettings, {
        open: this.state.settingsOpen,
        onClose: function onClose() {
          return _this3.toggleSettings();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
    }
  }, {
    key: "toggleFeedbackDialog",
    value: function toggleFeedbackDialog() {
      if (this.state.feedbackDialogOpen) this.setState({
        feedbackDialogOpen: false
      });else this.setState({
        feedbackDialogOpen: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
        open: this.props.open,
        onClose: function onClose() {
          return _this4.props.onClose();
        },
        id: "leftMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
        variant: "h5",
        style: styles.feedsTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_RssFeed__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: styles.feedsIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), "Feeds", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
        color: "primary",
        id: "openLeftMenuSettings",
        style: styles.settingsIcon,
        onClick: function onClick() {
          return _this4.toggleSettings();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.getFeedOptions()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "fb-like",
        "data-href": "https://www.4slack.com/",
        "data-layout": "button_count",
        style: styles.facebookLike,
        "data-action": "like",
        "data-size": "small",
        "data-show-faces": "false",
        "data-share": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), this.renderSettings());
    }
  }]);

  return LeftMenu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/modules/utils/functions/analytics.service.js":
/*!**********************************************************!*\
  !*** ./src/modules/utils/functions/analytics.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Analytics; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");


window.analytics = {};
var A = window.analytics;

var Analytics =
/*#__PURE__*/
function () {
  function Analytics() {
    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Analytics);
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Analytics, null, [{
    key: "setFeed",
    value: function setFeed(tag) {
      A.feed = tag;
    }
  }, {
    key: "triggerSwitchFeed",
    value: function triggerSwitchFeed(tag) {
      window.dataLayer.push({
        'event': 'switchFeedCustom',
        'switchFeedTarget': tag
      });
    }
  }]);

  return Analytics;
}();



/***/ }),

/***/ "./src/modules/utils/functions/feedsCache.provider.js":
/*!************************************************************!*\
  !*** ./src/modules/utils/functions/feedsCache.provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeedsCacheProvider; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.service */ "./src/modules/utils/functions/localStorage.service.js");




var getDefaultFeeds = __webpack_require__(/*! ../../../shared/redditFeeds */ "./src/shared/redditFeeds.js").getReactFeeds;

var FeedsCacheProvider =
/*#__PURE__*/
function () {
  function FeedsCacheProvider() {
    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeedsCacheProvider);
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeedsCacheProvider, null, [{
    key: "getAllFeeds",
    value: function getAllFeeds() {
      var localStorageFeeds2 = _localStorage_service__WEBPACK_IMPORTED_MODULE_2__["default"].getData('redditFeeds_v2');

      if (localStorageFeeds2) {
        var allFeeds = getDefaultFeeds();
        allFeeds.forEach(function (f) {
          if (localStorageFeeds2.indexOf(f.tag) !== -1) f.enabled = true;else f.enabled = false;
        });
        return allFeeds;
      }

      return getDefaultFeeds();
    }
  }, {
    key: "saveSelectedFeeds",
    value: function saveSelectedFeeds(feeds) {
      var toStore = feeds.filter(function (f) {
        return f.enabled;
      }).map(function (f) {
        return f.tag;
      });
      _localStorage_service__WEBPACK_IMPORTED_MODULE_2__["default"].saveData('redditFeeds_v2', toStore);
    }
  }, {
    key: "getEnabledFeeds",
    value: function getEnabledFeeds() {
      return this.getAllFeeds().filter(function (f) {
        return f.enabled;
      });
    }
  }, {
    key: "getDefaultFeed",
    value: function getDefaultFeed() {
      return this.getEnabledFeeds()[0];
    }
  }, {
    key: "getFeedByName",
    value: function getFeedByName(feedName) {
      return this.getEnabledFeeds().filter(function (f) {
        return f.tag === feedName;
      })[0];
    }
  }]);

  return FeedsCacheProvider;
}();



/***/ }),

/***/ "./src/modules/utils/functions/icon.service.js":
/*!*****************************************************!*\
  !*** ./src/modules/utils/functions/icon.service.js ***!
  \*****************************************************/
/*! exports provided: provideIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideIcon", function() { return provideIcon; });
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.mjs");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\utils\\functions\\icon.service.js";



var styles = {
  icon: {
    zoom: 1.2
  }
};
function provideIcon(iconName) {
  switch (iconName) {
    case 'md_face':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_0__["MdFace"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });

    case 'md_sentiment_very_satisfied':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_0__["MdSentimentVerySatisfied"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });

    case 'md_photo_camera':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_0__["MdPhotoCamera"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });

    case 'fa_paw':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPaw"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });

    case 'fa_globe-americas':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGlobeAmericas"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });

    case 'fa_hand-paper':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaHandPaper"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      });

    case 'fa_book-open':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBookOpen"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });

    case 'fa_dna':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaDna"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });

    case 'fa_clock':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaClock"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });

    case 'fa_surprise':
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaRegSurprise"], {
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
  }
}

/***/ }),

/***/ "./src/modules/utils/functions/localStorage.service.js":
/*!*************************************************************!*\
  !*** ./src/modules/utils/functions/localStorage.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");



var LocalStorage =
/*#__PURE__*/
function () {
  function LocalStorage() {
    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocalStorage);
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocalStorage, null, [{
    key: "saveData",
    value: function saveData(key, item) {
      return window.localStorage.setItem(key, JSON.stringify(item));
    }
  }, {
    key: "getData",
    value: function getData(key) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return LocalStorage;
}();



/***/ }),

/***/ "./src/shared/redditFeeds.js":
/*!***********************************!*\
  !*** ./src/shared/redditFeeds.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var feeds = [{
  fullName: 'Funny Pics & Videos',
  tag: 'funny',
  icon: 'md_sentiment_very_satisfied',
  defaultEnabled: true
}, {
  fullName: 'Aww Animals',
  tag: 'aww',
  icon: 'fa_paw',
  defaultEnabled: true
}, {
  fullName: 'Mildly Interesting',
  tag: 'mildlyinteresting',
  icon: 'fa_surprise',
  defaultEnabled: true
}, {
  fullName: 'Facepalm!',
  tag: 'facepalm',
  icon: 'fa_hand-paper',
  defaultEnabled: true
}, {
  fullName: 'Web Comics',
  tag: 'comics',
  icon: 'fa_book-open',
  defaultEnabled: true
}, {
  fullName: 'Interesting Pics',
  tag: 'pics',
  icon: 'md_photo_camera',
  defaultEnabled: true
}, {
  fullName: 'History',
  tag: 'history',
  icon: 'fa_clock',
  defaultEnabled: true
}, {
  fullName: 'Earth',
  tag: 'earth',
  icon: 'fa_globe-americas',
  defaultEnabled: false
}, {
  fullName: 'Troll Chromosomes',
  tag: 'TrollXChromosomes',
  icon: 'fa_dna',
  defaultEnabled: false
}];

function reactFeed(jsonFeed) {
  return {
    name: jsonFeed.fullName,
    icon: jsonFeed.icon,
    enabled: jsonFeed.defaultEnabled,
    tag: jsonFeed.tag
  };
}

function nodeFeed(jsonFeed) {
  return jsonFeed.tag;
}

exports.getReactFeeds = function () {
  return feeds.map(reactFeed);
};

exports.getNodeFeeds = function () {
  return feeds.map(nodeFeed);
};

/***/ })

};;
//# sourceMappingURL=5.index.js.map