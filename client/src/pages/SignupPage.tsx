import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../redux/hooks';
import { useSignupMutation } from '../redux/apiSlice';
import { setUserId } from '../redux/configSlice';

// todo: merge login and signup

type Props = {};
const SignupPage = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signup] = useSignupMutation();

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

  const hasAllInputs = username && password;

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    console.log(user);
    signup(user)
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
      Signup Page
      <form onSubmit={handleSignup}>
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
        <button type="submit" disabled={!hasAllInputs}>
          Sign up
        </button>
      </form>
    </div>
  );
};
export default SignupPage;
