exports.ids = [6];
exports.modules = {

/***/ "./src/modules/utils/components/infoAlert.component.js":
/*!*************************************************************!*\
  !*** ./src/modules/utils/components/infoAlert.component.js ***!
  \*************************************************************/
/*! exports provided: InfoAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAlert", function() { return InfoAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_es_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/es/IconButton/IconButton */ "./node_modules/@material-ui/core/es/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\utils\\components\\infoAlert.component.js";




function InfoAlert(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: props.open,
    autoHideDuration: 1000,
    onClose: function onClose() {
      return props.onClose();
    },
    message: props.children,
    action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_es_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: function onClick() {
        return props.onClose();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}
;

/***/ }),

/***/ "./src/modules/utils/components/shareDialog.component.js":
/*!***************************************************************!*\
  !*** ./src/modules/utils/components/shareDialog.component.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareDialog; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_es_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/es/IconButton/IconButton */ "./node_modules/@material-ui/core/es/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_es_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/es/Button/Button */ "./node_modules/@material-ui/core/es/Button/Button.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _infoAlert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infoAlert.component */ "./src/modules/utils/components/infoAlert.component.js");
/* harmony import */ var _shareDialogButtons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shareDialogButtons.component */ "./src/modules/utils/components/shareDialogButtons.component.js");





var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\utils\\components\\shareDialog.component.js";









var ShareDialog =
/*#__PURE__*/
function (_React$Component) {
  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ShareDialog, _React$Component);

  function ShareDialog(props) {
    var _this;

    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShareDialog);

    _this = Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShareDialog).call(this, props));
    _this.state = {
      open: true
    };

    _this.requestPostCopy();

    return _this;
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShareDialog, [{
    key: "generateShareLink",
    value: function generateShareLink() {
      return 'https://www.4slack.com/sh/' + this.props.postData.id;
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
      this.props.onClose();
    }
  }, {
    key: "requestPostCopy",
    value: function requestPostCopy() {
      fetch('/api/sharePersist/persistPost?postId=' + this.props.postData.id, {
        method: 'PUT'
      }).then(function (response) {}).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "copyToClipboard",
    value: function copyToClipboard() {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_10___default()(this.generateShareLink());
      this.setState({
        linkCopied: true
      });
    }
  }, {
    key: "renderShareDialogContent",
    value: function renderShareDialogContent() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Share - ", this.props.postData.title.substr(0, 50), "...", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shareDialogButtons_component__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: this.props.postData.title,
        url: this.generateShareLink(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_es_Button_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "primary",
        onClick: function onClick() {
          _this2.copyToClipboard();
        },
        className: "cy_shareDialog_copyLink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Copy Link"), this.generateShareLink(), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_infoAlert_component__WEBPACK_IMPORTED_MODULE_11__["InfoAlert"], {
        open: this.state.linkCopied,
        onClose: function onClose() {
          return _this2.setState({
            linkCopied: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Link copied to clip-board..."));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (navigator.share) {
        navigator.share({
          title: this.props.postData.title,
          text: this.props.postData.title,
          url: this.generateShareLink()
        });
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        open: this.state.open,
        message: this.renderShareDialogContent(),
        action: [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_es_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: "close",
          color: "inherit",
          onClick: function onClick() {
            return _this3.close();
          },
          className: "cy_shareDialog_close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
    }
  }]);

  return ShareDialog;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/modules/utils/components/shareDialogButtons.component.js":
/*!**********************************************************************!*\
  !*** ./src/modules/utils/components/shareDialogButtons.component.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\utils\\components\\shareDialogButtons.component.js";


var styles = {
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    margin: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["FacebookShareButton"], {
    url: props.url,
    quote: props.text,
    style: styles.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["FacebookIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["TwitterShareButton"], {
    url: props.url,
    title: props.text,
    style: styles.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["TwitterIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["WhatsappShareButton"], {
    url: props.url,
    title: props.text,
    style: styles.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["WhatsappIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })));
});

/***/ })

};;
//# sourceMappingURL=6.index.js.map