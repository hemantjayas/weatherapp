import './App.css';
import Search from './components/search/Search';



function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />

    </div>
  );
}

export default App;


// useSelector  to get the data
// useDispatch   to dispatch an action