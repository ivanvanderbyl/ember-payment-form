/**
 * Returns true or false if the event should be prevented based on the keypress.
 *
 * @param  {Event<KeyPress>} event
 *
 * @return {Boolean}
 */
export default function restrictNumeric(event) {
  if (event.metaKey || event.ctrlKey) {
    return true;
  }

  if (event.which === 32) {
    return false;
  }

  if (event.which === 0) {
    return true;
  }

  if (event.which < 33) {
    return true;
  }

  let input = String.fromCharCode(event.which);
  return !!/[\d\s]/.test(input);
}
