
const btnElement = document.querySelector('button')
const outputElement = document.querySelector('.output')


btnElement.onclick = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', './customers.json')

    xhr.onload = () => {
        if(xhr.status === 200) {
            console.log(xhr.responseText)
            // Parses the JSON string from the server response and converts it into a JavaScript object.
            let customersInfo = JSON.parse(xhr.responseText);
            let output = ``
            customersInfo.forEach((customerInfo) => {
                output += `
                    <ol>
                        <li>User ID: ${customerInfo.userId}</li>
                        <li>First Name: ${customerInfo.firstName}</li>
                        <li>Last Name: ${customerInfo.lastName}</li>
                        <li>Email: ${customerInfo.email}</li>
                        <li>Username: ${customerInfo.username}</li>
                        <li>Street: ${customerInfo.address.street}</li>
                        <li>City: ${customerInfo.address.city}</li>
                        <li>State: ${customerInfo.address.state}</li>
                        <li>Zip Code: ${customerInfo.address.zipCode}</li>
                        <li>Phone: ${customerInfo.phone}</li>
                        <li>Date of Birth: ${customerInfo.dob}</li>
                        <li>Active Status: ${customerInfo.isActive ? 'Active' : 'Inactive'}</li>
                    </ol>
                    `
                })
                outputElement.innerHTML = output
        }
    }

    xhr.send()
}
