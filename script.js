// Get the display element
const display = document.getElementById("calc-display");

/**
 * Appends a value to the display.
 * @param {string} value - The value to append (e.g., a number or operator).
 */
function appendToDisplay(value) {
    display.value += value; // Add the value to the existing input
}

/**
 * Clears the display.
 */
function clearDisplay() {
    display.value = ''; // Empty the display
}

/**
 * Deletes the last character from the display.
 */
function backspace() {
    display.value = display.value.slice(0, -1); // Remove the last character
}

/**
 * Evaluates the expression in the display and shows the result.
 */
function calculate() {
    try {
        // Use eval to evaluate the expression in the display
        const result = eval(display.value);

        // Check for mathematical errors like division by zero
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Error"; // Show "Error" for invalid calculations
        } else {
            display.value = result; // Display the calculated result
        }
    } catch (error) {
        // Handle invalid input or syntax errors
        display.value = "Error";
    }
}
