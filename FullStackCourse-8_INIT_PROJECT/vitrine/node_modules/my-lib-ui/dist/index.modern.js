import React from 'react';

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
