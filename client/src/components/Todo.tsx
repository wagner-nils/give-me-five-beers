import { useState, useEffect } from 'react';
import moment from 'moment';
import classNames from 'classnames';

import AffirmationBox from './AffirmationBox';
import TodoBtns from './TodoBtns';

import { useAppDispatch } from '../redux/hooks';
import { usePostTodoMutation, useMarkTodoMutation } from '../redux/apiSlice';
import { editTodoStatus } from '../redux/todosSlice';
import { getTime } from '../redux/configSlice';

import '../styles/Todo.css';

type Props = {
  id?: string;
  content: string;
};

// todo: extract todo btn component

const Todo = ({ id, content }: Props) => {
  const dispatch = useAppDispatch();
  const [type, setType] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const [showAff, setShowAff] = useState(false);
  const [seenAff, setSeenAff] = useState(false);
  const [markTodo] = useMarkTodoMutation();
  const [postTodo] = usePostTodoMutation();

  const time = getTime();
  const now = moment().format('HH:MM');
  const isTime = now > time;

  const handleMarkTodo = (type: string) => {
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

  const handleClick = (type: string) => {
    setType(type);
    setShowAff(true);
  };

  const contentClassnames = classNames('todo-content', {
    canClick: isTime,
    clicked: showBtn,
  });

  return (
    <div className="todo">
      <button
        className={contentClassnames}
        onClick={() => setShowBtn(true)}
        disabled={!isTime}
      >
        {content}
      </button>
      {showBtn && <TodoBtns type={type} handleClick={handleClick} />}
      <AffirmationBox
        display={showAff}
        setSeen={setSeenAff}
        setDisplay={setShowAff}
      />
    </div>
  );
};
export default Todo;
