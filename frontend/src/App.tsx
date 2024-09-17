import { FormEvent, useState } from "react";
import "./App.scss";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:1234/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(async (data) => {
      const res = await data.json();
      console.log(res);
    });
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default App;
