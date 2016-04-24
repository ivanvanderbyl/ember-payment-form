import Ember from 'ember';
import RestrictNumericMixin from 'ember-payment-form/mixins/restrict-numeric';
import { module, test } from 'qunit';

module('Unit | Mixin | restrict numeric');

// Replace this with your real tests.
test('it works', function(assert) {
  let RestrictNumericObject = Ember.Object.extend(RestrictNumericMixin);
  let subject = RestrictNumericObject.create();
  assert.ok(subject);
});
