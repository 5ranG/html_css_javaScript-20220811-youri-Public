const userInput = document.querySelector(".user-input");
const userPassword = document.querySelector(".user-password");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");

const addButton = document.querySelector(".add-button");
const addTalbeBody = document.querySelector("table")

let index = 0;

addButton.onclick = () => {
    index++;

    addTalbeBody.innerHTML += `    
        <tr class="table-body">
        <td>${index}</td>
        <td>${userInput.value}</td>
        <td>${userPassword.value}</td>
        <td>${userName.value}</td>
        <td>${userEmail.value}</td>
        </tr>
    `
}