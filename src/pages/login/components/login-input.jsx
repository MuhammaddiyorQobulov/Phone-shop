import "./login-input.scss";

const LoginInput = (props) => {
  const { label, onChange, ...inputProps } = props;
  return (
    <div className="login-input">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default LoginInput;
