'use strict';

var getColorWithKeyCss = require('./getColorWithKeyCss.js');
var mergeDeep = require('./mergeDeep.js');
require('deepmerge');

const colorHandler = (props, isAction = true) => {
  const textColorHover = mergeDeep.mergeDeep(props.$textColor?.variant, props.$textColor?.hover),
    textColorActive = mergeDeep.mergeDeep(textColorHover, props.$textColor?.active),
    bgColorHover = mergeDeep.mergeDeep(props.$bgColor?.variant, props.$bgColor?.hover),
    bgColorActive = mergeDeep.mergeDeep(bgColorHover, props.$bgColor?.active),
    borderColor = props.$borderColor?.variant,
    borderColorHover = mergeDeep.mergeDeep(borderColor, props.$borderColor?.hover),
    borderColorActive = mergeDeep.mergeDeep(borderColorHover, props.$borderColor?.active);
  return `
  &:disabled{
    ${getColorWithKeyCss.getColorWithKeyCss({
    name: "color",
    color: {
      name: "txt"
    },
    props
  })}
    ${getColorWithKeyCss.getColorWithKeyCss({
    name: "background-color",
    color: {
      name: "grey"
    },
    props
  })}
    ${getColorWithKeyCss.getColorWithKeyCss({
    name: "border-color",
    color: {
      name: "grey"
    },
    props
  })}
  }

  &:not(:disabled){
    ${textColorActive || props.$textColor?.variant ? getColorWithKeyCss.getColorWithKeyCss({
    name: "color",
    color: props.$isActive ? textColorActive : props.$textColor?.variant,
    props
  }) : ""}
   
    ${bgColorActive || props.$bgColor?.variant ? getColorWithKeyCss.getColorWithKeyCss({
    name: "background-color",
    color: props.$isActive ? bgColorActive : props.$bgColor?.variant,
    props
  }) : "background-color : transparent;"}
    ${borderColor || borderColorActive ? getColorWithKeyCss.getColorWithKeyCss({
    name: "border-color",
    color: props.$isActive ? borderColorActive : borderColor,
    props
  }) : "border-color : transparent;"}
    ${isAction && !props.$isActive ? `
    &:hover{
      ${textColorHover ? getColorWithKeyCss.getColorWithKeyCss({
    name: "color",
    color: textColorHover,
    props
  }) : ""}
      ${bgColorHover ? getColorWithKeyCss.getColorWithKeyCss({
    name: "background-color",
    color: bgColorHover,
    props
  }) : ""}
      ${borderColorHover ? getColorWithKeyCss.getColorWithKeyCss({
    name: "border-color",
    color: borderColorHover,
    props
  }) : ""}
    }
    &:active{
      ${textColorActive ? getColorWithKeyCss.getColorWithKeyCss({
    name: "color",
    color: textColorActive,
    props
  }) : ""}
      ${bgColorActive ? getColorWithKeyCss.getColorWithKeyCss({
    name: "background-color",
    color: bgColorActive,
    props
  }) : ""}
      ${borderColorActive ? getColorWithKeyCss.getColorWithKeyCss({
    name: "border-color",
    color: borderColorActive,
    props
  }) : ""}
    }
    ` : ""}
  `;
};

exports.colorHandler = colorHandler;
