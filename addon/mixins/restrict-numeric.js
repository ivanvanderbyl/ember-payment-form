import Ember from 'ember';
import isNumericKeyEvent from '../utils/is-numeric-key-event';
const { run } = Ember;

export default Ember.Mixin.create({

  keyPress(event) {
    this._super(event);
    if (!isNumericKeyEvent(event)) {
      event.preventDefault();
    }
  },

  _reformatNumeric(event) {
    let target = event.target;
    run(this, function() {
      let value;
      value = target.value;
      // value = replaceFullWidthChars(value);
      value = value.replace(/\D/g, '');
      target.value = value;
      this.set('value', value);
    });
  },

  didInsertElement() {
    this._super();
    this.on('paste', this._reformatNumeric);
    this.on('input', this._reformatNumeric);
    this.on('change', this._reformatNumeric);
  },

  willDestroyElement() {
    this.off('paste', this._reformatNumeric);
    this.off('input', this._reformatNumeric);
    this.off('change', this._reformatNumeric);
  }
});
