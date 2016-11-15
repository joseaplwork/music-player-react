const testsContext = require.context('../app/', true, /.test.js$/);
testsContext.keys().forEach(testsContext);
