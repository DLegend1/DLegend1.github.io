const undertitle = document.getElementById("site-undertitle")
let wordIndex = 0;
setInterval(textChanger, 2500)

function textChanger() {
    let words = ["paid!","reworked!","reformatted!","graded!"]
    let lastWords = undertitle.innerText.split(" ");
    let wordLenght = lastWords.length
    lastWords[wordLenght-1] = words[wordIndex];
    undertitle.innerText = lastWords.join(" ");
    wordIndex++;
    if (wordIndex == words.length){
        wordIndex=0;
    }
}