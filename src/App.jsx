import "./App.css";
import Router from "./components/Router";
import { CartProvider } from "./context";


function App() {
  return (
    <CartProvider>
      <Router/> 
    </CartProvider>
  )
}

export default App;
