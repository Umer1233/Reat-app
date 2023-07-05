import "./App.css";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">Left Menu</div>
        <div className="col-md-8">
          <LogIn></LogIn>
        </div>
        <div className="col-md-2">Right Menu</div>
      </div>
    </div>
  );
}

export default App;
