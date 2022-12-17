//Elementos
const multiplicationForm = document.querySelector("multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicatior");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

//Funções

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i<= multiplicatorNumber; i++) {
        const result = number *1;

        const template = `<div class= "row">
        <div class = "operations">${number} x ${i} = </div>
        <div class = "result">${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

    }
    multiplicationTitle.innerText = number;

};