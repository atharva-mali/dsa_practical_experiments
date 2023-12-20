function bruteForceSubstringSearch(text, pattern) {
  const lengthOfText = text.length;
  const lengthOfPattern = pattern.length;
  for (let i = 0; i < lengthOfText; i++) {
    let j;
    for (j = 0; j < lengthOfPattern; j++) {
      if (text.charAt(i + j) !== pattern.charAt(j)) {
        break;
      }
    }
    if (j === lengthOfPattern) return i;
  }
  return lengthOfText;
}

console.log(
  "pattern found at: ",
  bruteForceSubstringSearch("I am MCA student at SIOM", "MCA")
);
