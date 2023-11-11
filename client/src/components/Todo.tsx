import { useState, useEffect } from 'react';
import moment from 'moment';

import AffirmationBox from './AffirmationBox';

import { useAppDispatch } from '../redux/hooks';
import { usePostTodoMutation, useMarkTodoMutation } from '../redux/apiSlice';
import { editTodoStatus } from '../redux/todosSlice';
import { getTime } from '../redux/configSlice';

import '../styles/Todo.css';

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

  const time = getTime();
  const now = moment().format('HH:MM');
  const showBtn = now > time;

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
    <div className="todo">
      <p className="todo-content">{content}</p>
      {/* {showBtn && ( */}
      {true && (
        <div className="todo-btns">
          <button className="todo-btn complete" onClick={() => handleClick()}>
            completed
          </button>
          <button
            className="todo-btn abandon"
            onClick={() => handleMarkTodo('abandoned')}
          >
            not completed, let it go
          </button>
          <button
            className="todo-btn tomorrow"
            onClick={() => handleMarkTodo('tomorrow')}
          >
            move to tomorrow
          </button>
        </div>
      )}
      <AffirmationBox
        display={true}
        // display={showAff}
        setSeen={setSeenAff}
        setDisplay={setShowAff}
      />
    </div>
  );
};
export default Todo;
