var mapStream = require("map-stream");
var path = require("path");
var fs = require("fs");

function processTemplates(options) {
  options = options || {};

  function doubleQuote(string) {
    return '"' + string + '"';
  }

  function notBlank(string) {
    return string.trim() != "";
  }

  return mapStream(function(file, callback) {
    if (file.isNull()) return callback(null, file);

    var includePath = options.includePath || path.dirname(file.path);
    var content = file.contents.toString("utf-8");

    content = content.replace(/\/\*\s*@include\s+([^\*]+)\*\//g, function(match, fileName) {
      var filePath = path.join(includePath, fileName.trim());
      return fs.readFileSync(filePath)
               .toString("utf-8")
               .replace(/"/g, "\\\"")
               .split("\n")
               .filter(notBlank)
               .map(doubleQuote)
               .join(" + ");
    });

    file.contents = new Buffer(content);

    callback(null, file);
  });
}

module.exports = processTemplates;
