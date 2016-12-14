require('babel-register')();

var mockrequire = require('mock-require');

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

mockrequire('components', process.cwd() + '/src/components');
mockrequire('containers', process.cwd() + '/src/containers');
mockrequire('utils', process.cwd() + '/src/utils');


documentRef = document;
