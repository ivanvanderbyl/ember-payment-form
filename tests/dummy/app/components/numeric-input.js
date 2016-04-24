import Ember from 'ember';
import RestrictNumeric from 'ember-payment-form/mixins/restrict-numeric';

export default Ember.TextField.extend(RestrictNumeric, {
  type: 'tel',
});
