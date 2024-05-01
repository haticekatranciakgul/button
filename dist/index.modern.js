import React from 'react';

var styles = {"btn":"_styles-module__btn__1Pz2d","primary":"_styles-module__primary__3ljpl","default":"_styles-module__default__3UK6o","dashed":"_styles-module__dashed__27xYC","text":"_styles-module__text__5bXm4","link":"_styles-module__link__71S8l"};

const Button = ({
  text,
  type
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: `${styles.btn} ${styles[type]}`
  }, text);
};
const Text = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("p", null, text);
};

export { Button, Text };
//# sourceMappingURL=index.modern.js.map
