function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var InputComponent = function InputComponent(props) {
  var label = props.label,
      type = props.type;
  return React.createElement("div", {
    className: "input_div"
  }, " ", React.createElement("label", {
    htmlFor: ""
  }, label, " "), " ", React.createElement("input", {
    type: type,
    className: "input"
  }));
};

var SelectComponent = function SelectComponent(props) {
  return React.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React.createElement("select", Object.assign({
    className: "my-lib-ui-select"
  }, props), props.children));
};

var ButtonComponent = function ButtonComponent(props) {
  var onClick = props.onClick,
      children = props.children;

  var handelonClick = function handelonClick(e) {
    if (onClick) onClick(e);
  };

  return React.createElement("button", {
    className: "buttoncomponent",
    onClick: handelonClick
  }, " ", children, " ");
};

exports.ButtonComponent = ButtonComponent;
exports.InputTextComponent = InputComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
