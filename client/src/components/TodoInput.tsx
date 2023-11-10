import { useState } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { usePostTodoMutation } from '../redux/apiSlice';
import { addTodo } from '../redux/todosSlice';

// import { Todo } from '../types';

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
  };

  return (
    <div>
      <input
        value={content}
        onChange={e => setContent(e.target.value)}
        type="text"
      />
      <button onClick={() => handleAddTodo(content)}>add</button>
    </div>
  );
};
export default TodoInput;
