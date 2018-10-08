export default function readFile(e) {

    var fileread = new FileReader;

    return new Promise((resolve, reject) => {

        fileread.onloadend = function (e) {
            console.log('loaded')
            resolve(e.target.result)
        };

        fileread.onerror = function (e) {
            console.log('rejected')
            reject(e.target.error)
        };

        fileread.readAsDataURL(e.files[0]);
    })

}