import { objectByString } from './objectByString.js';

const checkSizing = ({
  keyCss,
  props,
  keyJson = keyCss
}) => {
  const keyCssWithoutPrefix = keyCss.slice(keyCss.lastIndexOf(".") + 1, keyCss.length);
  switch (props.$sizing) {
    case "lg":
      return keyCssWithoutPrefix + ": " + (objectByString(props.theme.style.sizing, keyJson + "-lg") || "") + ";";
    case "sm":
      return keyCssWithoutPrefix + ": " + (objectByString(props.theme.style.sizing, keyJson + "-sm") || "") + ";";
    default:
      return keyCssWithoutPrefix + ": " + (objectByString(props.theme.style.sizing, keyJson) || "") + ";";
  }
};

export { checkSizing };
