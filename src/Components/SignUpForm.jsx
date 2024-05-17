import "./SignUpFormStyles.css";

function SignUpForm() {
  return (
    <div className="sign-up">
      <h1>Sign Up!</h1>
      <form action="">
        <input placeholder="E-mail" type="email" />
        <input type="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
