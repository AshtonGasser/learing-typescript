import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
//async
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
axios.get(url).then(response => {
    // console.log(response.data); 
    const todo = response.data as Todo;
    const id = todo.id;
    const completed = todo.completed;
    const title = todo.title

 logTodo(id, title, completed);
   
    
});

const logTodo =(id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    has a title of: ${title} 
    is it finished? ${completed}`);
}