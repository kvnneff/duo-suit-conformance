var rework = require('rework');
var conformance = require('rework-suit-conformance');

/**
 * Export `plugin`
 */

module.exports = plugin;

/**
 * SUITCSS Conformance plugin
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function plugin(opts) {
    opts = opts || {};

    return function suit(file, duo, done) {
        if ('css' != file.type) return;
        try {
            rework(file.src).use(conformance);
        } catch(err) {
            return done(err);
        }
        return done();
    };
};