import deepmerge from "deepmerge";

export const mergeDeep = (target = Object(), sources = Object()) => {
  const merge = deepmerge<object>(target, sources);
  return Object.keys(merge).length > 0 ? merge : undefined;
};
