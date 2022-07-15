import React from 'react';
// import { useState, useEffect, useRef } from 'react';
import './Form.css';

// class component

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.edit ? props.edit.value : '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.input,
    });
    this.setState({ input: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='todo-form'>
        {this.props.edit ? (
          <>
            <input
              placeholder='Update Your ToDo'
              value={this.state.input}
              onChange={this.handleChange}
              name='text'
              ref={this.inputRef}
              className='todo-input edit'
            />
            <button onClick={this.handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a ToDo'
              value={this.state.input}
              onChange={this.handleChange}
              name='text'
              className='todo-input'
              ref={this.inputRef}
            />
            <button onClick={this.handleSubmit} className='todo-button'>
              addTodo
            </button>
          </>
        )}
      </form>
    );
  }
}

//functional component
// function Form(props) {
//   const [input, setInput] = useState(props.edit ? props.edit.value : '');

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   });

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     props.onSubmit({
//       id: Math.floor(Math.random() * 10000),
//       text: input,
//     });
//     setInput('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className='todo-form'>
//       {props.edit ? (
//         <>
//           <input
//             placeholder='Update your item'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             ref={inputRef}
//             className='todo-input edit'
//           />
//           <button onClick={handleSubmit} className='todo-button edit'>
//             Update
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             placeholder='Add a todo'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             className='todo-input'
//             ref={inputRef}
//           />
//           <button onClick={handleSubmit} className='todo-button'>
//             Add todo
//           </button>
//         </>
//       )}
//     </form>
//   );
// }
export default Form;
