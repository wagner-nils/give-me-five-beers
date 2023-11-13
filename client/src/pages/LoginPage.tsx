import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../redux/hooks';
import { useLoginMutation } from '../redux/apiSlice';
import { setUserId } from '../redux/configSlice';

type Props = {};
const LoginPage = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const clearInput = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    login(user)
      .unwrap()
      .then(res => {
        console.log(res);
        const { userId } = res;
        dispatch(setUserId(userId));
        navigate('/home');
      });

    clearInput();
  };

  return (
    <div>
      Login Page
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="text"
            value={password}
            name="password"
            onChange={handelChange}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default LoginPage;
