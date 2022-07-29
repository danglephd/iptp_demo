
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './detail';

function App() {
  return (

    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/detail">Detail</Link>
    //     </li>
    //   </ul>

    //   <hr />
    // </div>

    
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/detail">Detail</Link> 
      </nav>
    </div>

    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/detail">Detail</Link>
    //       </li>
    //     </ul>

    //     <hr />

    //     {/*
    //       A <Switch> looks through all its children <Route>
    //       elements and renders the first one whose path
    //       matches the current URL. Use a <Switch> any time
    //       you have multiple routes, but you want only one
    //       of them to render at a time
    //     */}
    //     {/* <Routes>
    //       <Route path="/detail">
    //         <Detail />
    //       </Route>
    //     </Routes> */}
    //   </div>
    // </Router>
  );
}

export default App;
