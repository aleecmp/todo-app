import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Todo from '../Todo/Todo';

const getLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

//functional component
function TodoList() {
  const [todos, setTodos] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Task's List</h1>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

//class component

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//     };
//     this.addTodo = this.addTodo.bind(this);
//     this.updateTodo = this.updateTodo.bind(this);
//     this.removeTodo = this.removeTodo.bind(this);
//     this.completeTodo = this.completeTodo.bind(this);
//   }

//   addTodo(todo) {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }
//     const newTodos = [todo, ...this.state.todos];
//     this.setState({ todos: newTodos });
//     console.log(...this.state.todos);
//   }

//   updateTodo(todoId, newValue) {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }

//     this.setState({
//       todos: this.state.todos.map((item) =>
//         item.id === todoId ? newValue : item
//       ),
//     });
//     // console.log(this.state.todos);
//   }

//   removeTodo(id) {
//     const removedArr = [...this.state.todos].filter((todo) => todo.id !== id);
//     this.setState({ todos: removedArr });
//   }

//   completeTodo(id) {
//     let updatedTodos = this.state.todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }

//       return todo;
//     });

//     this.setState({ todos: updatedTodos });
//   }

//   render() {
//     return (
//       <>
//         <h1>My ToDo List</h1>
//         <Form onSubmit={this.addTodo} />
//         <Todo
//           todos={this.state.todos}
//           completeTodo={this.completeTodo}
//           removeTodo={this.removeTodo}
//           updateTodo={this.updateTodo}
//         />
//       </>
//     );
//   }
// }

export default TodoList;
