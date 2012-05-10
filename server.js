#!/usr/bin/env node

var path = require('path');
var architect = require("architect");

var configName = process.argv[2] || "default";

var configPath = path.resolve(__dirname, "./configs/", configName);
var config = require(configPath);

architect.createApp(config, function (err, app) {
    if (err) {
        console.error("While starting the '%s':", configPath);
        throw err;
    }
    console.log("Started '%s'!", configPath);
});