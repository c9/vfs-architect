var port = process.env.PORT || 5656;

module.exports = [
    {
        packagePath: "connect-architect/connect",
        port: port
    }, {
        packagePath: "./ssh",
        host: "bmatusiak@dev.shcdn.biz",
        root: "/home/bmatusiak/",
        nodePath: "/usr/local/bin/node"
    }, {
        packagePath: "./http-adapter",
        mount: "/vfs"
    }, {
        packagePath: "architect/plugins/architect.log"
    }
];