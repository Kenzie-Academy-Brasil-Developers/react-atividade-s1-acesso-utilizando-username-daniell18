import { useState } from "react";
import "./index.css";
function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");
  function HandleLogin(userInput) {
    setUser(userInput);
    setIsLoggedIn(true);
  }
  return (
    <div className="main">
      <h2 className="text-locked">Digite o seu nome para fazer o Login :</h2>
      <form>
        <input
          placeholder="Digite seu nome aqui"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>Entar</button>
      </form>
    </div>
  );
}
export default GetUserComponent;
