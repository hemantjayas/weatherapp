import './App.css';
import BasicChart from './components/BasicChart';
import Fiveday from './components/Fiveday';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
    <Searchbar/>
    <Fiveday/>
    <BasicChart/>
    
    </div>
  );
}

export default App;


// useSelector  to get the data
// useDispatch   to dispatch an action