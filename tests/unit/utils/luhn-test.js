import luhn from 'dummy/utils/luhn';
import { module, test } from 'qunit';

module('Unit | Utility | luhn');

test('it validates correct card numbers', function(assert) {
  let result = luhn("4242424242424242");
  assert.ok(result, 'luhn check');
  result = luhn("000002231");
  assert.notOk(result, 'luhn incorrect');
});
