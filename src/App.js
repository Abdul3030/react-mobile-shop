import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';

import './App.css';

import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import { useEffect } from "react";
import { ActionTypes } from "./store/cartActions";
import CartDetails from "./components/Cart/CartDetails/CartDetails";
import CheckOut from "./components/CheckOut/CheckOut";

function App({isSignedIn}) {

  useEffect(()=> {
    auth.onAuthStateChanged( async userAuth => {
      isSignedIn(userAuth);
    if(userAuth){
      const userRef = await  createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=> {
        
      });
    }
    });
  });

  return (
      <Router>
        <div className="App">
          <Route  path='/' exact >
            <Home />
          </Route>
          <Route path='/cart' exact>
            <CartDetails />
          </Route>
          <Route path='/checkout' exact>
            <CheckOut />
          </Route>
          {
            !isSignedIn?
            <Route exact path='/sign-in' >
              <SignIn isSignedIn={isSignedIn} />
            </Route>:
            null
          }
        </div>
      </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {isSignedIn: authUser => dispatch({type: ActionTypes.SIGNED_IN, payload: authUser})}
};

export default connect(null, mapDispatchToProps)(App);
