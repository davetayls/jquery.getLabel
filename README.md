# getLabel

simple plugin to get and cache a form elements label based on the for attribute

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/davetayls/jquery.getLabel/master/dist/getLabel.min.js
[max]: https://raw.github.com/davetayls/jquery.getLabel/master/dist/getLabel.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/getLabel.min.js"></script>
...
<label for="input">label</label>
<input id="input" name="input">
...
<script>
jQuery(function($) {
  // returns a jQuery object containing the first
  // label found for the first matched element
  $('#input')
    .getLabel()
    .text() // => "label"
  ;
});
</script>
```

## Release History

### 0.1.0
- initial release
