import LoginInput from "./components/login-input";
import "./login.scss";

const Login = ({ onLogin }) => {
  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "John Maker",
      label: "Shipping Name",
      required: true,
    },

    {
      id: 2,
      type: "text",
      placeholder: "123 Plae Grond Stret",
      label: "Street Name",
      required: true,
    },
    {
      id: 3,
      type: "text",
      placeholder: "Vermont",
      label: "City",
      required: true,
    },
    {
      id: 4,
      type: "text",
      placeholder: "California",
      label: "State / Province",
      required: true,
    },
    {
      id: 5,
      type: "text",
      placeholder: "United States of America",
      label: "Country",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <LoginInput key={input.id} {...input} onChange={handleSubmit} />
          ))}
          <button className="login-btn" onClick={onLogin}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
