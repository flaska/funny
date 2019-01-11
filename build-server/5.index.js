exports.ids = [5];
exports.modules = {

/***/ "./src/modules/leftMenu/leftMenuSettings.component.js":
/*!************************************************************!*\
  !*** ./src/modules/leftMenu/leftMenuSettings.component.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftMenuSettings; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_functions_icon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/functions/icon.service */ "./src/modules/utils/functions/icon.service.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_functions_feedsCache_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/functions/feedsCache.provider */ "./src/modules/utils/functions/feedsCache.provider.js");
/* harmony import */ var _material_ui_core_es_DialogContent_DialogContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/es/DialogContent/DialogContent */ "./node_modules/@material-ui/core/es/DialogContent/DialogContent.js");






var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\leftMenu\\leftMenuSettings.component.js";











var styles = {
  feedIcon: {
    marginRight: 0,
    marginLeft: 10
  },
  buttons: {
    textAlign: 'right'
  }
};

var LeftMenuSettings =
/*#__PURE__*/
function (_React$Component) {
  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LeftMenuSettings, _React$Component);

  function LeftMenuSettings(props) {
    var _this;

    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LeftMenuSettings);

    _this = Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LeftMenuSettings).call(this, props));
    _this.state = {
      feedOptions: _utils_functions_feedsCache_provider__WEBPACK_IMPORTED_MODULE_15__["default"].getAllFeeds()
    };
    return _this;
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LeftMenuSettings, [{
    key: "getFeedOptions",
    value: function getFeedOptions() {
      var _this2 = this;

      return this.state.feedOptions.map(function (feed, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
          button: true,
          key: feed.name,
          className: "leftMenu_feedSource",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13___default.a, {
          checked: feed.enabled,
          onChange: function onChange() {
            _this2.state.feedOptions[i].enabled = !_this2.state.feedOptions[i].enabled;

            _this2.setState({
              feedOptions: _this2.state.feedOptions
            });
          },
          color: "primary",
          id: 'leftMenuSettings_' + feed.tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11___default.a, {
          style: styles.feedIcon,
          className: "leftMenu_selectSource",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, Object(_utils_functions_icon_service__WEBPACK_IMPORTED_MODULE_9__["provideIcon"])(feed.icon)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default.a, {
          primary: feed.name,
          className: "leftMenu_selectSource",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
      });
    }
  }, {
    key: "saveSelectedFeeds",
    value: function saveSelectedFeeds() {
      _utils_functions_feedsCache_provider__WEBPACK_IMPORTED_MODULE_15__["default"].saveSelectedFeeds(this.state.feedOptions);
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          onClose = _this$props.onClose,
          other = Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["onClose"]);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default.a, Object.assign({
        onClose: onClose
      }, other, {
        id: "leftMenuSettingDialog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Show/Hide Feeds in Left Menu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_es_DialogContent_DialogContent__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.getFeedOptions(), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: styles.buttons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onClick: onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onClick: function onClick() {
          return _this3.saveSelectedFeeds();
        },
        variant: "contained",
        color: "secondary",
        id: "leftMenuSettings_save",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Save"))));
    }
  }]);

  return LeftMenuSettings;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

};;
//# sourceMappingURL=5.index.js.map