type Props = {};
const LoginPage = (props: Props) => {
  return (
    <div>
      Login Page
      <form>
        <div>
          <label htmlFor="">Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" name="password" />
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};
export default LoginPage;
