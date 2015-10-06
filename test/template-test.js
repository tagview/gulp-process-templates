var assert = require("assert");

describe("Task should replace @include with the template", function() {
  var template1 = /* @include template1.html.tpl */;
  var template2 = /* @include template2.html.tpl */;

  it("replace the @include with the escaped content of the file", function() {
    assert.equal('<div class="row"></div>', template1);
    assert.equal('<a href="http://www.tagview.com.br">Tagview</a>', template2);
  });
});
