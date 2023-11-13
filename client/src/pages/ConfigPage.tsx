import { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../redux/hooks';
import { getTime, getUserId, setTime } from '../redux/configSlice';
import { usePostConfigMutation } from '../redux/apiSlice';

const ConfigPage = () => {
  const { type } = useParams();
  const [postConfig] = usePostConfigMutation();
  const dispatch = useAppDispatch();

  const time = getTime();
  const userId = getUserId();
  const [updatedTime, setUpdatedTime] = useState(time);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postConfig({ userId, type, value: updatedTime })
      .unwrap()
      .then(res => {
        console.log(res);
        const {
          config: { time },
        } = res;
        dispatch(setTime(time));
      });

    setShowForm(false);
  };

  return (
    <div>
      ConfigPage
      <p>config type: {type}</p>
      <p>You are drinking beer at {time}</p>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>change {type}</button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          enter new {type}:
          <input
            type="time"
            min="13:00"
            max="23:59"
            value={updatedTime}
            onChange={e => setUpdatedTime(e.target.value)}
          />
          <button type="submit">ok</button>
        </form>
      )}
    </div>
  );
};
export default ConfigPage;
