
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './containers/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <NavBar></NavBar>
      </header>
      <ItemListContainer nombre="Chandelier"></ItemListContainer>
    </div>
  );
}

export default App;
