import { JsLoadRouter } from './router.js';

export const LoadView = (htmlUrl) => {
    let previousMain = document.querySelector('#root > main');
    let h1 = document.querySelector('#h1');

    fetch(htmlUrl /*, options */)
    .then((response) => { return response.text() })
    .then((htmlText) => {
        function stringToHTML(str) {
            // Convert the HTML string into a document object
            let parser = new DOMParser();
            let doc = parser.parseFromString(str, 'text/html');
            let fetchedMain = doc.body.querySelector('main');
            previousMain.parentNode.replaceChild(fetchedMain, previousMain);
            //Load JsRouter
            JsLoadRouter(h1);
        }
        stringToHTML(htmlText);
    })
    .catch((error) => {
        //console.warn(error); //comment out for clean console
    });
}
