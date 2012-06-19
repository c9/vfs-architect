var assert = require("assert");

module.exports = function setup(options, imports, register) {

    assert(options.root, "option 'root' is required");

    register(null, {
        "vfs": require("vfs-local")(options)
    });
}