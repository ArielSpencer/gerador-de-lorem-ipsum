const generateBtn = document.getElementById("generateBtn");
const wordsInput = document.getElementById('words');
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

const loremWords = [
  "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", "in",
  "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
];

generateBtn.addEventListener("click", () => {
  let numWords = parseInt(wordsInput.value) || 1;

  if (numWords < 3) {
    alert("O número mínimo de palavras é 3.");
    return;
  }
  if (numWords > 300) {
    alert("O número máximo de palavras é 300.");
    return;
  }

  let result = 'Lorem ipsum';
  let wordCount = 2;

  while (wordCount < numWords) {
    const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
    result += ' ' + randomWord;
    wordCount++;
  }

  output.innerText = result;
  copyBtn.style.display = "inline-block";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText)
    .then(() => alert("Texto copiado com sucesso!"))
    .catch(err => alert("Erro ao copiar texto."));
});