

// Get references of the user input, the submit button.
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const mainBody = document.body;

addButton.addEventListener('click', function () {
    
    const theContainer = document.createElement('div');
    theContainer.classList.add('container');

    const theRow = document.createElement('div');
    theRow.classList.add('row');

    const theCol = document.createElement('div');
    theCol.classList.add('col');

    // Get the user input.
    const task = taskInput.value;

    const listItem = document.createElement('a');
    listItem.innerText = `Is '${task}' palindrome?   `; // Is X palindrome?      where x is the user input.
    

    // Check type of user input - palindrome or not.
    const userResultPalindrome = isPalindrome(task);

    const userResultText = document.createElement('a');
    userResultText.innerText = userResultPalindrome ? "Yes" : "No";
    userResultText.style.color = userResultPalindrome ? "green" : "red";

    listItem.appendChild(userResultText);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('btn', 'btn-link');

    listItem.appendChild(removeButton);

    theContainer.appendChild(theRow);
    theRow.appendChild(theCol);
    theCol.appendChild(listItem);
    
    mainBody.appendChild(theContainer);

    removeButton.addEventListener('click', function () {
        mainBody.removeChild(theContainer);
    });

    taskInput.value = null;
});



function isPalindrome(input) {
    if (input.length <= 1) {
        return true;
    }

    /**Recursively call the function itself if the first char is not a valid character. */
    if (!isLetterOrDigit(input[0])) {
        return isPalindrome(input.slice(1));
    }

    /**Recursively call the function itself if the last char is not a valid character. */
    if (!isLetterOrDigit(input[input.length - 1])) {
        return isPalindrome(input.slice(0, -1));
    }

    /**Otherwise, compare the first and last characters for equality and pass the remaining sub-string for the next call.*/
    return (input[0].toLowerCase() === input[input.length - 1].toLowerCase() && isPalindrome(input.substring(1, input.length - 1)));
}

function isLetterOrDigit(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}