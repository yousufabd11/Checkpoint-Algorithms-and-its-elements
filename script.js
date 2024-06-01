function analyzeSentence(sentence) {
    if (!sentence.endsWith('.')) {
        console.error("The sentence must end with a period.");
        return;
    }

    // Initialize counters
    let characterCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels
    const vowels = 'aeiouAEIOU';

    // Variables to track state
    let inWord = false;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Increment character count for every character including spaces and period
        characterCount++;

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Check if the character is part of a word
        if (char !== ' ' && char !== '.') {
            if (!inWord) {
                // We've encountered the start of a new word
                wordCount++;
                inWord = true;
            }
        } else {
            // We've encountered a space or period, which signifies the end of a word
            inWord = false;
        }
    }

    // Output the results
    console.log(`Length of the sentence: ${characterCount}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// Example usage
const sentence = "This is a javascript test for.";
analyzeSentence(sentence);