const checkbox = document.getElementById("myCheckbox");

// Check if there is a saved state for the checkbox
if (localStorage.getItem("myCheckboxState") === "checked") {
    checkbox.checked = true;
}

// Add a click event listener to the checkbox
checkbox.addEventListener("click", function () {
    // Save the checkbox state to local storage
    localStorage.setItem(
        "myCheckboxState",
        checkbox.checked ? "checked" : "unchecked"
    );
});
