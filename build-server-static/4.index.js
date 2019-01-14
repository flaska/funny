exports.ids = [4];
exports.modules = {

/***/ "./node_modules/@material-ui/core/Divider/Divider.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/Divider/Divider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2
    }
  };
};

exports.styles = styles;

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      className = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["absolute", "classes", "className", "component", "inset", "light", "variant"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.inset, inset || variant === 'inset'), (0, _defineProperty2.default)(_classNames, classes.middle, variant === 'middle'), (0, _defineProperty2.default)(_classNames, classes.absolute, absolute), (0, _defineProperty2.default)(_classNames, classes.light, light), _classNames), className)
  }, other));
}

 true ? Divider.propTypes = {
  /**
   * Absolutely position the element.
   */
  absolute: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the divider will be indented.
   * __WARNING__: `inset` is deprecated.
   * Instead use `variant="inset"`.
   */
  inset: (0, _utils.chainPropTypes)(_propTypes.default.bool, function (props) {
    /* istanbul ignore if */
    if (props.inset) {
      return new Error('Material-UI: you are using the deprecated `inset` property ' + 'that will be removed in the next major release. The property `variant="inset"` ' + 'is equivalent and should be used instead.');
    }

    return null;
  }),

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes.default.bool,

  /**
   *  The variant to use.
   */
  variant: _propTypes.default.oneOf(['fullWidth', 'inset', 'middle'])
} : undefined;
Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  light: false,
  variant: 'fullWidth'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDivider'
})(Divider);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Divider/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Divider.default;
  }
});

var _Divider = _interopRequireDefault(__webpack_require__(/*! ./Divider */ "./node_modules/@material-ui/core/Divider/Divider.js"));

/***/ }),

/***/ "./src/modules/comments/comment.component.js":
/*!***************************************************!*\
  !*** ./src/modules/comments/comment.component.js ***!
  \***************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commentMetadata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commentMetadata.component */ "./src/modules/comments/commentMetadata.component.js");





var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\comments\\comment.component.js";




var styles = {
  replies: {
    marginLeft: 20
  }
};
var Comment =
/*#__PURE__*/
function (_React$Component) {
  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Comment, _React$Component);

  function Comment(props) {
    var _this;

    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Comment);

    _this = Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Comment).call(this, props));
    _this.state = {};
    if (_this.props.commentData.body) _this.state.body = _this.props.commentData.body.replace(/\n/g, '<br>');
    return _this;
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Comment, [{
    key: "showBody",
    value: function showBody(data) {
      if (!data.body) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_commentMetadata_component__WEBPACK_IMPORTED_MODULE_8__["CommentMetadata"], {
        commentData: this.props.commentData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        dangerouslySetInnerHTML: {
          __html: this.state.body
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }, {
    key: "isIndented",
    value: function isIndented(commentData) {
      if (commentData.body) return styles.replies;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.commentData || !this.props.commentData.replies) return null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.showBody(this.props.commentData), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: this.isIndented(this.props.commentData),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.props.commentData.replies.map(function (r) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Comment, {
          commentData: r,
          key: r._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        });
      })));
    }
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ }),

/***/ "./src/modules/comments/commentMetadata.component.js":
/*!***********************************************************!*\
  !*** ./src/modules/comments/commentMetadata.component.js ***!
  \***********************************************************/
/*! exports provided: CommentMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentMetadata", function() { return CommentMetadata; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_components_infoChip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/components/infoChip.component */ "./src/modules/utils/components/infoChip.component.js");
/* harmony import */ var _utils_functions_formatNumber_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions/formatNumber.function */ "./src/modules/utils/functions/formatNumber.function.js");
var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\comments\\commentMetadata.component.js";



function CommentMetadata(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_components_infoChip_component__WEBPACK_IMPORTED_MODULE_1__["InfoChip"], {
    icon: "md_face",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.commentData.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_components_infoChip_component__WEBPACK_IMPORTED_MODULE_1__["InfoChip"], {
    icon: "md_thumb_up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, Object(_utils_functions_formatNumber_function__WEBPACK_IMPORTED_MODULE_2__["formatNumber"])(props.commentData.score)));
}

/***/ }),

/***/ "./src/modules/comments/commentsList.component.js":
/*!********************************************************!*\
  !*** ./src/modules/comments/commentsList.component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentsList; });
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.component */ "./src/modules/comments/comment.component.js");
/* harmony import */ var _utils_components_infoChip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/components/infoChip.component */ "./src/modules/utils/components/infoChip.component.js");
/* harmony import */ var _utils_components_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/components/spinner.component */ "./src/modules/utils/components/spinner.component.js");





var _jsxFileName = "C:\\dev\\src\\REACT\\funny\\src\\modules\\comments\\commentsList.component.js";




var styles = {
  hint: {
    display: 'inline-block'
  },
  seeAllButton: {
    display: 'inline-block'
  }
};

var CommentsList =
/*#__PURE__*/
function (_React$Component) {
  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentsList, _React$Component);

  function CommentsList(props) {
    var _this;

    Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentsList);

    _this = Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentsList).call(this, props));
    _this.state = {
      postId: _this.props.postId,
      dataFetched: false
    };
    fetch('/api/reddit/comments?postId=' + _this.state.postId).then(function (response) {
      return response.json();
    }).then(function (response) {
      _this.setState({
        commentsRoot: response,
        dataFetched: true
      });
    });
    return _this;
  }

  Object(C_dev_src_REACT_funny_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentsList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.dataFetched) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utils_components_spinner_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "commentsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utils_components_infoChip_component__WEBPACK_IMPORTED_MODULE_7__["InfoChip"], {
        style: styles.hint,
        icon: "md_thumb_up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Top comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: styles.seeAllButton,
        className: "comments_openSource",
        onClick: function onClick() {
          _this2.props.onOpenSourceClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utils_components_infoChip_component__WEBPACK_IMPORTED_MODULE_7__["InfoChip"], {
        icon: "fa_comments",
        clickable: true,
        color: "primary",
        responsive: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "All Comments")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_comment_component__WEBPACK_IMPORTED_MODULE_6__["Comment"], {
        commentData: this.state.commentsRoot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }));
    }
  }]);

  return CommentsList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/modules/utils/functions/formatNumber.function.js":
/*!**************************************************************!*\
  !*** ./src/modules/utils/functions/formatNumber.function.js ***!
  \**************************************************************/
/*! exports provided: formatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
function formatNumber(n) {
  if (n < 1000) return n;
  return Math.floor(Math.round(n * 0.01)) * 0.1 + 'k';
}

/***/ })

};;
//# sourceMappingURL=4.index.js.map