var path = require('path');
var sassTrue = require('sass-true');
var assert = require('assert');
var sassFile = path.join(__dirname, 'text.spec.scss');
sassTrue.runSass({file: sassFile}, describe, it);
