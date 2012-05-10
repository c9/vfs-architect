var port = process.env.PORT || 5656;

module.exports = {
    name: "VFS SSH",
    tmpdir: __dirname + "/../.architect",
    basePath: __dirname + "/..",
    containers: {
        master: {
            title: "VFS SSH",
            plugins: [{
                packagePath: "connect-architect/connect",
                port: port
            }, {
                packagePath: "./ssh",
                host: "localhost",
                root: process.env.HOME + "/",
                nodePath: process.execPath,
                httpRoot: "http://localhost:" + port + "/"
            }, {
                packagePath: "./http-adapter",
                mount: "/"
            }, {
                packagePath: "architect/plugins/architect.log"
            }]
        }
    }
};