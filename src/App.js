import './App.css';
import Search from './components/search/Search';
import Location from './components/Location';



function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <Location/>

    </div>
  );
}

export default App;


// useSelector  to get the data
// useDispatch   to dispatch an action