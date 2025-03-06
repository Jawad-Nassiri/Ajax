// const btnElement = document.querySelector('button')
// const outputElement = document.querySelector('.output')

// btnElement.addEventListener('click', () => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET' , './text.txt')
//     xhr.onload = () => {
//         if(xhr.status === 200) {
//             outputElement.textContent = xhr.responseText;
//         }
//     }

//     xhr.send()
// })










const btnElement = document.querySelector('button')
const outputElement = document.querySelector('.output')

btnElement.onclick = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', './text.txt')

    xhr.onload = () => {
        if(xhr.status === 200) {
            outputElement.textContent = xhr.responseText;
        }
    }

}