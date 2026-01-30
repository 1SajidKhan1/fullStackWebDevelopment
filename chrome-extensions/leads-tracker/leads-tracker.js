let myLeads = [];
const inputUrl = document.querySelector("#input-url");
const displayUrl = document.querySelector("#display-url");
const saveInputBtn = document.querySelector("#save-input-btn");
const saveTabBtn = document.querySelector("#save-tab-btn");
const deleteAllBtn = document.querySelector("#delete-all-btn");

saveInputBtn.addEventListener("click", saveInput);
saveTabBtn.addEventListener("click", saveTab);
deleteAllBtn.addEventListener("click", deleteAll);

function saveInput() {
    if (inputUrl.value === "") {
        alert("Please enter a URL");
    } else {
        myLeads.push(inputUrl.value);
        displayUrl.innerHTML += `
            <li>
                <a href="${inputUrl.value} target="blank">${inputUrl.value}</a>
            </li>
        `
        inputUrl.value = "";
    }
}

function saveTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        let activeTabUrl = activeTab.url;
        displayUrl.innerHTML += "<li><a href=" + activeTabUrl + " target='_blank'> " + activeTabUrl + "</a></li>";
    });
}

function deleteAll() {
    myLeads = [];
    displayUrl.innerHTML = "";
}