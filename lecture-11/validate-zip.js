let zipCodeValid = false;
let zipCodeWidget = document.querySelector("#zip");
zipCodeWidget.addEventListener("input", checkZipCode);

// function updateZipWidgetStyle() {
//     if (zipCodeValid) {
//         zipCodeWidget.style.outlineColor = "black"
//     } else {
//         zipCodeWidget.style.outlineColor = "red"
//     }
// }

function checkZipCode() {
    let regex = /^\d\d\d\d\d$/;
    let zip = zipCodeWidget.value.trim();
    zipCodeValid = zip.match(regex);
    if (zipCodeValid) {
        zipCodeWidget.setCustomValidity('')
    } else {
        zipCodeWidget.setCustomValidity('Invalid Zip Code')
    }
    zipCodeWidget.reportValidity()
}

let tosForm = document.querySelector("#tosForm");
tosForm.addEventListener("submit", checkForm);

function checkForm(event) {
    if (!zipCodeValid) {
        event.preventDefault();
    }
}