import React, { useState } from 'react';

var InputComponent = function InputComponent(props) {
  var label = props.label,
      type = props.type,
      onChange = props.onChange;

  var _useState = useState(false),
      active = _useState[0],
      setActive = _useState[1];

  return React.createElement("div", {
    className: active ? "input_div active" : "input_div",
    onClick: function onClick() {
      return setActive(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setActive(false);
    }
  }, React.createElement("label", {
    htmlFor: ""
  }, label, " "), React.createElement("input", {
    type: type,
    className: "input",
    onChange: onChange
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

export { ButtonComponent, InputComponent as InputTextComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
