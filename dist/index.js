function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"btn":"_styles-module__btn__1Pz2d","primary":"_styles-module__primary__3ljpl","default":"_styles-module__default__3UK6o","dashed":"_styles-module__dashed__27xYC","text":"_styles-module__text__5bXm4","link":"_styles-module__link__71S8l"};

const Button = _ref => {
  let {
    text,
    type
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    className: `${styles.btn} ${styles[type]}`
  }, text);
};
const Text = _ref2 => {
  let {
    text
  } = _ref2;
  return /*#__PURE__*/React.createElement("p", null, text);
};

exports.Button = Button;
exports.Text = Text;
//# sourceMappingURL=index.js.map
