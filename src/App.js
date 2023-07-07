import "./App.css";
import LogIn from "./components/LogIn";
import leftMenu from "./components/leftMenu";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          Left Menu
          {/* <leftMenu></leftMenu> */}
        </div>
        <div className="col-md-8">
          
          <LogIn></LogIn><br/>
          {/*Single hoot using Multiple form*/}
          <TopNav></TopNav>          
        </div>
        <div className="col-md-2">
          
        </div>
      </div>
    </div>    
  );
}

export default App;
