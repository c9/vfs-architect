var path = require("path");
var port = process.env.PORT || 5656;

module.exports = [
    {
        packagePath: "connect-architect/connect",
        port: port
    }, {
        packagePath: "./local",
        uid: process.getuid(),
        gid: process.getgid(),
        umask: 0750,
        root: path.normalize(__dirname + "/../"),
        skipSearchCheck: false,
        httpRoot: "http://localhost:" + port + "/"
    }, {
        packagePath: "./http-adapter",
        mount: "/vfs"
    }, {
        packagePath: "architect/plugins/architect.log"
    }
];