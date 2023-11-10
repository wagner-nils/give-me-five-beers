import { useState } from 'react';

import AffirmationBox from './AffirmationBox';

import { useMarkTodoMutation } from '../redux/apiSlice';

type Props = {
  id?: string;
  content: string;
};

const Todo = ({ id, content }: Props) => {
  // todo: show only the clilcked button after clicking, and disable it
  const [showAff, setShowAff] = useState(false);
  const [markTodo] = useMarkTodoMutation();

  const handleMarkTodo = (type: string) => {
    markTodo({ id, type })
      .unwrap()
      .then(() => {
        setShowAff(true);
      });
  };

  return (
    <div>
      <p>{content}</p>
      <div>
        <button onClick={() => handleMarkTodo('completed')}>completed</button>
        <button onClick={() => handleMarkTodo('abandoned')}>
          not completed, let it go
        </button>
        <button>move to tomorrow</button>
      </div>
      {showAff && <AffirmationBox />}
    </div>
  );
};
export default Todo;
