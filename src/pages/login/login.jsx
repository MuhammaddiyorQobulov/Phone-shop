import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="login">
        <form action="">
          <div className="login-input">
            <label htmlFor="shippingName">Shipping Name</label>
            <input
              type="text"
              id="shippingName"
              placeholder="John Maker"
              required
            />
          </div>

          <div className="login-input">
            <label htmlFor="streetName">Street Name</label>
            <input
              type="text"
              id="streetName"
              placeholder="123 Plae Grond Stret"
              required
            />
          </div>

          <div className="login-input">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Vermont" required />
          </div>

          <div className="login-input">
            <label htmlFor="state">State / Province</label>
            <input type="text" id="state" placeholder="California" required />
          </div>

          <div className="login-input">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="United States of America"
              required
            />
          </div>

          <button className="login-btn">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
