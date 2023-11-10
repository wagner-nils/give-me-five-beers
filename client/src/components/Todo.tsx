import { useState, useEffect } from 'react';

import AffirmationBox from './AffirmationBox';

import { useAppDispatch } from '../redux/hooks';
import { usePostTodoMutation, useMarkTodoMutation } from '../redux/apiSlice';
import { editTodoStatus } from '../redux/todosSlice';

type Props = {
  id?: string;
  content: string;
};

const Todo = ({ id, content }: Props) => {
  const dispatch = useAppDispatch();
  // todo: show only the clilcked button after clicking, and disable it
  const [type, setType] = useState('');
  const [showAff, setShowAff] = useState(false);
  const [seenAff, setSeenAff] = useState(false);
  const [markTodo] = useMarkTodoMutation();
  const [postTodo] = usePostTodoMutation();

  const handleMarkTodo = (type: string) => {
    // api
    markTodo({ id, type })
      .unwrap()
      .then(() => {});

    //redux
    dispatch(editTodoStatus({ id, type }));

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

  useEffect(() => {
    if (seenAff) {
      handleMarkTodo(type);
    }
  }, [seenAff]);

  const handleClick = () => {
    setType('completed');
    setShowAff(true);
  };

  return (
    <div>
      <p>{content}</p>
      <div>
        <button onClick={() => handleClick()}>completed</button>
        <button onClick={() => handleMarkTodo('abandoned')}>
          not completed, let it go
        </button>
        <button onClick={() => handleMarkTodo('tomorrow')}>
          move to tomorrow
        </button>
      </div>
      <AffirmationBox
        display={showAff}
        setSeen={setSeenAff}
        setDisplay={setShowAff}
      />
    </div>
  );
};
export default Todo;
