var assert = require("assert");

module.exports = function setup(options, imports, register) {

    assert(options.root, "option 'root' is required");
    assert(options.host, "option 'host' is required");
    assert(options.nodePath, "option 'nodePath' is required");

    require("vfs/ssh")({
        pingInterval: options.pingInterval || 5000, //ms
        serverAliveInterval: options.serverAliveInterval || 10, //sec
        nodePath: options.nodePath,
        host: options.host,
        key: options.keyFile || null,
        umask: options.umask || 0750,
        uid: options.uid || process.getuid(),
        gid: options.uid || process.getgid(),
        skipSearchCheck: options.skipSearchCheck || false,
        root: options.root,
        httpRoot: options.httpRoot || null
    }, function(err, vfs) {
        register(err, {
            "vfs": vfs
        });
    })
}