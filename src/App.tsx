import { useEffect, useState } from "react";
import Name from "./Name";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <div className="App">
      <div>
        As part of the first challenge, when the button is clicked display Good
        morning message at the bottom of button and change the button label to
        Hide greeting.
        <br />
        When the user enters name in the input field, the message should say
        Good morning with name.
        <ol>
          <li>Show Good morning message only on button click.</li>
          <li>Change the button label to Hide greeting</li>
          <li>
            When Hide greeting button is clicked, hide Good morning message
          </li>
          <li>
            Welcome alert should be not be shown when the button is clicked.
          </li>
          <li>User should be able to enter the name in the input box</li>
          <li>
            Once the name is entered and clicked on submit, show good morning
            message with name.
          </li>
          <li>
            Show the number of times greeting button was clicked in the counter
            input box{" "}
          </li>
        </ol>
      </div>

      <div>
        <button
          className="mt-5"
          onClick={() => {
            setCount((count) => count + 1);
            setShowGreeting(!showGreeting);
          }}
        >
          {showGreeting ? "Hide" : "Show"} greeting{" "}
        </button>
        {showGreeting && (
          <div className="mt-5">
            <h1>Good morning{userName && `, ${userName}`}!</h1>
          </div>
        )}

        <Name counter={count} userName={userName} setUserName={setUserName} />
      </div>
    </div>
  );
}
