let todoList = ['Wash Laundry', 'Clean Silver', 'Write Letters', 'Purchase Groceries', 'Retrieve Mail', 'Prepare Dinner'];

let todoEle = document.getElementById('todo-list');
let shuffleButtonEle = document.getElementById('shuffle');
shuffleButtonEle.addEventListener('click', shuffleButtonClicked);

function shuffleButtonClicked(e) {
    replaceListElements(todoEle, getNewShuffledArray(todoList));
}

function replaceListElements(listEle, listItems) {
    listEle.velocity({opacity: 0}, {duration: 0});
    listEle.textContent = '';    

    for(let i = 0; i < listItems.length; i++) {
        let liEle = document.createElement("li");
        liEle.appendChild(document.createTextNode(listItems[i]));
        listEle.appendChild(liEle);
    }

    listEle.velocity({opacity: 1}, {duration: 500});
}

function getNewShuffledArray(sourceArray) {
    var newArray = [].concat(sourceArray);
    let swapIndex = newArray.length;
    let swapWithIndex;
    let swapIndexValue;

    while(swapIndex !== 0) {
        swapWithIndex = Math.floor(Math.random() * swapIndex);
        swapIndex -= 1;
        swapIndexValue = newArray[swapIndex];
        newArray[swapIndex] = newArray[swapWithIndex];
        newArray[swapWithIndex] = swapIndexValue;
    }

    return newArray;
}

replaceListElements(todoEle, todoList);
