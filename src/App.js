import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
 class App extends Component {
  render() {
    const typeOfLogin = [
      "GMAIL",
      "FACEBOOK",
      "GITHUB",
      "MICROSOFT",
      "Twitter",
      "LINKEDIN",
      "Paypal",
      "Instagram"
  
    ];
    
 
    return (
      <div>
        <Router>
                 <Route path="/" render={() => <Login typeOfLogin={typeOfLogin}  />} />
                 </Router>
      </div>
    )
  }
}

export default App
