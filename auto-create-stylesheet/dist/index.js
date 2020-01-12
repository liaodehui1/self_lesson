'use strict';

var program = require('commander');
var create = require('./create');

program.version('1.0.0', '-v, --version').command('create [inputPath]').alias('c').description('Create the stylesheet of react native').option('-o, --output [outputPath]', 'the path of stylesheet').action(function (inputPath, option) {
  create(inputPath, option.output);
});

program.parse(process.argv);