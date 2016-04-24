import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | restricted numeric input');

test('restricted numeric input example', function(assert) {
  visit('/');

  andThen(function() {
    fillIn('input[type="tel"]', '123456790ABCD');
    andThen(() => assert.equal(find('input[type="tel"]').val(), '123456790'));
  });
});
