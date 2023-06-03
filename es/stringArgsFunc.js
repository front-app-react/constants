const stringArgsFunc = (str, array) => {
  const splitText = str.split(/,(?=(?:(?:[^']*'){2})*[^']*$)/g);
  const args = splitText.slice(0, -1);
  const functionBody = splitText[splitText.length - 1];
  if (args.length > 0 && array.length === args.length) {
    return new Function(...args, functionBody)(...array);
  } else if (functionBody.slice(0, 6) === "return") {
    return new Function(functionBody);
  }
};

export { stringArgsFunc };
