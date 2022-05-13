import Nav from "../Nav";
import Register from "./Register";
export default function App() {
  return (
    <div>
      <Nav />
      <div className="max-w-sm my-lg mx-auto">
        <Register />
      </div>
    </div>
  );
}
