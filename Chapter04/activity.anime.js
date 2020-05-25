let todoList = ['Wash Laundry', 'Clean Silver', 'Write Letters', 'Purchase Groceries', 'Retrieve Mail', 'Prepare Dinner'];

let todoEle = document.getElementById('todo-list');
let shuffleButtonEle = document.getElementById('shuffle');
shuffleButtonEle.addEventListener('click', shuffleButtonClicked);

function shuffleButtonClicked(e) {
    replaceListElements(todoEle, getNewShuffledArray(todoList));
}

function replaceListElements(listEle, listItems) {
    var tl = anime.timeline({
        easing: 'easeOutExpo', duration: 500
    });
    tl.add({targets: listEle, translateX: -1000});
    // anime({targets: listEle, translateX: -1000});
    listEle.textContent = '';

    for(let i = 0; i < listItems.length; i++) {
        let liEle = document.createElement("li");
        liEle.appendChild(document.createTextNode(listItems[i]));
        listEle.appendChild(liEle);
    }

    // setTimeout(() => {
    //     anime({
    //         targets: listEle, translateX: 0, easing: 'easeOutExpo'
    //     });
    // }, 200);
    tl.add({
        targets: listEle, translateX: 0
    });
    // anime({targets: listEle, translateX: 0, delay: 1000, duration: 3000});
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
