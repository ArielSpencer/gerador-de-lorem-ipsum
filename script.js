const generateBtn = document.getElementById("generateBtn");
const paragraphsInput = document.getElementById('paragraphs');
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

generateBtn.addEventListener("click", () => {
  const numParagraphs = parseInt(paragraphsInput.value) || 1;
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  let result = '';
  for (let i = 0; i < numParagraphs; i++) {
    result += loremText + '\n\n';
  }

  output.innerText = result;
  copyBtn.style.display = "inline-block";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText)
    .then(() => alert("Texto copiado com sucesso!"))
    .catch(err => alert("Erro ao copiar texto."));
});