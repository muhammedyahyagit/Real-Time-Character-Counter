var textArea = document.getElementById("textarea");
var totalCharacter = document.getElementById("total-characters");
var remaingCounter = document.getElementById("remaining-counter");

textArea.addEventListener("keyup", () => {
    updatingValue()
})

updatingValue()

function updatingValue() {
    totalCharacter.innerText = textArea.value.length;
    remaingCounter.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}