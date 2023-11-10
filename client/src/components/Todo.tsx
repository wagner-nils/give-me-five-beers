import { useState } from 'react';

import AffirmationBox from './AffirmationBox';

import { useAppDispatch } from '../redux/hooks';
import { usePostTodoMutation, useMarkTodoMutation } from '../redux/apiSlice';
import { setHomePage } from '../redux/configSlice';

type Props = {
  id?: string;
  content: string;
};

const Todo = ({ id, content }: Props) => {
  const dispatch = useAppDispatch();
  // todo: show only the clilcked button after clicking, and disable it
  const [showAff, setShowAff] = useState(false);
  const [markTodo] = useMarkTodoMutation();
  const [postTodo] = usePostTodoMutation();

  const handleMarkTodo = (type: string) => {
    markTodo({ id, type })
      .unwrap()
      .then(() => {
        setShowAff(true);
      });

    if (type === 'tomorrow') {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      postTodo({ content, user: id, date: tomorrow })
        .unwrap()
        .then(result => {
          console.log(result);
        });
    }

    return;
  };

  return (
    <div>
      <p>{content}</p>
      <div>
        <button onClick={() => handleMarkTodo('completed')}>completed</button>
        <button onClick={() => handleMarkTodo('abandoned')}>
          not completed, let it go
        </button>
        <button onClick={() => handleMarkTodo('tomorrow')}>
          move to tomorrow
        </button>
      </div>
      {showAff && <AffirmationBox />}
    </div>
  );
};
export default Todo;
