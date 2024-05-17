const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacter = "I";

const generateCode = () => {
    let code = "";
    for (let i = 0; i < 15; i++) {
        let randomSet;
        if (i === 8) {
            randomSet = specialCharacter;
        } else if (i % 2 === 0) {
            randomSet = lowercaseCharacters;
        } else {
            randomSet = uppercaseCharacters;
        }

        const randomIndex = Math.floor(Math.random() * randomSet.length);
        code += randomSet.charAt(randomIndex);
    }
    return code;
};

const generateButton = document.getElementById("btnGenerate");
const generatedCodeInput = document.getElementById("generatedCode");
const copyButton = document.getElementById("btnCopy");

generateButton.addEventListener("click", () => {
    const code = generateCode();
    generatedCodeInput.value = code;
});

copyButton.addEventListener("click", () => {
    generatedCodeInput.select();
    navigator.clipboard.writeText(generatedCodeInput.value);
    alert("Mã đã được sao chép!");
});
