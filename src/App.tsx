import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const Counter = () => <h1>Counter Page</h1>;
const UserForm = () => <h1>User Form Page</h1>;
const Editor = () => <h1>Rich Text Editor Page</h1>;

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="/form">User Form</Link> | <Link to="/editor">Editor</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;
