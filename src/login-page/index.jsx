import Nav from "../components/Nav";
import Login from "../components/form/Login";
export default function App({ path }) {
  console.log("href", path);
  return (
    <div>
      <Nav />
      <div className="max-w-sm my-lg mx-auto">
        <Login />
      </div>
    </div>
  );
}
