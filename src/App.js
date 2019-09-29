import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import { auth } from "./firebase/firebase.utils";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

// const SmartPhones = () => (
//   <div>
//     <h1>Smartphones</h1>
//   </div>
// );
// const Tablets = () => (
//   <div>
//     <h1>Tablets</h1>
//   </div>
// );
// const Laptops = () => (
//   <div>
//     <h1>Laptops</h1>
//   </div>
// );
// const Desktops = () => (
//   <div>
//     <h1>Desktops</h1>
//   </div>
// );
// const Accessories = () => (
//   <div>
//     <h1>Accessories</h1>
//   </div>
// );
