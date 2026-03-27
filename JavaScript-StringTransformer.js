const originalString = "I love butterflies.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("butterflies", "horses");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love butterflies and butterflies are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const horsesOnlySentence = exampleSentence.replaceAll("butterflies", "horses");
console.log("Replacing all occurrences of butterflies with horses:");
console.log(horsesOnlySentence);

const studyingSentence = "I love studying!";
console.log("Original learning sentence:");
console.log(studyingSentence);

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} studying.`;
console.log(newSentence);