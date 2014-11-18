var assert = require('assert');
var Duo = require('duo');
var path = require('path');
var suitConformance = require('../');
var fixtures = path.join.bind(path, __dirname, 'fixtures');

describe('duo-suitConformance', function () {
    it('should error on invalid code', function (done) {
        var root = fixtures();
        var duo = Duo(root)
            .entry('invalid.css')
            .cache(false)
            .use(suitConformance());

        duo.run(function (err) {
            assert(err.message == 'Invalid selector ".MyComponent .other" near line 9:1. Please refer to the SUIT CSS naming conventions: github.com/suitcss/suit.');
            done();
        });
    });

    it('should not error on valid code', function (done) {
        var root = fixtures();
        var duo = Duo(root)
            .entry('valid.css')
            .cache(false)
            .use(suitConformance());

        duo.run(function (err) {
            assert(err === null);
            done();
        });
    })
});