// LaunchBar Action Script

function run(argument) {
  // make sure that we passed in something, ANYTHING, to the action
  if (argument == undefined) {
    LaunchBar.alert('Please enter a Twitter URL');
  }

  // make sure we passed in a valid Twitter URL
  var regex = /^https?:\/\/(www.)?twitter.com\//
  if (argument.match(regex) != null && argument.match(regex).index === 0) {
    // replace the `https://www.twitter.com/` with `tweetbot://`
    argument = argument.replace(regex, "tweetbot://")
    // now just tell LaunchBar to open the tweetbot URL
    var tweetbotIsOpen = LaunchBar.executeAppleScriptFile("open-tweetbot.scpt")
    LaunchBar.openURL(argument);
  } else {
    LaunchBar.alert('It appears that\n`' + argument + '`\nis not a valid Twitter URL')
  }
}
