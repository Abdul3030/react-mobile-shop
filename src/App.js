import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import cartReducer from './store/cartReducer';
import './App.css';

import Home from "./components/Home/Home";

const store = createStore(cartReducer);

function App() {
  return (
    <Provider  store={store}>
      <Router>
        <div className="App">
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
