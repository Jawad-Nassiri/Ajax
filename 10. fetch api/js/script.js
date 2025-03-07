

//? fetch returns a Promise() 
// let p = fetch('https://jsonplaceholder.typicode.com/posts/1')
// p.then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// })




/////////////////////////////////////////////////////////////////////


//? response properties 
// let p = fetch('https://jsonplaceholder.typicode.com/posts/100')
// p.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.url)
// }).catch((error) => {
//     console.log(error)
// })


/////////////////////////////////////////////////////////////////////

//? response methods Text() JSON()
// let p = fetch('https://jsonplaceholder.typicode.com/posts/100')
// p.then((response) => {
     //? Reads the response body and returns it as a plain text string.
     // return response.text()
    //? Parses the response body as JSON and returns a JavaScript object.
    // return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })


/////////////////////////////////////////////////////////////////////

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/2')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/3')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/4')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
// })
// .catch(error => console.log(error))





/////////////////////////////////////////////////////////////////////


//! error handling 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => {
//     if(response.ok) {
//         return response.json()
//     } else {
//         throw new Error('Failed to fetch')
//     }
// })
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/2')
// })
// .then(response => {
//     if(response.ok) {
//         return response.json()
//     } else {
//         throw new Error('Failed to fetch')
//     }
// })
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/3')
// })
// .then(response => {
//     if(response.ok) {
//         return response.json()
//     } else {
//         throw new Error('Failed to fetch')
//     }
// })
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/4')
// })
// .then(response => {
//     if(response.ok) {
//         return response.json()
//     } else {
//         throw new Error('Failed to fetch')
//     }
// })
// .then((data) => {
//     console.log(data.id)
// })
// .catch(error => console.log(error))


/////////////////////////////////////////////////////////////////////


// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/2')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/3')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/4')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
// })
// .catch(error => console.log(error))





/////////////////////////////////////////////////////////////////////

//? async functions (they return a Promise())
// async function myFunc() {
//     return 10
// }


// let p = myFunc()
// p.then(response => console.log(response))

/////////////////////////////////////////////////////////////////////

//? await 
// async function myFunction() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     let object = await response.json()
//     console.log(object.id)
// }

// let res = myFunction()
// res.catch(error => console.log(error))

/////////////////////////////////////////////////////////////////////

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/2')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/3')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
//     return fetch('https://jsonplaceholder.typicode.com/posts/4')
// })
// .then(response => response.json())
// .then((data) => {
//     console.log(data.id)
// })
// .catch(error => console.log(error))



//! convert to await 
async function myFunction() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let obj = await response.json()
    console.log(obj.id)

    response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    obj = await response.json()
    console.log(obj.id)

    response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
    obj = await response.json()
    console.log(obj.id)

    response = await fetch('https://jsonplaceholder.typicode.com/posts/4')
    obj = await response.json()
    console.log(obj.id)
}

let result = myFunction()
result.catch(error => console.log(error))