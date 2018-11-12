var todos = [];
var input = prompt("What would you like to do?");


while (input !== "quit") {
    if (input === "new") {
        let newTodo = prompt("Add a new ToDo");
        todos.push(newTodo);
        console.log(newTodo + " has been added to list");
    }
    else if (input === "list") {
        show(todos)
    }
    else if (input === "delete"){
        let toBeDeleted = Number(prompt("Chose a number to delete"));
        console.log(todos[toBeDeleted] + " has been deleted")    
        todos.splice(toBeDeleted, 1);
    }
    input = prompt("What would you like to do?");
}




function show(arr) {
    for (let part in arr) {
        console.log("**********");
        console.log(part + ": " + arr[part]);
        console.log("**********");
    }
}
