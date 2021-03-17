import React, {
  forwardRef,
  Component,
  useRef,
  useState,
  useEffect,
} from 'react';
import { isFunction, isObject } from 'lodash';
import ReactDom from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '.selection-backmark {\n  background-color: #e5e5e5;\n  padding: 1px 20px;\n  position: relative;\n}\n.selection-container {\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 2px rgba(138, 113, 113, 0.03);\n  border-radius: 4px;\n  outline: none;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 5px;\n}\n.selection-container span {\n  font-size: 14px;\n  line-height: 2em;\n}\n';
styleInject(css_248z);

var css_248z$1 =
  ':root {\n  --ck-color-shadow-drop: rgba(0, 0, 0, 0.15);\n  --ck-color-shadow-drop-active: rgba(0, 0, 0, 0.2);\n}\n.jason-design-pop-plugin {\n  box-sizing: border-box;\n  display: none;\n  margin: 0;\n  padding: 10px 0 0 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.5715;\n  position: absolute;\n  z-index: 1030;\n  font-weight: 400;\n  white-space: normal;\n  text-align: left;\n  cursor: pointer;\n}\n.jason-design-pop-plugin .jason-design-pop-content {\n  box-sizing: border-box;\n}\n.jason-design-pop-plugin .jason-design-pop-content .jason-design-pop-arrow {\n  left: 50%;\n  box-sizing: border-box;\n  transform: translateX(-50%) rotate(-135deg);\n  top: 6.2px;\n  border-color: #e5e5e5;\n  --ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);\n  --ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);\n  position: absolute;\n  display: block;\n  width: 8.48528137px;\n  height: 8.48528137px;\n  background: 0 0;\n  border-style: solid;\n  border-width: 4.24264069px;\n}\n.jason-design-pop-plugin .jason-design-pop-content .jason-design-pop-inner-content {\n  box-sizing: border-box;\n  box-shadow: 2px, 0 0;\n  min-height: 15px;\n  background: #e5e5e5;\n  color: rgba(0, 0, 0, 0.85);\n  border: 1px solid #e5e5e5;\n  padding: 5px;\n}\n';
styleInject(css_248z$1);

var PopPlugin = function PopPlugin(_ref) {
  var propsRef = _ref.propsRef,
    currentRange = _ref.currentRange,
    editor = _ref.editor;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'jason-design-pop-plugin',
      ref: propsRef,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'jason-design-pop-content',
      },
      /*#__PURE__*/ React.createElement('div', {
        className: 'jason-design-pop-arrow',
      }),
      editor.buttonView.map(function(button) {
        var _button$Tconfig, _button$Tconfig$label, _button$Tconfig2;

        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'jason-design-pop-inner-content',
            key:
              button === null || button === void 0
                ? void 0
                : (_button$Tconfig = button.Tconfig) === null ||
                  _button$Tconfig === void 0
                ? void 0
                : (_button$Tconfig$label = _button$Tconfig.label) === null ||
                  _button$Tconfig$label === void 0
                ? void 0
                : _button$Tconfig$label.toString(),
            onMouseDown: function onMouseDown(e) {
              e.preventDefault();
              button.EffectFn(e, currentRange.current);
            },
          },
          button === null || button === void 0
            ? void 0
            : (_button$Tconfig2 = button.Tconfig) === null ||
              _button$Tconfig2 === void 0
            ? void 0
            : _button$Tconfig2.label,
        );
      }),
    ),
  );
};

var PopPluginRef = /*#__PURE__*/ forwardRef(function(props, ref) {
  return /*#__PURE__*/ React.createElement(
    PopPlugin,
    Object.assign({}, props, {
      propsRef: ref,
    }),
  );
});

var AbstractPlugin = /*#__PURE__*/ (function() {
  function AbstractPlugin(editor) {
    _classCallCheck(this, AbstractPlugin);

    this.editor = editor;
  }

  _createClass(AbstractPlugin, [
    {
      key: 'listenTo',
      value: function listenTo(buttonView, effectFn) {
        buttonView.effect(effectFn);
        this.editor.buttonView.push(buttonView);
      },
    },
  ]);

  return AbstractPlugin;
})();

var SeriesHook = /*#__PURE__*/ (function() {
  function SeriesHook() {
    _classCallCheck(this, SeriesHook);

    this.tasks = new Map();
  }

  _createClass(SeriesHook, [
    {
      key: 'tap',
      value: function tap(name, task) {
        if (this.tasks.has(name)) {
          var _this$tasks$get;

          (_this$tasks$get = this.tasks.get(name)) === null ||
          _this$tasks$get === void 0
            ? void 0
            : _this$tasks$get.push(task);
        } else {
          var arr = [];
          this.tasks.set(name, arr);
          arr.push(task);
        }
      },
    },
    {
      key: 'call',
      value: function call(name) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        if (this.tasks.has(name)) {
          var taskArr = this.tasks.get(name);
          var cb = args.pop();
          taskArr === null || taskArr === void 0
            ? void 0
            : taskArr.forEach(function(task) {
                task(args);
              });
          isFunction(cb) && cb();
        }
      },
    },
  ]);

  return SeriesHook;
})();

