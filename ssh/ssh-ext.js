var assert = require("assert");

module.exports = function setup(options, imports, register) {

    assert(options.root, "option 'root' is required");
    assert(options.host, "option 'root' is required");
    assert(options.nodePath, "option 'root' is required");
    
    var sshMaster = require("vfs-ssh").Master;
    var master = new sshMaster(options);
    master.connect(function (err, vfs) {
        register(null, {
            "vfs": vfs
        });
    });
};