//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if ((input.length === 0)  || (/^\s+$/.test(input))) {
    return "Fine. Be that way!";
  } else if (input === input.toUpperCase() ){
    return "Whoa, chill out!";
  } else if (input.slice(-1) === "?") {
    return "Sure.";
  } else {
  return 'Whatever.';
  }
};

module.exports = Bob;
