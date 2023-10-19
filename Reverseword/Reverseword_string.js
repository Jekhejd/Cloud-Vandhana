const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWordsInSentence(sentence) {

  const words = sentence.split(" ");

  let reversedSentence = "";

  for (let word of words) {
   
    const reversedWord = word.split('').reverse().join('');
    reversedSentence += reversedWord + " ";
  }
  reversedSentence = reversedSentence.trim();

  return reversedSentence;
}

rl.question("Enter a sentence: ", (inputSentence) => {
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log("Reversed Sentence: " + reversedSentence);
  rl.close();
});
