'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var lodash = require('lodash');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

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
  '.selection-backmark {\n  background-color: #e5e5e5;\n  border: 1px solid #e5e5e5;\n  position: relative;\n}\n.selection-container {\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #fff;\n  box-shadow: 0 0 10px 2px rgba(138, 113, 113, 0.03);\n  border-radius: 4px;\n  outline: none;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 5px;\n}\n.selection-container span {\n  font-size: 14px;\n  line-height: 2em;\n}\n';
styleInject(css_248z);

var css_248z$1 =
  ':root {\n  --ck-color-shadow-drop: rgba(0, 0, 0, 0.15);\n  --ck-color-shadow-drop-active: rgba(0, 0, 0, 0.2);\n}\n.jason-design-pop-plugin {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 0 0 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.5715;\n  position: absolute;\n  z-index: 1030;\n  font-weight: 400;\n  white-space: normal;\n  text-align: left;\n  cursor: pointer;\n  visibility: hidden;\n}\n.jason-design-pop-plugin .jason-design-pop-content {\n  box-sizing: border-box;\n}\n.jason-design-pop-plugin .jason-design-pop-content .jason-design-pop-arrow {\n  left: 50%;\n  box-sizing: border-box;\n  transform: translateX(-50%) rotate(-135deg);\n  top: 6.2px;\n  border-color: #e5e5e5;\n  --ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);\n  --ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);\n  position: absolute;\n  display: block;\n  width: 8.48528137px;\n  height: 8.48528137px;\n  background: 0 0;\n  border-style: solid;\n  border-width: 4.24264069px;\n}\n.jason-design-pop-plugin .jason-design-pop-content .jason-design-pop-inner-content {\n  white-space: nowrap;\n  box-sizing: border-box;\n  box-shadow: 2px, 0 0;\n  min-height: 15px;\n  background: #e5e5e5;\n  color: rgba(0, 0, 0, 0.85);\n  border: 1px solid #e5e5e5;\n  padding: 5px;\n}\n';
styleInject(css_248z$1);

var isObject = function isObject(range) {
  var _startContainer$paren, _endContainer$parentN;

  var startContainer = range.startContainer,
    endContainer = range.endContainer;

  if (
    startContainer.nodeType === 3 &&
    ((_startContainer$paren = startContainer.parentNode) === null ||
    _startContainer$paren === void 0
      ? void 0
      : _startContainer$paren.nodeType) === 1 &&
    endContainer.nodeType === 3 &&
    ((_endContainer$parentN = endContainer.parentNode) === null ||
    _endContainer$parentN === void 0
      ? void 0
      : _endContainer$parentN.nodeType) === 1
  ) {
    return true;
  } else {
    return false;
  }
};

var PopPlugin = function PopPlugin(_ref) {
  var propsRef = _ref.propsRef,
    currentRange = _ref.currentRange,
    editor = _ref.editor;
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: 'jason-design-pop-plugin',
      ref: propsRef,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: 'jason-design-pop-content',
      },
      /*#__PURE__*/ React__default['default'].createElement('div', {
        className: 'jason-design-pop-arrow',
      }),
      editor.buttonView.map(function(button) {
        var _button$Tconfig, _button$Tconfig$label, _button$Tconfig2;

        if (button.visible === false) {
          return null;
        }

        return /*#__PURE__*/ React__default['default'].createElement(
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
              var _propsRef$current;

              isObject(currentRange.current);
              propsRef === null || propsRef === void 0
                ? void 0
                : (_propsRef$current = propsRef.current) === null ||
                  _propsRef$current === void 0
                ? void 0
                : _propsRef$current.setAttribute('style', 'visibility:hidden;');
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

var PopPluginRef = /*#__PURE__*/ React.forwardRef(function(props, ref) {
  return /*#__PURE__*/ React__default['default'].createElement(
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
          lodash.isFunction(cb) && cb();
        }
      },
    },
  ]);

  return SeriesHook;
})();

var Editor = /*#__PURE__*/ (function() {
  function Editor() {
    _classCallCheck(this, Editor);

    this.ele = null;
    this.range = null;
    this.observer = null;
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
        if (lodash.isFunction(fn)) {
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
        if (lodash.isObject(_instance)) {
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
      key: 'setEle',
      value: function setEle(ele) {
        this.ele = ele;
      },
    },
    {
      key: 'setRange',
      value: function setRange(range) {
        this.range = range;
      },
    },
    {
      key: 'setObserver',
      value: function setObserver(observer) {
        this.observer = observer;
      },
    },
    {
      key: 'getData',
      value: function getData() {
        if (this.ele !== null) {
          return this.ele.innerHTML;
        }

        throw new Error('不存在该元素');
      },
    },
  ]);

  return Editor;
})();

var checkVisiblePlugin = function checkVisiblePlugin(editor) {
  return (
    editor.buttonView.filter(function(button) {
      return button.visible;
    }).length !== 0
  );
};

/**
 * @param id
 * @param config
 * @param html
 * @param onSelect
 * @param onChange
 * @param onContainerClick
 * @param onInit
 */

