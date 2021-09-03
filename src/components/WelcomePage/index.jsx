import "./index.css";
function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }
  console.log(user);
  return (
    <div className="main">
      <h2 className="text-open">Bem vindo {user}</h2>
      <button onClick={HandleLogout}>Sair</button>
    </div>
  );
}
export default WelcomePage;
