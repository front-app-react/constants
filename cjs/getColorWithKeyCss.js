'use strict';

const getColorWithKeyCss = ({
  name,
  color,
  props
}) => {
  if (color) {
    return name + ":" + props.theme.style.getColor(color?.name, color?.mood, color?.opacity) + ";";
  }
  return "";
};

exports.getColorWithKeyCss = getColorWithKeyCss;