var Editor = /*#__PURE__*/ (function() {
  function Editor() {
    _classCallCheck(this, Editor);

    this.range = null;
    this.instances = new Map();
    this.buttonView = [];
    this.commands = new Map();
    this.hooks = {
      beforeInit: new SeriesHook(),
      init: new SeriesHook(),
      beforeExecute: new SeriesHook(),
      execute: new SeriesHook(),
    };
  }

  _createClass(Editor, [
    {
      key: 'init',
      value: function init(config) {
        var _this = this;

        this.hooks.beforeInit.call('editor');
        config.plugins.forEach(function(P) {
          var Plu = new P(_this);
          Plu.init();
        });
        this.hooks.init.call('editor');
      },
    },
    {
      key: 'execute',
      value: function execute(name) {
        this.hooks.beforeExecute.call('editor');

        if (this.commands.has(name)) {
          var fn = this.commands.get(name);

          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          var result = fn && fn.apply(void 0, args);
          this.hooks.execute.call('editor', result);
        } else {
          throw new Error('不存在该方法');
        }
      },
    },
    {
      key: 'register',
      value: function register(name, fn) {
        if (isFunction(fn)) {
          if (this.commands.has(name)) {
            throw new Error('已经存在该方法');
          }

          this.commands.set(name, fn);
          return true;
        } else {
          throw new Error('已经存在该方法');
        }
      },
    },
    {
      key: 'instance',
      value: function instance(name, _instance) {
        if (isObject(_instance)) {
          if (this.instances.has(name)) {
            throw new Error('已经存在该实例');
          }

          this.instances.set(name, _instance);
          return true;
        } else {
          throw new Error('已经存在该实例');
        }
      },
    },
    {
      key: 'getInstance',
      value: function getInstance(name) {
        if (this.instances.has(name)) {
          return this.instances.get(name);
        } else {
          throw new Error('不存在该实例');
        }
      },
    },
    {
      key: 'setRange',
      value: function setRange(range) {
        this.range = range;
      },
    },
  ]);

  return Editor;
})();

var RenderInBody = /*#__PURE__*/ (function(_Component) {
  _inherits(RenderInBody, _Component);

  var _super = _createSuper(RenderInBody);

  function RenderInBody(props) {
    _classCallCheck(this, RenderInBody);

    return _super.call(this, props);
  }

  _createClass(RenderInBody, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        //新建一个div标签并塞进body
        this.popup = document.createElement('div');
        document.body.appendChild(this.popup);

        this._renderLayer();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this._renderLayer();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        //在组件卸载的时候，保证弹层也被卸载掉
        ReactDom.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
      },
    },
    {
      key: '_renderLayer',
      value: function _renderLayer() {
        //将弹层渲染到body下的div标签
        ReactDom.render(this.props.children, this.popup);
      },
    },
    {
      key: 'render',
      value: function render() {
        return null;
      },
    },
  ]);

  return RenderInBody;
})(Component);

/**
 *
 * @param id
 * @param value
 * @param onSelect
 * @param onInit
 * @param configs
 */

var Container = function Container(_ref) {
  var id = _ref.id,
    onSelect = _ref.onSelect,
    config = _ref.config,
    html = _ref.html,
    onInit = _ref.onInit;
  // 控制pop
  var divRef = /*#__PURE__*/ React.createRef();
  var rangeRef = useRef(null);

  var _useState = useState(new Editor()),
    _useState2 = _slicedToArray(_useState, 2),
    editor = _useState2[0],
    setEditor = _useState2[1];

  useEffect(function() {
    document.execCommand('defaultParagraphSeparator', false, 'p');
    onInit && onInit(editor);
    editor.init(config);
  }, []); //

  useEffect(
    function() {
      if (document.getElementById(id) !== null) {
        document.getElementById(id).onmousedown = function(e) {};

        document.getElementById(id).onmouseup = function(e) {
          e.stopPropagation();
          var selection = document.getSelection();
          var dom = divRef.current;

          if (
            selection === null || selection === void 0
              ? void 0
              : selection.isCollapsed
          ) {
            dom === null || dom === void 0
              ? void 0
              : dom.setAttribute('style', 'display: none');
          } else {
            var _dom$innerText$length;

            var range =
              selection === null || selection === void 0
                ? void 0
                : selection.getRangeAt(0);
            rangeRef.current = range;
            editor.setRange(range !== null && range !== void 0 ? range : null);
            dom === null || dom === void 0
              ? void 0
              : dom.setAttribute(
                  'style',
                  'display: block;top: '
                    .concat(e.clientY, 'px;left:')
                    .concat(
                      e.clientX -
                        (((_dom$innerText$length =
                          dom === null || dom === void 0
                            ? void 0
                            : dom.innerText.length) !== null &&
                        _dom$innerText$length !== void 0
                          ? _dom$innerText$length
                          : 0) *
                          14 +
                          12) /
                          2,
                      'px',
                    ),
                );
            onSelect && onSelect(e, selection); // selection && selection.removeAllRanges(); // 这个remove还是很重要的
          }
        };

        document.onmouseup = function() {
          var dom = divRef.current;
          dom === null || dom === void 0
            ? void 0
            : dom.setAttribute('style', 'display: none');
        };
      }

      return function() {
        document.getElementById(id).onmouseup = function() {};

        document.onmouseup = function() {};
      };
    },
    [id, onInit, config],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'selection-backmark',
      style: {
        height: 400,
      },
    },
    /*#__PURE__*/ React.createElement('div', {
      id: id,
      className: 'selection-container',
      contentEditable: true,
      spellCheck: true,
      dangerouslySetInnerHTML: {
        __html: html,
      },
    }),
    /*#__PURE__*/ React.createElement(
      RenderInBody,
      null,
      /*#__PURE__*/ React.createElement(PopPluginRef, {
        ref: divRef,
        currentRange: rangeRef,
        editor: editor,
      }),
    ),
  );
};

var ButtonView = /*#__PURE__*/ (function() {
  function ButtonView() {
    _classCallCheck(this, ButtonView);
  }

  _createClass(ButtonView, [
    {
      key: 'set',
      value: function set(config) {
        this.Tconfig = config;
      },
    },
    {
      key: 'effect',
      value: function effect(effectFn) {
        this.EffectFn = effectFn;
      },
    },
  ]);

  return ButtonView;
})();

export { AbstractPlugin, ButtonView, Container };
