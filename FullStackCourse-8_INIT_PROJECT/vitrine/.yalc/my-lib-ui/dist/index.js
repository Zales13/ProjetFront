function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var InputComponent = function InputComponent(props) {
  var label = props.label;
  return React.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React.createElement("label", {
    className: "my-lib-ui-label"
  }, label), React.createElement("input", Object.assign({}, props, {
    className: "my-lib-ui-input"
  })));
};

var SelectComponent = function SelectComponent(props) {
  return React.createElement("div", {
    className: "my-lib-ui-form-field"
  }, React.createElement("select", Object.assign({
    className: "my-lib-ui-select"
  }, props), props.children));
};

exports.InputTextComponent = InputComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
