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







// the second and the old method to do //! not recommended


// const btnElement = document.querySelector('button')
// const outputElement = document.querySelector('.output')

// btnElement.addEventListener('click', () => {
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', './text.txt')

//     xhr.onreadystatechange = () => {
//         if(xhr.status === 200 && xhr.readyState === 4) {
//             outputElement.textContent = xhr.responseText
//         }
//     }

//     xhr.send()
// })