import { useState } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { usePostTodoMutation } from '../redux/apiSlice';
import { addTodo } from '../redux/todosSlice';

import '../styles/TodoInput.css';

type Props = {};

const user = '654ccba8c6e9472ee1acb431';

const TodoInput = (props: Props) => {
  const [content, setContent] = useState('');
  const [postTodo] = usePostTodoMutation();
  const dispatch = useAppDispatch();

  const handleAddTodo = (content: string) => {
    const todo = {
      content,
      user,
    };

    postTodo(todo)
      .unwrap()
      .then(result => {
        console.log(result);
        dispatch(addTodo(result));
      });

    setContent('');
  };

  return (
    <div className="todo-input-section">
      <input
        className="add-todo-input"
        value={content}
        onChange={e => setContent(e.target.value)}
        type="text"
      />
      <button className="add-todo-btn" onClick={() => handleAddTodo(content)}>
        add
      </button>
    </div>
  );
};
export default TodoInput;
