'use strict';

var defaultValues = require('./defaultValues.js');
var objectByString = require('./objectByString.js');
var mergeDeep = require('./mergeDeep.js');
var checkSizing = require('./checkSizing.js');
var getColorWithKeyCss = require('./getColorWithKeyCss.js');
var colorHandler = require('./colorHandler.js');
var stringArgsFunc = require('./stringArgsFunc.js');
require('deepmerge');



exports.fixNumbers = defaultValues.fixNumbers;
exports.getRandomIntInclusive = defaultValues.getRandomIntInclusive;
exports.just_persian = defaultValues.just_persian;
exports.objectByString = objectByString.objectByString;
exports.mergeDeep = mergeDeep.mergeDeep;
exports.checkSizing = checkSizing.checkSizing;
exports.getColorWithKeyCss = getColorWithKeyCss.getColorWithKeyCss;
exports.colorHandler = colorHandler.colorHandler;
exports.stringArgsFunc = stringArgsFunc.stringArgsFunc;
