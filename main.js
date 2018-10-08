import readFile from './camera';
import {url} from './url'
import 'babel-polyfill';

async function callService(data) {

    const response = await fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json;"
        },
        body: JSON.stringify(data)
    }); 

    return response.json();
}

document.querySelector('button').addEventListener('click', function () {
    var fileInput = document.querySelector("#fileElement");
    readFile(fileInput).then(callService).then(data => console.log(data) );
})
