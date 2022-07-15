import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

//class component

class App extends React.Component {
  render() {
    return (
      <div className='todo-app'>
        <TodoList />
      </div>
    );
  }
}

//functional component
// const App = () => {
//   return (
//     <div className='todo-app'>
//       <TodoList />
//     </div>
//   );
// };

export default App;
