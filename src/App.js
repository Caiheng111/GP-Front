import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import ContactForm from "./pages/contact";
import Profile from "./pages/profile";
import About from "./pages/about";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Vaccines from "./pages/vaccines";
import Services from "./pages/services";
import Booking from "./pages/booking";

import emailSubmit from "./components/emailSubmit";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route
              path="/contact"
              render={() => <ContactForm onSubmit={emailSubmit} />}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/vaccines" component={Vaccines} />
            <Route path="/services" component={Services} />
            <Route path="/booking" component={Booking} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
