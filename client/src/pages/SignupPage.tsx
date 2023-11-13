type Props = {};
const SignupPage = (props: Props) => {
  return (
    <div>
      Signup Page
      <form>
        <div>
          <label htmlFor="">Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" name="password" />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};
export default SignupPage;
