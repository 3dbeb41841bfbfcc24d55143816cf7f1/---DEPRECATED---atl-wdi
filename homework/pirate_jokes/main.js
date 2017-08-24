//require notifier package
var notifier = require('node-notifier');

//create notifier object
notifier.notify({
  'title': 'Joke of the Day',
  'message': 'Q: How much did the pirate pay for his piercings? \nA: A buck-an-ear.'
});