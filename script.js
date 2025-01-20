const generateBtn = document.getElementById("generateBtn");
const paragraphsInput = document.getElementById("paragraphs");
const wordsPerParagraphInput = document.getElementById("wordsPerParagraph");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

const loremWords = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", "in",
  "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
];

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

generateBtn.addEventListener("click", () => {
  const numParagraphs = parseInt(paragraphsInput.value) || 1;
  const wordsPerParagraph = parseInt(wordsPerParagraphInput.value) || 30;

  if (numParagraphs < 1 || numParagraphs > 100) {
    alert("O número de parágrafos deve estar entre 1 e 100.");
    return;
  }
  if (wordsPerParagraph < 10 || wordsPerParagraph > 300) {
    alert("O número de palavras por parágrafo deve estar entre 10 e 300.");
    return;
  }

  let finalText = '';

  for (let i = 0; i < numParagraphs; i++) {
    let paragraph = '';
    let capitalizeNextWord = true;

    if (i === 0) {
      paragraph = "Lorem ipsum dolor sit amet as, ";
    }

    let wordCount = paragraph.split(' ').filter(word => word).length;

    while (wordCount < wordsPerParagraph) {
      const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
      let nextWord = randomWord;

      if (capitalizeNextWord) {
        nextWord = capitalizeFirstLetter(randomWord);
        capitalizeNextWord = false;
      }

      if (Math.random() < 0.2 && wordCount < wordsPerParagraph - 1) {
        paragraph += `${nextWord}, `;
      } else if (Math.random() < 0.1 && wordCount < wordsPerParagraph - 1) {
        paragraph += `${nextWord}. `;
        capitalizeNextWord = true;
      } else {
        paragraph += `${nextWord} `;
      }

      wordCount = paragraph.trim().split(' ').filter(word => word).length;
    }

    paragraph = paragraph.trim();
    if (!paragraph.endsWith('.')) {
      paragraph += '.';
    }

    finalText += paragraph + '\n\n';
  }

  output.innerText = finalText.trim();
  copyBtn.style.display = "inline-block";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText)
    .then(() => alert("Texto copiado com sucesso!"))
    .catch(err => alert("Erro ao copiar texto."));
});