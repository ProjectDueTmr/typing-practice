
const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay') 
const quoteInputElement = document.getElementById('quoteInput') 

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if(character == null) {
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.remove('correct')
        } else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            } else {
                characterSpan.classList.remove('correct');
                characterSpan.classList.add('incorrect');
        }
    })
} )


function getRandomQuote() {
    return fetch('http://api.quotable.io/random').then(response => response.json()).then(data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null;
}

renderNewQuote()