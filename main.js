import readFile from './camera';
import {url} from './url'

function callService(data) {

    return fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json;"
        },
        body: JSON.stringify(data)
    }).then(response => response.json()); 
}

document.querySelector('button').addEventListener('click', function () {
    var fileInput = document.querySelector("#fileElement");
    readFile(fileInput).then(callService).then(data => console.log(data) );
})
