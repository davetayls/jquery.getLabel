(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#getLabel', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').find('input');
    }
  });

  test('gets a label', function() {
    expect(1);
    strictEqual(this.elems.getLabel().text(), 'label');
  });

  test('gets a label within a context', function() {
    expect(1);
    strictEqual(this.elems.getLabel({
      context: '.context'
    }).text(), 'context');
  });


}(jQuery));
