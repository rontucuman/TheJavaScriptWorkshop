let todoList = ['Wash Laundry', 'Clean Silver', 'Write Letters', 'Purchase Groceries', 'Retrieve Mail', 'Prepare Dinner'];

let todoEle = $('#todo-list');
let shuffleButtonEle = $('#shuffle');
shuffleButtonEle.on('click', shuffleButtonClicked);

function shuffleButtonClicked(e) {
    replaceListElements(todoEle, getNewShuffledArray(todoList));
}

function replaceListElements(listEle, listItems) {
    listEle.hide();
    listEle.empty();

    for(let i = 0; i < listItems.length; i++) {
        let liEle = $(document.createElement("li"));
        liEle.append(document.createTextNode(listItems[i]));
        liEle.appendTo(listEle);
    }

    listEle.fadeIn('slow');
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
