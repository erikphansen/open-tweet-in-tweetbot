// LaunchBar Action Script

function run(argument) {
  var regex = /^https?:\/\/(www.)?twitter.com\//
  // make sure that we passed in something, ANYTHING, to the action
  if (argument == undefined) {
    LaunchBar.alert('No argument was passed to the action');
  }
  // make sure we passed in a valid Twitter URL
  if (argument.match(regex) != null && argument.match(regex).index === 0) {
    // replace the `https://www.twitter.com/` with `tweetbot://`
    argument = argument.replace(regex, "tweetbot://")
    // now just tell LaunchBar to open the tweetbot URL
    LaunchBar.openURL(argument);
  } else {
    LaunchBar.alert('It appears that\n`' + argument + '`\nis not a valid Twitter URL')
  }
}
