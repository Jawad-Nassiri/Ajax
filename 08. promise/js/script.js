




//! Promise

let p = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/11");


    xhr.onload = () => {
        if(xhr.status === 200) {
            let response = xhr.responseText
            resolve(response)
        } else {
            reject()
        }
    }

    xhr.send()
})



p.then((response) => {
    console.log(response)
})

.catch(() => {
    console.log('error')
})