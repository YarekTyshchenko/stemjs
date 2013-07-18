#!/usr/bin/env node

var path = require('path');

// Remember the directory we started from
var cwd = process.cwd();

// For each app
process.argv.slice(2).forEach(function(app) {
    // Resolve the JavaScript file
    var absolute = path.resolve(cwd, app);

    // Change directory to where the file is
    var directory = path.dirname(absolute);
    process.chdir(directory);

    // Run it
    require(absolute);
});