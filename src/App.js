import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions.jsx'

import "./App.scss";

//Top level App Component - Single Source of Truth
class App extends React.Component {  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          //console.log(snapshot);

          setCurrentUser(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }
            ,
            () => {
              console.log(this.state);
             }
        );
          //console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 
  render() {
    return (
      //SST details passed onto Header Component
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  // Call Dispatch, whatever Obj you are passing gonna be a ActioObject i pas everywhere
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);