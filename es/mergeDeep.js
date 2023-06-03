import deepmerge from 'deepmerge';

const mergeDeep = (target = Object(), sources = Object()) => {
  const merge = deepmerge(target, sources);
  return Object.keys(merge).length > 0 ? merge : undefined;
};

export { mergeDeep };
