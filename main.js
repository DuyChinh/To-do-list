const checkbox = document.querySelectorAll(".myCheckbox");

// Check if there is a saved state for the checkbox
if (localStorage.getItem("myCheckboxState") === "checked") {
    checkbox.checked = true;
}

// Add a click event listener to the checkbox
var arrayLength = checkbox.length;
for (var i = 0; i < arrayLength; i++) {
    checkbox[i].addEventListener("click", function () {
        // Save the checkbox state to local storage
        localStorage.setItem(
            "myCheckboxState",
            checkbox.checked ? "checked" : "unchecked"
        );
    });
}
