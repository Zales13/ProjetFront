function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var InputComponent = function InputComponent(props) {
  var label = props.label,
      type = props.type,
      onChange = props.onChange;

  var _useState = React.useState(false),
      active = _useState[0],
      setActive = _useState[1];

  return React__default.createElement("div", {
    className: active ? "input_div active" : "input_div",
    onClick: function onClick() {
      return setActive(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setActive(false);
    }
  }, React__default.createElement("label", {
    htmlFor: ""
  }, label, " "), React__default.createElement("input", {
    type: type,
    className: "input",
    onChange: onChange
  }));
};

var SelectComponent = function SelectComponent(props) {
  return React__default.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React__default.createElement("select", Object.assign({
    className: "my-lib-ui-select"
  }, props), props.children));
};

var ButtonComponent = function ButtonComponent(props) {
  var onClick = props.onClick,
      children = props.children;

  var handelonClick = function handelonClick(e) {
    if (onClick) onClick(e);
  };

  return React__default.createElement("button", {
    className: "buttoncomponent",
    onClick: handelonClick
  }, " ", children, " ");
};

exports.ButtonComponent = ButtonComponent;
exports.InputTextComponent = InputComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
