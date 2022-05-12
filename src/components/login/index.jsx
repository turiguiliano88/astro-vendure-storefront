import Nav from "../Nav";
import Login from "./Login";
export default function App() {
  return (
    <div>
      <Nav />
      <div className="max-w-sm my-lg mx-auto">
        <Login />
      </div>
    </div>
  );
}
