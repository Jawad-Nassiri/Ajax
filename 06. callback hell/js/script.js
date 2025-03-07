
//! first request 
const xhr1 = new XMLHttpRequest();

xhr1.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr1.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText).id);
    };
}
xhr1.send();



//! second request 
const xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts/2");

xhr2.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText).id);
    };
}
xhr2.send();


//! third request 
const xhr3 = new XMLHttpRequest();

xhr3.open("GET", "https://jsonplaceholder.typicode.com/posts/3");

xhr3.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText).id);
    };
}
xhr3.send();



//! forth request 
const xhr4 = new XMLHttpRequest();

xhr4.open("GET", "https://jsonplaceholder.typicode.com/posts/4");

xhr4.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText).id);
    };
}
xhr4.send();