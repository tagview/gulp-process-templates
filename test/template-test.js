var assert = require("assert");

describe("Task should replace @include with the template", function() {
  var template = /* @include template.html.tpl */;
  it("replace the @include with the escaped content of the file", function() {
    assert.equal('<div class="row"></div>', template);
  });
});
