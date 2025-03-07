
let p = getData('https://jsonplaceholder.typicode.com/posts/1')
p.then((id) => {
    console.log(id)
    return getData('https://jsonplaceholder.typicode.com/posts/2')
}).then((id) => {
    console.log(id)
    return getData('https://jsonplaceholder.typicode.com/posts/3')
}).then((id) => {
    console.log(id)
    return getData('https://jsonplaceholder.typicode.com/posts/4')
}).then((id) => {
    console.log(id)
})
.catch(() => {
    console.log('error')
})







function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.onload = function () {
            if (this.status === 200) {
                let id = JSON.parse(xhr.responseText).id;
                resolve(id)
            } else {
                reject()
            }
        }
        xhr.send();
    })
}

