import "./login-input.scss";

const LoginInput = (props) => {
  const { label, onChange, id, type, placeholder, required, value } = props;
  return (
    <div className="login-input">
      <label>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        label={label}
        required={required}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
};

export default LoginInput;
