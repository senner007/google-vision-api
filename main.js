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

document.querySelector('button').addEventListener('click', async function () {
    var fileInput = document.querySelector("#fileElement");
    console.log(await readFile(fileInput).then(callService))
})
