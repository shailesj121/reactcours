export const Login = ({ loginData }) => {
  function login() {
    loginData(true);
  }
  return (
    <>
      <span className="button loginButton">
        <button onClick={login}> Login </button>{" "}
      </span>
    </>
  );
};

export const Logout = ({ loginData }) => {
  function logout() {
    loginData(false);
  }
  return (
    <>
      <span className="button logoutButton">
        <button onClick={logout}> Logout </button>
      </span>
    </>
  );
};
