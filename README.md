# ember-payment-form

Provides the necessary constraints and components for implementing a credit card
payment form in Ember without imposing any design restrictions. It works with both
`Ember.TextField` and `ember-form-builder`.

The validations and formatters are based on `jquery.payment.js`, except without
any dependency on jQuery.

## Installation

    ember install ember-payment-form

## Usage

### `RestrictNumeric` (mixin)

Restricts input to only allow numeric keys, all other keys are prevented.

```js
import RestrictNumeric from 'ember-payment-form/mixins/restrict-numeric';

export default TextField.extend(RestrictNumeric, {
  type: 'tel',
});
```

### `RestrictCardNumber` (mixin)

Restricts input to only allow valid card numbers. Extends `RestrictNumeric`.

```js
import RestrictCardNumber from 'ember-payment-form/mixins/restrict-card-number';

export default TextField.extend(RestrictCardNumber, {
  type: 'tel',
});
```

### `FormatCardNumber` (mixin)

Formats the input into separated groups of numbers for entering a credit card
number, e.g. `4242 4242 4242 4242`

```js
import FormatCardNumber from 'ember-payment-form/mixins/format-card-number';

export default TextField.extend(FormatCardNumber, {
  type: 'tel',
});
```

### `RestrictExpiryDate` (mixin)

Restricts input to only allow month and year date formats separated by `/`. 
Extends `RestrictNumeric`.

```js
import RestrictExpiryDate from 'ember-payment-form/mixins/restrict-expiry-date';

export default TextField.extend(RestrictExpiryDate, {
});
```

### `RestrictCVC` (mixin)

Extends `RestrictNumeric` to only allow numbers for CVC input. 

If you're using the `PaymentFormService` it will additionally restrict this to
the correct field length for CVC of the resprective card prodider.

```js
import RestrictCVC from 'ember-payment-form/mixins/restrict-cvc';

export default TextField.extend(RestrictCVC, {
});
```

## Using with `ember-form-builder`

We've included inputs which match the naming conventions of `ember-form-builder`
so you can easily use the same form components throughout your app.

```hbs
{{#form-builder for=this action="submit" as |f|}}
  {{input-on f "number" label="Card Number" as="credit-card-number"}}
  {{input-on f "exp" label="Expiry Date" as="credit-card-expiry"}}
  {{input-on f "cvc" label="CVC" as="credit-card-cvc"}}
{{/form-builder}}
```

Using this approach, if you're underlying form object supports errors, we'll
display error messages for invalid cards and dates.

## Running dummy app

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
