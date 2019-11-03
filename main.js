'use strict';

let counters = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
];

let stringJson = JSON.stringify(counters);

let savebtn = document.getElementById("save");

savebtn.onclick = function () { downloadFile(stringJson) }

function downloadFile(textToSave) {
    let hiddenLinkElement = document.createElement('a');
    hiddenLinkElement.href = 'data:text/plain,' + textToSave;
    hiddenLinkElement.download = 'savedObj.txt';
    hiddenLinkElement.click();
}