var Container = function Container(_ref) {
  var id = _ref.id,
    onSelect = _ref.onSelect,
    onChange = _ref.onChange,
    onContainerClick = _ref.onContainerClick,
    config = _ref.config,
    html = _ref.html,
    onInit = _ref.onInit;
  // 控制pop
  var divRef = /*#__PURE__*/ React__default['default'].createRef();
  var rangeRef = React.useRef(null);
  var containerRef = React.useRef(null);

  var _useState = React.useState(new Editor()),
    _useState2 = _slicedToArray(_useState, 1),
    editor = _useState2[0];

  React.useEffect(function() {
    document.execCommand('defaultParagraphSeparator', false, 'p');
    onInit && onInit(editor);
    editor.init(config);
    return function() {
      var _editor$observer;

      (_editor$observer = editor.observer) === null ||
      _editor$observer === void 0
        ? void 0
        : _editor$observer.disconnect();
    };
  }, []);
  React.useEffect(
    function() {
      var ele = document.getElementById(id);
      var observer; // 绑定observer 以及 ele

      if (ele !== null && editor.observer === null) {
        var _config$observer$opti, _config$observer;

        editor.setEle(ele);
        observer = new MutationObserver(function(mutations, mutationObserver) {
          config.observer &&
            config.observer.callback(mutations, mutationObserver);
          onChange && onChange(editor.getData(), editor);
        });
        observer.observe(
          ele,
          (_config$observer$opti =
            config === null || config === void 0
              ? void 0
              : (_config$observer = config.observer) === null ||
                _config$observer === void 0
              ? void 0
              : _config$observer.options) !== null &&
            _config$observer$opti !== void 0
            ? _config$observer$opti
            : {
                attributes: true,
                characterData: true,
                childList: true,
                subtree: true,
                attributeOldValue: true,
                characterDataOldValue: true,
              },
        );
        editor.setObserver(observer);
      }

      editor.hooks.beforeExecute.tap('editor', function() {
        var dom = divRef.current;
        dom === null || dom === void 0
          ? void 0
          : dom.setAttribute('style', 'visibility:hidden;');
      });
      editor.hooks.execute.tap('editor', function() {
        var _window$getSelection;

        (_window$getSelection = window.getSelection()) === null ||
        _window$getSelection === void 0
          ? void 0
          : _window$getSelection.removeAllRanges();
      });
    },
    [config, onChange],
  );

  var onMouseDown = function onMouseDown() {
    var _window$getSelection2;

    (_window$getSelection2 = window.getSelection()) === null ||
    _window$getSelection2 === void 0
      ? void 0
      : _window$getSelection2.removeAllRanges();
  }; // 控制range以及buttonview

  var onMouseUp = function onMouseUp(e) {
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
        : dom.setAttribute('style', 'visibility:hidden;');
      rangeRef.current = null;
    } else {
      var range =
        selection === null || selection === void 0
          ? void 0
          : selection.getRangeAt(0);
      var rect = range && range.getBoundingClientRect();
      var contianer = containerRef.current.getBoundingClientRect();

      if (rect && contianer) {
        rangeRef.current = range;
        editor.setRange(range !== null && range !== void 0 ? range : null);
        dom === null || dom === void 0
          ? void 0
          : dom.setAttribute(
              'style',
              'visibility:visible;top: '
                .concat(
                  (rect === null || rect === void 0 ? void 0 : rect.y) -
                    contianer.y +
                    (rect === null || rect === void 0 ? void 0 : rect.height),
                  'px;left:',
                )
                .concat(
                  (rect === null || rect === void 0 ? void 0 : rect.x) -
                    contianer.x -
                    dom.offsetWidth / 2,
                  'px',
                ),
            );
        onSelect && onSelect(e, selection);
      } // selection && selection.removeAllRanges(); // 这个remove还是很重要的
    }

    onContainerClick && onContainerClick(e, editor);
  }; // 处理 删除元素问题保留一个p

  var onkeydownInEditable = function onkeydownInEditable(e) {
    if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Paste') {
      if ('<p><br></p>' === editor.getData().trim()) e.preventDefault();
    }
  };

  var onDocumentMouseUp = function onDocumentMouseUp() {
    var dom = divRef.current;
    dom === null || dom === void 0
      ? void 0
      : dom.setAttribute('style', 'visibility:hidden;');
  };

  React.useEffect(
    function() {
      var ele = document.getElementById(id);

      if (ele !== null && checkVisiblePlugin(editor)) {
        ele.addEventListener('keydown', onkeydownInEditable);
        ele.addEventListener('mousedown', onMouseDown);
        ele.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseup', onDocumentMouseUp);
      }

      return function() {
        ele === null || ele === void 0
          ? void 0
          : ele.removeEventListener('keydown', onkeydownInEditable);
        ele === null || ele === void 0
          ? void 0
          : ele.removeEventListener('mousedown', onMouseDown);
        ele === null || ele === void 0
          ? void 0
          : ele.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseup', onDocumentMouseUp);
      };
    },
    [id, onInit, config],
  );
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: 'selection-backmark',
      ref: containerRef,
    },
    /*#__PURE__*/ React__default['default'].createElement('div', {
      id: id,
      className: 'selection-container',
      contentEditable: true,
      spellCheck: true,
      dangerouslySetInnerHTML: {
        __html: html,
      },
    }),
    /*#__PURE__*/ React__default['default'].createElement(PopPluginRef, {
      ref: divRef,
      currentRange: rangeRef,
      editor: editor,
    }),
  );
};

var ButtonView = /*#__PURE__*/ (function() {
  function ButtonView() {
    _classCallCheck(this, ButtonView);

    this.visible = true;
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

exports.AbstractPlugin = AbstractPlugin;
exports.ButtonView = ButtonView;
exports.Container = Container;
