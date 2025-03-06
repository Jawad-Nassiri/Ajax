const btnElement = document.querySelector('button');
const outputElement = document.querySelector('.output');
const inputElement = document.querySelector('input');

inputElement.onkeyup = () => {
    let inputValue = +inputElement.value;
    if(inputValue > 100 || inputValue < 1) {
        inputElement.style.border = '2px solid red'
    } else {
        inputElement.style.border = '2px solid #6a11cb'
    }
}

function getData() {
    if(inputValue > 100 || inputValue < 1) {
        outputElement.textContent = 'Enter a valid number'
        outputElement.style.color = 'red'
    }


    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${inputValue}`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let output = `
                <ol>
                    <li>User ID: ${data.userId}</li>
                    <li>Post ID: ${data.id}</li>
                    <li>Title: ${data.title}</li>
                    <li>Body: ${data.body}</li>
                </ol>
            `;
            outputElement.innerHTML = output;
        }
    };

    xhr.send();
}


btnElement.addEventListener('click', getData);
