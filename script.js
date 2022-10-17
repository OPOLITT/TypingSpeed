const URL_API = 'http://api.quotable.io/random'

const textDisplay = document.getElementById('panelText');
const areaDisplay = document.getElementById('panelArea');
const timer = document.getElementById('timer');


areaDisplay.addEventListener('input', () => {
    const arraySpans = textDisplay.querySelectorAll('span');
    const arrayValue = areaDisplay.value.split('');
    let correct = true
    console.log(correct);
    arraySpans.forEach((item, index) => {
        const character = arrayValue[index]
        if (character == null) {
            item.classList.remove('correct')
            item.classList.remove('incorrect')
            correct = false
        } else
            if (character === item.innerText) {
                item.classList.add('correct')
                item.classList.remove('incorrect')

            } else {
                item.classList.remove('correct')
                item.classList.add('incorrect')
                correct = false
            }
    })
    if (correct) newQuote();
})

function randomQuote() {
    return fetch(URL_API)
        .then(response => response.json())
        .then(data => data.content)
}

async function newQuote() {
    const quote = await randomQuote();
    textDisplay.innerHTML = '';
    quote.split(``).forEach(el => {
        const elementSpan = document.createElement('span')

        elementSpan.innerText = el
        textDisplay.appendChild(elementSpan);
    });
    areaDisplay.value = null;


}
newQuote()



