// Declare and initialize the todo list array
var toDoList = ["Wash Laundry", "Clean Silver", "Write Letters", "Purchase Groceries", "Retrieve Mail", "Prepare Dinner"];
// Declare and initialize variable for the todo list element
var toDoListEle = document.getElementById("todo-list");
// Declare and initialize variable for shuffle button element.
var shuffleButton = document.getElementById("shuffle-button");
// Add event listener function for the shuffle button element.
shuffleButton.addEventListener("click", shuffleToDoList);
// Function to replace an HTML DOM list li elements with array items.
function shuffleToDoList(e) {
	let childrenNumber = toDoListEle.childNodes.length;
	let shuffledList = getNewShuffledArray(toDoList);

	for(var i = 0; i <  childrenNumber; i++) {
		toDoListEle.firstChild.remove();
	}

	fillListElement(shuffledList);
}

function fillListElement(source) {
	for (var listItem of source) {
		var listEle = document.createElement("li");
		listEle.innerText = listItem;
		toDoListEle.appendChild(listEle);
	}
}

/**
 * Shuffles array elements
 * @param {array} sourceArray - Array to be shuffled.
 * @return {array} - New array with shuffled items 
*/
function getNewShuffledArray(sourceArray){
	// Make a copy of the sourceArray
	var newArray = [].concat(sourceArray);
	// The index for making a swap starting with last
	let swapIndex = newArray.length;
	// The index to make a swap with swapIndex 
	let swapWithIndex;
	// Copy of the swapIndex value being swapped
	let swapIndexValue;
	// Loop while swapIndex is not 0
	while (0 !== swapIndex) {
		// Pick an index to swap with current index from 0 to current swapIndex
		swapWithIndex = Math.floor(Math.random() * swapIndex);
		// Reduce swapIndex by 1
		swapIndex -= 1;
		// Make copy of the swapIndex value.
		swapIndexValue = newArray[swapIndex];
		// Replace swapIndex value with swapWithIndex value.
		newArray[swapIndex] = newArray[swapWithIndex];
		// Replace swapWithIndex value with temporaryValue value.
		newArray[swapWithIndex] = swapIndexValue;
	}
	return newArray;
}

// Function to handle click events for the Shuffle button

// Update the todo list view with initial list of items
fillListElement(toDoList);