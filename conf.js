// exports.config = {
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['todo-spec.js']
// };


exports.config = {
//seleniumAddress: 'http://localhost:4444/wd/hub',
//directConnect: true,
specs: ['todo-spec.js'],

capabilities: {
    'browserName': 'chrome',

},
useAllAngular2AppRoots: true,
framework: 'jasmine'
};