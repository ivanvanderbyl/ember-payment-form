import isNumericKeyEvent from 'dummy/utils/is-numeric-key-event';
import { module, test } from 'qunit';

module('Unit | Utility | isNumericKeyEvent');

// Replace this with your real tests.
test('it tests key codes on event', function(assert) {
  let result = isNumericKeyEvent({
    which: "4".charCodeAt(0),
  });
  assert.ok(result);

  result = isNumericKeyEvent({
    which: "A".charCodeAt(0),
  });

  assert.notOk(result);
});
