//Define an interface to describe this. Hint: You want to describe the items in the array, not the whole array
interface codeToDo {
  id: number;
  title: string;
  status: string;
  completedOn?: Date;
}

enum programmingLanugages {
  HTML = "Learn HTML",
  TS = "Learn TypeScript",
  REACT = "Learn React",
}

enum statusses {
  DONE = "Done",
  INPROGRESS = "In progress",
  TODO = "To do",
}

//prettier-ignore
let todoItems: codeToDo[] = [
  {id: 1, title: programmingLanugages.HTML, status: statusses.DONE, completedOn: new Date("2021-09-11")},
  {id: 2, title: programmingLanugages.TS, status: statusses.INPROGRESS},
  {id: 3, title: programmingLanugages.REACT, status: statusses.TODO}
];

//prettier-ignore
//Apply param types and retun values to theese functions
function addTodoItem(todo: string) : object{
    
    const id: number = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        //Strongly type some harcoded values with an enum 
        status: statusses.TODO,
    }

    todoItems.push(newTodo)

    return newTodo
}

//prettier-ignore
//Apply param types and retun values to theese functions. Use a generic parameter
function getNextId<T extends {id:number}>(items: T[]) : number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

//prettier-ignore
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo));
