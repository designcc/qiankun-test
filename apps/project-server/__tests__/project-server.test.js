'use strict';

const projectServer = require('..');
const assert = require('assert').strict;

assert.strictEqual(projectServer(), 'Hello from projectServer');
console.info('projectServer tests passed');
