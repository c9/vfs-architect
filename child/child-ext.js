var assert = require("assert");

module.exports = function setup(options, imports, register) {

    assert.equal(typeof options.uid, "number", "option 'uid' is required");
    assert.equal(typeof options.gid, "number", "option 'gid' is required");
    assert(options.root, "option 'root' is required");

    require("vfs/child")(options, function(err, vfs) {
        register(err, {
            "vfs": vfs
        });
    });
}