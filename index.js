var TodoList = [
    {
        name: ``,
        date: ``
    }
] 


function addTodo(){
    let clickBtn = document.querySelector(`#adTodo-btn`);
    let clickInputName = document.querySelector(`#input-name-js`);
    let clickInputDate = document.querySelector(`#input-date-js`);
    //Get value
    let getValueName = clickInputName.value;
    let getValueDate = clickInputDate.value;

    TodoList.push(
        {
        name: getValueName,
        date: getValueDate
        }
    );
    clickInputName.value = ``;
    clickInputDate.value = ``;
    showTodo();
}

function showTodo(){
    let list = document.querySelector(`#list-js`);
    let CreateList = ``;

    for(let i = 1; i < TodoList.length; i++){
        const todoObj = TodoList[i];
        const {name} = TodoList;
        const {date} = TodoList;
        const html = `
            <div class="list-todo">
                ${i}. ${todoObj.name}
            </div>
            <div class="list-todo">
                ${todoObj.date}
            </div> 
            <div>
                <input type="checkbox">
            </div>
            <div>
                <button id="delete-btn" onclick="
                    TodoList.pop(${i}); showTodo()
                ">
                    DELETE
                </button>
            </div>
        `
        CreateList += html;
    }
    list.innerHTML = CreateList;
}