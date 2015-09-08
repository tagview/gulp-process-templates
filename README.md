# gulp-process-templates
Gulp task to process templates and include the escaped content into js files.

## Install

```
npm install gulp-process-templates
```

## Use

Given a js file...

```javascript
var assert = require("assert");

describe("Task should replace @include with the template", function() {
  var template = /* @include template.html.tpl */;
  it("replace the @include with the escaped content of the file", function() {
    assert.equal('<div class="row"></div>', template);
  });
});
```
... and a template ...
```html
<div class="row"></div>
```

... then declaring a task on your gulpfile.js ...

```javascript
'use strict'

var gulp = require('gulp');
var processTemplates = require('./index.js');

gulp.task('compile', function() {
  gulp.src('./test/*.js')
   .pipe(processTemplates())
   .pipe(gulp.dest('./compiledtest'));
});
```

... will result

```javascript
var assert = require("assert");

describe("Task should replace @include with the template", function() {
  var template = "<div class=\"row\"></div>";
  it("replace the @include with the escaped content of the file", function() {
    assert.equal('<div class="row"></div>', template);
  });
});
```
