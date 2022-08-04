// function that receives one argument and returns it in all caps
function shout(string) {
  let wordText = string.toUpperCase();
  return wordText;
}

// function that receives one argument and returns it in all lowercase

function whisper(string) {
  let wordText = string.toLowerCase();
  return wordText;
}

// function that takes a string argument and logs it in all caps using console.log()

function logShout(string) {
  let wordText = string.toUpperCase();
  console.log(wordText);
}

//  function that takes a string argument and logs it in all lowercase using console.log()

function logWhisper(string) {
  let wordText = string.toLowerCase();
  console.log(wordText);
}

function sayHiToHeadphonedRoommate(string) {
  let textWord = string;
  if (string === textWord.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === textWord.toUpperCase()) {
    return "YES INDEED!";
  }
  return "I would love to!";
}
