
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './detail';
import MTTable from './MTTable';

function App() {
  return (    
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
      
    <div style={{ padding: '30px' }}>
      <h1>Material Table Example</h1>
      <MTTable />
    </div>
    </div>
  );
}

export default App;
