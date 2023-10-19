const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWordsInSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Initialize a variable to store the reversed sentence
  let reversedSentence = "";

  for (let word of words) {
    // Reverse each word and append it to the reversed sentence
    const reversedWord = word.split('').reverse().join('');
    reversedSentence += reversedWord + " ";
  }

  // Remove the trailing space
  reversedSentence = reversedSentence.trim();

  return reversedSentence;
}

rl.question("Enter a sentence: ", (inputSentence) => {
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log("Reversed Sentence: " + reversedSentence);
  rl.close();
});
