document.getElementById("check-btn").addEventListener("click", function () {
    const inputField = document.getElementById("text-input");
    const resultDisplay = document.getElementById("result");
    const userInput = inputField.value.trim();

    // Vérifie si l'entrée est vide
    if (userInput === "") {
        alert("Please input a value.");
        return;
    }

    // Normalise l'entrée : suppression des caractères non alphanumériques et conversion en minuscules
    const cleanedInput = userInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");

    // Vérifie si c'est un palindrome
    if (cleanedInput === reversedInput) {
        resultDisplay.textContent = `${userInput} is a palindrome.`;
    } else {
        resultDisplay.textContent = `${userInput} is not a palindrome.`;
    }
});
